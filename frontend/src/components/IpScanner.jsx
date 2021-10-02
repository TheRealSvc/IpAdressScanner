import React, { Component } from 'react'; 
import { JsonToTable } from "react-json-to-table";
//import { Button } from 'react-native-elements';

class IpScanner extends Component { 
    
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
        super(props);
    };
    
      componentDidMount() {
      }     

  render()  {
  return (
    <div className="ScanPage">
      <header className="MyHeader">
        <button onClick={this.props.rescanfun } >
        Update Scanning Table
        </button>
      </header>
     <p> </p>
      <JsonToTable json={this.props.computers} />
    </div>   
  );
}
}

export default IpScanner;
