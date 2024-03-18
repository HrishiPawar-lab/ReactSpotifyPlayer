import { createContext, useContext, useReducer } from "react";

const StoreContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_TOKEN":
            return {
                ...state,
                token: action.payload,
            };
        case "GET_PLAYLIST":
            return {
                ...state,
                playlist: action.payload,
            };
        default:
            return state;
    }
};

const initialState = {
    token: "",
    playlist: []
};

export const StoreContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getAccessToken = (token) => {
        dispatch({ type: "GET_TOKEN", payload: token });
    };
    const getPlaylist = (playlist) => {
        dispatch({ type: "GET_PLAYLIST", payload: playlist });
    }




    return (
        <StoreContext.Provider value={{ state, getAccessToken, getPlaylist }}>
            {children}
        </StoreContext.Provider>
    );
};

const useStoreContext = () => {
    return useContext(StoreContext);
}

export default useStoreContext;
