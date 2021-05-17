import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections1 } from '../../redux/shop/shop.selectors';
import PreviewCollection from '../preview-collection/preview-collection';

import './cate-overview.scss';

const CateOverview = ({ collections }) => (
    <div className='cate-overview' >
        {
            collections.map(({ id, ...otherPreviewProps }) => (
                <PreviewCollection key={id} {...otherPreviewProps} />
            ))
        }
    </div>
)



const mapStateToProps = createStructuredSelector({
    collections: selectCollections1
});

export default connect(mapStateToProps)(CateOverview);