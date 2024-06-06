const searchFormEl = document.querySelector('#search-form');
const resultCont = document.querySelector('#result-content');
const fivecast = document.querySelector('#five-cast');

function handleSearchFormSubmit(event) {
  event.preventDefault();
  // console.log("working");
  const cityName = document.getElementById("search-input").value;
  console.log(cityName);
  // localStorage.setItem(cityName, JSON.stringify(cityName));
  callApi(cityName);
}

function callApi(inputName){
  const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${inputName},&limit=1&APPID=3eff6f3173e6337e807c89458953d7b6`
  
fetch(apiUrl)
.then(function (res) {
  return res.json();
})
  .then(function (data) {
    // console.log(data);
    // console.log(data[0].lat)
    // console.log(data[0].lon)
    const lat = data[0].lat;
    const lon = data[0].lon;
    // console.log(lat)
    // console.log(lon)
    const apiTwo = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=3eff6f3173e6337e807c89458953d7b6&units=imperial`
    fetch(apiTwo)
    .then(function(res) {
      return res.json();
    })
    .then(function (newData) {
      for (i = 0; i<60; i++){ 
       console.log(newData.list[i].main.temp);
       console.log(newData.list[i].main.humidity);
       console.log(newData.list[i].wind.speed); 
       console.log(newData.list[i].dt_txt); 
//8
       if(i === 0){
        const newDiv = document.createElement('div');
        const newh3 = document.createElement('h3');
        const newP = document.createElement('p');
        const newP2 = document.createElement('p');
        const newP3 = document.createElement('p');
        newDiv.classList.add('card', 'mb-3', 'p-3');
        newh3.textContent = `Today's weather in ${inputName} is`
        newP.textContent = `Temp: ${newData.list[i].main.temp} degrees F`
        newP2.textContent = `Wind: ${newData.list[i].wind.speed} Miles per hour`
        newP3.textContent = `Humidity: ${newData.list[i].main.humidity}%`
        resultCont.appendChild(newh3);
        resultCont.appendChild(newDiv);
        newDiv.appendChild(newP);
        newDiv.appendChild(newP2);
        newDiv.appendChild(newP3);
       } else if (i === 7 ||i === 15 || i ===23 || i ===31 || i ===39 ||i ===47){
       
        const newDiv = document.createElement('div');
        const newh3 = document.createElement('h3');
        const newP = document.createElement('p');
        const newP2 = document.createElement('p');
        const newP3 = document.createElement('p');
        newDiv.classList.add('card', 'mb-3', 'p-3');
        newh3.textContent = `${newData.list[i].dt_txt} weather in ${inputName} is`
        newP.textContent = `Temp: ${newData.list[i].main.temp} degrees F`
        newP2.textContent = `Wind: ${newData.list[i].wind.speed} Miles per hour`
        newP3.textContent = `Humidity: ${newData.list[i].main.humidity}%`
        fivecast.appendChild(newh3);
        fivecast.appendChild(newDiv);
        newDiv.appendChild(newP);
        newDiv.appendChild(newP2);
        newDiv.appendChild(newP3);

       }

      
      }

      })
})
}



searchFormEl.addEventListener('submit', handleSearchFormSubmit);

