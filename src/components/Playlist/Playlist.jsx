import "./Playlist.css";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import useStoreContext from "../../context/StoreContext";
import { getPlaylist } from "../../utils/http";
import { Link, redirect, useNavigate } from "react-router-dom";

const Playlist = () => {
    const ctx = useStoreContext();
    const { state, changeId } = ctx;

    const navigate = useNavigate()

    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["playlist"],
        queryFn: ({ signal }) => {
            return getPlaylist({ signal, token: state.token });
        },
        staleTime: 0,
        retry: 5,
    });
    console.log(data);

    const changePlaylist = (id) => {
        changeId(id)
        navigate("/spotify")
    }

    let playlist;
    if (data) {
        playlist = data?.playlists?.items?.map((pl) => {
            return {
                id: pl?.id && pl?.id,
                name: pl?.name,
                image: pl?.images[0].url,
                color: pl?.primary_color,
            };
        });
    }
    console.log(playlist);

    return (
        <>
            <h4 style={{ marginBottom: "20px" }}>Playlist</h4>
            <div className="playlist">
                <ul style={{ padding: "0", margin: "0" }}>
                    {data &&
                        playlist?.map((p) => {
                            return (
                                <li
                                    title="Change Playlist"
                                    onClick={() => {
                                        changePlaylist(p.id)
                                    }}
                                    style={{ margin: "10px" }} className="playlist" key={p?.id}>
                                    <img style={{ width: "40px" }} src={p?.image} />
                                    <h3 style={{ fontSize: "14px" }}>{p?.name}</h3>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </>
    );
};

export default Playlist;
