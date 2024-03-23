import React from "react";
import useStoreContext from "../../context/StoreContext";
import { useQuery } from "@tanstack/react-query";
import { currentSong } from "../../utils/http";
import "./Footer.css";
import { IoMdPlay } from "react-icons/io";
import { IoPlayBackSharp } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import { useState } from "react";

const Footer = () => {
    const [playing, setPlaying] = useState(true);

    const ctx = useStoreContext();
    const { state } = ctx;

    const { data, isLoading, isError } = useQuery({
        queryKey: ["current-song"],
        queryFn: ({ signal, token }) => currentSong({ signal, token: state.token }),
        staleTime: 500,
    });

    let currentSongData;

    if (data) {
        currentSongData = {
            name: data?.item?.name,
            artists: data?.item?.artists,
            songId: data?.item?.id,
            image: data?.item?.album.images[0],
        };
    }

    const handlePlayPause = () => {
        setPlaying(!playing);
    };

    return (
        <>
            {
                <div className="player">
                    <div className="album-image">
                        <img src={currentSongData?.image?.url} alt="" />
                        <div>
                            <h3>{currentSongData?.name}</h3>
                            <h4>
                                {currentSongData?.artists?.map((artist, i) => {
                                    return (
                                        <span className="artist" key={artist.id}>
                                            {artist.name}
                                            {i < currentSongData.artists.length - 1 && ", "}
                                        </span>
                                    );
                                })}
                            </h4>
                        </div>
                    </div>
                    <div style={{ flex: 1 }}></div>
                    <div className="player-controls">
                        <IoPlayBackSharp></IoPlayBackSharp>
                        {playing ? (
                            <IoPause onClick={handlePlayPause}></IoPause>
                        ) : (
                            <IoMdPlay onClick={handlePlayPause}></IoMdPlay>
                        )}
                        <IoPlayForward></IoPlayForward>
                    </div>
                </div>
            }
        </>
    );
};

export default Footer;
