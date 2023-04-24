function displayTemperature(response) {
  console.log(response.data);
}
let query = `Dublin`;
let apiKey = "cb5f738714fe5atbaff9a9f3oa9f3610";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key={apiKey}&units=metric`;
let forecast = `https://api.shecodes.io/weather/v1/forecast?query={query}&key={apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
