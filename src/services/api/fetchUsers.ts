import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, FETCH_USERS } from "./fetchUsers.constans";

export const fetchUsers = createAsyncThunk(FETCH_USERS , async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
});
