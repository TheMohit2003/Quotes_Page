import React from 'react'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {WhatsappShareButton} from "react-share";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Navbar from './assets/Navbar';
import { padding } from '@mui/system';

function App() {

function get_random_element(array){
  const length = array.length;
  const randomNumber=Math.floor(Math.random()*length);
  const element = array[randomNumber];
  return element 
}

const[quoteArray,setQuoteArray]=React.useState([]);
const [quote,setQuote]=React.useState({
 "text": "Practice makes a man perfect"
})

React.useEffect(()=>{
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    setQuoteArray(data)
  });
},[])

function handleClick(){
  setQuote(get_random_element(quoteArray))
}


  return (
    <div className="App">
    <Navbar title="Quote Generator"/>
      <Container sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:'1rem'
        }}>
        <Box
        sx={{
        minwidth:'50%',
        height: 200,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        fontSize:'1.5rem',
        margin:'10px'
        }}
        >
        {quote.text}
        </Box>
        <Box sx={{
          display:'flex',
          flexWrap:'wrapm'
        }}>
        <Button onClick={handleClick} style={{margin:'10px'}}>Generate quote</Button>
        <WhatsappShareButton url=" " title={`quote of the day: ${quote.text}`}>
          <Button>Share <WhatsAppIcon sx={{m:'2'}}/></Button>
        </WhatsappShareButton>
        </Box>
      </Container>
    </div>
  )
}

export default App
