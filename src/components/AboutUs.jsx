import { Container, Grid, Paper } from '@mui/material'
import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const AboutUs = () => {
  return (
    <>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <Paper sx={{ p: 10, display: 'flex', flexDirection: 'column' }} >
            <MDBFooter className='text-center text-lg-start '>
          

          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="gem" className="me-3" />
                    Про ресторан
                  </h6>
                  <p>
                    "Старий Мізоч" - ресторан, що пропонує чудовий сервіс для доставки своєї продукції прямо із браузера
                    та буде хорошим вибором, якщо ви шукаєте місце де можна смачно поїсти
                  </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Графік роботи</h6>
                  <p>
                    Цілодобово з 14:00 до 23:00
                  </p>
                </MDBCol>

              

                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Контакти</h6>
                  <p>
                    <b>Адреса:</b> смт. Мізоч, вул.  Сурмичі Україна, Рівненська обл.
                  </p>
                  <p>
                    <b>Телефон:</b> 380 97 445 1408
                  </p>
                  <p>
                  <b>Пошта:</b> stariymizoch@gmail.com
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </MDBFooter>

            </Paper >
          </Grid >
        </Grid >
      </Container >
    </>

  )
}

export default AboutUs