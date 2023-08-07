import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
	params: { hl: "hi", gl: "IN" },
	headers: {
		"X-RapidAPI-Key":
			process.env.REACT_APP_YOUTUBE_API_KEY ||
			"76c6cb2d7bmsh220ac7cc984ec89p14808bjsn3101f8bc156a",
		"X-RapidAPI-Host": "youtube138.p.rapidapi.com",
	},
};

export const fetchDataFromApi = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
	return data;
};
