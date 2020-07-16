import React from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import M from 'materialize-css/dist/js/materialize.min.js';

const CheckoutForm = ({ success }) => {

    const stripe = useStripe();
    const elements = useElements();

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement)
            })

            if(!error){
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const { id } = paymentMethod;
                try {
                    const res = await axios.post('/api/charge', { id, amount: 1100 }, config);
                    if(res.data.success){
                        M.toast({ html: res.data.msg })
                        success();
                    }
                } catch (err) {
                    console.error(err)
                    if(err.response.status === 401){
                        M.toast({ html: 'Invalid Credentials' })
                    }
                }
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
            <h5 className="red-text center">Price: 11.00 INR</h5>
                <div className="input-field">
                <CardElement />
                </div>
                <br/><br/>
                <div className="input-field center">
                <button disabled={!stripe} className='btn red' type="submit">
                    Pay
                </button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm
