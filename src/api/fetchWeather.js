// fetchWeather.js

export async function fetchWeather(city) {
	const API_KEY = 'JEBGRWNY5LL9GXANCZ3MG7ZME';
	const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`;

	try {
		const response = await fetch(URL);
		if (!response.ok) throw new Error('Erreur API météo');

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Erreur fetchWeather():', error);
		return null;
	}
}
