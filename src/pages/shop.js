import React from 'react'
import { Route } from 'react-router-dom';

import CateOverview from '../components/cate-overview/cate-overview';
import Categorypage from './Categorypage';


const ShopPage = ({ match }) => {
    console.log(match)
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CateOverview} />
            <Route path={`${match.path}/:categoryId`} component={Categorypage} />
        </div>
    )
};


export default ShopPage;