const apikey = "c73b6d84ffdec477641d1390870209e2";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const Body = document.body;
const box = document.querySelector(".box");
document.getElementById('search').addEventListener('click', () => {
    check_weather(document.getElementById('input').value)
});

async function check_weather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    console.log(response);
    let data = await response.json();
    document.querySelector('.City').innerHTML = data.name
    document.querySelector('.Temp').innerHTML = data.main.temp
    document.querySelector('.humidity').innerHTML = data.main.humidity
    document.querySelector('.wind').innerHTML = data.main.wind
}


box.addEventListener('mouseover', () => {
    Body.style.background = 'radial-gradient(rgba(56, 198, 170, 1), rgb(180, 130, 233), rgba(104, 101, 250, 0.918))';
    Body.style.transition = '0.4s all ease-in-out';
    box.style.background = 'radial-gradient(rgba(56, 198, 170, 1), rgba(234, 90, 200, 0.8))';
    box.style.transition = '0.4s all ease-in-out';
})
box.addEventListener('mouseout', () => {
    Body.style.background = 'radial-gradient(rgb(180, 130, 233), rgba(104, 101, 250, 0.918), rgba(56, 198, 170, 1))';
    Body.style.transition = '0.4s all ease-in-out';
    box.style.background = 'radial-gradient(rgba(56, 198, 170, 1), rgb(180, 130, 233))';
    box.style.transition = '0.4s all ease-in-out';

})

function Search() {
    let City = document.getElementById('input').value;
    console.log(City)
}