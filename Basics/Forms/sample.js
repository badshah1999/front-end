function isDigit(){
    const num = document.getElementById("tel").value
    const numberRegex = /^[0-9]+$/;

  if (!num.match(numberRegex)) {
    alert("Phone number is not valid!");
  } 
}
function passwordFormat(){
  const pass = document.getElementById("password").value
  const upperformat = /[A-Z]/
  const specialchar = /[!@#$&*]/
  const num = /[0-9]/
  // /^[A-B][/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$]/;
  if(!pass.match(upperformat)){
    alert("Password Should Contain Atleast one upper case")
  }
  else if(!pass.match(specialchar)){
    alert("Password Should Contain Atleast one Special Character")
  }
  else if(!pass.match(num)){
    alert("Password Should Contain Atleast one numeric value")
  }
}
