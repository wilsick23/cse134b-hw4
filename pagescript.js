// const nameInput = document.getElementById("formName");
// const emailInput = document.getElementById("formEmail");
// // const phoneInput = document.getElementById("formPhone");

// const form = document.getElementById("form");



// form.addEventListener("submit", () => {
//     if (messageInput.length < 7) {
//         alert("no");
//     }
// })

var document;
var form_errors = [];

function flashNameField() {
    var nameError = document.getElementById("nameError");
    nameError.innerText = "Character not allowed";
    nameError.classList.remove("fade-out");

    setTimeout(() => {
        nameError.classList.add('fade-out');
    }, 2000);
}

function nameMask() {
    let nameInput = document.getElementById("formName");

    if (!nameInput.value.match(/^[a-zA-Z_\s]+$/) && nameInput.value != ''){
        flashNameField();
        nameInput.value = nameInput.value.replace(/[^a-zA-Z_\s]/g, '');
        form_errors.push("Invalid character");
    }
}

function flashField() {
    var messageError = document.getElementById("messageError");
    messageError.innerText = "Character not allowed";
    messageError.classList.remove("fade-out");

    setTimeout(() => {
        messageError.classList.add('fade-out');
    }, 2000);
}

function mask() {
    let messageInput = document.getElementById("formMessage");

    if (!messageInput.value.match(/^[a-zA-Z0-9_\s]+$/) && messageInput.value != ''){
        flashField();
        messageInput.value = messageInput.value.replace(/[^a-zA-Z0-9_\s]/g, '');
        form_errors.push("Invalid character");
    }
}

function characterCount() {
    let messageInput = document.getElementById("formMessage");
    var messageInfo = document.getElementById("messageInfo");
    const remaining = 400 - messageInput.value.length;
    messageInput.classList.remove('warning');

    if (remaining <= 50) {
        messageInput.classList.add('warning');
    }
    messageInfo.innerText = remaining + " characters remaining."
}

function submitForm() {
    var jsonData = JSON.stringify(form_errors);

    fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ 'form-errors': form_errors }),
    })

    alert(form_errors);
}