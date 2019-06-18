import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter, Route, Switch} from 'react-router-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '@/layout/App';
import Detail from '@/layout/Detail';
import * as serviceWorker from './serviceWorker';
import '@/lib/reset.scss';

// ReactDOM.render( //哈希模式
// <HashRouter> 
//   <Switch>
//     <Route exact path="/" component = { App }/>
//   </Switch>
// </HashRouter>,
// document.getElementById('root'));

ReactDOM.render( // 浏览器模式 
<BrowserRouter>
  <Switch>
    <Route path="/detail/:id" component = { Detail }/>
    <Route path="/" component = { App }/>
  </Switch>
</BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
