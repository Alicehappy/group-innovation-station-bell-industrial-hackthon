import axios from "axios";

const BASE_URL = "http://localhost:5050";

// Fetches all the testimonials.
export async function getTestimonials() {
  const url = `${BASE_URL}/testimonials`;
  const response = await axios.get(url);
  return response.data;
}
