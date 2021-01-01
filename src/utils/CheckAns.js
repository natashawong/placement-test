import { getLowerDifficulty, getHigherDifficulty } from '../utils/Difficulty';

export default function checkAns(userAns, correctAns, difficulty) {
    let userScore = 0;
    for (let i = 0; i < userAns.length; i++) {
        if (userAns[i] == correctAns[i]) {
            userScore++;
        }
    }
    if (userScore <= 2) { // TODO: change to 5 or wtv hard coded
        return [getLowerDifficulty(difficulty), userScore];
    } else {
        return [getHigherDifficulty(difficulty), userScore];
    }
}
