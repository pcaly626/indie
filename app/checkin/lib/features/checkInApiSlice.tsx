import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchAddCheckin } from "./checkInAPI";

export interface PayLoad {
    email: string;
    address: string;
    Interval: number;
}

export interface CheckInSliceState {
  email: string;
  address: string;
  Interval: number;
  status: 'loading' | "idle" | "failed"
}

const initialState: CheckInSliceState = {
    email: '',
    address: '',
    Interval: 0,
    status: 'idle'
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const checkInSlice = createAppSlice({
  name: "checkin",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
        // Use the `PayloadAction` type to declare the contents of `action.payload`
    incrementByAmount: create.reducer(
        (state, action: PayloadAction<PayLoad>) => {
            state.email = action.payload.email;
            state.address = action.payload.address;
            state.Interval = action.payload.Interval;
        },
        ),
    addCheckIn: create.asyncThunk(
      async (payload: PayLoad) => {
        const response = await fetchAddCheckin(payload.email, payload.address, payload.Interval);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.email += action.payload;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      },
    ),
  }),
});

// Action creators are generated for each case reducer function.
export const { addCheckIn } = checkInSlice.actions;
