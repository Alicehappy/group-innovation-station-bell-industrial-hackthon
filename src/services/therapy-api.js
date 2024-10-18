import axios from "axios";

const BASE_URL = import.meta.env.VITE_PUBLIC_URL;

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
