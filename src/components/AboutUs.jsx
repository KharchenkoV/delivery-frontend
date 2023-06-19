import { Container, Grid, Paper } from '@mui/material'
import React from 'react'
import './about.css'
import Image1 from '../images/1.jpg'
import Image2 from '../images/2.jpg'
import Image3 from '../images/3.jpg'
import Image4 from '../images/4.jpg'
import Image5 from '../images/5.jpg'

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Paper sx={{ p: 10, display: 'flex', flexDirection: 'column' }} className='about'>
            <img src={Image1} alt='1'/>
            <img src={Image2} alt='2'/>
            <img src={Image3} alt='3'/>
            <img src={Image4} alt='4'/>
            <img src={Image5} alt='5'/>
          </Paper >
        </Grid >
      </Grid >
    </Container >
  )
}

export default AboutUs