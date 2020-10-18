var cityname =document.querySelector("#city")
var displaydata=document.getElementById("wrong-data")
var container=document.getElementById("flex-container")
var foot=document.querySelector("footer")
var mykey="0b7e5255f33006b3b8ac98bf8c897cec"
var inputVal="kothagudem"
var kelv=273
function submission(){
    var citysearched = document.getElementById("city").value
    getdata(citysearched)
}
function getdata(citysearched){
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citysearched}&appid=${mykey}&units=metric`)
    // .then((resp)=>resp.json())
    // .then((result)=>console.log(result))
    // .catch(() => {
    //     console.log("i catch")
    //     displaydata.style.display="block"
    //     displaydata.innerHTML = "Please search for a valid city"})
    var xhr=new XMLHttpRequest()
    xhr.onreadystatechange=function(){
    if(xhr.status==200 && xhr.readyState==4){
        displaydata.style.display="block"
        displaydata.innerHTML = "Enter a city name"   
     const {main,sys,name,weather}=JSON.parse(xhr.responseText)
     //console.log(JSON.parse(xhr.responseText))
     var elem=document.createElement('div')
     elem.classList.add("flex-item")
     var info=`<span class="name">${name}<sup class="country">${sys.country}</sup></span><br/><br/><br/>
     <span class="temperature">${main.temp}<sup class="centi">°C</sup></span>
     <br/><br/><br/><span class="maxmin">Max  ${main.temp_max}<sup>°</sup>C<br/>Min  ${main.temp_min}<sup>°</sup>C</span>`
     elem.innerHTML=info
     container.appendChild(elem)
     document.getElementById("city").value=""
     foot.style.marginTop="260px"}
    else if(xhr.status==404){
        console.log(101)
        displaydata.style.display="block"
        displaydata.innerHTML = "Please search for a valid city"}
    }
    xhr.open('GET',`https://api.openweathermap.org/data/2.5/weather?q=${citysearched}&appid=${mykey}&units=metric`,true)
    xhr.send()
}
