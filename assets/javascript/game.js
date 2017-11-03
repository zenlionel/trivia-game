var Timer = 10;
var starter = null;
var amountCorrect = 0;
window.onload = pageLoad;

function pageLoad() {
    var button = $('.start').on('click', test);

    function test() {
        if (starter) {
            return;
        }
        $('.col-12-md').removeClass('jay');
        starter = setInterval(decrement, 1000)
    }

    function decrement() {
        Timer--;
        $('.timer').html('<h2>' + Timer + '</h2>');
        if (Timer === 0) {
            stop();

        }

    }
}

function showHim() {

    $('#temp').append('<h3>You guessed ' + amountCorrect + '</h3>')
}

function stop() {
    checkAnswer();
    clearInterval(starter);
    starter = null;
    $('#hider').addClass('jay');
    $('.btn').removeClass('jay');
    $('.btn').click(function() {
        location.reload();
    });
    showHim();
    
}

function checkAnswer() {
    var count= 0;
    while(count < 3){
    var selValue = $("input[name=group"+count+"]:checked")
    for(var i = 0; i < selValue.length; i++){
        var correct = selValue.eq(i).val();
        if(correct == "correct"){
            amountCorrect++
        } 
        
    }
    count ++
}

   



    // alert("Correct Responses: " + amountCorrect);
}


//need to build a countdown timer
//that countdown timer starts after pressing a button
// when button pressed show timer countdown and questions
//hide questions until start button is pressed
//creat multiple choice questions
//if user selects correct answer = correct++
//else if nothing selected then unanswered++
//else wronganswer ++
// at timeout display the total tally
//if all correct answer ----> YAY
// if all wrong answer ----> rough day
//reset page to start button