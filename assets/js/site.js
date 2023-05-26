$(".dropbtn").on("mouseover", function() {
    $(".dropdown-content").toggleClass("hidden");
});

/* side navigation functionality */
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var password = document.getElementById("password-generated");

function genPassword() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";
    var passwordLength = document.getElementById("password-length").value;
    var password = "";
    if (passwordLength > 200) {
        passwordLength = 200;
    }
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password-generated").value = password;
}

function copyPassword() {
    var copyText = document.getElementById("password-generated");
    copyText.select();
    document.execCommand("copy");
}