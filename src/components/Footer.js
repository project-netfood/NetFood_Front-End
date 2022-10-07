import * as React from 'react';
import logo_netfood from "../assets/img/logo_header.svg"
import "../assets/css/index.css"

export default function Footer() {
  return (
    <div className='container_footer'>
      <img className="logo_netfood_footer"
        src={logo_netfood}
        alt="Logo_NetFood"
      />
      <p className='text_footer'>&#xA9; 2022 - NetFood</p>
      <p className='text_footer'>Réalisé avec <span className='coeur'>&#x2764;</span> par : Yoann, Kevin et Mahamadou</p>
    </div>
  );
}