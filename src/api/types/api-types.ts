export interface LeaderboardUser {
  fullName: string,
  points: number,
  position: number,
}

export interface ProfileDataInterface {
  success:boolean,
  data:{
    user: {
      avatarUrl:string,
      id: number,
      email: string,
      fullName: string,
      role: string,
    },
    leaderboard: {
      topUsers: LeaderboardUser[],
      currentUser: {
        fullName: string,
        points: number,
        position: number,
      },
    },
  }
}
export interface UserData{
  id:number,
  email:string,
  fullName:string,
  role:string,
}

export interface RegistrationRequestDataInterface {
  email: string,
  password: string,
  fullName: string,
  role?: string,
}

export interface LoginReturnDataInterface {
  success:boolean,
  message:string,
  data:{
    user:UserData,
    accessToken:string
  }
}

export interface RefreshDataInterface {
  accessToken:string,
}

export type LoginRequestData = Omit<
  RegistrationRequestData,
    'role' | 'fullName'
>;

export type LoginReturnData = LoginReturnDataInterface;

export type RegistrationRequestData = RegistrationRequestDataInterface;

export type ProfileData = ProfileDataInterface;
