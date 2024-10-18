import axios from "axios";

const BASE_URL = import.meta.env.VITE_PUBLIC_URL;

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
