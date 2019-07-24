import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image,ScrollView , FlatList,ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import * as firebase from 'firebase'
import { Header } from 'react-native-elements';
// import {DrawerActions} from "react-navigation";


export default class firstscreen extends React.Component {
  gotoscreentwo = () =>{
   this.props.navigation.navigate('Second')
 }

 gotoscreenthree = () =>{
   this.props.navigation.navigate('Third')
 }
//  toggleDrawer = () => {
//     this.props.navigation.toggleDrawer();
// }
 

  render() {
    return (
      <View style={styles.container} >
      <ImageBackground   style={styles.image} source={require('../assets/moe.png')} >
      <Image style={styles.image1} source={require('../assets/pp.png')} />

    
     
        <TouchableOpacity style = {styles.buttonText} onPress={this.gotoscreentwo}>
          <Text  style={styles.Text2}>Sign in</Text>
        </TouchableOpacity>
         <TouchableOpacity style = {styles.buttonText1}onPress={this.gotoscreenthree}>
          <Text style={styles.Text2} >Sign up</Text>
        </TouchableOpacity>
      </ImageBackground>
      </View>
    )
  }}
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: '',
  //   alignItems: 'center',
     
  // },
  button: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop :200,

  },
  text:{
    fontSize: 50 ,
    fontWeight: 'bold',
    
    textAlign: 'center',


  },
   button1: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop : 50,

  },
    image: {
    width: 400,
    height: '100%',
    borderRadius: 50,
    alignSelf:'center'
  },
  image1: {
    width: 300,
    height: 200,
    borderRadius: 100,
    alignSelf:'center',
    marginTop:50
  },
  button3: {
    borderWidth: 5,
    borderColor: 'blue',
    marginTop: 50,
  },
  Text2: {
  fontSize:15,
   color: 'white',
   textAlign: 'center',
 },
 buttonText: {
   fontSize: 20,
   fontWeight: 'bold',
   alignSelf: 'center',
   margin: 20,
   padding: 5,
   width: 265,
   height: 30,
   color: 'white',
   backgroundColor: 'black',
   borderRadius: 50,
   marginTop:100
   
   
 },
 buttonText1: {
   fontSize: 20,
   fontWeight: 'bold',
   alignSelf: 'center',
   margin: 20,
   padding: 5,
   width: 265,
   height: 30,
   color: 'white',
   backgroundColor: 'black',
   borderRadius: 50,
   
   
 },
  });