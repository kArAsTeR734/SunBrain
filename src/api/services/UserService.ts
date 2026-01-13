import {api} from '../config/api.config.ts';
import type {ProfileData} from '../types/api-types.ts';

export class UserService {
  public static async getUserInfo(): Promise<ProfileData> {
    const response = await api.get('/api/profile/me');
    return response.data;
  }

  public static async uploadAvatar(file: File): Promise<{ avatarUrl: string }> {
    const formData = new FormData();
    formData.append('avatar', file);

    const token = localStorage.getItem('accessToken');

    const response = await api.post('/api/profile/me/avatar', formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.data;
  }

  public static async deleteAvatar(): Promise<void> {
    const token = localStorage.getItem('accessToken');

    await api.delete('/api/profile/me/avatar', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  }
}
