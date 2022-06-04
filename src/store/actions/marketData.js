import { Types } from "../constants/types";
import API from "../../api/API";

export const fetchMarket = () => async (dispatch) => {
  const config = {
    params: {
      vs_currency: "usd",
    },
  };
  try {
    const response = await API.get(`/coins/markets`, config);
    dispatch({ type: Types.MARKET_CURRENCIES, payload: response.data });
    return { status: response.status, data: response.data };
  } catch (err) {
    console.log(err);
  }
};
