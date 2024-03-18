let password_mismatch = true;

const password_input = document.querySelector("#password");
const password_confirm = document.querySelector("#password_confirm");
const password_div = document.querySelector("#password_div")
const password_error_message = document.querySelector("#error_msg")



if (!password_mismatch) {
    password_input.classList.remove("error");
    password_confirm.classList.remove("error");
    password_div.removeChild(password_error_message);
}