import React, {Component} from 'react';
import DopComponent from '../components/DopComponent';
import '../../App.css';

const ExampleContext = React.createContext('tree') 

class DopContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      count:1
    }
  }
incrementCount=()=>{
  this.setState({count: this.state.count+1});
}
decrementCount=()=>{
  this.setState({count: this.state.count-1});
}

  render(){
    const name = 'Alina';
    const { count } = this.state
    return (
    <ExampleContext.Provider value='breeth'>
    <DopComponent 
    helloText = {"My name is " + name}
    incrementClick = {this.incrementCount}
    incrementClickTwo= {this.decrementCount}
    count = {count}

   /> 
    <DopContainer2/>
   </ExampleContext.Provider>  
    )
  }
}
class DopContainer2 extends Component {
  render(){

    return <DopContainer3/>
  }
}

class DopContainer3 extends Component {
  static contextType = ExampleContext 

  render(){ 
    
    return (
      <div>
       {this.context}
      </div>
    )
  }
}

export default DopContainer;