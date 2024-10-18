import axios from "axios";

const BASE_URL = "http://localhost:5050";

export async function getEvents() {
    const url = `${BASE_URL}/events`;
    const response = await axios.get(url);
    return response.data;
}

export async function getSingleEvent(id) {
    const url = `${BASE_URL}/events/${id}`;
    const response = await axios.get(url);
    return response.data;
}
