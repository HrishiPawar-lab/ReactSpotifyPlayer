import React from 'react'
import { getUser } from '../../utils/http';
import { useQuery } from '@tanstack/react-query';
import useStoreContext from '../../context/StoreContext';
import { RiUserReceived2Fill } from "react-icons/ri";

import "./Navbar.css"

const Navbar = () => {

    const ctx = useStoreContext()
    const { state } = ctx;

    const { data, isLoading, isError } = useQuery(
        {
            queryKey: ['user'],
            queryFn: ({ signal, token }) => getUser({ signal, token: state.token }),
            staleTime: 0,
            retry: 3
        }
    );

    console.log(state.token)
    return (
        <div className='navbar'>

            {
                data && <div className='user' title={data.display_name}>
                    <RiUserReceived2Fill />
                    <span>
                        {data.display_name?.split(' ')[0]}
                    </span>
                </div>
            }
        </div>
    )
}

export default Navbar