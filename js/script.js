// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$(function () {
    $("#shoot").click(function () {
        var Userchoice = $('#input').val();
        var Computerchoice = '';
        var x = Math.random();
        var tie = false;
        var uw = false;
        
        if(x<=0.33){
            Computerchoice = 'rock';
        }else if(x>0.33 && x<=.667){
            Computerchoice = 'scissors';
        }else if(x>.667 && x<=1){
            Computerchoice = 'paper';
        }else{
            alert('error');
        }
        
        if(Userchoice == Computerchoice){
            tie = true;
        }
        else if(Userchoice == 'rock' && Computerchoice == 'scissors'){
            uw = true;
        }
        else if(Userchoice == 'scissors' && Computerchoice == 'paper'){
            uw = true;
        }else if(Userchoice == 'paper' && Computerchoice == 'rock'){
            uw = true;
        }
        var result = "";
        if(uw) {
            result = "You win you badass";
        }else if(tie){
            result = 'You tied';
        }else{
            result = 'You lost';
        }
        
        if
        $("#userChoice").text(Userchoice);
        $('#computerChoice').text(Computerchoice);
        $('#result').text(result);
    })
    
    
    
    
})
