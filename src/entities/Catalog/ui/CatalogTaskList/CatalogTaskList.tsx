import { useHistory, useParams } from 'react-router-dom';
import { useCatalogTasks } from '@features/Catalog';
import { Loader, TaskItem, TaskList } from '@shared/ui';

export const CatalogTaskList = () => {
  const { themeId } = useParams();
  const history = useHistory();
  const { data: catalogTasks, isLoading } = useCatalogTasks(Number(themeId));

  if(!catalogTasks){
    return (
      <>
        <h1>Заданий по этой теме пока не появилось</h1>
        <button onClick={() => history.goBack()}></button>
      </>
    )

  }

  return (
    <>
      <TaskList>
      {isLoading && <Loader />}
        {catalogTasks.map((task) => (
          <TaskItem isHomeworkTask={true} key={task.number} task={task} />
        ))}
      </TaskList>
    </>
  );
};

