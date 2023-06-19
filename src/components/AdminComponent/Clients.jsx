import { Container, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UserService from '../../services/user.service'
import { Link } from 'react-router-dom'

const Clients = () => {
    const [users, setUsers] = useState()
    useEffect(() => {
        UserService.getAllUsers().then(res => {
            setUsers(res.data)
        }).catch(e => {
            console.log(e)
        })
    }, [])
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: 10 }}>
                            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                                <h2 className='text-center'>Клієнти</h2>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>id</TableCell>
                                            <TableCell>Ім'я</TableCell>
                                            <TableCell>Прізвище</TableCell>
                                            <TableCell>Пошта</TableCell>
                                            <TableCell>Телефон</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {users?.map((user) => (
                                            <TableRow key={user.id}>
                                                <TableCell><Link to={`/admin/profile/${user.id}`}>{user.id}</Link></TableCell>
                                                <TableCell>{user.firstname}</TableCell>
                                                <TableCell>{user.lastname}</TableCell>
                                                <TableCell>{user.email}</TableCell>
                                                <TableCell>{user.phone}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>

                            </Container>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
  )
}

export default Clients