import { Redirect } from 'react-router-dom';import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_WBqax2FWVzS9QlpJScO07iuL';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
    // if (token) {
    //   (<Redirect to='/' />)
    // }
  };

  return (
    <StripeCheckout 
    label='Pay Now'
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://i.postimg.cc/9M6hz2Y5/crown3.png'
    description={`Your total is ${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;