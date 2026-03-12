import axios, { AxiosResponse } from 'axios';
import {
  GenerateTaskRequest,
  GenerateTaskResponse,
} from '../types/ai-types.ts';
import { api } from '@/api/config/api.config.ts';

export class AITaskService {
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

export class aiTaskService {
  async generateTask(
    request: GenerateTaskRequest,
  ): Promise<GenerateTaskResponse> {
    try {
      const response: AxiosResponse<GenerateTaskResponse> = await axios.post(
        `http://localhost:5000/api/ai-tasks/generate-test`,
        request,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      return response.data;
    } catch (error: any) {
      console.error('Ошибка генерации задания:', error);
      throw error;
    }
  }
}
