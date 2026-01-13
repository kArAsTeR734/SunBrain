import {useQuery} from "@tanstack/react-query";
import {AuthorizationService} from "@/api/services/AuthorizationService.ts";

export const useAuthQuery = () => {
  return useQuery({
    queryKey: ['checkAuth'],
    queryFn: async () => {
      const accessToken = localStorage.getItem('access_token');

      if (accessToken && accessToken !== 'undefined') {
        try {
          const isExpired = checkTokenExpiration(accessToken);

          if (!isExpired) {
            return {
              isAuthenticated: true,
              token: accessToken
            };
          }
        } catch (error) {
          console.log('Access token invalid:', error);
          localStorage.removeItem('access_token');
        }
      }

      const refreshToken = localStorage.getItem('refresh_token');

      if (!refreshToken || refreshToken === 'undefined') {
        console.log('Нет refresh токена, пользователь не авторизован');
        return {
          isAuthenticated: false,
          reason: 'no_tokens'
        };
      }

      try {
        console.log('Пытаемся обновить токены...');
        const data = await AuthorizationService.refresh();

        localStorage.setItem('access_token', data.accessToken);


        return {
          isAuthenticated: true,
          token: data.accessToken
        };
      } catch (error) {
        console.log('Refresh failed:', error);

        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        return {
          isAuthenticated: false,
          reason: 'refresh_failed'
        };
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    enabled: true,
  });
};

const checkTokenExpiration = (token: string): boolean => {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expirationTime = payload.exp * 1000;
    const currentTime = Date.now();

    return expirationTime - currentTime < 30000;
};