import * as React from 'react';
import { Link } from 'react-router-dom';
import logo_netfood from "../assets/img/logo_header.svg"
import logo_client from "../assets/img/client.png"
import "../assets/css/index.css"

function Header() {
  return (
    <React.Fragment>
      <div className='container_header'>
        <div className='logo_header'>
          <Link to="/">
            <img className="logo_netfood"
              src={logo_netfood}
              alt="Logo_NetFood"
            />
          </Link>
        </div>
        <div>
          <Link to="espace-client">
            <img className='logo_client' 
                src={logo_client} 
                alt="Logo_Client"
            />
          </Link>
        </div>
      </div>
    </React.Fragment>


  );
}
export default Header;