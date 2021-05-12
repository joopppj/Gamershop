import React from 'react';

import CollectionGame from '../collection-game/collection-game';

import './preview-collection.scss';

const PreviewCollection = ({ title, items }) => (
    <div className='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4)
                    .map(({ id, ...otherItemProps }) => (
                        <CollectionGame key={id} {...otherItemProps} />
                    ))
            }
        </div>
    </div>
)

export default PreviewCollection;