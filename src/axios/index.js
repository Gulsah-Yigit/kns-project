import axios from "axios";
import { dummyData } from "./dummy";

const instance = axios.create({
  baseURL: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards",
  headers: {
    "X-RapidAPI-Key": "5e4f3fab36msh366c40f17d0033ep1d11d1jsne16b83dec168",
    "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  },
});

export const fetchData = async (callback) => {
  try {
    const { data } = await instance.get();

    callback(data);
  } catch (error) {
    callback(dummyData);
    console.log(error);
  }
};

export const searchCard = async (key, setData, setIsLoading) => {
  try {
    setIsLoading(true);
    const { data } = await instance.get(`/search/${key}`);

    setData(data);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};
