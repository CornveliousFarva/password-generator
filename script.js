//Declare variables
var pwDigits = prompt("Enter the amount of characters for your password");

var convertPromptDigits = Number(pwDigits);

// console.log(pwDigits)
    if(convertPromptDigits < 8){
        alert ("Password length too short");
    } else if (convertPromptDigits >128){
        alert ("Password length too long");
    }
var randomPassword = document.querySelector("#Password");
var generatePassword = document.querySelector("Generate Password");
var copyToClipboard = document.querySelector("Copy to Clipboard");

//Create an array of numbers and letters; I liked the way I had it set up, but it was complicating the code.
//var numbersArr = ["0","1","2","3","4","5","6","7","8","9"]; 
//var charactersArr = ["!","@","%","^","&","*","?","-","+","=","#"];
//var lowercaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
//var uppercaseArr = ["A,","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var valuesArr = ["0","1","2","3","4","5","6","7","8","9","!","@","%","^","&","*","?","-","+","=","#","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A,","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var password = {};
console.log(password);
//For loop for password generation
    for (let i = 0; i < convertPromptDigits; i ++){
        password += valuesArr[Math.floor(Math.random() * valuesArr.length)]
    }
    console.log(password)

    // console.log(valuesArr);
    


//Add password to display area
    document.getElementById("GeneratePassword").onclick = function (){
        document.getElementById("Generate Password")
    }

//document.getElementById("display").value = password

//Copy to clipboard
document.getElementById("Copy").onclick = function(){
    document.getElementById("Copy To Clipboard")
}

//Declare variables
//var pwDigits = prompt("Enter the amount of characters for your password");
//if (pwDigits === 8) {
  //console.log("this works!");
//} 

//var convertPromptDigits = Number(pwDigits);
//if (pwDigits === 8) {
  //console.log("that works!");
//} 
//var pwDigits = prompt("Enter the amount of characters for your password");
  //  if(pwDigits === 8){
    //    console.log(`${pwDigits}`);
    //} else if (pwDigits >128){
      //  alert ("Password length too long");
    //}
//var convertPromptDigits = Number(pwDigits);
    //console.log(convertPromptDigits);
//var passwordNumber = Number(pwDigits);
//var randomPassword = document.querySelector("#Password");
//var generatePassword = document.querySelector("Generate Password");
//var copyToClipboard = document.querySelector("Copy to Clipboard");

//Create an array of numbers and letters; I liked the way I had it set up, but it was complicating the code.
//var numbersArr = ["0","1","2","3","4","5","6","7","8","9"]; 
//var charactersArr = ["!","@","%","^","&","*","?","-","+","=","#"];
//var lowercaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
//var uppercaseArr = ["A,","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//var valuesArr = ["0","1","2","3","4","5","6","7","8","9","!","@","%","^","&","*","?","-","+","=","#","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A,","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//var password = {}

//For loop for password generation
    //for (let i = 0; i < convertPromptDigits; i ++){
        //password += valuesArr[Math.floor(Math.random() * valuesArr.length)]
//}
    


//Add password to display area
//document.getElementById("display").value = password

//Copy to clipboard
//function copyToClipboard(){
    //document.getElementById("Password").select;
    //document.execCommand("copy");
    //alert("Password copied to clipboard");
//}


