import React from 'react'
import Quotes from './assets/Quotes'
import Button from '@mui/material/Button';

function App() {

function get_random_element(array){
  const length = array.length;
  const randomNumber=Math.floor(Math.random()*length);
  const element = array[randomNumber];
  return element 
}

const[quoteArray,setQuoteArray]=React.useState([]);

Quotes().then(data=>{setQuoteArray(data)})


  return (
    <div className="App">
      <h1>Hello world</h1>
      <Button variant="outlined">Outlined</Button>
    </div>
  )
}

export default App
