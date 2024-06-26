import axios from "./axios";

export const getUsersRequest = async () =>
  await axios.get("http://localhost:4000/users");

export const getUserRequest = async (userName) =>
  await axios.get(`http://localhost:4000/users/${userName}`);

// CUANDO LO CREA TAMBIÉN SE ASIGNA EL TOKEN
export const createUserRequest = async (user, res) =>
  await axios.post(`http://localhost:4000/users`, user);

export const loginUserRequest = async (user) =>
  await axios.post(`http://localhost:4000/login`, user);

export const updateUser = async (id, newFields) =>
  await axios.put(`http://localhost:4000/users/${id}`, newFields);

export const deleteUserRequest = async (id) =>
  await axios.put(`http://localhost:4000/users/${id}`);

export const verifyTokenRequest = async () =>
  await axios.get(`http://localhost:4000/verify`);

export const logOutRequest = async () =>
  await axios.post(`http://localhost:4000/logout`);
