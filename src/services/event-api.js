import axios from "axios";

const BASE_URL = "http://localhost:5050";

// Fetches all the events.
export async function getEvents() {
  try {
    const url = `${BASE_URL}/events`;
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    return err.response;
  }
}

// Fetches single event.
export async function getSingleEvent(id) {
  try {
    const url = `${BASE_URL}/events/${id}`;
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    return err.response;
  }
}
