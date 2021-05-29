const initialState = {
    userData: [],
    langSettings: "",
    results: [],
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case "SAVE_USER_DATA": {
            return {
                ...state,
                userData: action.payload
            }
        }
        case "SAVE_LANG_SETTINGS": {
            return {
                ...state,
                langSettings: action.payload
            }
        }
        // TODO: results maybe be split up into phase 1, phase 2, and total???
        // TODO: also may expand this to like case "UPDATE_PHASE1", etc. though on the same state maybe bc cleaner
        case "UPDATE_RESULTS": {
            return {
                ...state,
                results: action.payload
            }
        }
        default:
            return state;
    }
}