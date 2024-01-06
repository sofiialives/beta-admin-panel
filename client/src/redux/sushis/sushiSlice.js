import { createSlice } from "@reduxjs/toolkit";
import { fetchSushi } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = false;
};

const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const sushiSlice = createSlice({
  name: "sushis",
  initialState: {
    items: [],
    error: null,
    isLoading: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchSushi.pending, handlePending)
      .addCase(fetchSushi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchSushi.rejected, handleReject),
});

export const sushiTasks = sushiSlice.reducer;
