import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:8000/sushi";

export const fetchSushi = createAsyncThunk(
  "sushi/fetchAll",
  async (_, thunkApi) => {
    try {
      const resp = await axios.get("/");
      console.log(resp.data)
      return resp.data;
    } catch (error) {
      console.log(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
