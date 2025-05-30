async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "8a79786523a7d13fa4a1daa7e8fda0ef"; // Replace this with your actual API key
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const weatherHtml = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].main} 🌤</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;
    resultDiv.innerHTML = weatherHtml;
  } catch (error) {
    resultDiv.innerHTML = "❌ Error: City not found!";
  }
}
