import { useMutation } from '@tanstack/react-query';
import { AuthorizationService } from '@/api/services/AuthorizationService.ts';
import { userSlice } from '@/app/store/reducers/UserSlice.ts';
import { useAppDispatch } from '@/shared/hooks/redux.ts';

export const useLogin = () => {
  const {setAuth} = userSlice.actions;
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: AuthorizationService.login,
    onSuccess: (userData) => {
      console.log(userData);
      dispatch(setAuth(true));
      localStorage.setItem('access_token', userData.data.accessToken);
    },
    onError: (error) => {
      console.log(error, error.message);
    }
  });
};
