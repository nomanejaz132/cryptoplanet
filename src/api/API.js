import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "https://api.coingecko.com/api/v3"
      : process.env.REACT_APP_BASE_URL,
  responseType: "json",
});
