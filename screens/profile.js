import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import { SimpleLineIcons, Entypo, FontAwesomeIcon } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import Constants from 'expo-constants';
export default class App extends React.Component {
  state = {
    name: '',
  };

  _retrieveData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      } else {
        return null;
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  getUserData = async () => {
    let name = await this._retrieveData('name');
    if (name != null) {
      this.setState({ name: name });
    }
  };

  render() {
    this.getUserData();
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <Image
          style={styles.avatar}
          source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
        />
        <Text style={styles.paragraph1}> {this.state.name} </Text>
        <View style={styles.view2}>
          <TouchableOpacity
            style={styles.paragraph1}
            onPress={this.gotoscreenthree}>
            <Icon
            
            name="edit"
            type="FontAwesome"
            color="#517fa4"
          />
            <Text style={styles.paragraph2}>Edit profile</Text>
          </TouchableOpacity>
          
        </View>
      </View>

      // <ScrollView>
      // < View style={styles.container1}>
      // <ImageBackground   style={styles.image1} source={require('../assets/moe.png')} >
      //   <Image style={styles.image}
      //   source={require('../assets/123.png')}/>
      //   <Text> Welcome {this.state.name} </Text>
      //   <Text style={styles.paragraph1}>
      //   {""}___________________________{""}
      //   </Text>
      //  <Text style={styles.paragraph1}>
      //     {this.state.name}
      //     </Text>
      //      <Text style={styles.paragraph1}>
      //    Phone number: 0594547986
      //     </Text>
      // <TouchableOpacity style={styles.paragraph1} onPress={this.gotoscreenthree} >
      //   <Text style={styles.paragraph1}>Edit profile</Text>
      // </TouchableOpacity>

      // </ImageBackground>
      // </View>
      // </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: 'white',
  },
  paragraph1: {
    fontFamily: 'Bodoni 7z',
    marginTop: 100,
    fontSize: 25,
    borderRadius: 40,
    margin:5,
    textAlign: 'center',
  },
  paragraph2: {
    fontFamily: 'Bodoni 7z',
    marginTop: 8,
    fontSize: 18,
    borderRadius: 40,
    margin: 20,
    textAlign: 'center',
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: 'white',
  },
Icon: {
    marginTop: 100,
    margin: 300,
  },
  image: {
    width: 200,
    height: 200,
    borderColor: 'black',
    borderRadius: 100,
    marginBottom: 0,
    alignSelf: 'center',
    overflow: 'hidden',

    marginTop: 20,
  },
  image1: {
    width: 400,
    height: 670,
    borderRadius: 50,
    alignSelf: 'center',
  },

  header: {
    backgroundColor: '#00BFFF',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    flex: 1,
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  // name:{
  //   fontSize:28,
  //   color: "#696969",
  //   fontWeight: "600"
  // },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  //image1:{
  //width:400,
  //height:500,
  //},
});
