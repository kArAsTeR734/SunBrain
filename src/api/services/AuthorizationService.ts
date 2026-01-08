import { authApi } from '../config/api.config.ts';
import {
  LoginRequestData,
  LoginReturnData, RefreshDataInterface,
  RegistrationRequestData
} from '../types/api-types.ts';

export class AuthorizationService {
  public static async login(
    loginData: LoginRequestData,
  ): Promise<LoginReturnData> {
    const response = await authApi.post('/api/auth/login', loginData);
    return response.data;
  }

  public static async register(
    registerData: RegistrationRequestData,
  ): Promise<void> {
    const response = await authApi.post('/api/auth/register', registerData);

    return response.data;
  }

  public static async refresh(): Promise<RefreshDataInterface> {
    const response = await authApi.post('/api/auth/refresh');
    return response.data;
  }

  public static async logout(): Promise<void> {
    const response = await authApi.post(
      '/api/auth/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      },
    );
    localStorage.removeItem('access_token');

    return response.data;
  }
}
