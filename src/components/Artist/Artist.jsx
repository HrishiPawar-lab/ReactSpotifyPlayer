import React from "react";
import useStoreContext from "../../context/StoreContext";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getArtist } from "../../utils/http";
import Sidebar from "../Sidebar/Sidebar";
import "./Artist.css"
import { millisecondsToMinutesAndSeconds } from "../../utils/date";
import Footer from "../Footer/Footer";
import ArtistInfo from "./ArtistInfo";

const Artist = () => {
    const ctx = useStoreContext();
    const { state } = ctx;
    const { artistId } = useParams();

    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["artist"],
        queryFn: ({ signal }) => {
            return getArtist({ signal, token: state.token, artistId: artistId });
        },
        staleTime: 0,
    });
    console.log(data);

    if (isLoading) {
        return <Loader></Loader>;
    }

    let artistData;
    if (data) {
        artistData = {
            toptracks: data?.tracks?.map((track) => {
                return {
                    image: track.album.images[2].url,
                    name: track?.name,
                    duration: track?.duration_ms,
                    artists: track?.artists,
                    id: track?.id,
                };
            }),
        };
    }
    console.log(artistData);



    return (
        <div className="artist-wrapper">
            <div className="artist-sidebar">
                <Sidebar></Sidebar>
            </div>
            <div>
            </div>
            <div className="artist">
                <ArtistInfo></ArtistInfo>
                {artistData?.toptracks?.slice(0,5).map((track) => {
                    return (
                        <div key={track.id} className="artist-track">
                            <div className="flex">
                                <img src={track.image} alt="" className="track-image" />
                                <h3>{track.name}</h3>
                            </div>
                            <span>{millisecondsToMinutesAndSeconds(track.duration)}</span>
                        </div>
                    );
                })}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Artist;
