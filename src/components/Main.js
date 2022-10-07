import * as React from "react";
import axios from "axios";
import "../assets/css/index.css";
import { useState } from "react";
import { useEffect } from "react";

export default function main() {
  const URLPlats = "http://localhost:5000/plats";

  const [modal, setModal] = useState(false);
  const [validModal, setValidModal] = useState(false);
  const [plats, setPlats] = useState([]);

  useEffect(() => {
    axios.get(URLPlats).then((response) => {
      setPlats(response.data);
      console.log("Plats :", response.data);
    });
  }, []);

  const handleOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
    setValidModal(false);
  };

  const handleValidModal = () => {
    setValidModal(true);
    setModal(false);
  };

  return (
    <React.Fragment>
      {validModal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2 className="titre_modal">Plat commandée</h2>
              <p>
                Votre plat est validé ! Votre commande sera bientôt expédiée.
              </p>
              <p>Bonne dégustation.</p>
            </div>
            <div className="modal-content2">
              <button onClick={handleClose} className="close-modal">
                RETOUR
              </button>
            </div>
          </div>
        </div>
      )}

      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2 className="titre_modal">Confirmation de votre plat</h2>
              <p>Souhaitez-vous commander ce plat ?</p>
            </div>
            <div className="modal-content2">
              <button onClick={handleValidModal} className="open-new-modal">
                VALIDER
              </button>
              <button onClick={handleClose} className="close-modal">
                ANNULER
              </button>
            </div>
          </div>
        </div>
      )}

      

        <div className="container_main">
        {plats.map((plat) => (
          <div key={plat._id} className="theme">
            <h3 className="titre_theme">{plat.theme_plat}</h3>
            <div className="plat">
              <span onClick={handleOpen} className="btn-modal">
                <figure>
                  <img
                    className="img_plat"
                    src={plat.illustration_plat}
                    alt="{plat.nom__plat}"
                  />
                  <figcaption>
                    {plat.nom__plat}
                  </figcaption>
                </figure>
              </span>
            </div>
          </div>
      ))}
      </div>
      
    </React.Fragment>
  );
}
