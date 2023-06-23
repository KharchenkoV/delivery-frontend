import { Container, Grid, Paper } from '@mui/material'
import React from 'react'
import './about.css'
import Image1 from '../images/1.jpg'
import Image2 from '../images/2.jpg'
import Image3 from '../images/3.jpg'
import Image4 from '../images/4.jpg'
import Image5 from '../images/5.jpg'

const Gallery = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <Paper sx={{ p: 10, display: 'flex', flexDirection: 'column' }} >
              <div id="slider" class="carousel slide" data-bs-ride="carousel">
  
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src={Image1} alt="First slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={Image2} alt="Second slide" />
                  </div>
                  <div class="carousel-item">
                    <img style={{maxHeight: "100vh"}} class="d-block w-100" src={Image3} alt="Third slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={Image4} alt="Third slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={Image5} alt="Third slide" />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

            </Paper >
          </Grid >
        </Grid >
      </Container >
  )
}

export default Gallery