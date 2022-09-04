document.addEventListener('DOMContentLoaded', function () {
    let content = document.getElementById('content');

    let form_auth = BuildFormAuthorization.create_form("");
    console.log(HTMLDefaultTags);
    // let form_registration = BuildFormRegistration.create_form("");

    content.appendChild(form_auth);
    // content.appendChild(form_registration);
})

let BuildFormAuthorization = {
    create_form: function (action, method = "GET") {
        let form = HTMLDefaultTags.form(method, action);


        form.appendChild(this.login_textbox());
        form.appendChild(this.password_textbox());
        form.appendChild(this.submit_btn());

        return form;
    },
    wrapper_item: function (element) {
        let div = document.createElement('div');

        div.classList.add("form-item")
        div.appendChild(element);
        return div;
    },
    login_textbox: function (placeholder = "Логин") {
        let input = HTMLDefaultTags.input("login", "text");
        input.placeholder = placeholder;

        return this.wrapper_item(input);
    },
    password_textbox: function (placeholder = "Пароль") {
        let input = HTMLDefaultTags.input("password", "password");
        input.placeholder = placeholder;

        return this.wrapper_item(input);
    },
    submit_btn: function () {
        let btn = HTMLDefaultTags.button("Отправить", "submit");

        return this.wrapper_item(btn);
    }
}

class HTMLDefaultTags {
    static form(method = "GET", action = "") {
        let form = document.createElement('form');
        form.method = method;
        form.action = action;

        return form;
    }
    static button(title, type = "submit") {
        let btn = document.createElement('button');
        btn.innerText = title;
        btn.type = type;

        return btn;
    }
    static input(name, type = "") {
        let input = document.createElement('input');
        input.name = name;
        input.type = type;

        return input;
    }
}