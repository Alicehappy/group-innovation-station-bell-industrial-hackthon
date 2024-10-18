import axios from "axios";

const BASE_URL = import.meta.env.VITE_PUBLIC_URL;

export async function getUsers() {
    const url = `${BASE_URL}/gethelp`;
    const response = await axios.get(url);
    return response.data; 
}

export async function postUser(body) {
    const url = `${BASE_URL}/gethelp`;
    const response = await axios.post(url, body);
    return response;
}
