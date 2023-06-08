import React, { useEffect } from 'react'

import './style.css'
import { Link } from 'react-router-dom'
import { Container,  Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'


const statuses = {
    'NEW': 'Сформовано',
    'APPROVED': 'Підтверджено',
    'CANCELED': 'Скасовано',
    'ON_THE_WAY': 'В дорозі',
    'CLOSED': 'Виконано',
}

const OrderLIstComponent = ({ orders, loadOrders }) => {
    useEffect(() => {
        loadOrders()
    }, [])

    return (
        <div style={{ padding: 10 }}>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <h2 className='text-center'>Список замовлень</h2>
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
                                <TableCell><Link to={`/order/${order.id}`}>{order.id}</Link></TableCell>
                                <TableCell>{order.created}</TableCell>
                                <TableCell>{order.email}</TableCell>
                                <TableCell>{order.address}</TableCell>
                                <TableCell>{statuses[order.status]}</TableCell>
                                <TableCell align="right">{`$${order.sum}`}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </Container>
        </div>
    )
}

export default OrderLIstComponent