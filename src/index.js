import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import TopBar from './topBar'
import Help from "./help"
import Home from "./home"
import KeyBoardNath from './keyboardNath';
import keyBoard from './adien'
import puzzle from './jackso'
import { BrowserRouter, Route, Switch } from "react-router-dom";




ReactDOM.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <TopBar/>
        <Switch>
          <Route path="/app" component={App}/>
          <Route path="/help" component={Help}/>
          <Route path="/bruh" component={KeyBoardNath}/>
          <Route path="/g" component={keyBoard}/>
          <Route path="/j" component={puzzle}/>
          <Route path="" component={Home}/>
          
        </Switch>
      </BrowserRouter>

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
