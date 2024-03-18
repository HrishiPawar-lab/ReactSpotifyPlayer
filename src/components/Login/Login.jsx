import React from "react";
import "./Login.css"

const Login = () => {
    const handleClick = async () => {
        const client_id = "9858797532774d178770d1abdff0a98f";
        const redirect_uri = "http://localhost:5173";
        const api_uri = "https://accounts.spotify.com/authorize";
        const scope = ["user-read-private", "user-read-email", "user-modify-playback-state", "user-read-playback-state", "user-read-currently-playing",
            "user-read-recently-played",
            "user-top-read",
        ];
        window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`;
    };
    return (
        <div className="login">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="logo" />
            <button onClick={handleClick}>Login With Spotify</button>
        </div>
    );
};

export default Login;
