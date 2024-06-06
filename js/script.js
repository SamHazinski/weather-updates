const searchFormEl = document.querySelector('#search-form');
// const inputValue = document.querySelector('#search-input').value;
// const inputValue = $('#search-form').val();
// const valInput = document.getElementById("#search-input").value;
// var inputValue = $('#search-input').val();
// const valInput = document.getElementById("search-input").value;



function handleSearchFormSubmit(event) {
  event.preventDefault();
  // console.log("working");
  const valInput = document.getElementById("search-input").value;
  console.log(valInput);
  // localStorage.setItem(valInput, JSON.stringify(valInput));

}
searchFormEl.addEventListener('submit', handleSearchFormSubmit);

