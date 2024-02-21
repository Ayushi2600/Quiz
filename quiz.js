const correctAnswers = {
    q1: "B", q2: "B", q3: "A", q4: "A", q5: "A"
};

const displayScore = (score) => {
    let i = 0;
    const timer = setInterval(() => {
        if (i === score) {
            clearInterval(timer);
        }
        document.querySelector("#score").innerHTML = `Your score is ${i}`;
        i++;
    },10)
} 

const calculateScore = (userAnswers) => {
    let score = 0;
    for (let uA in userAnswers) {
        for (let cA in correctAnswers) {
            console.log(uA, cA);
            if (uA === cA) {
                if (userAnswers[uA] === correctAnswers[cA]) {
                    score += 20;
                }
                break;
            }
        }
    }
    displayScore(score);
}

const submitHandler = (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll("input[type='radio']");
    let userAnswers = {};
    for (let input of inputs) {
        if (input.checked) {
            // console.log(input.name, input.value);
            userAnswers[input.name] = input.value;
        }
    }
    calculateScore(userAnswers);
}