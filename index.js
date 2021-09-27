function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const form = document.querySelector(".js-form");
const errorEmpty = "Oops! Please add your email";
const errorNotFormatted = "Oops! Please check your email";

form.addEventListener("submit", function(e){
    e.preventDefault();
    const errorDiv = document.querySelector(".js-error-message");
    console.log(e.target.elements.email.value);
    if(e.target.elements.email.value === "") {
        errorDiv.innerHTML = errorEmpty;
        errorDiv.classList.add("css-error-message-visible");
        return;
    } 
    
    if(validateEmail(e.target.elements.email.value)) {
        errorDiv.classList.remove("css-error-message-visible");
    
    } else {
        errorDiv.innerHTML = errorNotFormatted;
        errorDiv.classList.add("css-error-message-visible");
    }
    
});