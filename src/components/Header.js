import * as React from 'react';
import { Link } from 'react-router-dom';
import test from "../assets/img/logo_header.svg"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../assets/css/index.css"

function Header() {
  return (
    <React.Fragment>
      <div className='container_header'>
        <div className='logo_header'>
          <Link to="/">
            <img className="logo_netfood"
              src={test}
              alt="Logo_NetFood"
            />
          </Link>
        </div>
        <div>
          <AccountCircleIcon />
        </div>
      </div>
    </React.Fragment>


  );
}
export default Header;