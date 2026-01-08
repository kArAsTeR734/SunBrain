import { api } from '../config/api.config.ts';
import type { ProfileData } from '../types/api-types.ts';

export class UserService {
  public static async getUserInfo(): Promise<ProfileData> {
    const response = await api.get('/api/profile/me');
    return response.data;
  }
}
