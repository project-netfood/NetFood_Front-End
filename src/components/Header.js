import * as React from 'react';
import { Link } from 'react-router-dom';
import test from "../assets/img/logo_header.svg"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <header className='header'>
      <div className='logo_netfood'>
        <Link to="/">
          <img className="logo_header"
              src={test}
              alt="Logo_NetFood"
          />
        </Link>
      </div>
        <AccountCircleIcon/>
      <div>
          
      </div>
    </header>

    );
}
export default Header;