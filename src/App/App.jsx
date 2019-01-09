// @flow
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import './Fonts.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectList from '../components/ProjectList';
import Contact from '../components/Contact';
import * as ROUTES from '../constants/Routes';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <div className="Main">
        <Route exact path={ROUTES.HOME} component={ProjectList} />
        <Route path={ROUTES.DIGITAL_ENTERPRISES} component={ProjectList} />
        <Route path={ROUTES.HOGESCHOOL_VAN_AMSTERDAM} component={ProjectList} />
        <Route path={ROUTES.OWN_WORK} component={ProjectList} />
        <Route path={ROUTES.CONTACT} component={Contact} />
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;