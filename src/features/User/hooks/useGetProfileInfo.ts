import { useQuery } from "@tanstack/react-query";
import { UserService } from "@/api/services/UserService.ts";
import { userSlice } from "@app/store/reducers/UserSlice.ts";
import { useAppDispatch } from "@shared/hooks/redux.ts";

export const useGetProfileInfo = () => {
  const {setUser,setLeaderboard } = userSlice.actions;
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      try {
        const profileData = await UserService.getUserInfo();
        if (profileData?.user?.avatarUrl) {
          let avatarUrl = profileData.user.avatarUrl;

          if (avatarUrl.startsWith('/uploads/')) {
            profileData.user.avatarUrl = `http://localhost:5000${avatarUrl}`;
          }
        }
        const user = profileData.user;
        const leaderboard = profileData.leaderboard;
        dispatch(setUser(user));
        dispatch(setLeaderboard(leaderboard.currentUser))
        return {
          user,
          leaderboard
        };
      } catch (error) {
        if(error instanceof Error) {
          console.error('Ошибка получения информации о пользователе:', error);
          throw error;
        }
      }
    },
    retry: 1,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    enabled: !!localStorage.getItem('access_token'),
  });
};