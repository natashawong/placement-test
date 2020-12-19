export const DIFFICULTY = {
    EASY: "easy",
    MEDIUM: "medium",
    ADVANCED: "advanced",
    NATIVE: "native",
}

export const getNextDifficulty = (currDifficulty) => {
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