export function renderWeather(weather) {
	const weatherContainer = document.querySelector('#cardsContainer');
	weatherContainer.textContent = '';

	const cityName = document.createElement('h2');
	cityName.textContent = weather.city;

	const temp = document.createElement('p');
	temp.textContent = `Température : ${weather.temperature}°C`;

	const description = document.createElement('p');
	description.textContent = `Conditions : ${weather.description}`;

	weatherContainer.append(cityName, temp, description);
};
