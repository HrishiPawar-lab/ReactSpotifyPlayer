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
        case "GET_ID":
            return {
                ...state,
                id: action.payload,
            };
        default:
            return state;
    }
};

const initialState = {
    token: "",
    id: "2maEFyX1eMkApjbcTmocYs",
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

    const changeId = (id) => {
        dispatch({ type: "GET_ID", payload: id });
    }


    return (
        <StoreContext.Provider value={{ state, getAccessToken, getPlaylist, changeId }}>
            {children}
        </StoreContext.Provider>
    );
};

const useStoreContext = () => {
    return useContext(StoreContext);
}

export default useStoreContext;
