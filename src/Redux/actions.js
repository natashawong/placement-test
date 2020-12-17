export function saveUserData(data){
    return {
        type: 'SAVE_USER_DATA',
        payload: {data}
    }
};

export function saveLangSettings(data){
    return {
        type: 'SAVE_LANG_SETTINGS',
        payload: {data}
    }
};
