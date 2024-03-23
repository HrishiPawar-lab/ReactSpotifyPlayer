import React from 'react'
import useStoreContext from '../../context/StoreContext';
import { useQuery } from '@tanstack/react-query';
import { getTopArtists } from '../../utils/http';
import "./TopResults.css"
import { Link } from 'react-router-dom';
const TopResults = () => {

    const ctx = useStoreContext();
    const { state } = ctx;

    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["top-artists"],
        queryFn: ({ signal }) => {
            return getTopArtists({ signal, token: state.token });
        },
        staleTime: 0
    });

    let TopResultsArray;
    if (data) {
        const { items } = data;
        TopResultsArray = items.map((item) => {
            return {
                name: item.name,
                image: item.images[2].url,
                id: item.id
            }
        })
        console.log(TopResultsArray)
    }

    return (
        <>
            <h2 style={{
                marginBottom: "20px",
                fontSize: "25px", color: "white"
            }}>Your Favourite Artists</h2>
            {
                data && <ul className='top-results-list'>
                    {
                        TopResultsArray.map((results) => {
                            return (
                                <Link to={`/artist/${results?.id}`}>
                                    <li className='list' key={results?.id}>
                                        <img src={results?.image} />
                                        <h3> {results?.name}</h3>
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>

            }
        </>
    )
}

export default TopResults