import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectHomeMenuCategories } from '../../redux/home-menu/home-menu.selectors';

import './home-menu.scss';

import MenuItem from '../menu-item/menu-item';

const HomeMenu = ({ categories }) => (
    <div className='home-menu'>
        {
            //console.log("ss");
            categories.map(({ id, ...otherCateProps }) => (
                <MenuItem key={id} {...otherCateProps} />
            ))
        }
    </div>
);


const mapStateToProps = createStructuredSelector({
    categories: selectHomeMenuCategories
})

export default connect(mapStateToProps)(HomeMenu);