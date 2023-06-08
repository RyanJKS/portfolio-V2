import React from 'react'
import "./About.css"
import AppWrap from '../../Wrapper/AppWrap/AppWrap'
import BackgroundCard from '../../Wrapper/BackgroundCard/BackgroundCard'
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material'
import resume from "../../Assets/Jhelan Suggun CV.pdf"


const About =() => {
 
  return (
    <>
    <h2 className='about-title'>A little about me</h2>
    <h3 className='about-section1'>I am a fullstack developer with experience in designing and deploying multiple projects.
      I am also well versed in different programming languages as well as making embedded systems
    </h3>
    <Stack direction="row" justifyContent="space-evenly">
      <Button variant='outlined'><a href={resume} download={resume}>Vew Resume</a></Button>
      <Button variant='outlined'><a href='#Contact%20Me'>Contact Me</a></Button>
    </Stack>
    </>
  )
}

export default AppWrap(
  BackgroundCard(About),
  "About",
  "white");
