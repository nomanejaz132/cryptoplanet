import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["market"],
};

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));
