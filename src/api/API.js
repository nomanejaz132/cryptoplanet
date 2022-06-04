import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://3.135.18.200:5000"
      : process.env.REACT_APP_BASE_URL,
  responseType: "json",
});
