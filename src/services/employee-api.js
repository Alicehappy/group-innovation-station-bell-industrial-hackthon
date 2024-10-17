import axios from "axios";

const BASE_URL = "http://localhost:5050";

// Fetches all the users.
export async function getUsers() {
  try {
    const url = `${BASE_URL}/gethelp`;
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    return err.response;
  }
}

// Posts a user.
export async function postUser(body) {
  try {
    const url = `${BASE_URL}/gethelp`;
    const response = await axios.post(url, body);
    return response;
  } catch (err) {
    return err.response;
  }
}
