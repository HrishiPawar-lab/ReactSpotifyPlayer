import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"

export default function Player({ accessToken, trackUri = 'spotify:user:82wcpp0z04h4mysqwjnt9dd2w' }) {
    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri])

    if (!accessToken) return null
    return (
        <>
            <SpotifyPlayer
                token={'BQCm_gz7JU61NKINl3-Fm0CAgTCMquAhC4oAW_iSq9kwBcORRK2342xDoesJDlAAg-BV4B8UaM2EKEZP7yoEfs-KmE3uvgbnVJM0ieReK0PreN62ABjhiLuLV00gzwpFRRnQqx2MlD1FgWKBlkJuVF2uXzZjNe_bneI9QRB8UtJ0oyCqZ7sSK-rsVu5_BCjxZYCawJXtEu2oKPNJ7p4uSWyceFzz'}
                showSaveIcon
                callback={state => {
                    if (!state.isPlaying) setPlay(false)
                }}
                play={play}
                uris={trackUri ? [trackUri] : []}
            />
        </>
    )
}