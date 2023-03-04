const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
const inputEmailEl = form.querySelector('input[name = email]');
    const inputPassEl = form.querySelector('input[name = password]');
    
const inputEmailElLength = inputEmailEl.value.trim().length;
    const inputPassElLength = inputPassEl.value.trim().length;
    
if(inputEmailElLength === 0 || inputPassElLength === 0 ) {
    return alert("Всі поля мають бути заповненими!");
} else {
    const elements = {
        email: inputEmailEl.value,
        password: inputPassEl.value,
    }

   form.reset();
    console.log(elements);
}
});