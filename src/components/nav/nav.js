import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/controller.svg';
import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-drop-down/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './nav.scss';

const Nav = ({ currentUser, hidden }) => (
    <div className='nav'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>

        <div className='tabs'>
            <Link className='tab' to='/shop'>
                Game Shop
            </Link>

            <a href="https://github.com/joopppj/Gamershop">Source Code</a>
            {
                currentUser ?
                    <div className='tab' onClick={() => auth.signOut()}>Sign Out</div>
                    :
                    <Link className='tab' to='/signin'>Log in </Link>
            }
            <CartIcon></CartIcon>
        </div>
        {
            hidden ? null : <CartDropDown />}
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Nav);