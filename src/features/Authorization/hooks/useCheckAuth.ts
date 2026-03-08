import { useQuery } from '@tanstack/react-query';
import { AuthorizationService } from '@/api/services/AuthorizationService.ts';
import { userSlice } from '@app/store/reducers/UserSlice.ts';
import { useAppDispatch } from '@shared/hooks/redux.ts';

export const useCheckAuth = () => {
  const { setAuth, setUser } = userSlice.actions;
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['checkAuth'],
    queryFn: async () => {
      const response = await AuthorizationService.refresh();
      console.log(response);
      dispatch(setAuth(true));
      dispatch(setUser(response.user));
      localStorage.setItem('access_token', response.accessToken);
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    enabled: false,
  });
};
