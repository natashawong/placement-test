const initialState = {
    userData: [],
    langSettings: "",
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case "SAVE_USER_DATA": {
            return {
                ...state,
                userData: action.payload
            }
        }
        case "SET_LANG_SETTINGS": {
            return {
                ...state,
                langSettings: action.payload
            }
        }
        default:
            return state;
    }
}