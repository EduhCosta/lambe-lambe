import React from 'react'

import { 
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'
import Splash from './screens/Splash'

// Navegação com botão de voltar do sistema
const authRouter = createStackNavigator({
  Login: { 
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  Register: { 
    screen: Register,
    navigationOptions: {
      title: 'Register'
    }
  }
}, {
  initialRouteName: 'Login'
})

// Navegação entre telas
const loginOrProfileRouter = createSwitchNavigator({
  Profile: Profile,
  Auth: authRouter
}, {
  initialRouteName: 'Auth'
})

// Navegação com tabs
const MenuRoutes = {
  Feed: {
    name: 'Feed',
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
      tabBarIcon: ({ tintColor }) => 
        <Icon name="home" size={30} color={tintColor} />
    }
  },
  Add: {
    name: 'AddPhoto',
    screen: AddPhoto,
    navigationOptions: {
      title: 'Add Picture',
      tabBarIcon: ({ tintColor }) => 
        <Icon name="camera" size={30} color={tintColor} />
    }
  },
  Profile: {
    name: 'Profile',
    screen: loginOrProfileRouter,
    navigationOptions: {
      title: 'Profile',
      tabBarIcon: ({ tintColor }) => 
        <Icon name="user" size={30} color={tintColor} />
    }
  }
}

const MenuConfig = {
  initialRoute: 'Feed',
  tabBarOptions: {
    showLabel: false
  }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)

const SplashRouter = createSwitchNavigator({
  Splash: Splash,
  App: MenuNavigator
}, {
  initialRouteName: 'Splash'
})

export default SplashRouter