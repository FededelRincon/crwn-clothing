import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total, currentUser}) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartITem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>


    {currentUser ? (
      <div className='test-warning'>
        <StripeCheckoutButton price={total} />
        <div className='test-warning'>
          *TEST MODE ONLY * <br />
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 
          <br />
          Exp: 01/22 - CVV: 123
        </div>
      </div>
    ) : (
      null
    )}



  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);