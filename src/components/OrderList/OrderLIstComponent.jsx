import React, { useEffect } from 'react'

import './style.css'
import { Link } from 'react-router-dom'
import { Container, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'


const statuses = {
    'NEW': 'Сформовано',
    'APPROVED': 'Підтверджено',
    'CANCELED': 'Скасовано',
    'ON_THE_WAY': 'В дорозі',
    'CLOSED': 'Виконано',
}

const OrderLIstComponent = ({ orders, loadOrders, label }) => {
    useEffect(() => {
        loadOrders()
    }, [])
    const ORDER_URL = JSON.parse(localStorage.user).role === 'ADMIN' ? '/admin/order/' : '/order/'
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: 10 }}>
                            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                                <h2 className='text-center'>{label}</h2>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>№</TableCell>
                                            <TableCell>Дата</TableCell>
                                            <TableCell>Замовник</TableCell>
                                            <TableCell>Адреса</TableCell>
                                            <TableCell>Статус</TableCell>
                                            <TableCell align="right">Сума</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {orders.map((order) => (
                                            <TableRow key={order.id}>
                                                <TableCell><Link to={`${ORDER_URL}${order.id}`}>{order.id}</Link></TableCell>
                                                <TableCell>{order.created}</TableCell>
                                                <TableCell><Link to={`/admin/profile/${order.userId}`}>{order.phone}</Link></TableCell>
                                                <TableCell>{order.address}</TableCell>
                                                <TableCell>{statuses[order.status]}</TableCell>
                                                <TableCell align="right">&#x20b4;{`${order.sum}`}</TableCell>
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

export default OrderLIstComponent