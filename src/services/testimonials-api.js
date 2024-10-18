import axios from "axios";

const BASE_URL = import.meta.env.VITE_PUBLIC_URL;

export async function getTestimonials() {
  const url = `${BASE_URL}/testimonials`;
  const response = await axios.get(url);
  return response.data;
}
