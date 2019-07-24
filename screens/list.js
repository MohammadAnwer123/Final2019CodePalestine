import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import * as firebase from 'firebase';
export default class list extends React.Component {
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
          if (input2 == this.params.location && input == this.params.type) {
            var person = {
              name: fixers[key].fixers,
              uri: fixers[key].fixersuri,
              location: fixers[key].fixerslocation,
              type: fixers[key].fixerstype,
            };
            Search.push(person);
          }
        }
        this.setState({ face: Search });
      });
  };

  handlePress = (name, location, type) => {
    this.props.navigation.navigate('orders', {
     type: type,
     location:location,
     name:name
   });}
  
  state = {
    searchedFixers: [],
    face: [
      // {
      //   name: 'Mohamad',
      //   uri: 'https://image.flaticon.com/icons/png/512/190/190695.png',
      //   location: 'Ramallah',
      //   type: 'Carpenter',
      // },
      // {
      //   name: 'Frank',
      //   uri: 'https://image.flaticon.com/icons/png/512/190/190695.png',
      //   location: 'Hebron',
      //   type: 'Appliances technician',
      // },
      // {
      //   name: 'Ben',
      //   uri: 'https://image.flaticon.com/icons/png/512/190/190695.png',
      //   location: 'Bethlehem',
      //   type: 'Painting Works',
      // },
      // {
      //   name: 'Zaeda',
      //   uri: 'https://image.flaticon.com/icons/png/512/190/190695.png',
      //   location: 'Jerusalem',
      //   type: 'Electrician',
      // },
      // {
      //   name: 'Amartya',
      //   uri: 'https://image.flaticon.com/icons/png/512/190/190695.png',
      //   location: 'Tulkarem',
      //   type: 'Tiling Works',
      // },
      // {
      //   name: 'Ali',
      //   uri: 'https://image.flaticon.com/icons/png/512/190/190695.png',
      //   location: 'Salfeet',
      //   type: 'Plumber',
      // },
      // {
      //   name: 'Hassan',
      //   uri: 'https://image.flaticon.com/icons/png/512/190/190695.png',
      //   location: 'Jericho',
      //   type: ' Aluminium Works',
      // },
    ],
    selectedIndex: 0,
  };

  changeSelected = index => {
    this.setState({ selectedIndex: index });
  };
  submit = () => {
    const fixers = firebase.database().ref('fixers');

    // for (var i = 0; i < this.state.face.length; i++) {
    //   console.log(this.state.face[i].name);
    //   fixers.push({
    //     fixers: this.state.face[i].name,
    //     fixerslocation: this.state.face[i].location,
    //     fixerstype: this.state.face[i].type,
    //     fixersuri: this.state.face[i].uri,
    //   });
    // }
  };
  // componentDidMount = () => {
  //   firebase.database().ref('fixers').on('value', snapshot => {
  //     const fixers = snapshot.val();
  //     var fixers2 = [];
  //     for (var key in this.face ) {
  //       fixers.push({
  //       fixers: this.state.face.name,
  //       fixerslocation: this.state.face.location
  //   });
  //     }
  //     this.setState({fixers: fixers2});
  //   })
  // }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={1}
          data={this.state.face}
          extraData={this.state.selectedIndex}
          renderItem={({ item, index }) => {
            if (index == this.state.selectedIndex) {
              return (
                <View>
                  <View style={styles.container1}>
                    <Image
                      source={{ uri: item.uri }}
                      style={styles.itemImage}
                    />
                    <Text style={styles.specialButton}> {item.name} </Text>
                    <Text style={styles.specialButtons}> {item.location} </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => this.handlePress(item.name, item.location, item.type)}
                    style={styles.rowButton}>
                    <Text style={styles.button2}> Book now</Text>
                  </TouchableOpacity>
                  <Text>
                    {' '}
                    ________________________________________________________{' '}
                  </Text>
                </View>
              );
            } else {
              return (
                <View>
                  <View style={styles.container1}>
                    <Image
                      source={{ uri: item.uri }}
                      style={styles.itemImage}
                    />
                    <TouchableOpacity
                      style={styles.rowButton}
                      onPress={() => this.changeSelected(index)}>
                      <Text style={styles.button}> {item.name} </Text>
                    </TouchableOpacity>
                  </View>
                  <Text>
                    {' '}
                    ________________________________________________________{' '}
                  </Text>
                </View>
              );
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 0,
  },
  container1: {
    padding: 0,
    flexDirection: 'row',
  },
  itemImage: {
    borderColor: 'black',
    marginLeft: 20,
    height: 100,
    borderRadius: 50,
    // fontSize: 20,
    width: 100,
    margin: 20,
    flex: 1,
  },
  button: {
    textAlign: 'center',
  },
  specialButton: {
    textAlign: 'center',
    margin: 50,

    flex: 1,
  },
  rowButton: {
    margin: 50,
    flex: 1,
  },
  button2: {
    textcolor: 'pink',
  },
  specialButtons: {
    alignSelf: 'center',
  },
});
