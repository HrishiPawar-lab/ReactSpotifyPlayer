import React from 'react'
import "./Tracks.css"
import { millisecondsToMinutesAndSeconds } from '../../utils/date';
const Tracks = ({ track }) => {
    return (
        <div className='myPlaylist'>
            <div className="tracklists" key={track.id}>
                <div className='flex'>
                    <div className="tracks">
                        <img src={track.image} alt="" />
                    </div>
                    <div className='track-details'>
                        <h4>{track.name.slice(0, 20)}</h4>
                        <div>
                            {track.artists.map((artist, i) => {
                                return (
                                    <span className='artist' key={artist.id}>
                                        {artist}
                                        {i < track.artists.length - 1 && ", "}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className='album'>
                    <p>{track.album}</p>
                </div>
                <div className="duration">
                    <span>{millisecondsToMinutesAndSeconds(track.duration)}</span>
                </div>
            </div>
        </div>
    )
}

export default Tracks