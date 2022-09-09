import * as React from 'react';
import image1 from "../assets/img/image1.jpg"
import "../assets/css/index.css"

export default function Carrousel() {
  return (
    <div className='container_carrousel'>
      <img className='image1'
        src={image1}
        alt="Image de plat"
      />
      <div className='text'>
        <h2 className='p1'>Au menu</h2>
        <h3 className='p2'>cette semaine</h3>
        <p className='p3'>Une cuisine accessible à partir d'ingrédients ultra-frais sélectionnés lors d’un repérage minutieux auprès de producteurs passionnés donnant la part belle à la traçabilité : "produits labellisés, BIO, locaux et français".</p>
      </div>
    </div>
  );
}