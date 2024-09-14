export const reducer = (state, action) => {
    switch(action.type) {
        case "GET_CHARS":
            return { ...state, list: action.payload };
        case "ADD_FAV":
            return { ...state, favs: [...state.favs, action.payload] };
        case "REMOVE_FAV":
            return { ...state, favs: state.favs.filter(fav => fav.id !== action.payload.id) };
        case "TOGGLE_THEME":
            return { ...state, theme: state.theme === "light" ? "dark" : "light" };
        default:
            return state;
    }
};