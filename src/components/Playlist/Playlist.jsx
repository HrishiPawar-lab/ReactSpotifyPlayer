import axios from 'axios';
import "./Playlist.css"
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useStoreContext from '../../context/StoreContext';
import { getPlaylist } from '../../utils/http';


const Playlist = () => {
    const ctx = useStoreContext()
    const { state } = ctx;

    const { data, isLoading, isError } = useQuery(
        {
            queryKey: ['playlist'],
            queryFn: ({ signal, token }) => getPlaylist({ signal, token: state.token }),
            staleTime: 300000
        }
    );

    return (
        <div className='playlist'>
            <h4>Playlist</h4>
            <ul>
                {
                    data && data.items && data.items.length > 0 && data.items?.map((item, i) => {
                        return <li>{item.name}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default Playlist;
