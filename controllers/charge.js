const Stripes = require('stripe');

exports.test = async (req, res) => {
    const { id, amount } = req.body;
    const stripe = new Stripes(process.env.STRIPE_SECRET_KEY);

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'INR',
            description: 'Testing',
            payment_method: id,
            confirm: true,
        })

        return res.status(200).json({ success: true, msg: 'Payment Completed Successfully' })
    } catch (err) {
        return res.status(401).json({ success: false, msg: 'Payment Abandoned' })
    }
}