let number = Math.floor((Math.random() * 100) + 1);
let counter = 0;
let user_number;
document.getElementById("check").addEventListener("click", number_finder)

function number_finder(){ 
    counter++;
    document.getElementById("counter").innerHTML= "This is your test number:" +counter;
    user_number = document.getElementById("user_number").value;
    if (user_number == number){
        alert("You are the winner :D. "+"You guest after"+ (counter-1) +" times!");
        var next_game = confirm("You wanna play again?");
        if(next_game == true){
            counter = 0;
            number = Math.floor((Math.random() * 100) + 1);
        }
        else{
            document.getElementById("answer").innerHTML="Thanks for game!";
        }
    }
    else if(user_number > number){
        document.getElementById("answer").innerHTML="I am thinking about lower number";
       
    }
    else if(user_number < number){
        document.getElementById("answer").innerHTML="I am thinking about higher number";
        
    }
    else if(isNaN(user_number)){
        document.getElementById("answer").innerHTML="Are you sure that this is a number?";
        
    }
    else if(user_number==""){
        document.getElementById("answer").innerHTML="Weite the number";
        
    }
    else if ((user_number > 100) || (user_number < 0)){
        document.getElementById("answer").innerHTML="Please enter a number between 0 and 100"; 
    }
}