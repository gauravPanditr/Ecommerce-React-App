import axios from 'axios';
import { SIGNUP_SUCCESS, SIGNUP_FAIL } from './auth/authtypes';
import { Dispatch } from 'react';


interface SignupSuccessAction {
  type: typeof SIGNUP_SUCCESS;
  payload: string;
}

interface SignupFailAction {
  type: typeof SIGNUP_FAIL;
  payload: string;
}

type AuthAction = SignupSuccessAction | SignupFailAction;

export const signup = (email: string, username: string, password: string) => async (dispatch:Dispatch<AuthAction>) => {
      try {
        const response = await axios.post('https://fakestoreapi.com/users', {
          email,
          username,
          password,
        });
            dispatch({type:SIGNUP_SUCCESS,payload:response.data})
      } catch (error) {
            console.error('Signup failed:', error);
           // dispatch({type:SIGNUP_FAIL,payload:error.message})
      }
}