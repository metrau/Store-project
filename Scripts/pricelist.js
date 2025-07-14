document.getElementsByClassName("style_buttons_for_pricelist")[0]
    .addEventListener("mousemove", mouseover);

function mouseover() {
    alert("این محصول به زودی موجود میشود")
    this.style.backgroundColor = "#ED164B";
}
document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByClassName("style_buttons_for_pricelist");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("mousemove", function() {
            this.style.backgroundColor = "rgb(171, 240, 255)";
        });
        buttons[i].addEventListener("mouseout", function() {
            this.style.backgroundColor = "#EEEEEE";
        });
    }
});
