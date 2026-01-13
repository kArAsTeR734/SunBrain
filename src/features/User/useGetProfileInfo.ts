import { useQuery } from "@tanstack/react-query";
import { UserService } from "@/api/services/UserService.ts";
import { userSlice } from "@/app/store/reducers/UserSlice.ts";
import { useAppDispatch } from "@/shared/hooks/redux.ts";

export const useGetProfileInfo = () => {
  const { setUser,setLeaderboard } = userSlice.actions;
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      try {
        const userData = await UserService.getUserInfo();
        if (userData.data?.user?.avatarUrl) {
          let avatarUrl = userData.data.user.avatarUrl;

          if (avatarUrl.startsWith('/uploads/')) {
            userData.data.user.avatarUrl = `http://localhost:5000${avatarUrl}`;
          }
        }
        const user = userData.data.user;
        const leaderboard = userData.data.leaderboard;
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
    retry: false,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    enabled: !!localStorage.getItem('access_token'),
  });
};