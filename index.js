function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const form = document.querySelector(".js-form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e);
    const error = document.querySelector(".js-error-message");
    if(!validateEmail(e.target.elements.email.value)){
        error.classList.add("css-error-message-visible");
    } else {
        error.classList.remove("css-error-message-visible");
    }
});