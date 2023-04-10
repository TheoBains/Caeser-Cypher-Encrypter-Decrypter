function getOption() {
  var choice = document.getElementById("choice").value;
  if (choice == "encrypt") {
    document.getElementById("shift").value = "";
    document.getElementById("enter").innerHTML = "Encrypt";
    document.getElementById("input").placeholder = "Enter your message here";
    document.getElementById("input").value = "";
    document.getElementById("output").placeholder = "Your encrypted text will appear here";
    document.getElementById("output").value = "";
  }
  if (choice == "decrypt") {
    document.getElementById("shift").value = "";
    document.getElementById("enter").innerHTML = "Decrypt";
    document.getElementById("input").placeholder = "Enter your encrypted text here";
    document.getElementById("input").value = "";
    document.getElementById("output").placeholder = "Your decrypted text will appear here";
    document.getElementById("output").value = "";
  }
}

function button() {
  if (document.getElementById("choice").value == "encrypt") {
    encrypt();
  }
  if (document.getElementById("choice").value == "decrypt") {
    decrypt();
  }
}

function encrypt() {
  var input = document.getElementById("input").value;
  var shift = document.getElementById("shift").value % 26;
  const chars = [];
  
  for(let i = 0; i < String(input).length; i++){
    
    if(input.charCodeAt(i) > 96 && input.charCodeAt(i) < 123) {
      if (input.charCodeAt(i) + parseInt(shift) >= 123) {
        chars[i] = String.fromCharCode(parseInt(input.charCodeAt(i)) + parseInt(shift) - 26);
      }
      else {
        chars[i] = String.fromCharCode(parseInt(input.charCodeAt(i)) + parseInt(shift));
      }
    }
      
    else if(input.charCodeAt(i) > 64 && input.charCodeAt(i) < 91) {
      if (input.charCodeAt(i) + parseInt(shift) >= 91) {
        chars[i] = String.fromCharCode(parseInt(input.charCodeAt(i)) + parseInt(shift) - 26);
      }
      else {
        chars[i] = String.fromCharCode(parseInt(input.charCodeAt(i)) + parseInt(shift));
      }
    }
      
    else {
      chars[i] = input.charAt(i);
    }
  }
  
  document.getElementById("output").innerHTML = chars.join('');
}

function decrypt() {
  var input = document.getElementById("input").value;
  var shift = document.getElementById("shift").value % 26;
  const chars = [];
  
  for(let i = 0; i < String(input).length; i++){
    
    if(input.charCodeAt(i) > 96 && input.charCodeAt(i) < 123) {
      if (input.charCodeAt(i) - parseInt(shift) <= 96) {
        chars[i] = String.fromCharCode(parseInt(input.charCodeAt(i)) - parseInt(shift) + 26);
      }
      else {
        chars[i] = String.fromCharCode(parseInt(input.charCodeAt(i)) - parseInt(shift));
      }
    }
      
    else if(input.charCodeAt(i) > 64 && input.charCodeAt(i) < 91) {
      if (input.charCodeAt(i) - parseInt(shift) <= 64) {
        chars[i] = String.fromCharCode(parseInt(input.charCodeAt(i)) - parseInt(shift) + 26);
      }
      else {
        chars[i] = String.fromCharCode(parseInt(input.charCodeAt(i)) - parseInt(shift));
      }
    }
      
    else {
      chars[i] = input.charAt(i);
    }
  }
  
  document.getElementById("output").value = chars.join('');
}