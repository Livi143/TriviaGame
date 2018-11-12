$('#start').on('click', function () {

    game.start();

})

var questions = [{
    question: "what was the first full length CGI movie?",
    answers: ["a bug's life", "monsters inc", "toy story", "the lion king"],
    correctAnswer: "toy story"
}, {
    question: "what was the first full length CGI movie?",
    answers: ["a bug's life", "monsters inc", "toy story", "the lion king"],
    correctAnswer: "toy story"
}, {
    question: "what was the first full length CGI movie?",
    answers: ["a bug's life", "monsters inc", "toy story", "the lion king"],
    correctAnswer: "toy story"
}];

var game = {
    corect: 0,
    incorrect: 0,
    counter: 20,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            alert("time is up!");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").prepend('<h2>Time remaining: <span id="counter">120</span></h2>');
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $('#subwrapper').append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }

    },
    done: function () {
        for (i = 0; i < questions.length; i++) {
            $.each($('input[name="question-1]":checked'), function () {
                if ($(this).val() == questions[1].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            this.result();
            result: function(){
                clearInterval(timer);
                $("#subwrapper h2").remove();
                $("#subwrapper").html("<h2>All done!</h2>");
                $("#subwrapper").append("<h3>correct answer: "+this.correct+"</h3>");
                $("#subwrapper").append("<h3>incorrect answer: "+this.incorrect+"</h3>");
                $("#subwrapper").append("<h3>unanswered: "(questions.length-(this.incorrect+this.correct))+"</h3>");
            }
        }
    }
}
