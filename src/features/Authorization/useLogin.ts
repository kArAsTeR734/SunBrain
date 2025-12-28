import { useMutation } from '@tanstack/react-query';
import { AuthorizationService } from '@/api/services/AuthorizationService.ts';

export const useLogin = () => {
  return useMutation({
    mutationFn: AuthorizationService.login,
  });
};
