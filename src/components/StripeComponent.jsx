import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements
} from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
const StripeComponent = () => {
  const { id } = useParams()
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm orderId={id} />
    </Elements>
  )
};

export default StripeComponent