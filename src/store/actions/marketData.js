import { Types } from "../constants/types";

export const fetchMarket = () => async (dispatch) => {
  try {
    const response = await API.get();
    dispatch({ type: Types.MARKET_CURRENCIES, payload: response.data });
    return { status: response.status, data: response.data };
  } catch (err) {
    console.log(err);
  }
};
