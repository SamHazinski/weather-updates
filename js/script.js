const searchFormEl = document.querySelector('#search-form');
const resultCont = document.querySelector('#result-content');

function handleSearchFormSubmit(event) {
  event.preventDefault();
  // console.log("working");
  const cityName = document.getElementById("search-input").value;
  console.log(cityName);
  // localStorage.setItem(cityName, JSON.stringify(cityName));
  callApi(cityName);
}

function callApi(inputName){
  const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${inputName},&limit=1&APPID=3eff6f3173e6337e807c89458953d7b6`
  
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
    const apiTwo = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=3eff6f3173e6337e807c89458953d7b6&units=imperial`
    fetch(apiTwo)
    .then(function(res) {
      return res.json();
    })
    .then(function (newData) {
      for (i = 0; i<6; i++){
       console.log(newData.list[i].main.temp);
       console.log(newData.list[i].main.humidity);
       console.log(newData.list[i].wind.speed); 

       const newDiv = document.createElement('div');
       newDiv.textContent = `this is data for call ${i} ${newData.list[i].main.temp} ${newData.list[i].wind.speed} ${newData.list[i].main.humidity}`
       resultCont.appendChild(newDiv);
      }

      })
})
}



searchFormEl.addEventListener('submit', handleSearchFormSubmit);

