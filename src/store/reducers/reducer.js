import { Types } from "../constants/types";

const initialState = {
  market: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.MARKET_CURRENCIES:
      return {
        ...state,
        market: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
