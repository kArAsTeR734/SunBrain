interface LeaderboardUser {
  fullName: string;
  points: number;
  position: number;
}

interface ProfileDataInterface {
  user: {
    id: number;
    email: string;
    fullName: string;
    role: string;
  };
  leaderboard: {
    topUsers: LeaderboardUser[];
    currentUser: {
      fullName: string;
      points: number;
    };
  };
}

export interface RegistrationRequestDataInterface {
  email: string,
  password: string,
  fullName: string,
  role?: string,
}

export interface LoginReturnDataInterface {
  accessToken: string;
}

export type LoginRequestData = Omit<
  RegistrationRequestData,
    'role' | 'fullName'
>;

export type LoginReturnData = LoginReturnDataInterface;

export type RegistrationRequestData = RegistrationRequestDataInterface;

export type ProfileData = ProfileDataInterface;
