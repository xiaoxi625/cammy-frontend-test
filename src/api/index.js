import axios from 'axios';

//const makeRequest = (data) => axios.post(config.baseUrl, data, {withCredentials: true});
const rootUrl = 'http://localhost:5000/api/v1';

export const sendEmail = (data) => {
	return axios({
		baseURL: rootUrl,
		method: 'post',
		url: '/emails/email',
		data,
	}).then(
		(res) => res,
		(rej) => rej);
}

export const storeMessage = (data) => {
	return axios({
		baseURL: rootUrl,
		method: 'post',
		url: '/messages/message',
		data,
	}).then(
		(res) => res,
		(rej) => rej);
}