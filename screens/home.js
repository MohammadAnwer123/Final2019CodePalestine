import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Picker,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import { DrawerActions } from 'react-navigation';
import { Header } from 'react-native-elements';
import * as firebase from 'firebase';

export default class home extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    type: 'Carpenter',
    location: 'Jerusalem',
  };
  gotolist = () => {
    // this.submit5();
    // this.componentDidMount();
    this.props.navigation.navigate('list', {
      type: this.state.type,
      location: this.state.location,
    });
  };
  toggleDrawer = () => {
    // this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    // this.params.navigation.toggleDrawer();
    this.props.navigation.toggleDrawer();
  };
  render() {
    return (
      <ScrollView>
        <ImageBackground
          style={styles.image}
          source={require('../assets/moe.png')}>
          <Header
            leftComponent={{
              icon: 'menu',
              color: '#fff',
              onPress: () => {
                this.toggleDrawer();
              },
            }}
            centerComponent={{ text: 'Home', style: { color: '#fff' } }}
            backgroundColor="black"
          />
          <Image style={styles.image1} source={require('../assets/find.png')} />
          <View style={styles.view3}>
            <Text style={styles.dd1}>Job:</Text>
            <Text style={styles.dd}>Location:</Text>
          </View>
          <View style={styles.view2}>
            <Picker
              style={styles.SecondPicker}
              itemStyle={styles.SecondPickers}
              selectedValue={this.state.type}
              onValueChange={itemValue => this.setState({ type: itemValue })}>
              <Picker.Item label="Carpenter" value="Carpenter" />
              <Picker.Item label="Plumber" value="Plumber" />
              <Picker.Item label="Electrician" value="Electrician" />
              <Picker.Item label="Air Conditioning" value="Air Conditioning" />
              <Picker.Item
                label="Satelite Technician"
                value="Satelite Technician"
              />
              <Picker.Item label="Tiling Works" value="Tiling Works" />
              <Picker.Item
                label="Appliances Technicians"
                value="Appliances Technicians"
              />
              <Picker.Item label="Aluminium Works" value="Aluminium Works" />
              <Picker.Item label="Plaster Works" value="Plaster Works" />
              <Picker.Item label="Painting Works" value="Painting Works" />
            </Picker>

            <Picker
              style={styles.thirdPicker}
              itemStyle={styles.thirdPickers}
              selectedValue={this.state.location}
              onValueChange={itemValue =>
                this.setState({ location: itemValue })
              }>
              <Picker.Item label="Jerusalem" value="Jerusalem" />
              <Picker.Item label="Ramallah" value="Ramallah" />
              <Picker.Item label="Bethlehem" value="Bethlehem" />
              <Picker.Item label="Hebron" value="Hebron" />
              <Picker.Item label="Nablus" value="Nablus" />
              <Picker.Item label="Jenin" value="Jenin" />
              <Picker.Item label="Tulkarem" value="Tulkarem" />
              <Picker.Item label="Jericho" value="Jericho" />
              <Picker.Item label="Tubas" value="Tubas" />
              <Picker.Item label="Salfeet" value="Salfeet" />
              <Picker.Item label="Qalqilia" value="Qalqilia" />
            </Picker>
          </View>
          <TouchableOpacity style={styles.search} onPress={this.gotolist}>
            <Text style={styles.paragraph}>Search</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   paddingTop: Constants.statusBarHeight,
   backgroundColor: '#ecf0f1',
   padding: 8,
 },
 paragraph: {
   fontSize: 25,
   fontWeight: 'bold',
   color: 'white',
   alignSelf: 'center',
 },
 paragraph1: {
   margin: 24,
   fontSize: 35,
   fontWeight: 'bold',
   textAlign: 'center',
   marginTop: 20,
 },
 picker: {
   width: 50,
   backgroundColor: '#FFF0E0',
   borderColor: 'black',
   borderWidth: 1,
 },
 pickerItem: {
   color: 'red',
 },
 twoPickers: {
   width: 120,
   height: 30,
   backgroundColor: '#FFF0E0',
   borderColor: 'black',
   borderWidth: 1,
 },
 SecondPicker: {
   width: 180,
   height: 100,
   color: 'black',
   borderLeftColor: 'black',
   marginBottom:120,
   marginTop:20
 },
 thirdPicker: {
   height: 100,
   color: 'black',
   width: 180,
   borderWidth: 2,
   borderRadius: 100,
   marginBottom:120,
   marginTop:20
 },
 thirdPickers: {
   height: 100,
   color: 'black',
   width: 180,
 },
 view2: {
   flex: 1,
   flexDirection: 'row',
   alignItems: 'center',
 },
 view3: {
   flex: 1,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between'
   // alignItems: 'flex-end'
 },
 SecondPickers: {
   height: 100,
   color: 'black',
   borderWidth: 2,
   borderRadius: 50,
 },
 image: {
   width: 400,
   height: 700,
   borderRadius: 50,
 },
 search: {
   fontSize: 20,
   fontWeight: 'bold',
   alignSelf: 'center',
   margin: 20,
   padding: 5,
   width: 150,
   height: 50,
   color: 'white',
   backgroundColor: 'black',
   borderRadius: 50,
   marginBottom: 50,
   alignItems: 'center',
   textAlign:"center",
   marginRight:40
 },
 image1: {
   width: 300,
   height: 55,
   alignItems: 'center',
   alignSelf: 'center',
   marginTop: 50,
   marginBottom: 100,
 },
 dd: {
   fontSize: 25,
   fontWeight: 'bold',
   marginRight: 70,
   borderWidth:2,
   borderRadius:10
 },
 dd1: {
   fontSize: 25,
   fontWeight: 'bold',
   marginLeft:50,
   borderWidth:2,
   borderRadius:10,
 },
});