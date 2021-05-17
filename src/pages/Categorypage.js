import React from 'react';
//import CollectionGame from '../components/collection-game/collection-game';

import '../styles/Categorypage.scss';
import { connect } from 'react-redux';

import { selectCollection } from '../redux/shop/shop.selectors';
import CollectionGame from '../components/collection-game/collection-game';


const Categorypage = ({ match, category }) => {
    const { title, items } = category;
    return (
        <div className='category-page' >
            <h2 className='category-title'> {title} </h2>
            <div className='category-items'>
                {
                    items.map(item => (
                        <CollectionGame className='category-item' key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    category: selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(Categorypage);