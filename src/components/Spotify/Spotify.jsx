import React, { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Body from '../Body/Body';
import './Spotify.css';
import Footer from '../Footer/Footer';
import TopResults from '../Topresults/TopResults';

const Spotify = () => {

  return (
    <>
      <div className='spotify'>
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="body">
          <Navbar></Navbar>
          <div className="top-artists">
            <TopResults></TopResults>
          </div>
          <Body></Body>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Spotify