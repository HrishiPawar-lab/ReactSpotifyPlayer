import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import useStoreContext from "./context/StoreContext";
import Spotify from "./components/Spotify/Spotify";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Artist from "./components/Artist/Artist";
const App = () => {
  const ctx = useStoreContext();
  const { getAccessToken, state } = ctx;



  useEffect(() => {
    const token = window.location.hash.split("&")[0].split("=")[1];
    getAccessToken(token);
  }, [window.location]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            !state.token &&
            <Route path="/" element={<Login />}></Route>
          }
          {state.token &&
            <Route exact path="/spotify" element={<Spotify></Spotify>}></Route>
          }
          <Route path="/search" element={<Search></Search>}></Route>
          <Route path="/artist/:artistId" element={<Artist></Artist>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
