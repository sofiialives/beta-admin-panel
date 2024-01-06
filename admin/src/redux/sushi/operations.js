import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:8000/sushi";

export const fetchSushi = createAsyncThunk(
  "sushi/fetchAll",
  async (_, thunkApi) => {
    try {
      const resp = await axios.get("/");
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      console.log(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addSushi = createAsyncThunk(
  "sushi/addSushi",
  async (newContact, thunkApi) => {
    try {
      const resp = await axios.post("/", newContact);
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteSushi = createAsyncThunk(
  "sushi/deleteSushi",
  async (sushiId, thunkApi) => {
    try {
      const resp = await axios.delete(`/${sushiId}`);
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateSushi = createAsyncThunk(
  "sushi/updateSushi",
  async ({ sushiId, ...data }, thunkApi) => {
    try {
      const resp = await axios.patch(`/${sushiId}`, data);
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
