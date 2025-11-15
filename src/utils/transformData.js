// Transform data obtained from API into an object with the data we are interested in
export const transformData = (rawData) => {
	if (!rawData) {
		console.log("transformData() n'a reçu aucune donnée.");
		return null;
	}
	return {
		city: rawData.address,
		main: {
			temperature: rawData.currentConditions.temp,
			feelsLike: rawData.currentConditions.feelslike,
			humidity: rawData.currentConditions.humidity,
			pressure: rawData.currentConditions.pressure,
            description: rawData.description,
		},
		forecast: rawData.days
	};
};
