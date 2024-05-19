import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.scss";
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentuser } = useContext(AuthContext);

  return (
    <nav>
      <div className='left'>
        <Link to='/' className='logo'>
          <img src='/logo.png' alt='' />
          <span>Ghar Kharido</span>
        </Link>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/agent'>Agents</Link>
      </div>

      <div className='right'>
        {currentuser ? (
          <div className='user'>
            <img alt='' src={currentuser.avatar} />
            <span>{currentuser.username}</span>
            <Link to="/profile" className='profile'>
              <div className='notification'>3</div>
              <span> Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to='/login'>Sign in</Link>
            <Link to='/register' className='register'>Register</Link>
          </>
        )}

        <div className='menuIcon'>
          <img src='/menu.png' alt=''
            onClick={() => setOpen((prev) => !prev)} />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <Link to='/'>Home</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Contact</Link>
          <Link to='/'>Agents</Link>
          {!currentuser && (
            <>
              <Link to='/login'>Sign in</Link>
              <Link to='/register'>Sign up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
