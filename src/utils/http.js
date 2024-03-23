export const getUser = async ({ signal, token }) => {
    try {
        const response = await fetch("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching playlist:", error);
        throw new Error("Failed to fetch playlist");
    }
};

export const getPlaylist = async ({ signal, token }) => {
    try {
        const response = await fetch(
            "https://api.spotify.com/v1/browse/featured-playlists?limit=8",
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching playlist:", error);
        throw new Error("Failed to fetch playlist");
    }
};

export const getDashBoard = async ({ signal, token, id }) => {
    try {
        const response = await fetch(
            `https://api.spotify.com/v1/playlists/${id}`,
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
        const result = await response.json();
        console.log(result, "result")
        return result;
    } catch (error) {
        console.error("Error fetching playlist:", error);
        throw new Error("Failed to fetch playlist");
    }
};
export const currentSong = async ({ signal, token }) => {
    try {
        const response = await fetch(
            "https://api.spotify.com/v1/me/player/currently-playing",
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching playlist:", error);
        // throw new Error("Failed to fetch playlist");
    }
};

export const search = async ({ signal, token }) => {
    try {
        const response = await fetch(
            "https://api.spotify.com/v1/search?=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album%2Ctrack%2Cplaylist%2Cshow",
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching playlist:", error);
        throw new Error("Failed to fetch playlist");
    }
};
export const getTopArtists = async ({ signal, token }) => {
    try {
        const response = await fetch(
            "https://api.spotify.com/v1/me/top/artists?limit=8",
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching playlist:", error);
    }
};
export const getgenres = async ({ signal, token }) => {
    try {
        const response = await fetch(
            "https://api.spotify.com/v1/recommendations/available-genre-seeds",
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching playlist:", error);
    }
};
export const getArtist = async ({ signal, token, artistId }) => {
    console.log(token)
    try {
        const response = await fetch(
            `https://api.spotify.com/v1/artists/${artistId}/top-tracks?limit=5`,
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching playlist:", error);
    }
};
export const getArtistInfo = async ({ signal, token, artistId }) => {
    console.log(token)
    try {
        const response = await fetch(
            `https://api.spotify.com/v1/artists/${artistId}`,
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching playlist:", error);
    }
};
