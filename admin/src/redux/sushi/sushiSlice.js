import { createSlice } from "@reduxjs/toolkit";
import { addSushi, deleteSushi, fetchSushi, updateSushi } from "./operations";

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
    isLoading: false,
    error: null,
    name: "",
    text: "",
    price: "",
    img: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setImg: (state, action) => {
      state.img = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSushi.pending, handlePending)
      .addCase(fetchSushi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.items = action.payload;
      })
      .addCase(fetchSushi.rejected, handleReject)
      .addCase(addSushi.pending, handlePending)
      .addCase(addSushi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.items.push(action.payload);
      })
      .addCase(addSushi.rejected, handleReject)
      .addCase(deleteSushi.pending, handlePending)
      .addCase(deleteSushi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;

        const index = state.items.findIndex(
          (item) => item._id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteSushi.rejected, handleReject)
      .addCase(updateSushi.pending, handlePending)
      .addCase(updateSushi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;

        const updatedSushi = action.payload;

        const index = state.items.findIndex(
          (item) => item._id === updatedSushi.id
        );

        if (index !== -1) {
          state.items[index] = updatedSushi;
        }
      })
      .addCase(updateSushi.rejected, handleReject);
  },
});

export const { setImg, setName, setPrice, setText } = sushiSlice.actions;
export const sushiTask = sushiSlice.reducer;
