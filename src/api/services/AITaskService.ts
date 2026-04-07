import { AxiosResponse } from 'axios';
import {
  GenerateTaskRequest,
  GenerateTaskResponse,
} from '../types/ai-types.ts';
import { api } from '@/api/config/api.config.ts';

export class AIService {
  public static async generateTask(
    generateTaskRequest: GenerateTaskRequest,
  ): Promise<GenerateTaskResponse> {
    try {
      const response: AxiosResponse<GenerateTaskResponse> = await api.post(
        '/api/ai/generate-task',
        generateTaskRequest,
      );

      return response.data;
    } catch (error: any) {
      console.error('Ошибка генерации задания', error);
      throw error;
    }
  }
}
