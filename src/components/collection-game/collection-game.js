import React from "react";

import './collection-game.scss';

const CollectionGame = ({ id, name, price, imageUrl }) => (
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

    </div>

)

export default CollectionGame;