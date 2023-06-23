import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import BookingService from '../services/booking.service'
import { useNavigate } from 'react-router-dom'

const Booking = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        BookingService.createBooking({
            tableNumber: data.get('tableNumber'),
            count: data.get('count'),
            startDate: data.get('startDate'),
            finishDate: data.get('finishDate')
        }).then(res => {
            setTimeout(() => {
                navigate("/")
            }, 2000)
            alert("Заявка пройшла успішно")
        }).catch(e => {
            console.log(e)
        })
    }
    return (
        <Container component="main" maxWidth="md" sx={{ mt: 4, mb: 4, width: 500 }}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Paper sx={{ pb: 10, display: 'flex', flexDirection: 'column' }}>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, p: 5 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="tableNumber"
                                        type='number'
                                        required
                                        fullWidth
                                        id="tableNumber"
                                        label="№ столика"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        type='number'
                                        required
                                        fullWidth
                                        id="count"
                                        label="Кількість людей"
                                        name="count"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>Початок</Typography>
                                    <TextField
                                        type='datetime-local'
                                        required
                                        id="startDate"
                                        name="startDate"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>Кінець</Typography>
                                    <TextField
                                        required
                                        name="finishDate"
                                        type='datetime-local'
                                        id="finishDate"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{ mt: 3 }}
                            >
                                Забронювати
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Booking