import { Types } from "../constants/types";

const initialState = {
  market: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.MARKET_CURRENCIES:
      // console.log(action.payload);+
      return {
        ...state,
        market: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
