import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../asset/crown.svg'

import './header.style.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
            SHOP
            </Link> 
            <Link className='option' to='/shop'>
            CONTACT
            </Link> 
            {
                currentUser ?
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to="/signin">SING IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null:
            <CartDropdown></CartDropdown> 
        }
    </div>
)

// const mapStateToProps = state => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectHidden(state)
// })
const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectHidden
})
// const mapStateToProps = ({user:{ currentUser }, cart: { hidden }}) => ({
//     currentUser,
//     hidden,
// })  和上面一种表达方式一样效果


export default connect(mapStateToProps)(Header);