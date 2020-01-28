//Funtction to generate password
function generate(){
  //Set password length
  let complextity = document.getElementById("slider").value;
  //Set possible password values
  let values ="ABCEFGHIJKLMONPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*=-_+?,."
  let password = "";
  //For loop to choose password characters
    for(var i = 0; i <= complextity; i++){
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //Add the password to the display area
    document.getElementById("display").value = password;
}
//Set the default password size to 50
  document.getElementById("length").innerHTML = "Length: 50";

//Function to set length based on slider position
  document.getElementById("slider").oninput = function (){

    if(document.getElementById("slider").value > 8){
      document.getElementById("length").innerHTML = "Length: " +document.getElementById("slider").value;
    }
    else{
      document.getElementById("length").innerHTML = "Length: 8"
    }
  }

//Function to copy the password output to the clipboard
function copyPassword(){
  document.getElementById("display").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard");
}


