   let now = new Date();

    let h6 = document.querySelector("h6")

    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let year = now.getFullYear();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let day = days[now.getDay()];

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months[now.getMonth()];

    h6.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`;






 function displayWeatherCondition(response) {
     document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
 }

 function search(event) {
    event.preventDefault();
     let apiKey = "66df4c660e46f41bd29095093e07e243";
     let city = document.querySelector("#search-text-input").value;
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(displayWeatherCondition);
     let searchInput = document.querySelector("#search-text-input");
     let h1 = document.querySelector("h1");
     h1.innerHTML = `${searchInput.value}`;
}

 let form = document.querySelector
 ("#search-engine");

 form.addEventListener("submit", search);



