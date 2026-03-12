import { useQuery } from '@tanstack/react-query';
import { useOutletContext } from 'react-router-dom';
import { HomeworkService } from '@/api/services/HomeworkService.ts';

export const useHomeworkTasks = () => {
  const { homeworkId } = useOutletContext<{ homeworkId: number }>();

  return useQuery({
    queryKey: ['my-homeworks', homeworkId],
    queryFn: () => HomeworkService.getUserHomeworkTasks(homeworkId),
    staleTime: 1000 * 60 * 5,
    enabled: !!localStorage.getItem('access_token'),
    refetchOnWindowFocus:false,
    select: data => data.tasks

  })
}