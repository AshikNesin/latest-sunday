module.exports = () => {
	// Source: https://stackoverflow.com/a/33229060/5012005
	return new Date(
		new Date().setDate(new Date().getDate() - new Date().getDay())
	);
};
