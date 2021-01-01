export const DIFFICULTY = {
    EASY: "easy",
    MEDIUM: "medium",
    ADVANCED: "advance",
    NATIVE: "native",
}

export const getHigherDifficulty = (currDifficulty) => {
    switch (currDifficulty) {
        case DIFFICULTY.EASY:
            return DIFFICULTY.MEDIUM;
        case DIFFICULTY.MEDIUM:
            return DIFFICULTY.ADVANCED;
        case DIFFICULTY.ADVANCED:
            return DIFFICULTY.NATIVE;
        case DIFFICULTY.NATIVE:
            return DIFFICULTY.NATIVE;
    }
}

export const getLowerDifficulty = (currDifficulty) => {
    switch (currDifficulty) {
        case DIFFICULTY.EASY:
            return DIFFICULTY.EASY;
        case DIFFICULTY.MEDIUM:
            return DIFFICULTY.EASY;
        case DIFFICULTY.ADVANCED:
            return DIFFICULTY.MEDIUM;
        case DIFFICULTY.NATIVE:
            return DIFFICULTY.ADVANCED;
    }
}