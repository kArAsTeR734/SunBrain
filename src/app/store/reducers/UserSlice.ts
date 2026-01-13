import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {AuthorizationService} from "@/api/services/AuthorizationService.ts";
import {LeaderboardUser, UserData} from "@/api/types/api-types.ts";

export interface UserState {
  isAuth: boolean;
  user: UserData | null;
  leaderboard: LeaderboardUser | null;
}

const initialState: UserState = {
  isAuth: false,
  user: null,
  leaderboard: null
};

export const userSlice = createSlice({
  name: 'transcription',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
    },
    setLeaderboard: (state, action: PayloadAction<LeaderboardUser>) => {
      state.leaderboard = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      AuthorizationService.logout();
      state.user = null;
    },
    sameAction: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
    }
  },
});

export default userSlice.reducer;
