var home=document.getElementById("Home")
var menu=document.getElementById("Menu")
var contact=document.getElementById("Contact")
var datac=document.getElementById("data1")
var datad=document.getElementById("data2")
var datae=document.getElementById("data3")

menu.addEventListener("click",menucall)
contact.addEventListener("click",contactcall)
home.addEventListener("click",homecall)

function homecall(){
    datac.style.display="block"
    datad.style.display="none"
    datae.style.display="none"
    home.style.backgroundColor="rgb(184, 165, 202)"
    menu.style.backgroundColor=""
    contact.style.backgroundColor=""
    console.log("charu")
}
function menucall(){
    console.log("akhil")
    home.style.backgroundColor=""
    contact.style.backgroundColor=""
    datac.style.display="none"
    datad.style.display="block"
    datae.style.display="none"
    menu.style.backgroundColor="rgb(184, 165, 202)"
}
function contactcall(){
    home.style.backgroundColor=""
    menu.style.backgroundColor=""
    datac.style.display="none"
    datad.style.display="none"
    datae.style.display="block"
    contact.style.backgroundColor="rgb(184, 165, 202)"
    console.log("charu")
}

