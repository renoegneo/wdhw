function checkAnswers(){
    var answers = document.querySelectorAll('input[type="radio"]:checked');
    let score = 0;

    answers.forEach(function(answer){
        score += parseInt(answer.value);
        // Тут вроде можно было стрелочную функцию засунуть, 
        // но я хз как оно работает
    });

    const result = document.getElementById("result");
    result.textContent = `Ваш резултат: ${score}`;
}