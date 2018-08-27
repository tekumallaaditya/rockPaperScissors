var playerName;
var playerMove;
var compMove;
var playerScore = 0;
var compScore = 0;
var round = 0;
var options = ['rock', 'paper', 'scissors'];


//This function is executed when rock button is clicked
function rock(){
    $('#option').attr('src', '/images/rock.jpeg');
    compChoose();
    playerMove = 'rock';
    winner();
    round = round +1;
    $('#playerScore').text(playerScore);
    $('#compScore').text(compScore);
    $('#roundNumber').text(round);
    $('#roundLabel').show();
    roundCount();
}

//This function is executed when Paper button is clicked
function paper(){
    $('#option').attr('src', '/images/paper.jpg');
    compChoose();
    playerMove = 'paper';
    winner();
    round = round +1;
    $('#playerScore').text(playerScore);
    $('#compScore').text(compScore);
    $('#roundNumber').text(round);
    $('#roundLabel').show();
    roundCount();
}

//This function is executed when Scissors button is clicked
function scissors(){
    $('#option').attr('src', '/images/scissors.jpg');
    compChoose();
    playerMove = 'scissors';
    winner();
    round = round +1;
    $('#playerScore').text(playerScore);
    $('#compScore').text(compScore);
    $('#roundNumber').text(round);
    $('#roundLabel').show();
    roundCount();
}

//this function randomly chooses for the comp
function compChoose(){
   var ran_num =  Math.floor(Math.random() * Math.floor(3));
    var ran_choice = options[ran_num];
    console.log(ran_num, ran_choice);
    if (ran_num == 0){
        $('#optionComp').attr('src', '/images/rock.jpeg' );
        compMove = 'rock';
        
    } else if (ran_num == 1){
        $('#optionComp').attr('src', '/images/paper.jpg' );
        compMove = 'paper';
    } else{
        $('#optionComp').attr('src', '/images/scissors.jpg' );
        compMove = 'scissors';
    }   
    
}

//Every round this function is called and the winner is decided and counters increased
function winner(){
    console.log('inside the winner function' + playerScore + compScore );
    if((playerMove == 'rock' && compMove == 'scissors') || (playerMove == 'paper' && compMove == 'rock') || (playerMove == 'scissors' && compMove == 'paper')){
        playerScore = playerScore + 1;
    } else if((playerMove == 'rock' && compMove == 'rock') || (playerMove == 'paper' && compMove == 'paper') || (playerMove == 'scissors' && compMove == 'scissors')){
        //do nothing
    } else if((playerMove == 'rock' && compMove == 'paper') || (playerMove == 'paper' && compMove == 'scissors') || (playerMove == 'scissors' && compMove == 'rock')){
        compScore = compScore +1;
    }
}

//This function decides the final winner after all the ten rounds
function roundCount(){
    console.log('inside the roundCount function');
    if(round == 10){
        console.log('inside the roundCount function');
        //$('#roundLabel').hide();
        if (playerScore > compScore){
            //var curName = window.localStorage.getItem('name');
            $('#roundLabel').text( playerName + ' is the winner');
            $('button#rock').attr('disabled', 'disabled');
            $('button#paper').attr('disabled', 'disabled');
            $('button#scissors').attr('disabled', 'disabled');
            $('#replay').show();
            
        } else if(playerScore == compScore){
            $('#roundLabel').text( 'Its a Tie');
            $('button#rock').attr('disabled', 'disabled');
            $('button#paper').attr('disabled', 'disabled');
            $('button#scissors').attr('disabled', 'disabled');            
            $('#replay').show();
                  
        } else{
            $('#roundLabel').text( 'Comp is the winner');
            $('button#rock').attr('disabled', 'disabled');
            $('button#paper').attr('disabled', 'disabled');
            $('button#scissors').attr('disabled', 'disabled');            
            $('#replay').show();
        }       
        
         playerScore = 0;
         compScore = 0;
         round = 0;
        
    }
}


