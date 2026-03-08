export interface LeaderboardUser {
  fullName: string,
  points: number,
  position: number,
}

export interface ProfileUser{
  avatarUrl:string,
  id: number,
  email: string,
  fullName: string,
  role: string,
}

export interface ProfileDataInterface {
  user:ProfileUser,
  leaderboard: {
    topUsers: LeaderboardUser[],
    currentUser: {
      fullName: string,
      points: number,
      position: number,
    },
  },
}

export type ProfileData = ProfileDataInterface;