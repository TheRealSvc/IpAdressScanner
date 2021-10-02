import './css/index.css';
import IpScanner from './components/IpScanner';
import TestTable from './components/TestTable';
import React, { Component } from 'react';

import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom';

/**
 * Main component for routing 
 */
class App extends Component  {

    render() {
      return ( 
        <BrowserRouter>    
        <div className="container"> 
            <Switch> 
              <Route exact path= "/scanner" component={IpScanner} /> 
              <Route exact path= "/test" component={TestTable} /> 
            </Switch> 
        </div>
        </BrowserRouter>   
    );
    }
}

export default App;
