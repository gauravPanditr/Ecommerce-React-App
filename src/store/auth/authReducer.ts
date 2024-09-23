// src/store/auth/authReducer.ts
import { SIGNUP_SUCCESS, SIGNUP_FAIL } from '../auth/authtypes';

interface AuthState {
  user: string | null;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  error: null,
};

export const authReducer = (state = initialState, action:any ) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
