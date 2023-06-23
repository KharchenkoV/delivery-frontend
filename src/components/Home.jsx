import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'


const Home = () => {
  return (
    <div style={{ margin: 1, padding: 0, backgroundColor: "rgba(255, 182, 193,0.2)", minHeight: "90vh" }}>
      <Container>
        <Typography sx={{ pt: 13, fontFamily: 'Comic Sans MS, cursive, sant-serif' }} variant='h1' color='white'>"Старий Мізоч"</Typography>
        <Typography sx={{ pt: 5, fontFamily: 'Comic Sans MS, cursive, sant-serif' }} variant='h3' color='white'>не залишить тебе голодним</Typography>

        <Box display='flex' justifyContent='center' sx={{mt: 14}}>
          <Button href='/menu' sx={{ mx: 'auto' }} variant="contained" size='large'>Почати</Button>
        </Box>

      </Container>
    </div>
  )
}

export default Home