export interface ILogin {
  email: string;
  password: string;
}

export interface ISignup {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  gender?: { label?: string; value?: string };
  confirmPassword: string;
}
