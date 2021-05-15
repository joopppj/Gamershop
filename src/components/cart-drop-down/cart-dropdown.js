import React from 'react';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.scss';

// style for checkout button
const style = {
    background: 'linear-gradient(45deg, #56CCF2 30%, #2F80ED 90%)',
    borderRadius: 10,
    border: 0,
    color: 'white',
    height: 48,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length === 0 ? <p className='empty_msg'>No Items</p> :
                    cartItems.map(item => (<CartItem key={item.id} item={item} />))
            }
        </div>
        <Button className='checkoutbutton'
            onClick={() => {
                history.push('./checkout');
                dispatch(toggleCartHidden());
            }}
            variant="contained"
            style={style}
            startIcon={<ShoppingCartIcon />}> Checkout</Button>
    </div>
)

//get the state in redux store to props of this item
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropDown));