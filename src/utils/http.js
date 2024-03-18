export const getUser = async ({ signal, token }) => {
    try {
        const response = await fetch("https://api.spotify.com/v1/me", {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        const result = await response.json()
        return result;
    } catch (error) {
        console.error('Error fetching playlist:', error);
        throw new Error('Failed to fetch playlist');
    }
}

export const getPlaylist = async ({ signal, token }) => {



    try {
        const response = await fetch("https://api.spotify.com/v1/me/playlists", {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        const result = await response.json()
        return result;
    } catch (error) {
        console.error('Error fetching playlist:', error);
        throw new Error('Failed to fetch playlist');
    }
}

export const getDashBoard = async ({ signal, token }) => {
    try {
        const response = await fetch("https://api.spotify.com/v1/playlists/2maEFyX1eMkApjbcTmocYs", {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        const result = await response.json()
        return result;
    } catch (error) {
        console.error('Error fetching playlist:', error);
        throw new Error('Failed to fetch playlist');
    }
}