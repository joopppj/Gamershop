import React from 'react';
import Button from '@material-ui/core/Button';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors'

import './cart-dropdown.scss';

const CartDropDown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(item => (<CartItem key={item.id} item={item} />))
            }
        </div>
        <Button className='checkoutbutton'>Checkout</Button>
    </div>
)

//get the state in redux store to props of this item
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropDown);