import * as React from 'react';
import Carrousel from './Carrousel';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

export default function Home() {
  return ( 
      <div className='container'>
        <Header/>
        <Carrousel/>
        <Main />
        <Footer/>
      </div>
    );
}