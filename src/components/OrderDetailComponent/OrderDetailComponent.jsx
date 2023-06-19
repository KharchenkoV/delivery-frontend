import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow
} from 'mdb-react-ui-kit'
import { useNavigate, useParams } from 'react-router-dom'
import OrderService from '../../services/order.service'
import './style.css'
import { Button } from '@mui/material'

const OrderDetailComponent = () => {
    const [order, setOrder] = useState({})
    const role = JSON.parse(localStorage.user).role
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        OrderService.getOrderById(id).then(res => {
            setOrder(res.data)
        }).then(e => {
            console.log(e)
        })
    }, [id])

    const approveOrder = (id) => {
        OrderService.approveOrder(id).then(res => {
            navigate('/admin')
            window.location.reload();
        }
        ).catch(e => console.log(e))
    }

    const sendOrder = (id) => {
        OrderService.sendOrder(id).then(res => {
            navigate('/admin')
            window.location.reload();
        }
        ).catch(e => console.log(e))
    }
    const cancelOrder = (id) => {
        OrderService.cancelOrder(id).then(res => {
            navigate('/orders')
            window.location.reload();
        }
        ).catch(e => console.log(e))
    }

    const getAction = (status) => {
        switch (status) {
            case 'NEW':
                if (role === 'ADMIN')
                    return (
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            style={{ backgroundColor: "#3f51b5" }}
                            onClick={() => approveOrder(id)}
                        >
                            Підтвердити замовлення
                        </Button>
                    )
                return (
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{ backgroundColor: "red" }}
                        onClick={() => cancelOrder(id)}
                    >
                        Скасувати замовлення
                    </Button>
                )
            case 'APPROVED':
                if (role === 'ADMIN')
                    return (
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            style={{ backgroundColor: "#3f51b5" }}
                            onClick={() => sendOrder(id)}
                        >
                            Відправити замовлення
                        </Button>
                    )
                break;
            default:
                return;
        }
    }

    return (
        <>
            <section className="h-100 h-custom" >
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol lg="8" xl="6">
                            <MDBCard className="border-top border-bottom border-3 border-color-custom">
                                <MDBCardBody className="p-5">
                                    <p className="lead fw-bold mb-5" style={{ color: "#3f51b5" }}>
                                        Деталі замовлення
                                    </p>

                                    <MDBRow>
                                        <MDBCol className="mb-3">
                                            <p className="small text-muted mb-1">Дата створення</p>
                                            <p>{order.created}</p>
                                        </MDBCol>
                                        <MDBCol className="mb-3">
                                            <p className="small text-muted mb-1">Замовлення No.</p>
                                            <p>{order.id}</p>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol className="mb-3">
                                            <p className="small text-muted mb-1">Оплата</p>
                                            <p>{order.paymentStatus === 'PAID' ? 'Оплачено' : 
                                            (<Button
                                                href={`/payment/${id}`}
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                                style={{ backgroundColor: "red" }}
                                                
                                            >
                                                Оплатити
                                            </Button>)}</p>
                                        </MDBCol>
                                    </MDBRow>

                                    <div
                                        className="mx-n5 px-5 py-4"
                                        style={{ backgroundColor: "#f2f2f2" }}
                                    >
                                        <MDBRow>
                                            <MDBCol md="8" lg="6">
                                                <p>Назва</p>
                                            </MDBCol>
                                            <MDBCol md="2" lg="4">
                                                <p>Кількість</p>
                                            </MDBCol>
                                            <MDBCol md="4" lg="2">
                                                <p>Ціна</p>
                                            </MDBCol>
                                        </MDBRow>
                                        <hr />

                                        {order.details?.map(detail =>
                                            <MDBRow key={detail.id}>
                                                <MDBCol md="8" lg="6">
                                                    <p>{detail.product.title}</p>
                                                </MDBCol>
                                                <MDBCol md="2" lg="4">
                                                    <p>{detail.amount}</p>
                                                </MDBCol>
                                                <MDBCol md="4" lg="2">
                                                    <p>&#x20b4;{detail.price}</p>
                                                </MDBCol>
                                            </MDBRow>
                                        )}
                                    </div>
                                    <MDBRow className="my-4">
                                        <MDBCol md="4" className="offset-md-8 col-lg-3 offset-lg-9">
                                            <p
                                                className="lead fw-bold mb-0"
                                                style={{ color: "#3f51b5" }}
                                            >
                                                &#x20b4;{order.sum}
                                            </p>
                                        </MDBCol>
                                    </MDBRow>

                                    <p
                                        className="lead fw-bold mb-4 pb-2"
                                        style={{ color: "#3f51b5" }}
                                    >
                                        Відслідковування
                                    </p>

                                    <MDBRow>
                                        <MDBCol lg="12">
                                            <div className="horizontal-timeline">
                                                <ul className="list-inline items d-flex justify-content-between">
                                                    <li className={"list-inline-item items-list"}>
                                                        <p
                                                            className="py-1 px-2 rounded text-white"
                                                            style={{ backgroundColor: "#3f51b5" }}
                                                        >
                                                            Сформоване
                                                        </p>
                                                    </li>
                                                    <li className={"list-inline-item items-list"}>
                                                        <p
                                                            className="py-1 px-2 rounded "
                                                            style={(order.status === 'APPROVED' || order.status === 'ON_THE_WAY' || order.status === 'CLOSED' ? { backgroundColor: '#3f51b5', color: 'white' } : {})}
                                                        >
                                                            Підтвердженне
                                                        </p>
                                                    </li>
                                                    <li className="list-inline-item items-list">
                                                        <p
                                                            className="py-1 px-2 rounded"
                                                            style={(order.status === 'ON_THE_WAY' || order.status === 'CLOSED' ? { backgroundColor: '#3f51b5', color: 'white' } : {})}
                                                        >
                                                            В дорозі
                                                        </p>
                                                    </li>
                                                    <li
                                                        className="list-inline-item items-list text-end"
                                                        style={{ marginRight: "-8px" }}
                                                    >
                                                        <p
                                                            className="py-1 px-2 rounded"
                                                            style={(order.status === 'CLOSED' ? { backgroundColor: '#3f51b5', color: 'white', marginRight: '-8px' } : { marginRight: '-8px' })} >Доставленно</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow >
                                        <MDBCol md="4" >
                                            {getAction(order.status)}
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    )
}

export default OrderDetailComponent