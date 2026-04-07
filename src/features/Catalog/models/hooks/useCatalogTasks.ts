import { useQuery } from '@tanstack/react-query';
import { TaskService } from '@/api/services/TaskService.ts';

export const useCatalogTasks = (themeId:number) => {
  return useQuery({
    queryKey: ['catalogTasks'],
    queryFn: () => TaskService.getCatalogTasks(themeId),
    staleTime: 60 * 1000 * 10,
  })
}