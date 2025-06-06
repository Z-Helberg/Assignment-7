document.addEventListener("DOMContentLoaded", function () {


    // submit validation
// blur password 
// blur confirmation password Done
// if{@ }else{}
// text focus state




    registrationForm.addEventListener("submit", function ValidateForm(event) {
        let isValid = true;

    //email
        if (!email.value.includes('@')) {
            emailError.textContent = "Please enter valid email address"
            isValid= false;
        } else {
            emailError.textContent = '';
        }
    //fullname
        if(!fullname.value.includes(" ")){
            fullnameError.textContent= "Please enter Name and Surname"
            isValid= false;
        } else {
            fullnameError.textContent = '';
        }  
        
    //number
        if (!/^[0][0-9]{9}$/.test(number.value)) {
            numberError.textContent = "Please enter valid Number"
            isValid= false;
        } else {
            numberError.textContent = '';
        }
    //password
        const passwordPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).*$/; //{5,}$ if minimum characters wants to be added
        if (!passwordPattern.test(password.value)) {
            passwordError.textContent = "Should include at least 1 Number and 1 Special Character "
            isValid= false;
        } else {
            passwordError.textContent = '';
        }
    //confirmpassword
        if(confirmpassword.value !== password.value) {
            confirmError.textContent= "Password do not match"
            isValid= false;
        } else {
            confirmError.textContent = '';
        }  
        
        if(!isValid){
            event.preventDefault(); //stop form submission
            return; // stop further excutoin
        }

        
        
     // Submit button   

        console.log("Form submitted!");

        // Redirect to submit.html
        
        window.location.href = "/submit.html";
        event.preventDefault();
        console.log("Did we redirect?")
        
        });
    });