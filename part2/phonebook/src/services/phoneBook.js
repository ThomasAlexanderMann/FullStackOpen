import axios from "axios";

const baseUrl = "http://localhost:3001";

const getAll = () => {
  const response = axios.get(`${baseUrl}/persons`);
  return response.then((response) => response.data);
};

const create = (newPerson) => {
  const response = axios.post(`${baseUrl}/persons`, newPerson);
  return response.then((response) => response.data);
};

export const phonebookService = { getAll, create };
