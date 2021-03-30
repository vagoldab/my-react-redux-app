import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../features/todo/todoSlice";
import weatherReducer from "../features/weather/weatherSlice";

export default configureStore({
  reducer: {
    todo: todoReducer,
    weather: weatherReducer
  },
});
