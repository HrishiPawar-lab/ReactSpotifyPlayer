import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Body from '../Body/Body';
import './Spotify.css';
import Player from '../Footer/Footer';

const Spotify = () => {
  return (
    <>
      <div className='spotify'>
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="body">
          <Navbar></Navbar>
          <Body></Body>
          <Player></Player>
        </div>
      </div>
    </>
  )
}

export default Spotify