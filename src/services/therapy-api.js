import axios from "axios";

const BASE_URL = "http://localhost:5050";

// Fetches all the groups.
export async function getGroups() {
  try {
    const url = `${BASE_URL}/group`;
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    return err.response;
  }
}

// Fetches single group.
export async function getGroup(id) {
  try {
    const url = `${BASE_URL}/group/${id}`;
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    return err.response;
  }
}
