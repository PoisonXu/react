import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '@/css/home/home.scss';
import Home from '@/views/Home';
import Kind from '@/views/Kind';
import Cart from '@/views/Cart';
import User from '@/views/User';
import Footer from '@/views/common/Footer';

export default () => (
  <div className = "contenier">
    <Switch>
      <Route exact path = '/home' component = { Home }/>
      <Route exact path = '/kind' component = { Kind }/>
      <Route exact path = '/cart' component = { Cart }/>
      <Route exact path = '/user' component = { User }/>
      <Redirect to = '/home'/>
    </Switch>
    <Footer />
  </div>
  );


