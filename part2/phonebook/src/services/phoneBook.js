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

const update = (replacementPerson) => {
  const response = axios.put(
    `${baseUrl}/persons/${replacementPerson.id}`,
    replacementPerson
  );
  return response.then((response) => response.data);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/persons/${id}`);
};

export const phonebookService = { getAll, create, update, remove };
