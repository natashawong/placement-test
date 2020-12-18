export default function checkAns(userAns, correctAns) {
    let userScore = 0;
    for (let i = 0; i < userAns.length; i++) {
        if (userAns[i] == correctAns[i]) {
            userScore++;
        }
    }
    return userScore; // for now, return some data based off the score to pass into the api call
}