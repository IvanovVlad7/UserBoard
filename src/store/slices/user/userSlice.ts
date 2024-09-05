import { createSlice } from '@reduxjs/toolkit';
import { UsersState } from './userSlice.interfaces';
import { fetchUsers } from '../../../services/api/fetchUsers';
import { STATUS } from './userSlice.constant';

const initialState: UsersState = {
  data: [],
  status: STATUS.IDLE,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = STATUS.LOADING;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = STATUS.FAILED;
        state.error = action.error.message || 'Error loading users';
      });
  },
});

export default usersSlice.reducer;

