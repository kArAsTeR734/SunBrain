import { RouteObject } from 'react-router-dom';
import StudentObjectCatalogPage from '../../../pages/StudentObjectCatalog';
import StudentPersonalAccountPage from '../../../pages/StudentPersonalAccoutn';
import HomePage from '../../../pages/HomePage';
import LoginPage from '../../../pages/LoginPage';
import RegistrationPage from '../../../pages/RegistrationPage';
import StudentCalendarPage from "../../../pages/StudentPersonalCalendar";
import KnowledgeTest from "@/features/Test/KnowledgeTest/KnowledgeTest.tsx";
import StudentHomeworkPage from "@/pages/StudentHomework";
import NotFound from '@/pages/NotFound';
import { THEMES_BY_SUBJECT } from '@/models/Themes.ts';
import CatalogObjectCards from '@widgets/ObjectsCatalog/CatalogObjectCards/CatalogObjectCards.tsx';
import CatalogLayout from '@shared/layouts/СatalogLayout/CatalogLayout.tsx';
import TaskThemeList from '@widgets/ObjectsCatalog/TaskThemeList/TaskThemeList.tsx';
import TaskList from '@features/HomeworkTasks/HomeworkList/HomeworkList.tsx';

export type AppRouteHandle = {
  breadcrumb?: string | ((_match: any) => string);
};

export type AppRouteObject = RouteObject & {
  handle?: AppRouteHandle;
  children?: AppRouteObject[];
};

type SubjectParams = {
  subjectId: SubjectPath;
  themeId?: string;
};

export const CATALOG_ITEMS = [
  { id: 'ephysic', path: 'ephysic', title: 'ЕГЭ Физика' },
  { id: 'emath', path: 'emath', title: 'ЕГЭ Математика' },
  { id: 'ophysic', path: 'ophysic', title: 'ОГЭ Физика' },
  { id: 'omath', path: 'omath', title: 'ОГЭ Математика' },
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
    SUBJECT: (subjectId: SubjectPath) => `/student/catalog/${subjectId}`,
    HOMEWORK: `/student/homework`,
  },
  TEST:'/test',
  NOT_FOUND:'*'
} as const;

export const getRoutesConfig = (): AppRouteObject[] => [
  {
    path: PATHS.HOME,
    element: <HomePage />,
    handle: {
      breadcrumb: "Главная"
    }
  },
  {
    path: PATHS.LOGIN,
    element: <LoginPage />,
    handle: {
      breadcrumb: "Вход"
    }
  },
  {
    path: PATHS.REGISTRATION,
    element: <RegistrationPage />,
    handle: {
      breadcrumb: "Регистрация"
    }
  },
  {
    path: PATHS.STUDENT.ACCOUNT,
    element: <StudentPersonalAccountPage />,
    handle: {
      breadcrumb: "Личный кабинет"
    }
  },
  {
    path: `${PATHS.STUDENT.CATALOG}`,
    element: <StudentObjectCatalogPage />,
    handle: {
      breadcrumb: "Каталог заданий"
    },
    children: [
      {
        index:true,
        element:<CatalogObjectCards/>,
      },
      {
        path:':subjectId',
        element: <CatalogLayout/>,
        handle: {
          breadcrumb: (match: { params: SubjectParams }) => {
            const subject = CATALOG_ITEMS.find(
              item => item.path === match.params.subjectId
            );

            return subject ? subject.title : 'Предмет';
          }
        },
        children: [
          {
            index: true,
            element: <TaskThemeList />
          },
          {
            path: ":themeId",
            element: <TaskList />,
            handle: {
              breadcrumb: (match: { params: SubjectParams }) => {
                const { subjectId, themeId } = match.params;
                const theme = THEMES_BY_SUBJECT[subjectId]
                  .find(theme => theme.themeNumber === match.params.themeId);
                return theme ? `Задания по теме ${theme.themeTitle}` : `Тема ${themeId}`;
              }
            }
          }
        ]
      }
    ]
  },
  {
    path: PATHS.STUDENT.CALENDAR,
    element: <StudentCalendarPage />,
    handle: {
      breadcrumb: "Календарь заданий"
    }
  },
  {
    path: PATHS.STUDENT.HOMEWORK,
    element: <StudentHomeworkPage />,
    handle: {
      breadcrumb: "Каталог предметов"
    },
    children: [
      {
        path: ":subjectId",
        element: <StudentHomeworkPage />,
        handle: {
          breadcrumb: (match: { params: SubjectParams }) => {
            const subject = CATALOG_ITEMS.find(
              item => item.path === match.params.subjectId
            );

            return subject?.title ?? "Предмет";
          }
        }
      },
      {
        path: ":subjectId/:themeId",
        element: <StudentHomeworkPage />,
        handle: {
          breadcrumb: (match: { params: SubjectParams }) => {
            const { subjectId, themeId } = match.params;
            const theme = THEMES_BY_SUBJECT[subjectId]
              .find(theme => theme.themeNumber === match.params.themeId);
            return theme ? `Задания по теме ${theme.themeTitle}` : `Тема ${themeId}`;
          }
        }
      }
    ]
  },
  {
    path: PATHS.TEST,
    element: <KnowledgeTest />,
    handle: {
      breadcrumb: "Тестирование"
    }
  },
  {
    path: PATHS.NOT_FOUND,
    element: <NotFound />
  }
];