var score = 0; // set score = 0
var total = 5; // Total number of questions
var point = 2; // Points per correct answer
var highest = total * point; // Highest possible score to get

// Initializer
function init(){
    // set correct answers
    sessionStorage.setItem('a1', 'b');
    sessionStorage.setItem('a2', 'd');
    sessionStorage.setItem('a3', 'c');
    sessionStorage.setItem('a4', 'a');
    sessionStorage.setItem('a5', 'b');
}



$(document).ready(function(){
    // Hide all questions
    $('.questionForm').hide();

    // show first question
    $('#q1').show();

    $('.questionForm #submit').click(function(){
        // Get data attribute
        current = $(this).parents('form:first').data('question');
        next = current + 1;
        // Hide all questions
        $('.questionForm').hide();
        // Show next question
        process('' + current + '');
        $('#q'+ next + '').fadeIn(300);
        return false;
    });

});

// Process the answers 
function process(n){

    // Get input value
    var submitted = $('input[name=q' + n + ']:checked').val();
    if (submitted == sessionStorage.getItem('a'+ n + '')){
        score+=point;
    }
    if(n == total){
        $('#results').html('<h3>Your final score is: ' + score + ' out of ' + highest + '</h3><a href="index.html">Take Quiz Again</a>');
        if(score == highest){
            $('#results').append('<p>You are an HTML5 master!</p>');
        } else if(score == highest - point || score == highest - 2 * point){
            $('#results').append('<p>Good Job!</p>');
        }

    }
    return false;
}

// Add event listener
window.addEventListener('load', init, false);
