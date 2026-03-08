import { AppDispatch } from '@app/store/store.ts';
import { AuthorizationService } from '@/api/services/AuthorizationService.ts';
import { userSlice } from '@app/store/reducers/UserSlice.ts';

export const checkAuth = () => async (dispatch: AppDispatch) => {
  const { setLoading, setAuth, setUser } = userSlice.actions;
  try {
    dispatch(setLoading(true));

    const response = await AuthorizationService.refresh();
    localStorage.setItem('access_token', response.accessToken);

    dispatch(setUser(response.user));
    dispatch(setAuth(true));

  } catch (error) {
    dispatch(setAuth(false));
    dispatch(setUser(null));

  } finally {
    dispatch(setLoading(false));
  }
};