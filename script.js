
let loc= document.getElementById("location")
let btn=document.querySelector(".weather")
let cityName;
let weatherdisp=document.querySelector(".w")
let tempdisp=document.querySelector(".t")
btn.addEventListener('click',function(event){
    event.preventDefault();
    cityName=loc.value;
let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fbeeca07aaa7d06cae5fcb4b92ed0e49`

fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log(data);
       let weather = data.weather[0].main;
        let temp= data.main.temp
        let city= data.name
        weatherdisp.innerHTML=weather;
        tempdisp.innerHTML=Math.floor(temp-273.15)+"°C";
        
       
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

})
;


