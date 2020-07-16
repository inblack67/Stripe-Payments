import React, {useState} from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const GateWay = () => {

    const [paymentSuccess, setPaymentSuccess] = useState(false);

    if(paymentSuccess){
        return <p className="flow-text center">Thank you for your time, especially money.</p>
    }

    return (
        <div className="container">
            <img src="https://source.unsplash.com/1600x900?food" alt="" className="responsive-img"/>
            <Elements stripe={stripePromise}>
                <CheckoutForm success={() => setPaymentSuccess(true)} />
            </Elements>
        </div>
    )
}

export default GateWay
