
var bar =document.querySelector(".bars");
var lis=document.querySelector(".lisa");
var pafay=document.querySelector(".pafay");
var pafay=document.querySelector(".bgt");
var dyasrm=document.querySelector(".pafay .dyasrm");
var monthsrm=document.querySelector(".pafay .monthsrm");
var country=document.querySelector(".information h3");
var temp=document.querySelector(".ino-temp h2 ");
var stateWeather =document.querySelector(".weater");
var humidity =document.querySelector(".humidity");
var wind =document.querySelector(".wind");
var imgtemp =document.querySelector(".ino-temp img");


var dyasrmbgt =document.querySelector(".bgt .dyasrm");
var monthsrmbgt =document.querySelector(".bgt .monthsrm");
var countrybgt =document.querySelector(".bgt .information h3");
var tempbgt =document.querySelector(".bgt .ino-temp h2 ");
var stateWeatherbgt  =document.querySelector(" .bgt .weater");
var humiditybgt  =document.querySelector(".bgt.humidity");
var windbgt  =document.querySelector(".bgt .wind");
var imgtempbgt  =document.querySelector(".bgt .ino-temp img");


var dyasrmbgte =document.querySelector(".bgte .dyasrm");
var monthsrmbgte =document.querySelector(".bgte .monthsrm");
var countrybgte =document.querySelector(".bgte .information h3");
var tempbgte =document.querySelector(".bgte .ino-temp h2 ");
var stateWeatherbgte  =document.querySelector(" .bgte .weater");
var humiditybgte  =document.querySelector(".bgte.humidity");
var windbgte =document.querySelector(".bgte .wind");
var imgtempbgte  =document.querySelector(".bgte .ino-temp img");


var inputsearch =document.querySelector(".varseach .inputsearch");
var find =document.querySelector(".varseach .find");
var oze =document.querySelectorAll(".pafay");

var search =inputsearch.value;

inputsearch.addEventListener('keyup',function(){
    console.log(inputsearch.value);
})

bar.addEventListener('click',function(){
lis.classList.toggle("j")
})





const url =`https://api.weatherapi.com/v1/forecast.json?key=3b4dfcf6e8d44f3f879125222230108&q=`;
const fetchurl= async(city)=>{
try{
const res =await fetch(`${url}${city} &days=3`);
const data =await res.json(res);

let days=["sun", "mon","tuse","wed","thur","fri","sat"];
var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
var o= data.current.last_updated;
console.log(data);
var z=new Date(o);
dyasrm.innerHTML=days[z.getDay()];
monthsrm.innerHTML=`${z.getDate()} ${month[z.getMonth()]}`;
country.innerHTML=data.location.name;
temp.innerHTML=`${data.current.temp_c}<sup>o</sup>c`;
stateWeather.innerHTML=data.current.condition.text;
humidity.innerHTML=`${data.current.humidity}%`;
wind.innerHTML=`${Math.round(data.current.wind_kph)}km/h`;
imgtemp.src = data.current.condition.icon;


for(var i=0;i < 2;i++){
  console.log();
  let f=new Date(data.forecast.forecastday[i].date);
  let nb=new Date(data.forecast.forecastday[i+1].date);
dyasrmbgt.innerHTML=days[f.getDay()];
monthsrmbgt.innerHTML=`${f.getDate()} ${month[f.getMonth()]}`;
tempbgt.innerHTML=`${Math.round(data.forecast.forecastday[i].day.maxtemp_c)}<sup>o</sup>c`;
stateWeatherbgt.innerHTML=data.forecast.forecastday[i].day.condition.text;
imgtempbgt.src =data.forecast.forecastday[i].day.condition.icon;

dyasrmbgte.innerHTML=days[nb.getDay()];
monthsrmbgte.innerHTML=`${nb.getDate()} ${month[nb.getMonth()]}`;
tempbgte.innerHTML=`${Math.round(data.forecast.forecastday[i].day.maxtemp_c)}<sup>o</sup>c`;
stateWeatherbgte.innerHTML=data.forecast.forecastday[i].day.condition.text;
imgtempbgte.src =data.forecast.forecastday[i].day.condition.icon;
}



}catch(error){
console.log(error);
}
}
const urln =`https://api.weatherapi.com/v1/forecast.json?key=3b4dfcf6e8d44f3f879125222230108&q=egypt&days=3`;
const fetchurln= async()=>{
try{
const res =await fetch(urln);
const data =await res.json(res);

let days=["sun", "mon","tuse","wed","thur","fri","sat"];
var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
var o= data.current.last_updated;
var z=new Date(o);
dyasrm.innerHTML=days[z.getDay()];
monthsrm.innerHTML=`${z.getDate()} ${month[z.getMonth()]}`;
country.innerHTML=data.location.name;
temp.innerHTML=`${Math.round(data.current.temp_c)}<sup>o</sup>c`;
stateWeather.innerHTML=data.current.condition.text;
humidity.innerHTML=`${data.current.humidity}%`;
wind.innerHTML=`${Math.round(data.current.wind_kph)}km/h`;
imgtemp.src = data.current.condition.icon;


for(var i=0;i < 2;i++){
  console.log();
  let f=new Date(data.forecast.forecastday[i].date);
  let nb=new Date(data.forecast.forecastday[i+1].date);
dyasrmbgt.innerHTML=days[f.getDay()];
monthsrmbgt.innerHTML=`${f.getDate()} ${month[f.getMonth()]}`;
tempbgt.innerHTML=`${Math.round(data.forecast.forecastday[i].day.maxtemp_c)}<sup>o</sup>c`;
stateWeatherbgt.innerHTML=data.forecast.forecastday[i].day.condition.text;
imgtempbgt.src =data.forecast.forecastday[i].day.condition.icon;

dyasrmbgte.innerHTML=days[nb.getDay()];
monthsrmbgte.innerHTML=`${nb.getDate()} ${month[nb.getMonth()]}`;
tempbgte.innerHTML=`${Math.round(data.forecast.forecastday[i].day.maxtemp_c)}<sup>o</sup>c`;
stateWeatherbgte.innerHTML=data.forecast.forecastday[i].day.condition.text;
imgtempbgte.src =data.forecast.forecastday[i].day.condition.icon;
}

}catch(error){
console.log(error);
}
}
fetchurln()

inputsearch.addEventListener('keyup',function(){
    fetchurl(inputsearch.value)
})


