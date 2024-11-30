import { configureStore } from "@reduxjs/toolkit";

import authReducer from '../../Redux/auth/authSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    // trainers: trainerReducer,
    // schedules: scheduleReducer,
  },
});

export default store;
