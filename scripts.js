const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-click")


function posicao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"

}

function volta(){
    form.style.left = "-280px"
    form.style.transform = "translateX(0%)"


    mascara.style.visibility = "hidden"
}