document.addEventListener('DOMContentLoaded', () => {
    let registration_btn = document.getElementById('registration');
    registration_btn.addEventListener('click', hideForm);
    
    let login_btn = document.getElementById('login');
    login_btn.addEventListener('click', showForm);

    let content = document.getElementById('content');
    let form = document.createElement('form');
    form.id = "form-registration";


    form.appendChild(buildForm.input('password', 'password', "Пароль"));
    form.appendChild(buildForm.input('retry_password', 'password', "Повторите пароль"));

    let button = defaultHTMLTags.button("submit", "ТыК!");

    button.addEventListener("click", () => {
        form.innerHTML = "";
    })

    form.appendChild(button);
    content.appendChild(form);
})

function hideForm() {
    let form = document.getElementById('form-registration');
    form.style.display = "none";
}

function showForm() {
    let form = document.getElementById('form-registration');
    form.style.display = "block";
}

let buildForm = {
    'input': function (name = "", type = "textbox", placeholder = "") {
        let input = document.createElement('input');
        input.name = name;
        input.type = type;
        input.placeholder = placeholder;
        return input
    },
    'label': function (text = "", for_input_name = "") {
        let label = document.createElement('label');
        label.for = for_input_name;
        label.innerText = text;
        return label;
    },
    'form': function() {

    },
    'submit': function(text = "") {
        return defaultHTMLTags.button('submit', text);
    },
    'reset': function() {

    }
}

let defaultHTMLTags = {
    'button': function(type = "submit", text = "") {
        let button = document.createElement('button');
        button.type = type;
        button.innerText = text;
        return button;
    }
}