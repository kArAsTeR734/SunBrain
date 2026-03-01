import { RouteObject } from 'react-router-dom';
import StudentObjectCatalogPage from '../../pages/StudentObjectCatalog';
import StudentPersonalAccountPage from '../../pages/StudentPersonalAccoutn';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage';
import StudentCalendarPage from "../../pages/StudentPersonalCalendar";
import KnowledgeTest from "@/features/Test/KnowledgeTest/KnowledgeTest.tsx";
import StudentHomeworkPage from "@/pages/StudentHomework";

export const CATALOG_ITEMS = [
  { id: 'ephysic', path: 'ephysic', title: 'ЕГЭ Физика' },
  { id: 'emath', path: 'emath', title: 'ЕГЭ Математика' },
  { id: 'ophysic', path: 'ophysic', title: 'ОГЭ Физика' },
  { id: 'omath', path: 'omath', title: 'ОГЭ Математика' },
] as const;

export type SubjectPath = (typeof CATALOG_ITEMS)[number]['path'];

export type SubjectTitle = (typeof CATALOG_ITEMS)[number]['title']

export const PATHS = {
  HOME: '/',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  STUDENT: {
    CATALOG: '/student/catalog',
    CALENDAR: '/student/calendar',
    ACCOUNT: '/student/account',
    SUBJECT: (subjectId: SubjectPath) => `/student/homework/${subjectId}`,
    HOMEWORK: `/student/homework`,
    SUBJECT_HOMEWORK: (subjectId: SubjectPath, themeId?: string) => `/student/homework/${subjectId}/${themeId}`
  },
  TEST:'/test'
} as const;

export const getRoutesConfig = (): RouteObject[] => [
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
  },
  {
    path: `${PATHS.STUDENT.HOMEWORK}/*`,
    element: <StudentHomeworkPage />,
  },
  {
    path: PATHS.STUDENT.CALENDAR,
    element: <StudentCalendarPage />,
  },
  {
    path: PATHS.TEST,
    element: <KnowledgeTest/>
  }
];
