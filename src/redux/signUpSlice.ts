import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

import { signup } from "../api/signupApi";

import {User,AuthState} from "../types/signupCredentails";


const initialState: AuthState = {
      user: null,
      isLoading: false,
      error: null,
    };


export const signupUser = createAsyncThunk('/auth/signup', async (userData: User, thunkAPI) => {
      try {
        const response = await signup(userData);
        
         
         console.log(response);
         
        return response?.data as User;
      } catch (error) {
        return thunkAPI.rejectWithValue((error as Error).message);
      }
    });

    const signupSlice = createSlice({
      name: 'auth',
      initialState,
      reducers: {},
      extraReducers: (builder) => {
        builder
          .addCase(signupUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(signupUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user=action.payload??null;
          })
          .addCase(signupUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
          });
      },
    });

    export default signupSlice.reducer;