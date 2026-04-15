import { AIService } from '@/api/services/AITaskService.ts';

export const useGetTaskFromAI = async () => {
  const result = await AIService.test();
  console.log(result)

  return result
}