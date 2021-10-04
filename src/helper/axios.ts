import axios from 'axios';
const axiosClient = axios.create({
	baseURL: `https://v6.exchangerate-api.com/v6/28ef459187a0e7cded893707/latest/EUR`,
});

export default axiosClient;
