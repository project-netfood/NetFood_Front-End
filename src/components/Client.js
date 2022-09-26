import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import "../assets/css/index.css"

export default function Client() {
  return (
    <React.Fragment>
      <div className='container'>
        <Header />
      </div>
      <h2 className='titre_info_personnelle'>Informations personnelles</h2>
      <div className='info_compte'>
        <p className='sous_titre_info'>Adresse e-mail</p>
        <p>jean147@live.fr</p>
        <p className='sous_titre_info'>Mot de passe</p>
        <p>**********</p>
        <p className='sous_titre_info'>Adresse de livraison</p>
        <div>M. Jean Latest</div>
        <div>3 rue des Plats</div>
        <div>59000 Lille</div>
        <p className='sous_titre_info'>Moyen de paiement</p>
        <p>Carte de crédit / Carte bleue</p>
        <p className='sous_titre_info'>Numéro client 542154876</p>
        <p className='sous_titre_info'>Abonnement <span className='abonnement'>ACTIF</span></p>
      </div>
      <div className='container'>
        <Footer />
      </div>
    </React.Fragment>
  );


}