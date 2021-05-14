import React from 'react';

import CollectionGame from '../collection-game/collection-game';

import './preview-collection.scss';

const PreviewCollection = ({ title, items }) => (
    <div className='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4)
                    .map(item => (
                        <CollectionGame key={item.id} item={item} />
                    ))
            }
        </div>
    </div>
)

export default PreviewCollection;