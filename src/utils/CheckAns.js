import { getNextDifficulty } from '../utils/Difficulty';

export default function checkAns(userAns, correctAns, difficulty) {
    let userScore = 0;
    for (let i = 0; i < userAns.length; i++) {
        if (userAns[i] == correctAns[i]) {
            userScore++;
        }
    }
    if (userScore <= 5) {
        return [difficulty, userScore];
    } else {
        return [getNextDifficulty(difficulty), userScore];
    }
}
