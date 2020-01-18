//Declare variables
var pwDigits = prompt("Enter the amount of characters for your password")
    if(pwDigits <8){
        alert ("Password length too short");
    } else if (pwDigits >128){
        alert ("Password length too long");
    }
var passwordCharacters = document.querySelector("#Password Characters");
var randomPassword = document.querySelector("#Password");
var generatePassword = document.querySelector("Generate Password");
var copyToClipboard = document.querySelector("Copy to Clipboard");

//Create an array of numbers and letters; I liked the way I had it set up, but it was complicating the code.
//var numbersArr = ["0","1","2","3","4","5","6","7","8","9"]; 
//var charactersArr = ["!","@","%","^","&","*","?","-","+","=","#"];
//var lowercaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
//var uppercaseArr = ["A,","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var valuesArr = ["0","1","2","3","4","5","6","7","8","9","!","@","%","^","&","*","?","-","+","=","#","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A,","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var password = "";

//For loop for password generation
    for(var i = 8; i <= 128; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length)));
    }


//Add password to display area
document.getElementById("display").value = password

//Copy to clipboard
function copyToClipboard(){
    document.getElementById("Password").select;
    document.execCommand("copy");
    alert("Password copied to clipboard");
}


