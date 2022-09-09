import * as React from 'react';
import "../assets/css/index.css"
import italien1 from "../assets/img/lasagne.jpg"
import italien2 from "../assets/img/involtinis.jpg"
import italien3 from "../assets/img/muffuletta.jpg"
import indien1 from "../assets/img/pizza.jpeg"
import indien2 from "../assets/img/omelette.jpeg"
import indien3 from "../assets/img/kefta.jpeg"

export default function main() {
  return (
    <React.Fragment>
      <div className='container_main'>
        <div className='theme'>
          <h3 className='titre_theme'>Italien</h3>
          <div className='plat'>
            <figure>
              <img className="img_plat"
                src={italien1}
                alt="Lasagne Italienne"
              />
              <figcaption>Lasagne Italienne</figcaption>
            </figure>
          </div>
          <div className='plat'>
            <figure>
              <img className="img_plat"
                src={italien2}
                alt="Involtinis au poulet champignons et mozzarella"
              />
              <figcaption>Involtinis au poulet champignons et mozzarella</figcaption>
            </figure>
          </div>
          <div className='plat'>
            <figure>
              <img className="img_plat"
                src={italien3}
                alt="Muffuletta sandwich sicilien au salami mortadelle et provolone"
              />
              <figcaption>Muffuletta sandwich sicilien au salami mortadelle et provolone</figcaption>
            </figure>
          </div>
        </div>
        <div className='theme'>
          <h3 className='titre_theme'>Indien</h3>
          <div className='plat'>
            <figure>
              <img className="img_plat"
                src={indien1}
                alt="Pizza à l'Indienne"
              />
              <figcaption>Pizza à l'Indienne</figcaption>
            </figure>
          </div>
          <div className='plat'>
            <figure>
              <img className="img_plat"
                src={indien2}
                alt="Omelette indienne"
              />
              <figcaption>Omelette indienne</figcaption>
            </figure>
          </div>
          <div className='plat'>
            <figure>
              <img className="img_plat"
                src={indien3}
                alt="Kefta à l'indienne"
              />
              <figcaption>Kefta à l'indienne</figcaption>
            </figure>
          </div>
        </div>
        <div className='theme'>
          <h3 className='titre_theme'>Indien</h3>
          <div className='plat'>
            <figure>
              <img className="img_plat"
                src={indien1}
                alt="Pizza à l'Indienne"
              />
              <figcaption>Pizza à l'Indienne</figcaption>
            </figure>
          </div>
          <div className='plat'>
            <figure>
              <img className="img_plat"
                src={indien2}
                alt="Omelette indienne"
              />
              <figcaption>Omelette indienne</figcaption>
            </figure>
          </div>
          <div className='plat'>
            <figure>
              <img className="img_plat"
                src={indien3}
                alt="Kefta à l'indienne"
              />
              <figcaption>Kefta à l'indienne</figcaption>
            </figure>
          </div>
        </div>
        

      </div>
    </React.Fragment>
  )
}

