import React, { Component } from 'react';

import {
  Text,
  StatusBar,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  AsyncStorage
} from 'react-native';
import { Constants } from 'expo';
import { Input } from 'react-native-elements';
import * as firebase from 'firebase';
export default class secondscreen extends React.Component {
  gotoscreenthree = () => {
    this.props.navigation.navigate('Third');
  };
  gotoSignUp = () => {
    this.props.navigation.navigate('Third');
  };
  state = {
    username: '',
    email: 'example@email.com',
    password: '',
  };

  _storeData = async (key, value) => {
    try {
      AsyncStorage.setItem(key, value);
    } catch (error) {
      alert(error);
    }
  };

  saveData(name) {
    this._storeData('name', name);
  }

  submit = () => {
    firebase
      .database()
      .ref('registration')
      .on('value', snapshot => {
        const registration = snapshot.val();
        var inputs = [];
        for (var key in registration) {
          const email = registration[key].email;
          if (email == this.state.email) {
            // this exists
            alert('This email exists');
            this.saveData(registration[key].name);
            this.props.navigation.navigate('Home');

            return;
          }
        }
        alert("This email doesn't exist");
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.image1}
          source={require('../assets/moe.png')}>
          <StatusBar barStyle="light-content" />
          <View style={styles.header} />
          <Image style={styles.image} source={require('../assets/123.png')} />

          <Input
            placeholder="E-mail"
            onChangeText={text => this.setState({ email: text })}
          />

          <Input
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={text => this.setState({ password: text })}
          />
          <TouchableOpacity style={styles.buttonText} onPress={this.submit}>
            <Text style={styles.Text2}>Sign In!</Text>
          </TouchableOpacity>
          <Text>
            {''} {''}
          </Text>
          <Text>___________________________OR___________________________</Text>
          <TouchableOpacity onPress={this.gotoSignUp}>
            <Text style={styles.Text3}>Create New Account</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }

  _next = () => {
    this._emailInput && this._emailInput.focus();
  };

  _submit = () => {
    alert(
      `Welcome, ${this.state.name}! Confirmation email has been sent to ${
        this.state.email
      }`
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    borderRadius: 200,
    marginTop: 50,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  Text2: {
    color: 'white',
    textAlign: 'center',
  },
  Text3: {
    margin: 30,
    textAlign: 'center',
    marginTop: 50,
  },
  image1: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
});