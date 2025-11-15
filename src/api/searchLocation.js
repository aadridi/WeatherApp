// searchLocation.js
import { fetchWeather } from './fetchWeather.js';
import { transformData } from '../utils/transformData.js';
import { saveData, loadData } from './storage/localStorage.js';

export function initSearch(onWeatherReady) {
	const form = document.querySelector('form');
	const errorContainer = document.querySelector('#errorContainer');

	if (!form) {
		console.error('Formulaire non trouvé dans le DOM !');
		return;
	}

	form.addEventListener('submit', async (e) => {
		e.preventDefault();
		errorContainer.textContent = '';

		const formData = new FormData(form);
		const city = formData.get('location')?.trim();

		if (!city) {
			const errorParagraph = document.createElement('p');
			errorParagraph.textContent = 'Please input a city.';
			errorContainer.append(errorParagraph);
			return;
		}

		try {
			const raw = await fetchWeather(city);
			const weather = transformData(raw);

			if (!weather) {
				throw new Error('There was a problem with your query');
			}

			const recentCities = loadData('recentCities') || [];
			if (!recentCities.includes(city)) {
				recentCities.push(city);
				saveData('recentCities', recentCities);
			}

			if (typeof onWeatherReady === 'function') {
				onWeatherReady(weather);
			}
		} catch (error) {
			console.error(error);
			const errorParagraph = document.createElement('p');
			errorParagraph.textContent = 'Erreur lors de la récupération des données.';
			errorContainer.append(errorParagraph);
		}
	});
}
