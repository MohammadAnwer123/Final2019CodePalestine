import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView
} from 'react-native';
import Constants from 'expo-constants';

import * as firebase from 'firebase';
export default class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.params = this.props.navigation.state.params;
  }
  componentDidMount = () => {
    firebase
      .database()
      .ref('fixers')
      .on('value', snapshot => {
        const fixers = snapshot.val();
        var Search = [];
        for (var key in fixers) {
          const input = fixers[key].fixerstype;
          const input2 = fixers[key].fixerslocation;
          const input3 = fixers[key].fixers;
          console.log('Name of fixer: ' + input3);
          if (
            input2 == this.params.location &&
            input == this.params.type &&
            input3 == this.params.name
          ) {
            var person = {
              name: fixers[key].fixers,
              location: fixers[key].fixerslocation,
              type: fixers[key].fixerstype,
            };
            Search.push(person);
          }
        }
        this.setState({ face: Search });
      });
  };
  state = {
    face: [],
  };
  render() {
    return (
      <View>
      <ScrollView>

      <Image source={require('../assets/orders.png')} style={styles.image5}/>
        
        <FlatList
          data={this.state.face}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Text style={styles.paragraph}>Fixer: {item.name}</Text>
              <Text style={styles.paragraph}>
                Location of Fixer: {item.location}
              </Text>
              <Text style={styles.paragraph}>Fixer job: {item.type}</Text>
            </View>
          )}
        />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '',
  //   alignItems: 'center',

  // },
  button: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 2,
    margin: 10,
    padding: 5,
    marginTop: 100,
  },
  paragraph: {
    margin: 24,
    fontSize: 19,
    color: 'grey',
    textAlign: 'center',
  },
  container: {
    borderColor: 'black',
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: 'white',
  },
  image5: {
    marginTop:50,
    width: "100%",
    height:800,
    alignSelf: 'center',
  },
});
