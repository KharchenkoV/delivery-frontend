import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React from 'react'
import AuthenticationService from "../../services/authentication.service";
import { useLocation, useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        AuthenticationService.login(
            data.get('email'),
            data.get('password')
        ).then(res => {
            console.log(res)
            if (res['role'] === 'ADMIN') {
                navigate('/admin')
                window.location.reload();
            } else {
                navigate(from, { replace: true });
                window.location.reload();
            }
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
                                Вхід
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                                    Увійти
                                </Button>
                                <Grid container>

                                    <Grid item>
                                        <Link href="/register" variant="body1">
                                            {"Немає акаунта? Зареєструватись"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login