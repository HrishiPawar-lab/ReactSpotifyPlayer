import React from 'react'
import "./Search.css"
import Sidebar from '../Sidebar/Sidebar'
import useStoreContext from '../../context/StoreContext';
import { useQuery } from '@tanstack/react-query';
import { getgenres } from '../../utils/http';
import SearchBody from '../SearchBody/SearchBody';
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader';

const Search = () => {
    const ctx = useStoreContext();
    const { state } = ctx;

    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["genres"],
        queryFn: ({ signal }) => {
            return getgenres({ signal, token: state.token });
        },
        staleTime: 0,
        retry: 5
    });
    if (isLoading) {
        return <Loader></Loader>
    }


    return (
        <div style={{ background: "rgba(0 , 0, 0)" }}>
            <div style={{ display: "flex" }}>
                <div className='search-sidebar'>
                    <Sidebar></Sidebar>
                </div>
                <div className='search-genres'>
                    <SearchBody data={data}></SearchBody>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Search