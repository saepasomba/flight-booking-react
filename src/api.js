import axios from "axios";

const BASE_URL = "https://tix-service-bej5.up.railway.app/ticketing-service";

export const axiosClient = axios.create({
  baseURL: { BASE_URL },
});

export const axiosClientWithNoToken = axios.create({
  baseURL: { BASE_URL },
  headers: {
    Authorization: localStorage.getItem("USER_TOKEN"),
  },
});
