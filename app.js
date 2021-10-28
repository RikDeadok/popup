const app = document.querySelector('#app')
const form = `
<form class="form">
    <div class="form__wrapper">
        <div class="form__exit" onclick="popupClose()">
            X
        </div>
        <div class="form__container">
            <h1 class="form__title">Получите набор файлов для руководителя:</h1>
            <div class="row">
                <img src="1.png" alt="docs">
                <script id="amoforms_script_854617" async="async" charset="utf-8" src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1635442435"></script>
            </div>
        </div>
    </div>
</form>
`
const setBtn = document.createElement('button')
setBtn.innerHTML = "Кликни";
setBtn.type = "submit";
setBtn.name = "button";
setBtn.classList.add('button')
setBtn.onclick = popupShow;
app.append(setBtn)

const setPopup = document.createElement('div')
setPopup.classList.add('popup')
setPopup.innerHTML = form
app.append(setPopup)

function popupShow() {
    document.getElementsByClassName('.popup');
    setPopup.classList.add("show");
}

function popupClose() {
    document.getElementsByClassName('.form__exit');
    setPopup.classList.remove("show");
}

const $input = document.querySelector('[data-js="input"]')
$input.addEventListener('input', handleInput, false)

function handleInput (e) {
    e.target.value = phoneMask(e.target.value)
}

function phoneMask (phone) {
    return phone.replace(/\D/g, '')
        .replace(/^(\d)/, '($1')
        .replace(/^(\(\d{3})(\d)/, '$1) $2')
        .replace(/(\d{3})(\d)/, '$1-$2')
        .replace(/(-\d{2})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
}