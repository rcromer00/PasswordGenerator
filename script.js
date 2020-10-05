var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
    ];
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];  
    
    function generatePassword(){
        var pwdLength = parseInt(prompt("Please enter password length bwtween 8 and 128"));
        if(pwdLength<8){
            alert("Range between 8n and 128");
            return;
        }
        if(pwdLength>128){
            alert("Range between 8 and 128");
            return;
        }

        var confirmUpper = confirm("DO you want upper case letters?");
        var confirmLower = confirm("DO you want lower case letters?");
        var confirmNumbers = confirm("DO you want numbers?");
        var confirmSpecial = confirm("DO you want special characters?");

        if(confirmUpper==="false" && confirmLower==="false" && confirmNumbers==="false" && confirmSpecial==="false"){
            alert("Please select at least one option");
            return;
        }

        var possibleChar = [];
        var finalChar = [];
        var options = [];

        if(confirmUpper){
            options = options.concat(upperCase);
            console.log("Options array: "+options);
            finalChar.push(upperCase[Math.floor(Math.random()*upperCase.length)]);
            console.log("Final char Array: "+finalChar);

        }

        if(confirmLower){
            options = options.concat(lowerCase);
            console.log("Options array: "+options);
            finalChar.push(lowerCase[Math.floor(Math.random()*lowerCase.length)]);
            console.log("Final char Array: "+finalChar);

        }

        if(confirmNumbers){
            options = options.concat(numbers);
            console.log("Options array: "+options);
            finalChar.push(numbers[Math.floor(Math.random()*numbers.length)]);
            console.log("Final char Array: "+finalChar);

        }

        if(confirmSpecial){
            options = options.concat(special);
            console.log("Options array: "+options);
            finalChar.push(special[Math.floor(Math.random()*special.length)]);
            console.log("Final char Array: "+finalChar);

        }

        for(var i=0;i<pwdLength;i++){
            possibleChar.push(options[Math.floor(Math.random()*options.length)]);
        }

        for(var i=0;i<finalChar.length;i++){
            possibleChar[i]=finalChar[i];
        }

        return possibleChar.join("");
    }

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //Write function for generate password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
