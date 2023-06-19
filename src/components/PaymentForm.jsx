import React, { useState } from 'react'
import { CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements } from '@stripe/react-stripe-js'
import PaymentService from '../services/payment.service'
import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "black",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "black" },
            "::placeholder": { color: "black" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "black"
        }
    }
}



const PaymentForm = ({orderId}) => {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardCvcElement, CardExpiryElement, CardNumberElement)
        })

        if (!error) {
            try {
                const response = await PaymentService.checkout({
                    "orderId" : orderId,
                    "name": "EWR",
                    "currency": "usd",
                    "amount": 222.0,
                    "quantity": "1"
                })

                if (response) {
                    console.log("Successful Payment")
                    setSuccess(true)
                    setTimeout(() => {
                        navigate(`/order/${orderId}`)
                    }, 5000)
                }


            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log("error.message")
        }
    }
    return (
        <Container component="main" maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Paper sx={{ py: 10, px: 5 }}>
                        {!success ?
                            <form onSubmit={handleSubmit}>
                                <Typography sx={{pl: 2}}>Номер карти</Typography>
                                <fieldset className='FormGroup'>
                                    <div className="FormRow">
                                        <CardNumberElement options={CARD_OPTIONS} />
                                    </div>
                                </fieldset>
                                <fieldset className='FormGroup'>
                                    <div className="FormRow">
                                        <CardExpiryElement options={CARD_OPTIONS} />
                                    </div>
                                </fieldset>
                                <fieldset className='FormGroup'>
                                    <div className="FormRow">
                                        <CardCvcElement options={CARD_OPTIONS} />
                                    </div>
                                </fieldset>
                                <Button
                                    type='submit'
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Pay
                                </Button>
                            </form>
                            :
                            <div className="payment-success">
                                <h2>Payment successful</h2>
                                <h3 className='Thank-you'>Thank you for your patronage</h3>
                            </div>
                        }
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default PaymentForm