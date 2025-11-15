export const saveData = (key, value) => {
	if (!key) throw new Error('Missing key for saveData().');

	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (err) {
		console.error('localStorage save error:', err);
		throw err;
	}
};

export const loadData = (key) => {
	if (!key) throw new Error('Missing key for loadData().');

	try {
		const raw = localStorage.getItem(key);
		return raw ? JSON.parse(raw) : null;
	} catch (err) {
		console.error('localStorage load error:', err);
		throw err;
	}
};

export const deleteData = (key) => {
	if (!key) throw new Error('Missing key for deleteData().');

	localStorage.removeItem(key);
};
