export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  isActivated: boolean;
  image: string;
  dateRegistered: string;
  roles: string[];
  isEmailConfirmed: boolean;
}

export interface UserState {
  user?: User;
  errorMessage?: string;
  role?: string;
  status?: 'idle' | 'loading' | 'success' | 'error'
}

export interface UserRegister {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserLog {
  username: string;
  password: string;
}

export interface UserEddit {
  id: number;
  firstName: string;
  lastName: string;
}

export interface ChangePwd {
  userId: string;
  password2: string;
}

export interface RegistrationError {
  message?: string
  errors?: { 
    [key: string]: string; 
  }
}
