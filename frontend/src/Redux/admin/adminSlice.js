import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the base URL for the backend
const BACKEND_URL = "https://gymsmmsystemtask.onrender.com//api"; // Replace with your deployed backend URL

// Async thunk for fetching trainers
export const fetchTrainers = createAsyncThunk(
  "fetchTrainers",
  async (_, { rejectWithValue }) => {
    try {
      const { token } = JSON.parse(localStorage.getItem("user")); // Get token from localStorage
      console.log(token);
      const response = await axios.get(`${BACKEND_URL}/trainers`, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass token in headers
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching trainers");
    }
  }
);

// Async thunk for adding a trainer
export const addTrainer = createAsyncThunk(
  "addTrainer",
  async (trainer, { rejectWithValue }) => {
    try {
      const { token } = JSON.parse(localStorage.getItem("user")); // Get token from localStorage
      const response = await axios.post(`${BACKEND_URL}/trainers`, trainer, {
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-Type": "application/json",
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error adding trainer");
    }
  }
);

// Async thunk for deleting a trainer
export const deleteTrainer = createAsyncThunk(
  "deleteTrainer",
  async (id, { rejectWithValue }) => {
    try {
      const { token } = JSON.parse(localStorage.getItem("user"));
      await axios.delete(`${BACKEND_URL}/trainers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass token in headers
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error deleting trainer");
    }
  }
);

// Async thunk for fetching class schedules
export const fetchClassSchedules = createAsyncThunk(
  "fetchClassSchedules",
  async (_, { rejectWithValue }) => {
    try {
      const { token } = JSON.parse(localStorage.getItem("user")); // Get token from localStorage
      const response = await axios.get(`${BACKEND_URL}/schedules`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error fetching schedules"
      );
    }
  }
);

// Async thunk for adding a class schedule
export const addClassSchedule = createAsyncThunk(
  "addClassSchedule",
  async (schedule, { rejectWithValue }) => {
    try {
         const { token } = JSON.parse(localStorage.getItem("user")); // Get token from localStorage
         console.log(token)
      const response = await axios.post(`${BACKEND_URL}/schedules`, schedule, {
     
          headers: { Authorization: `Bearer ${token}` }
        
     
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error adding schedule");
    }
  }
);

// Initial state
const initialState = {
  trainers: [],
  classSchedules: [],
  loading: false,
  error: null,
};

// Create admin slice
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch trainers
    builder.addCase(fetchTrainers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchTrainers.fulfilled, (state, action) => {
      state.loading = false;
      state.trainers = action.payload;
    });
    builder.addCase(fetchTrainers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Add trainer
    builder.addCase(addTrainer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addTrainer.fulfilled, (state, action) => {
      state.loading = false;
      state.trainers.push(action.payload);
    });
    builder.addCase(addTrainer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Delete trainer
    builder.addCase(deleteTrainer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteTrainer.fulfilled, (state, action) => {
      state.loading = false;
      state.trainers = state.trainers.filter(
        (trainer) => trainer.id !== action.payload
      );
    });
    builder.addCase(deleteTrainer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Fetch class schedules
    builder.addCase(fetchClassSchedules.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchClassSchedules.fulfilled, (state, action) => {
      state.loading = false;
      state.classSchedules = action.payload;
    });
    builder.addCase(fetchClassSchedules.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Add class schedule
    builder.addCase(addClassSchedule.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addClassSchedule.fulfilled, (state, action) => {
      state.loading = false;
      state.classSchedules.push(action.payload);
    });
    builder.addCase(addClassSchedule.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default adminSlice.reducer;
