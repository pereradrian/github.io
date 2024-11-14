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
}

function getRandom() {
    var lowBoundRandom = parseFloat(document.getElementById("low-bound-random").value);
    var highBoundRandom = parseFloat(document.getElementById("high-bound-random").value);

    document.getElementById("random-generated").value = Math.floor(((highBoundRandom - lowBoundRandom) * Math.random() + lowBoundRandom) * 100) / 100;
}

function copyRandom() {
    var copyText = document.getElementById("random-generated");
    copyText.select();
}

function testRegexp() {
    var regexpPattern = document.getElementById("regexpPattern").value;
    var testString = document.getElementById("testString").value;
    var regexpMatches = testString.match(regexpPattern)
    if (regexpMatches != null) {
        document.getElementById("regexpMatches").value = '"' + regexpMatches.join('", "') + '"';
    } else {
        document.getElementById("regexpMatches").value = '';
    }
}

/* Image upload */
const fileinput = document.getElementById('fileinput')
const canvas = document.getElementById('canvas')
if (canvas) {
    const ctx = canvas.getContext('2d')
    
    const srcImage = new Image
    
    let imgData = null
    
    let originalPixels = null
    
    fileinput.onchange = function(e) {
        if (e.target.files && e.target.files.item(0)) {
            srcImage.src = URL.createObjectURL(e.target.files[0])
        }
    }
    
    srcImage.onload = function() {
        canvas.width = srcImage.width
        canvas.height = srcImage.height
        ctx.drawImage(srcImage, 0, 0, srcImage.width, srcImage.height)
        imgData = ctx.getImageData(0, 0, srcImage.width, srcImage.height)
        originalPixels = imgData.data.slice()
    
        /* Process to text */
        var n_columns = parseFloat(document.getElementById("ascii-art-columns").value);
        /* TODO */
    
    }
}

// Fancy stuff

// Función para generar un valor aleatorio dentro de un rango
function uniform(low, high) {
  return (high - low) * Math.random() + low;
}

// Obtener el elemento
const elemento = document.getElementById('js-tool-item-span');

// Configurar el intervalo para cambiar el ancho cada segundo
setInterval(function() {
  const width = uniform(50, 89).toFixed(0);
  elemento.style.width = width + 'px';
}, 1000);
