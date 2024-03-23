import React, { useState } from "react";
import "./Sidebar.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { BiLibrary } from "react-icons/bi";
import Playlist from "../Playlist/Playlist";
import { Link } from "react-router-dom";


const Sidebar = () => {
    return (

        <div className="sidebar-inner">
            <div className="logo">
                <Link to="/spotify">
                    <img
                        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
                        className="logo"
                        alt=""
                    />
                </Link>
            </div>
            <ul className="list" style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                <Link to='/spotify'>
                    <li>
                        <IoHomeOutline />
                        <span>Home</span>
                    </li>
                </Link>
                <Link to="/search">
                    <li>
                        <IoMdSearch />
                        <span>Search</span>
                    </li>
                </Link>
                <li>
                    <BiLibrary />
                    <span>Your Library</span>
                </li>
            </ul>
            <Playlist></Playlist>
        </div>
    );
};

export default Sidebar;
