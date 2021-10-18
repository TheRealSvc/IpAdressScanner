import './css/index.css';
import IpScanner from './components/IpScanner';
import TestTable from './components/TestTable';
import React, { Component } from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom';

/**
 * Main component for routing 
 */
class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      computers: '', 
      loading: 'true'} 
    };

   updateIpScan = async () =>  {
    this.setState({
      computers: '', 
      loading: 'true'}) 
    await fetch('http://localhost:4000/api/getcomputer')
    .then( x => x.json())
    .then( x => this.setState({
                  computers: x,
                  loading: 'false'}))
    .catch( 'error in fetching computers' )
  }
  
  componentDidMount() {
      this.updateIpScan() ;
    } 

    render() {
      return ( 
        (this.state.loading==='true')
       ?  <p> please wait while computers in local network are retrieved
       <Loader
        type="Puff"
        color="#00BFFF"
        height={300}
        width={300}
        timeout={60000} // ms
      /> </p>
       :
        <BrowserRouter>    
        <div className="container"> 
            <Switch> 
              <Route exact path= "/" render={ () => <IpScanner computers={this.state.computers} rescanfun={this.updateIpScan } /> } /> 
              <Route exact path= "/test" render={ () => <TestTable /> } />
            </Switch> 
        </div>
        </BrowserRouter>   
    );
    }
}

export default App;
