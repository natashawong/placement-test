export const DIFFICULTY = {
    EASY: "easy",
    MEDIUM: "medium",
    ADVANCE: "advance",
}

export const getHigherDifficulty = (currDifficulty) => {
    switch (currDifficulty) {
        case DIFFICULTY.EASY:
            return DIFFICULTY.MEDIUM;
        case DIFFICULTY.MEDIUM:
            return DIFFICULTY.ADVANCE;
        case DIFFICULTY.ADVANCE:
            return DIFFICULTY.NATIVE;
    }
}

// export const getLowerDifficulty = (currDifficulty) => {
//     switch (currDifficulty) {
//         case DIFFICULTY.EASY:
//             return DIFFICULTY.EASY;
//         case DIFFICULTY.MEDIUM:
//             return DIFFICULTY.EASY;
//         case DIFFICULTY.ADVANCE:
//             return DIFFICULTY.MEDIUM;
//         case DIFFICULTY.NATIVE:
//             return DIFFICULTY.ADVANCE;
//     }
// }