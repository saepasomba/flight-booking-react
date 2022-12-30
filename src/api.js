import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;
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

export const apiGetProfile = () => {
  return axiosClient.get(`/ticketing-service/users/my-profile`);
};

export const apiEditProfile = (data) => {
  return axiosClient.put(`/ticketing-service/users/update-profile`, data);
};

export const apiGetHistoryBook = () => {
  return axiosClient.get(
    `/ticketing-service/booking/history?limit=10&pageNumber=1`
  );
};

export const apiLogIn = (data) => {
  return axiosClientWithNoToken.post(`/ticketing-service/ext/login`, data);
};

export const apiRegister = (data) => {
  return axiosClientWithNoToken.post(`/ticketing-service/ext/register`, data);
};

export const apiAuthWithGoogle = (data) => {
  return axiosClientWithNoToken.post(
    `/ticketing-service/ext/googleid-token`,
    data
  );
};

export const apiGetCountNotification = () => {
  return axiosClient.get(`/ticketing-service/users/count-notif`);
};

export const apiGetListNotification = () => {
  return axiosClient.get(
    `/ticketing-service/users/get-notif?limit=10&pageNumber=1`
  );
};

export const apiGetDestinationCity = () => {
  return axiosClientWithNoToken.get(`/ticketing-service/destination-city`);
};

export const apiGetPassengerType = () => {
  return axiosClientWithNoToken.get(`/ticketing-service/passenger_type`);
};

export const apiGetSeatClass = () => {
  return axiosClientWithNoToken.get(`/ticketing-service/class-seats`);
};

export const apiGetFlights = (data) => {
  return axiosClientWithNoToken.post(
    `/ticketing-service/schedule-available`,
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

export const apiGetQRValidation = (token) => {
  return axiosClientWithNoToken.get(`/ticketing-service/qr?token=${token}`);
};

export const apiGetAdminPayment = () => {
  axiosClient.get(`/ticketing-service/admin/list-payment`);
};

export const apiAddNewPayment = (data) => {
  axiosClient.post(`/ticketing-service/admin/create-payment`, data);
};

export const apiEditPayment = (paymentId, data) => {
  axiosClient.put(`/ticketing-service/admin/update-payment/${paymentId}`, data);
};

export const apiDeletePayment = (paymentId) => {
  axiosClient.delete(`/ticketing-service/admin/disable-payment/${paymentId}`);
};
