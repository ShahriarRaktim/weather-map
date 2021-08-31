const buttonClick = () => {
    const city = document.getElementById('input-box');
    const cityValue = city.value;
    city.value='';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=356de828497ed670fac9186799dbd159`)
        .then(res => res.json())
        .then(data => loadData(data))
}

const loadData = (data) => {
    const weatherParent = document.getElementById('weather-parent');
    weatherParent.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${data.name}</h1>
            <h3><span>${(data.main.temp - 273.15).toFixed(2)}</span>&deg;C</h3>
            <h1 class="lead">${data.weather[0].main}</h1>
    `;
    weatherParent.appendChild(div)
}