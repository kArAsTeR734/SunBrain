import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {AuthorizationService} from "@/api/services/AuthorizationService.ts";
import {ProfileData} from "@/api/types/api-types.ts";

export interface UserState {
  isAuth: boolean;
  user: ProfileData | null;
}

const initialState: UserState = {
  isAuth: false,
  user: null,
};

export const userSlice = createSlice({
  name: 'transcription',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action: PayloadAction<ProfileData>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      AuthorizationService.logout();
      state.user = null;
    },
  },
});

export default userSlice.reducer;
