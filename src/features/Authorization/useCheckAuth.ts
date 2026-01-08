// hooks/useAuthQuery.ts
import { useQuery } from '@tanstack/react-query';
import { AuthorizationService } from '@/api/services/AuthorizationService.ts';

export const useAuthQuery = () => {
  return useQuery({
    queryKey: ['checkAuth'],
    queryFn: async () => {
      const token = localStorage.getItem('access_token');

      if (!token) {
        console.log('Токена нет, пытаемся обновить...');
        try {
          const data = await AuthorizationService.refresh();
          localStorage.setItem('access_token', data.accessToken);

          return {
            isAuthenticated: true,
            accessToken: data.accessToken,
            message: 'Token refreshed successfully'
          };
        } catch (error) {
          console.log('Refresh failed:', error);
          return {
            isAuthenticated: false,
            accessToken: null,
            message: 'No token available'
          };
        }
      }
      return {
        isAuthenticated: true,
        accessToken: token,
        message: 'Token exists'
      };
    },
    retry: false,
    staleTime: 5 * 60 * 1000,

    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};