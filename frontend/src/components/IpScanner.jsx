import React, { Component } from 'react'; 
import { JsonToTable } from "react-json-to-table";
//import { Button } from 'react-native-elements';

class IpScanner extends Component { 
    constructor(props) {
        super(props);
        this.state = {computers: ''} // [{Computername: '' , IPv4: '', MAC: '' }] }
    };

    updateIpScan = () =>  {
        fetch('http://localhost:5000/api/getcomputer')
        .then ( x => x.json())
        .then( x => { this.setState({computers: x})})
        .catch( 'error in fetching computers') 
      };
    
      componentDidMount() {
      }   

  render()  {
  return (
    <div className="ScanPage">
      <header className="MyHeader">
        <button onClick={this.updateIpScan} >
        Start Scan
        </button>
      </header>
     <p> </p>
      <JsonToTable json={this.state.computers} />
    </div>   
  );
}
}

export default IpScanner;
