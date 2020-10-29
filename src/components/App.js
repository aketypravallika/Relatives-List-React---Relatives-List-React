import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
   const relatives = ['vinitha','vishnu','pavani','mani'];
        return(
           <ol key="relativeList">
		{relatives.map((relative,index)=>(
	        <li key={`relativeListItems${index+1}`}>{relative}</li>
	          ))}
         
	</ol>
        );
    }
}


export default App;
