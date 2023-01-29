import React from 'react'
import Box from '@mui/material/Box';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Navbar(props){

    const[dark,setDark]=React.useState(false);

    function handleModeClick(){
        setDark(prev=>!prev)
    }

    React.useEffect(() => {
        const body = document.querySelector('body');
        if (dark) {
          body.classList.add('dark-mode');
        } else {
          body.classList.remove('dark-mode');
        }
      }, [dark]);

    return <Box sx={{
        margin:'2rem 0',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        }}>
        <a href='https://github.com/TheMohit2003/Quotes_Page' target="_blank">
        <GitHubIcon/>
        </a>
       <h1>{props.title}</h1>
        <span onClick={handleModeClick}>
        {dark?<DarkModeOutlinedIcon/>:<LightModeOutlinedIcon/>}
        </span>
    </Box>
}