import axios from "axios";

export const getProvidersRequest = async () =>
  await axios.get("http://localhost:4000/providers");

export const createPersonRequest = async (person) =>
  await axios.post("http://localhost:4000/persons", person);

export const deletePersonRequest = async (id) =>
  await axios.delete(`http://localhost:4000/persons/${id}`);

export const getPersonRequest = async (id) =>
  await axios.get(`http://localhost:4000/persons/${id}`);

export const updatePersonRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/persons/${id}`, newFields);