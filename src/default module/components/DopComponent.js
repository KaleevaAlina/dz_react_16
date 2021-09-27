import logo from '../../logo.svg';
import '../../App.css';
import { Button } from '@material-ui/core';
import  React , {useState,   useEffect} from 'react';



const DopComponent = ({helloText,incrementClick,count,  incrementClickTwo}) => {
  const [data,setData] = useState(0);
  useEffect (() => {
    document.title=`${data}`
  });
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {helloText}
        </p>
      <p>
        Сумма     {data}
      </p>
        <a
          className="App-link"

          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
        <div className="but">
         <Button variant="outlined" color="secondary" onClick = {incrementClick}>PLUS </Button>
         <Button variant="outlined" color="secondary" onClick = {incrementClickTwo}>Minus</Button> 
        </div>
        <div className="but1">
          {count}
        </div>
        <div className="but">
         <Button onClick = {()=>setData(data+4)}>Click </Button>
        </div>
        <div className="but1">
          {data}
        </div>

      </header>
    <div>
    
</div>
</div>
  );
}

export default DopComponent;