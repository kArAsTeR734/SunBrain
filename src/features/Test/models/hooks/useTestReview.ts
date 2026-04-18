import { useQuery } from '@tanstack/react-query';
import { KnowledgeTestService } from '@/api/services/KnowledgeTestService.ts';

export const useTestReview = (testId: number) => {
  return useQuery({
    queryKey: ['test', 'review'],
    queryFn: () => KnowledgeTestService.getTestReview({ testId }),
    retry:3,
    enabled:!!testId,
    staleTime: 5 * 60 * 1000,
  });
};
