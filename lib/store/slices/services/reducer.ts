import { ServiceState } from "@/utilities/commonInterface/commonInterface";
import { createSlice } from "@reduxjs/toolkit";
import { fetchServices } from "./thunks";

const initialState: ServiceState = {
  services: [],
  loading: false,
  error: null,
};

const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    addServices: (state, action) => {
      state.services = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        console.log("services", action.payload.data);
        state.services = action.payload.data; // Assuming payload is an array of services
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch services";
      });
  },
});

export const { clearError, addServices } = serviceSlice.actions;
export default serviceSlice.reducer;
