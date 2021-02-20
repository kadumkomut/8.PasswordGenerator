function generate() {
    

    document.getElementById('copy').innerHTML="copy";
    document.getElementById('error').innerHTML="";


    var finalCase = "";
    var generatedPassword = "";
    var passwordStrength = 0;
    var passwordStrengthString = "";
    var length = document.getElementById('length').value;
    var symbol = document.getElementById('symbol').checked;
    var lowercase = document.getElementById('lowercase').checked;
    var uppercase = document.getElementById('uppercase').checked; 
    var number = document.getElementById('number').checked; 

    if(lowercase){
        finalCase += "abcdefghijklmnopqrstuvwxyz";
        passwordStrength++;
    }
    if(uppercase){
        finalCase += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        passwordStrength++;
    }
    if(number){
        finalCase += "0123456789";
        passwordStrength++;
    }
    if(symbol){
        finalCase   += "`~!@#$%^&*()-=_+,./?';:";
        passwordStrength++;
    }



    if(finalCase==="") {
        document.getElementById('error').innerHTML="Select atleast one checkbox!";
        return;
    }
    
    for(let i=0;i<length;i++){
        generatedPassword = generatedPassword + finalCase.charAt(Math.floor(Math.random()*finalCase.length));
    }

    switch(passwordStrength){   
        case 1:
            passwordStrengthString = "weak";
            break;
        case 2:
            passwordStrengthString = "normal";
            break;
        case 3:
            passwordStrengthString = "strong";
            break;
        case 4:
            passwordStrengthString = "unbreakable";
            break;
        default:
    }
    document.getElementById('generatedPassword').value = generatedPassword;
    document.getElementById('error').innerHTML = passwordStrengthString +" password";

}

function copy() {
    var input = document.getElementById('generatedPassword').value;
    if(input===""){
        return;
    }
    var copyText = document.getElementById("generatedPassword");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.getElementById('copy').innerText="copied";
}