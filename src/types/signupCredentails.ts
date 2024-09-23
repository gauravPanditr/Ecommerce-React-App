export interface User {
      username: string;
      email: string;
      password: string;
    }
    
    export interface AuthState {
      user: User | null;
      isLoading: boolean;
      error: string | null;
    }
    