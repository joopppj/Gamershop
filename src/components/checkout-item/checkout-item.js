import React from 'react';
import './checkout-item.scss';
import { connect } from 'react-redux';

import { deleteItemFromCart, addItem, decreaseItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, deleteItem, addItem, decreaseItem }) => {
    const { name, imageUrl, price, quantity } = item;
    return (
        <div className='checkoutItem'>
            <div className='img-container'>
                <img src={imageUrl} alt="item" />
            </div>
            <span className='name'>{name}</span>

            <span className='quantity'>
                <div className='arrow' onClick={() => decreaseItem(item)} >&#10134;</div>
                <span className='quantity-val'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(item)} >&#10133;</div>
            </span>

            <span className='price'>${price}</span>

            <span className='remove-button' onClick={() => deleteItem(item)}> &#10008;</span>
        </div>

    )
}

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item))
})



export default connect(null, mapDispatchToProps)(CheckoutItem);