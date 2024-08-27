// template for event listener provided by Xpert Learning Assistant
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', function () {
    const apiKey = '1e48e7a0f287dcc3409f59c53bc201b3';
    const cityName = document.getElementById('city-input').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the data received from the API
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
})

const form = document.querySelector('city-search');

form.addEventListener('submit', function(event) {
    event.preventDefault;

    const formData = new FormData('city-search');

    formData.forEach((value, key) => {
        localStorage.setItem(key, value);
    });
});