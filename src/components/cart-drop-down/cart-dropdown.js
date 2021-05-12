import React from 'react';
import Button from '@material-ui/core/Button';

import './cart-dropdown.scss';

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <Button className='checkoutbutton'>Checkout</Button>
    </div>
)

export default CartDropDown;