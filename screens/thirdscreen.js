import React, { Component } from 'react';
import {
  Text,
  StatusBar,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,Image
} from 'react-native';
import { Constants } from 'expo';
import { Input } from 'react-native-elements';
import * as firebase from 'firebase';
import DatePicker from 'react-native-datepicker';

export default class thirdscreen extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    date: '2016-05-15',
  };
  register = () => {
    this.submit();
    this.props.navigation.navigate('Second');

    const posts = firebase.database().ref('registration');
    posts.push({
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      date: this.state.date,
    });
  };
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
            alert('You have already an account');
            this.props.navigation.navigate('Second');

            return false;
          }
        }
        alert("This email doesn't exist");
        return true;
      });
  };
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground   style={styles.image} source={require('../assets/moe.png')} >
      <Image style={styles.image1} source={require('../assets/br.png')} />
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Input
          style = {styles.input2}
            placeholder="User Name"
            onChangeText={text => this.setState({ name: text })}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="send"
            onSubmitEditing={this._submit}
            blurOnSubmit={true}
          />
          <Input
          style = {styles.input2}
            placeholder="Email"
            onChangeText={text => this.setState({ email: text })}
            
          />

          <Input
          style = {styles.input2}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={text => this.setState({ password: text })}
          />
          <DatePicker
            style={styles.data2}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="1940-05-01"
            maxDate=""
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={date => {
              this.setState({ date: date });
            }}
          />
        </View>

        <TouchableOpacity style={styles.buttonText2} onPress={this.register}>
          <Text style={styles.buttonText}>Sign Up!</Text>
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
    
    
  },
  buttonText2: {
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
    marginTop:100
  
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    
    
  },
  image: {
    width: 370,
    height: '100%',
    borderRadius: 50,
    alignSelf:'center,'
  },
  data2: {
    margin: 30,
    alignSelf: 'center',
    marginTop:100
  },
  input2: {
    marginTop: 200,
  },
  image1: {
    width:100,
    height:35,
    alignItems:'center',
    alignSelf:'center',
    marginTop:200
  },
 
});
