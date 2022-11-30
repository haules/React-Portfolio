import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {


    headers: {
      "X-RapidAPI-Key": "key",
      "X-RapidAPI-Host": "website from where you are taking the host",
    },

  });
  return data;
};
