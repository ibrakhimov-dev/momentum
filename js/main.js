//* music player 
let music = document.querySelector("#music");
let musicPlayer = document.querySelector("#music-player");
let playBtn = document.querySelector("#play");
let songsTitle = document.querySelector("#songs-title");
let songsTitleBtn = document.querySelector("#songs-title-btn")
let isTitle = document.querySelectorAll("#music-icon");
let songs = [
    {title: "Billie Eilish, Khalid - Lovely" },
    {title: "Sevak - Жди меня там"}, 
    {title: "AURORA - Runaway"},
    {title: "Jony, HammAli - Наверно ты меня не помнишь"}
]
let songsIndex = 0;
function play(){
    music.src = `./music/${songs[songsIndex].title}.mp3`;
    const isPlaying = musicPlayer.classList.contains("play");
    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    } 
}
function playSong(){
    musicPlayer.classList.add("play");
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    for (let item of isTitle){
        item.style.color = "white";
    }
    isTitle[songsIndex].style.color ="red";
    music.play();
}

function pauseSong(){
    musicPlayer.classList.remove("play");
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    music.pause();
}
function prev(){
    songsIndex--;
    if (songsIndex < 0){
        songsIndex = songs.length - 1;
    }
    music.src = `./music/${songs[songsIndex].title}.mp3`;
    playSong()
}
function next(){
    songsIndex++;
    if (songsIndex > songs.length - 1){
        songsIndex = 0 ;
    }
    music.src = `./music/${songs[songsIndex].title}.mp3`;
    playSong()
}
music.addEventListener("timeupdate", updateProgress);
function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    if (duration == currentTime){
        next();
    }
}
//* whether
let weatherIcon = document.querySelector("#weather-icon");
let temperatura = document.querySelector("#temperatura");
let windSpeed = document.querySelector("#wind-speed");
let humidity = document.querySelector("#humidity");
async function getWeather() { 
    let weatherCity = document.querySelector("#weatherInput").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&lang=ru&appid=641eaaacbdbec818058e2324ee236d60&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    temperatura.innerHTML = `${Math.round(data.main.temp)} &deg;C 
    ${data.weather[0].main}`;
    windSpeed.innerHTML = `Wind Speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.innerHTML = `Humidity: ${data.main.humidity} %`
}
getWeather()
console.log(humidity.textContent)
//* date 
function startTime() {
    const today = new Date();
    let week = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    h = checkTime(h);
    document.getElementById('hour').innerHTML =  h + " : " + m + " : " + s;
    setTimeout(startTime, 1000);
    document.getElementById("day").innerHTML = week[today.getDay()] + ", " + month[today.getMonth()] + " "+ today.getDate();
    if (today.getHours() >= 6 && today.getHours() < 11){
        document.getElementById("time-day").innerHTML = "Good Morning, ";
    }else if(today.getHours() >= 11 && today.getHours() < 16){
        document.getElementById("time-day").innerHTML = "Good Afternoon, ";
    }else if(today.getHours() >= 16 && today.getHours() < 21){
        document.getElementById("time-day").innerHTML = "Good Evening, ";
    }else{
        document.getElementById("time-day").innerHTML = "Good Night, ";
    }
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
}
//* bg photo
let date = new Date();
let currentHours = date.getHours();
let timeData = "";
let countBg = 1;
let nextBg = document.querySelector("#next-bg");
let prevBg = document.querySelector("#prev-bg");
if (currentHours >= 6 && currentHours < 11){
    timeData += "morning";
}else if(currentHours >= 11 && currentHours < 16){
    timeData += "afternoon";
}else if(currentHours >= 16 && currentHours < 21){
    timeData += "evening";
}else{
    timeData += "night";
}
let urlImg = `https://github.com/rolling-scopes-school/stage1-tasks/blob/assets/images/${timeData}/03.jpg?raw=true`;
document.body.style.backgroundImage = `url("${urlImg}")`
nextBg.addEventListener("click", nextBgImg);
prevBg.addEventListener("click", prevBgImg);
function nextBgImg(){
    countBg++;
    if (countBg > 20){
        countBg = 1 ;
    }
    let checkCountBg = checkTime(countBg);
    let urlImg = `https://github.com/rolling-scopes-school/stage1-tasks/blob/assets/images/${timeData}/${checkCountBg}.jpg?raw=true`;
    document.body.style.backgroundImage = `url("${urlImg}")`
} 
function prevBgImg(){
    countBg--;
    if (countBg < 0){
        countBg = 20 ;
    }
    let checkCountBg = checkTime(countBg);
    let urlImg = `https://github.com/rolling-scopes-school/stage1-tasks/blob/assets/images/${timeData}/${checkCountBg}.jpg?raw=true`;
    document.body.style.backgroundImage = `url("${urlImg}")`
}
//* footer text
let status = [
    {
        author: "Iris Murdoch",
        statusText: '"We can only learn to love by loving."'
    },
    {
        author: "Seneca",
        statusText: '"There is no great genius without some touch of madness."'
    },
    {
        author: "Edward Gibbon",
        statusText: '"The winds and waves are always on the side of the ablest navigators."'
    },
    {
        author: "Benjamin Franklin",
        statusText: '"One today is worth two tomorrows."'
    },
    {
        author: "Catherine Pulsifer",
        statusText: '"Rather than wishing for change, you first must be prepared to change."'
    },
    {
        author: "Chinese proverb",
        statusText: '"He who deliberates fully before taking a step will spend his entire life on one leg."'
    },
    {
        author: "Richard Bach",
        statusText: '"Allow the world to live as it chooses, and allow yourself to live as you choose."'
    },
    {
        author: "John Dewey",
        statusText: '"Without some goals and some efforts to reach it, no man can live."'
    },
    {
        author: "Edwin Markham",
        statusText: '"We have committed the Golden Rule to memory; let us now commit it to life."'
    },
    {
        author: "Margaret Bonnano",
        statusText: '"It is only possible to live happily ever after on a day to day basis."'
    },
    {
        author: "Marsha Petrie Sue",
        statusText: '"Stay away from what might have been and look at what will be."'
    },
    {
        author: "Napoleon Hill",
        statusText: '"You might well remember that nothing can bring you success but yourself."'
    },
    {
        author: "Anais Nin",
        statusText: '"The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery."'
    }
]

let statusAuthor = document.querySelector("#status-author");
let statusText = document.querySelector("#status-text");
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let randomIndex = randomInteger(0,status.length);
statusAuthor.innerHTML = status[randomIndex].author;
statusText.innerHTML = status[randomIndex].statusText;

function refreshStatus(){
    let randomIndex = randomInteger(0,status.length);
    statusAuthor.innerHTML = status[randomIndex].author;
    statusText.innerHTML = status[randomIndex].statusText;
}