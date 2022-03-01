import { createSlice, AnyAction } from '@reduxjs/toolkit';

const initialState = {};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {},
});

export const { logout } = slice.actions;

export default slice.reducer;
