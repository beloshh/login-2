const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", e => {
  e.preventDefault();
  
  checkInputs();
});



function checkInputs(){

  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

    if ( firstNameValue === ''){
        setErrorFor(firstName, "First Name cannot be empty", '');

    }else{
        setSuccessFor(firstName);
    }

    if ( lastNameValue === ''){
      setErrorFor(lastName, "Last Name cannot be empty",'');

    }else{
      setSuccessFor(lastName);
    }


    if ( emailValue === ''){
      setErrorFor(email, "Email cannot be empty","email@exampl/com");

    }else if((!isEmail(emailValue))){
      setErrorFor(email, 'Looks like this is not an email', "email@exampl/com");
    } else{
      setSuccessFor(email);
    }

    
    if ( passwordValue === ''){
      setErrorFor(password, "Password cannot be empty",'');

    }else{
      setSuccessFor(password);
    }


}



function setErrorFor(input, message, placeholder) {
  const formControl = input.parentElement;
  input.setAttribute("placeholder", placeholder);
	const small = formControl.querySelector('small');
	formControl.className = 'inputContainer error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'inputContainer';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}