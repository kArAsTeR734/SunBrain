import { useMutation } from '@tanstack/react-query';
import { CheckAnswerPayload } from '@entities/Homework/model/types.ts';
import { HomeworkService } from '@/api/services/HomeworkService.ts';

export const useCheckAnswer = ({ taskId, answer }: CheckAnswerPayload) => {
  useMutation({
    mutationKey: ['checkAnswer'],
    mutationFn: () => HomeworkService.checkHomeworkAnswer(taskId, answer),
    onSuccess: () => {

    }

  });
};