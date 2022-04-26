import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/photos",
});

export const getCards = () => {
  return instance.get("?_limit=24").then((response) => {
    return response.data;
  });
};

export const getDetails = (id) => {
  return instance.get(`/${id}`).then((response) => {
    return response.data;
  });
};

// `${id}`
