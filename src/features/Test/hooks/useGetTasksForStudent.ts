import {useQuery} from "@tanstack/react-query";
import {AITaskService} from "@/api/services/AITaskService.ts";

export const useGetTasksForStudent = (studentId:number) => {
  const query = useQuery({
    queryKey:['studentTest'],
    queryFn: async () => {
      try{
        const failedTasks = useGetFailedTestTasks();

        const tasks = await AITaskService.generateTask()
      }
    },
    enabled:!!localStorage.getItem('access_token')
  })
}