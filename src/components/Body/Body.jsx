import React from "react";
import { getDashBoard } from "../../utils/http";
import useStoreContext from "../../context/StoreContext";
import { useQuery } from "@tanstack/react-query";
import "./Body.css";
import { millisecondsToMinutesAndSeconds } from "../../utils/date";
import Tracks from "../Tracks/Tracks";

const Body = () => {
    const ctx = useStoreContext();
    const { state } = ctx;

    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["tracks"],
        queryFn: ({ signal }) => {
            return getDashBoard({ signal, token: state.token });
        },
    });
    let selectedPlaylist;
    console.log(data)

    if (data) {
        selectedPlaylist = {
            name: data.name,
            description: data.description,
            image: data.images[0].url,
            tracks: data.tracks.items.map(({ track }) => ({
                id: track.id,
                name: track.name,
                artists: track.artists.map((artist) => artist.name),
                image: track.album.images[2].url,
                duration: track.duration_ms,
                album: track.album.name,
                context_uri: track.album.uri,
                track_number: track.track_number,
            })),
        };
        console.log(selectedPlaylist);
    }

    return (
        <div className="dashboard">
            <div className="flex">
                <div className="image">
                    <img src={selectedPlaylist?.image} alt="" />
                </div>
                <div className="text">
                    <h1>{selectedPlaylist?.name}</h1>
                    <h3>{selectedPlaylist?.description}</h3>
                </div>
            </div>
            <div className="tracklists-wrapper">
                {selectedPlaylist?.tracks.map((track) => {
                    return (
                        <>
                            {/* <Tracks track={track}></Tracks> */}
                            <Tracks track={track}></Tracks>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
