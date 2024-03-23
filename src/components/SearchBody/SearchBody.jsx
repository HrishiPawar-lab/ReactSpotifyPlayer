import React from "react";
import "./SearchBody.css"
const SearchBody = ({ data }) => {

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    console.log(data)
    const newGeres = data?.genres?.slice(0, 50)
    return <div className="genre-box" >
        {
            data?.genres?.length > 0 && newGeres?.map((genre) => {
                return <div className="genre" style={{ backgroundColor: getRandomColor() }} key={genre}>
                    <h4>{genre}</h4>
                </div>
            })
        }
    </div>;
};

export default SearchBody;
