import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'; //thin wrapper around App component
import App from './App';
import configureStore from './src/store/configureStore';

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
); // this is the redux provider which we pass store into


AppRegistry.registerComponent('FittingRoom', () => RNRedux);
