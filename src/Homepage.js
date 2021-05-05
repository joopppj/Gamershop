import React from 'react';

import './styles/Homepage.scss';

const Homepage = () => (
    <div className='homepage'>
        <div className='home-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Switch</h1>
                    <span className='subtitle'>Explore More</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>PS5/PS4</h1>
                    <span className='subtitle'>Explore More</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Xbox</h1>
                    <span className='subtitle'>Explore More</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Consoles</h1>
                    <span className='subtitle'>Explore More</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Games</h1>
                    <span className='subtitle'>Explore More</span>
                </div>
            </div>
        </div>
    </div>
)

export default Homepage;