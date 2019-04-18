import React, { Component } from 'react';

import './App.css';
import {BrowserRouter,Router,Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
// import Welcome from "./component/welcome"
import Leftside from './component/leftside';
import {Provider} from "react-redux"
import Store from "./component/redux/storage/storage"

class App extends Component {
  render() {
    return (
      
      <Provider Store={Store}>
      <BrowserRouter>
      
      <div className="App">
      <Leftside />
      
       
      </div>
      </BrowserRouter>
      </Provider>
     
    );
  }
}

export default App;
