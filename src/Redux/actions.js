export const saveUserData = data => ({
    type: "SAVE_USER_DATA",
    payload: {
        data
    }
});

export const saveLangSettings = data => ({
    type: "SAVE_LANG_SETTINGS",
    payload: {
        data
    }
})
