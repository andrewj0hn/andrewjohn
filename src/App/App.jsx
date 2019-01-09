// @flow
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import './App.css';
import './Fonts.css';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

const AppNavigator = () => createStackNavigator({
  Home: 
});

const App = () => (
  <div className="App">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
