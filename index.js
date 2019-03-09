import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native';
import storeConfig from './src/store/storeConfig'
import axios from 'axios'

import Entry from './src/Entry';
import { name as appName } from './app.json';

axios.defaults.baseURL = 'https://lambe-4c9d4.firebaseio.com/'

const store = storeConfig()
const Redux = () => (
  <Provider store={store}>
    <Entry />
  </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
