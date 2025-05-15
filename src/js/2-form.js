const form = document.querySelector(".feedback-form");
const input = document.querySelector('input[name="email"]');
const textArea = document.querySelector('textarea[name="message"]');

const formData = {
    email: "",
    message:""
}

if (localStorage.getItem("feedback-form-state")) {
    const {email,message} = JSON.parse(localStorage.getItem("feedback-form-state"));
    formData.email = email;
    formData.message = message;
    input.value = email;
    textArea.value = message;
}

const handleInput = e => {
    const { tagName, value = "" } = e.target;
    if (tagName === "INPUT") {
        formData.email = value;
    }
    if (tagName === "TEXTAREA") {
        formData.message = value;
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

form.addEventListener("input", handleInput);