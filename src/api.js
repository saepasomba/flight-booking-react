import axios from "axios";

const BASE_URL = `https://tix-service-bej5.up.railway.app`;
const TOKEN = localStorage.getItem(`USER_TOKEN`);

export const axiosClientWithNoToken = axios.create({
  baseURL: BASE_URL,
});

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: TOKEN,
  },
});

export const apiGetDestinationCity = () => {
  return axiosClient.get(`/ticketing-service/booking/destination-city`);
};

export const apiGetPassengerType = () => {
  return axiosClient.get(`/ticketing-service/booking/passenger_type`);
};

export const apiGetSeatClass = () => {
  return axiosClient.get(`/ticketing-service/booking/class-seats`);
};

export const apiGetFlights = (data) => {
  return axiosClient.post(
    `/ticketing-service/booking/schedule-available`,
    data
  );
};

export const apiGetAvailableSeats = (flightID) => {
  return axiosClient.get(`/ticketing-service/booking/chose-seats/${flightID}`);
};

export const apiGetCitizenship = () => {
  return axiosClient.get(`/ticketing-service/booking/citizenship`);
};

export const apiGetPaymentType = () => {
  return axiosClient.get(`/ticketing-service/booking/payment_type`);
};

export const apiCreateOrder = (data) => {
  return axiosClient.post(`/ticketing-service/booking/create-order`, data);
};
