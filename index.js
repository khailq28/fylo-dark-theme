const email = document.getElementById("email");
const form = document.getElementById("formSubmit");
const error = document.getElementById("error");

form.addEventListener("submit", function (e) {
    if (!validateEmail(email)) {
        e.preventDefault();
        error.innerText = "Please enter a valid email address";
    }
});

var validateEmail = (input) => {
    var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
        return true;
    } else {
        return false;
    }
};
