import React from "react";
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { addItem } from '../../redux/cart/cart.actions';
import './collection-game.scss';

//button style
const style = {
    background: 'linear-gradient(45deg, #FEFB62 30%, #CCFFCC 90%)',
    borderRadius: 10,
    border: 0,
    color: 'purple',
    height: 48,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

const CollectionGame = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-game'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>

                <span className='name'>
                    {name}
                </span>
                <span className='price'>
                    ${price}
                </span>
            </div>
            <Button className="addtocartbutton"
                type="submit"
                variant="contained"
                onClick={() => addItem(item)}
                style={style}
                startIcon={<AddShoppingCartIcon />}>Add to Cart</Button>

        </div>

    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionGame);