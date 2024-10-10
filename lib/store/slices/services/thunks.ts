import { API_END_POINTS, BASE_URL, fetchData } from "@/utilities/api/apiConfig";
import { Service } from "@/utilities/commonInterface/commonInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async (_, { rejectWithValue }) => {
    try {
      return fetchData<Service[]>(
        {},
        {},
        `data/${API_END_POINTS.SERVICES}`,
        BASE_URL
      );
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
