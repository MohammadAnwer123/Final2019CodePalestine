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
export default class firstscreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>avaav</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    alignSelf:'center',
    marginTop : 200
  },
});
