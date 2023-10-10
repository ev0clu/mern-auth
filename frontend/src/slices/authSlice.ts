import { createSlice } from '@reduxjs/toolkit';

interface InitialStateProps {
  userInfo: {
    name: string;
    email: string;
    password: string;
  } | null;
}

const initialState: InitialStateProps = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')!)
    : null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem(
        'userInfo',
        JSON.stringify(action.payload)
      );
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    }
  }
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
