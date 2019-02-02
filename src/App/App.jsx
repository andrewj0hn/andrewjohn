// @flow
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from '../components/Header';
import ListOverview from '../components/ListOverview';
import Detail from '../components/Detail';
import Contact from '../components/Contact';
import * as ROUTES from '../constants/Routes';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <div className="Main">
        <Route exact path={ROUTES.HOME} component={ListOverview} />
        <Route path={ROUTES.DIGITAL_ENTERPRISES} component={ListOverview} />
        <Route path={ROUTES.HOGESCHOOL_VAN_AMSTERDAM} component={ListOverview} />
        <Route path={ROUTES.OWN_WORK} component={ListOverview} />
        <Route path={`${ROUTES.DETAIL}/:id`} component={Detail} />
        <Route path={ROUTES.CONTACT} component={Contact} />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
