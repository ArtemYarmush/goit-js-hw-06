const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputCange);
function onInputCange(event) {
    nameEl.textContent = event.currentTarget.value.trim();
    if (nameEl.textContent.length === 0) {
        nameEl.textContent = 'Anonymous'
    };
};