import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import AuthenticationService from '../../services/authentication.service'
import { useNavigate } from 'react-router-dom'




const RegisterComponent = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        AuthenticationService.register(
            data.get('email'),
            data.get('firstname'),
            data.get('lastname'),
            data.get('phone'),
            data.get('password')
        ).then(res => {
            navigate('/')
            window.location.reload();
        })

    }
    return (
        <Container component="main" maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Paper sx={{ pb: 10, display: 'flex', flexDirection: 'column' }}>
                        <Box
                            sx={{
                                marginTop: 8,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}
                        >
                            <Typography component="h1" variant="h5">
                                Реєстрація
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, px: 20 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Електрона пошта"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Номер Телефону"
                                    name="phone"
                                    autoComplete="firstname"

                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="firstname"
                                    label="Ім'я"
                                    name="firstname"
                                    autoComplete="firstname"

                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="lastname"
                                    label="Прізвище"
                                    name="lastname"
                                    autoComplete="lastname"

                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Пароль"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Підтвердити
                                </Button>

                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default RegisterComponent