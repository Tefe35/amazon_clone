import axios from "axios";

const instance = axios.create({
  // The API (cloud function) URL
  baseURL: "https://us-central1-clone-73e04.cloudfunctions.net/api",
});

export default instance;
