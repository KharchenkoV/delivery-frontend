import { Grid, Paper } from '@mui/material'
import React, { useState } from 'react'
import OrderLIst from '../OrderList/OrderLIstComponent'
import OrderService from '../../services/order.service'
import AuthenticationService from '../../services/authentication.service'

const OrderManagmentComponent = () => {
    const [formedOrder, setFormedOrder] = useState([])
    const [approvedOrder, setApprovedOrder] = useState([])
    const loadFormedOrders = () => {
        OrderService.getFormedOrders().then(res => {
            setFormedOrder(res.data)
        }).catch(error => {
            console.log(error)
            if (error.response.status === 401) {
                AuthenticationService.logout()
            }
        })
    }
    const loadApprovedOrders = () => {
        OrderService.getApprovedOrders().then(res => {
            setApprovedOrder(res.data)
        }).catch(error => {
            console.log(error)
            if (error.response.status === 401) {
                AuthenticationService.logout()
            }
        })
    }
    return (
        <Grid container spacing={3}>
            <OrderLIst orders={formedOrder} loadOrders={loadFormedOrders} label={"Нові замовлення"} />
            <OrderLIst orders={approvedOrder} loadOrders={loadApprovedOrders} label={"Підтвердженні замовлення"} />
        </Grid>
    )
}

export default OrderManagmentComponent