import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../components/checkout-item/checkout-item';

import { selectCartItems, selectCartTotal } from '../redux/cart/cart.selectors';

import PayButton from '../components/stripe-button/pay-button';
import '../styles/Checkoutpage.scss';

const Checkoutpage = ({ cartItems, totalPrice }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='product-header'>
                <span>Product</span>
            </div>
            <div className='header'>
                <span>Name</span>
            </div>
            <div className='header'>
                <span>Quantity</span>
            </div>
            <div className='header'>
                <span>Price</span>
            </div>
            <div className='last-header'>
                <span>Remove</span>
            </div>

        </div>
        {
            cartItems.map(item =>
                <CheckoutItem key={item.id} item={item}></CheckoutItem>
            )
        }

        <div className='totalPrice'>
            <span>TOTAL PRICE: ${totalPrice.toFixed(2)}</span>
        </div>

        <PayButton price={totalPrice} />
    </div>
)

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems,
        totalPrice: selectCartTotal
    }
)

export default connect(mapStateToProps)(Checkoutpage);