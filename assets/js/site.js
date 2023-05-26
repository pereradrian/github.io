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