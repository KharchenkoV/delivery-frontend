import React, { useState } from 'react'
import OrderService from '../../services/order.service'
import AuthenticationService from '../../services/authentication.service'
import { Grid, Paper } from '@mui/material'
import OrderLIstComponent from '../OrderList/OrderLIstComponent'

const OrderHistory = () => {
    const [orderHistory, setOrderHistory] = useState([])
    const loadAllOrders = () => {
        OrderService.getOrders().then(res => {
            setOrderHistory(res.data)
        }).catch(error => {
            console.log(error)
            if (error.response.status === 401) {
                AuthenticationService.logout()
            }
        })
    }
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <OrderLIstComponent orders={orderHistory} loadOrders={loadAllOrders} label={"Історія замовлень"} />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default OrderHistory