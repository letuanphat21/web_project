document.getElementById("loginButton").onclick = function() {
    window.location.href = "index.html";
};


const loginButton = document.getElementById("loginButton");


loginButton.addEventListener("click", () => {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    if (username === "admin" && password === "123") {

        window.location.href = "admin.html";
    } else {

        window.location.href = "index.html";
    }
});