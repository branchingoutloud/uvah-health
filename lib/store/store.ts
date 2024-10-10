import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/counter/counterSlice";
import BlogsReducer from "./slices/blogs/reducer";
import ServiceReducer from "./slices/services/reducer";

export const makeStore = () => {
  return configureStore({
    reducer: {
      CounterReducer,
      BlogsReducer,
      ServiceReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
