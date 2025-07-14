
let information_login = document.getElementsByClassName("submit_login")[0];
let information_create = document.getElementsByClassName("submit_create")[0];
let create = document.getElementById("item1");
let login = document.getElementById("item2");

// تنظیم حالت اولیه
information_login.style.visibility = "visible";
information_create.style.visibility = "hidden";

create.addEventListener('click', function(){
    information_login.style.visibility = "hidden";
    information_create.style.visibility = "visible";
});

login.addEventListener("click", function(){
    information_login.style.visibility = "visible";
    information_create.style.visibility = "hidden";
});


