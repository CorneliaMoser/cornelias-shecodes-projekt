function formateDate() {
  let now = new Date();
  let currentDate = document.querySelector("#currentDate");
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`
  ];

  let months = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `Dezember`
  ];

  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let year = now.getFullYear();
  let todayDate = `${day} ${date}.${month}.${year} <br/>${hours}:${minutes}`;
  currentDate.innerHTML = todayDate;
}
formateDate();

function displayWeatherCondition(response){
  console.log(response.data.name);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
}

function search(event) {
  event.preventDefault();
 let apiKey ="aed57f2386376dd257ae589f54ccdbfe";
 let city = document.querySelector("#search-text-input").value;
 let apiUrl =`httpps://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayWeatherCondition);
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", search);
