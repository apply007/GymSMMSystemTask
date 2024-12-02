import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/schedules";

// Async Thunks
export const fetchSchedules = createAsyncThunk("fetchSchedules", async (_, thunkAPI) => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const addSchedule = createAsyncThunk("addSchedule", async (scheduleData, thunkAPI) => {
  try {
    const response = await axios.post(API_URL, scheduleData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Slice
const scheduleSlice = createSlice({
  name: "schedules",
  initialState: {
    schedules: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchedules.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSchedules.fulfilled, (state, action) => {
        state.schedules = action.payload;
        state.loading = false;
      })
      .addCase(fetchSchedules.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addSchedule.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addSchedule.fulfilled, (state, action) => {
        state.schedules.push(action.payload);
        state.loading = false;
      })
      .addCase(addSchedule.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default scheduleSlice.reducer;
