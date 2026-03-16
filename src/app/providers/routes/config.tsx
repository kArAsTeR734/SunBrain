import { RouteObject } from 'react-router-dom';
import StudentObjectCatalogPage from '../../../pages/StudentObjectCatalog';
import StudentPersonalAccountPage from '../../../pages/StudentPersonalAccoutn';
import HomePage from '../../../pages/HomePage';
import LoginPage from '../../../pages/LoginPage';
import RegistrationPage from '../../../pages/RegistrationPage';
import StudentCalendarPage from '../../../pages/StudentPersonalCalendar';
import StudentHomeworkPage from '@/pages/StudentHomework';
import NotFound from '@/pages/NotFound';
import CatalogObjectCards from '@widgets/ObjectsCatalog/CatalogObjectCards/CatalogObjectCards.tsx';
import CatalogLayout from '@shared/layouts/СatalogLayout/CatalogLayout.tsx';
import TaskThemeList from '@widgets/ObjectsCatalog/TaskThemeList/TaskThemeList.tsx';
import HomeworkLayout from '@shared/layouts/HomeworkLayout/HomeworkLayout.tsx';
import KnowledgeTestPage from '@pages/KnowledgeTestPage';
import { StudentHomework } from '@/widgets/StudentHomework/ui/StudentHomework.tsx';
import HomeworkTaskList from '@features/HomeworkTasks/ui/HomeworkTaskList/HomeworkTaskList.tsx';
import CatalogTaskList from '@widgets/CatalogTaskList/CatalogTaskList.tsx';

export type AppRouteHandle = {
  breadcrumb?: string | ((_match: any) => string);
};

export type AppRouteObject = RouteObject & {
  handle?: AppRouteHandle;
  children?: AppRouteObject[];
};

export const CATALOG_ITEMS = [
  { id: 'ephysic', path: 'ephysic', title: 'ЕГЭ Физика' },
  { id: 'emath', path: 'emath', title: 'ЕГЭ Математика' },
  { id: 'ophysic', path: 'ophysic', title: 'ОГЭ Физика' },
  { id: 'omath', path: 'omath', title: 'ОГЭ Математика' }
] as const;

export type SubjectPath = (typeof CATALOG_ITEMS)[number]['path'];


export const PATHS = {
  HOME: '/',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  STUDENT: {
    CATALOG: '/student/catalog',
    CALENDAR: '/student/calendar',
    ACCOUNT: '/student/account',
    SUBJECT: (subjectId: string) => `/student/catalog/${subjectId}`,
    HOMEWORK_LINK: (id: string | number) => `/student/homework/${id}`,
    HOMEWORK: `/student/homework`
  },
  TEST: '/test',
  NOT_FOUND: '*'
} as const;

export const getRoutesConfig = (): AppRouteObject[] => [
  {
    path: PATHS.HOME,
    element: <HomePage />,
  },
  {
    path: PATHS.LOGIN,
    element: <LoginPage />,
  },
  {
    path: PATHS.REGISTRATION,
    element: <RegistrationPage />,
  },
  {
    path: PATHS.STUDENT.ACCOUNT,
    element: <StudentPersonalAccountPage />,
  },
  {
    path: `${PATHS.STUDENT.CATALOG}`,
    element: <StudentObjectCatalogPage />,
    children: [
      {
        index: true,
        element: <CatalogObjectCards />
      },
      {
        path: ':subjectId',
        element: <CatalogLayout />,
        children: [
          {
            index: true,
            element: <TaskThemeList />
          },
          {
            path: ':themeId',
            element: <CatalogTaskList />,
          }
        ]
      }
    ]
  },
  {
    path: PATHS.STUDENT.CALENDAR,
    element: <StudentCalendarPage />,
    handle: {
      breadcrumb: 'Календарь заданий'
    }
  },
  {
    path: PATHS.STUDENT.HOMEWORK,
    element: <StudentHomeworkPage />,
    children: [
      {
        index: true,
        element: <StudentHomework />
      },
      {
        path: ':homeworkId',
        element: <HomeworkLayout />,
        children: [
          {
            index: true,
            element: <HomeworkTaskList />,
          }
        ]
      }
    ]
  },
  {
    path: PATHS.TEST,
    element: <KnowledgeTestPage />
  },
  {
    path: PATHS.NOT_FOUND,
    element: <NotFound />
  }
];
