import './styles.css';

import { fetchWeather } from './api/fetchWeather.js';
import { transformData } from './utils/transformData.js';

async function main() {
	const raw = await fetchWeather('Paris');
	const weather = transformData(raw);

	console.log(weather);
}

main();
