import { useMutation } from '@tanstack/react-query';
import { KnowledgeTestService } from '@/api/services/KnowledgeTestService.ts';

export const useFinishTestMutation = () => {
  return useMutation({
    mutationKey: ['test', 'finish'],
    mutationFn: (testId: { testId: number }) => {
      return KnowledgeTestService.finishTest(testId);
    },
    onError: (err: Error) => {
      console.log(err);
    },
  });
};
