import { api } from '../config/api.config.ts';
import { ProfileData } from '@entities/User/types.ts';
import { request } from '@shared/api/api-client.ts';

export class UserService {
  public static async getUserInfo(): Promise<ProfileData> {
    return request(api.get('/api/profile/me'));
  }

  public static async uploadAvatar(file: File): Promise<{ avatarUrl: string }> {
    const formData = new FormData();
    formData.append('avatar', file);

    const token = localStorage.getItem('accessToken');

    const response = await api.post('/api/profile/me/avatar', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.data;
  }

  public static async deleteAvatar(): Promise<void> {
    const token = localStorage.getItem('accessToken');

    await api.delete('/api/profile/me/avatar', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
