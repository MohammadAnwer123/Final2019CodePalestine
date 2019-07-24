import * as React from 'react';
import * as firebase from 'firebase';
import firstscreen from './screens/firstscreen';
import secondscreen from './screens/secondscreen';
import thirdscreen from './screens/thirdscreen';
import homescreen from './screens/home';
import list from './screens/list';
import profile from './screens/profile';
import noti from './screens/noti';
import orders from './screens/Orders';

import Orders from './screens/Orders';

import Logout from './screens/Logout';

import {SimpleLineIcons,
Entypo,FontAwesome} from'@expo/vector-icons';
import{
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';
const config= {
  apiKey: "AIzaSyBFZslgj6eHxQz0qfUL3Uf8AoRFCNBPJN4",
  authDomain: "final-project-db-80255.firebaseapp.com",
  databaseURL: "https://final-project-db-80255.firebaseio.com",
  projectId: "final-project-db-80255",
  storageBucket: "",
  messagingSenderId: "743155835737",
  appId: "1:743155835737:web:4916651dc9650ed9"
};
if (firebase.apps.length < 1) {
  firebase.initializeApp(config);
}

noti.navigationOptions={
  tabBarLabel:'Notifications',
  tabBarIcon:()=>(
    <FontAwesome name ='bell' size={20} color="black"/>
  )
}
Orders.navigationOptions={
  tabBarLabel:'Orders',
  tabBarIcon:()=>(
    <FontAwesome name ='book' size={20} color="black"/>
  )
}
profile.navigationOptions={
  tabBarLabel:'Profile',
  tabBarIcon:()=>(
    <FontAwesome name ='user' size={20} color="black"/>
  )
}
const AppStack = createStackNavigator({
  First: {
    screen: firstscreen,
    navigationOptions: {
      header: null,
      
    }
  },
  Second: {
    screen: secondscreen,
    navigationOptions: {
      header: null,
      
    }
  },
  Third: {
    screen: thirdscreen,
    navigationOptions: {
      header: null,
      
    }
  },
});

const HomeListStack = createStackNavigator({
  Home:  {
    screen: homescreen,
    navigationOptions: {
      header: null,
      
    }
  },
  ListScreen: {
    screen: list,
    navigationOptions: {
      header: null,
      
    }
  },
});

HomeListStack.navigationOptions={
  tabBarLabel:'Home',
  tabBarIcon:()=>(
    <FontAwesome name ='home'  size={20} color="black"/>
  )
}

const AppTab = createBottomTabNavigator({
 
  Home:  {
    screen: HomeListStack,
    navigationOptions: {
      header: null,
      
    }
  },
  Profile: {
    screen: profile,
    navigationOptions: {
      header: null,
      
    }
  },
  Orders: {
    screen: Orders,
    navigationOptions: {
      header: null,
      
    }
  },
  Notification: {
    screen: noti,
    navigationOptions: {
      header: null,
      
    }
  },

});

const AppSwitch = createSwitchNavigator({
  Stack:  {
    screen: AppStack,
    navigationOptions: {
      header: null,
      
    }
  }, // this is all of your stack
  
  // instead of this thing below, do this instead: 

  // Drawer: MyDrawerNavigator
  Tabs:  {
    screen: AppTab,
    navigationOptions: {
      header: null,
    
    }
  }, // this is all of your tabs
  
})

const MyDrawerNavigator = createDrawerNavigator({
  Logout:AppStack,
  Tab: AppTab,
  Orders: Orders,
  
});

const AppStack2 = createStackNavigator({
  Menu:  {
    screen: MyDrawerNavigator,
    navigationOptions: {
      header: null,
    
    }
  },
   Home2:  {
    screen: AppSwitch,
    navigationOptions: {
      header: null,
    
    }
   },
   list:  {
    screen: list,
    navigationOptions: {
      header: null,
    }
    },
  orders:{
    screen: orders,
    navigationOptions: {
      header: null,
  }
  }
});

const App =  createAppContainer(AppStack2) ;
export default App;

