import React from "react";
import "./Sidebar.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { BiLibrary } from "react-icons/bi";
import Playlist from "../Playlist/Playlist";


const Sidebar = () => {
    return (
        <div className="sidebar-inner">
            <div className="logo">
                <img
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
                    className="logo"
                    alt=""
                />
            </div>
            <ul className="list">
                <li>
                    <IoHomeOutline />
                    <span>Home</span>
                </li>
                <li>
                    <IoMdSearch />
                    <span>Search</span>
                </li>
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
