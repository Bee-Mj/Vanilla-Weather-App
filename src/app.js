function displayTemperature(response) {
   console.log(response.data);
}

let apiKey = "66df4c660e46f41bd29095093e07e243";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

 axios.get(apiUrl).then(displayTemperature);