export interface UserInfoInterface{
  id:number,
  email:string,
  fullName:string,
  role:string,
  createdAt:Date,
}

export interface RegistrationRequestDataInterface {
  login: string;
  password: string;
  passwordConfirmed: string;
}

export interface LoginReturnDataInterface {
  accessToken: string;
}

export type LoginRequestData = Omit<
  RegistrationRequestData,
  'passwordConfirmed'
>;

export type LoginReturnData = LoginReturnDataInterface;

export type UserInfo = UserInfoInterface;

export type RegistrationRequestData = RegistrationRequestDataInterface;
