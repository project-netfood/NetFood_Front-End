import * as React from 'react';
import "../assets/css/index.css"
import italien1 from "../assets/img/lasagne.jpg"
import italien2 from "../assets/img/involtinis.jpg"
import italien3 from "../assets/img/muffuletta.jpg"
import indien1 from "../assets/img/pizza.jpeg"
import indien2 from "../assets/img/omelette.jpeg"
import indien3 from "../assets/img/kefta.jpeg"
import { useState } from 'react';


export default function main() {

  const [modal, setModal] = useState(false);
  const [validModal, setValidModal] = useState(false)

  const handleOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
    setValidModal(false)
  };

  const handleValidModal = () => {
    setValidModal(true)
    setModal(false)
  }



  return (
    <React.Fragment>

      {validModal &&
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2 className='titre_modal'>Plat commandée</h2>
              <p>
                Votre plat est validé ! Votre commande sera bientôt expédiée.
              </p>
              <p>Bonne dégustation.</p>
            </div>
            <div className='modal-content2'>
              <button onClick={handleClose} className="close-modal">
                RETOUR
              </button>
            </div>
          </div>
        </div>
      }

      {modal &&
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2 className='titre_modal'>Confirmation de votre plat</h2>
              <p>
                Souhaitez-vous commander ce plat ?
              </p>
            </div>
            <div className='modal-content2'>
              <button onClick={handleValidModal} className="open-new-modal">
                VALIDER
              </button>
              <button onClick={handleClose} className="close-modal">
                ANNULER
              </button>
            </div>
          </div>
        </div>
      }

      <div className='container_main'>
        <div className='theme'>
          <h3 className='titre_theme'>Italien</h3>
          <div className='plat'>
            <a href="#" onClick={handleOpen} className="btn-modal">
              <figure>
                <img className="img_plat"
                  src={italien1}
                  alt="Lasagne Italienne"
                />
                <figcaption>Lasagne Italienne</figcaption>
              </figure>
            </a>
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

