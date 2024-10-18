import axios from "axios";

const BASE_URL = "http://localhost:5050";

export async function getGroups() {
    const url = `${BASE_URL}/group`;
    const response = await axios.get(url);
    return response.data;
}

export async function getGroup(id) {
    const url = `${BASE_URL}/group/${id}`;
    const response = await axios.get(url);
    return response.data;
}
