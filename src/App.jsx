import React, { useEffect } from 'react'
import Login from './components/Login/Login'
import useStoreContext from './context/StoreContext'
import Spotify from "./components/Spotify/Spotify"
import "./App.css"

const App = () => {
  const ctx = useStoreContext()
  const { getAccessToken, state } = ctx

  useEffect(() => {
    const token = window.location.hash.split("&")[0].split("=")[1]
    getAccessToken(token)
  }, [])


  return (
    <>
      {
        !state.token ? <Login></Login> : <Spotify></Spotify>
      }
    </>
  )
}

export default App