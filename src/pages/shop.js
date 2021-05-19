import React from 'react';
import { Route } from 'react-router-dom';

import CateOverview from '../components/cate-overview/cate-overview';
import Categorypage from './Categorypage';


const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CateOverview} />
        <Route path={`${match.path}/:collectionId`} component={Categorypage} />
    </div>
)
export default ShopPage;