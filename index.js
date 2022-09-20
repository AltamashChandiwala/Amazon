let x = document.getElementById('placestay')
let y = document.getElementById('temperature')
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
        x.innerText="Geo Not Supported"
    }

    }
function showPosition(data){
    console.log(data)
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    // document.getElementById('placestay').innerHTML=`${lat} and ${long}`
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    fetch(url,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        document.getElementById('placestay').innerText = `${data.city.name}`
        document.getElementById('temperature').innerText = `${data.list[0].temp.day}°C`
    })
}
function dark(){
    let mybody = document.body
    mybody.classList.toggle('mydarkbody')
    let mycard = document.getElementById('darkcard1')
    mycard.classList.toggle('darkcard')
    let mycard1 = document.getElementById('darkcard2')
    mycard1.classList.toggle('darkcard')
    let mycard2 = document.getElementById('darkcard3')
    mycard2.classList.toggle('darkcard')
    let mycard3 = document.getElementById('darkcard4')
    mycard3.classList.toggle('darkcard')
    let mycard4 = document.getElementById('small')
    mycard4.classList.toggle('darksmall')
    let mycard5 = document.getElementById('darkcard5')
    mycard5.classList.toggle('darkcard')
    let mycard6 = document.getElementById('darkcard6')
    mycard6.classList.toggle('darkcard')
    let mycard7 = document.getElementById('darkcard7')
    mycard7.classList.toggle('darkcard')
    let mycard8 = document.getElementById('darkcard8')
    mycard8.classList.toggle('darkcard')
    let moon = document.getElementById('moon')
    moon.classList.toggle('darkbutton')
    let darkanchor = document.getElementsByClassName('anchor')
     for(let i = 0;i < darkanchor.length; i++){
         darkanchor[i].classList.toggle('darkanchor')[i] 
     }  


}
function loadcoupon(){
    document.getElementById('coupon').style.display='block'
    document.getElementById('blur').classList.toggle('blur')
}
function closecoupon(){
    document.getElementById('coupon').style.display='none'
    document.getElementById('blur').classList.toggle('noblur')
}


