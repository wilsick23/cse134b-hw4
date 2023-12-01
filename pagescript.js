// const nameInput = document.getElementById("formName");
// const emailInput = document.getElementById("formEmail");
// // const phoneInput = document.getElementById("formPhone");

// const form = document.getElementById("form");



// form.addEventListener("submit", () => {
//     if (messageInput.length < 7) {
//         alert("no");
//     }
// })

function mask() {
    var messageInput = document.getElementById("formMessage");
    var messageError = document.getElementById("messageError");

    if (messageInput.length < 5) {
        alert("no");
    }
}