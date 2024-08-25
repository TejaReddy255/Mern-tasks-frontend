import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'
import { logout,reset } from '../features/auth/authSlice'
const Header = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {user} =useSelector(state=>state.auth)
    const logoutFn=()=>{
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
  return (
    <header className='header'>
        <div className='logo'>
        <Link to='/'>Task creator</Link>
        </div>
        <ul>
            {user?(<li>
                <button className='btn' onClick={logoutFn}>

                <FaSignOutAlt/> logout
                </button>
            </li>):
        (
        <><li>
            <Link to='/login'>
            <FaSignInAlt/> Login
            </Link>
        </li>
        <li>
            <Link to='/register'>
            <FaUser/> Register
            </Link>

        </li>
        </>
        )}

      
        </ul>      
    </header>
  )
}

export default Header
