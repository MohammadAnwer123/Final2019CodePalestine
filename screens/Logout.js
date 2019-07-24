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


export default class Logout extends React.Component {
  render() {
    return (
      <View>
        <Text style= { styles.button} >
        Log out
         </Text>
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
  });
