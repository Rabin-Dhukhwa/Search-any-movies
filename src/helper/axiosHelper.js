import axios from "axios";

//axios is Promise based HTTP client for the browser and node.js
// Axios is a popular JavaScript library that provides a simple and convenient way to make HTTP requests from web browsers or Node.js.
const apiUrl = "http://www.omdbapi.com/?apikey=ea9fbbc9&t=";

export const fetchData = async (str) => {
  try {
    const response = await axios(apiUrl + str);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
