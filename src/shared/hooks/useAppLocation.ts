import {useLocation} from "react-router-dom";
import getSubjectTitle from '@/utils/getSubjectTitle.ts';
import { getSubjectIdFromLocation } from '@/utils/getSubjectDataFromLocation.ts';
import { getSubjectTheme } from '@/utils/getSubjectTheme.ts';

export const useAppLocation = () => {
  const location = useLocation();
  const subject = getSubjectIdFromLocation(location.pathname);
  const profilePathLinkList = ['Личный кабинет']

  switch (location.pathname) {
    case '/student/catalog':
      return [...profilePathLinkList,'Каталог заданий'];
    case '/student/calendar':
      return [...profilePathLinkList,'Каледарь заданий'];
    case `/student/homework/${subject?.subjectId}`:
      return [...profilePathLinkList,`Каталог заданий по предмету ${getSubjectTitle(subject?.subjectId)}`];
    case `/student/homework/${subject?.subjectId}/${subject?.subjectTheme}`:
      return [...profilePathLinkList,`Каталог заданий по предмету ${getSubjectTitle(subject?.subjectId)}`, `Задания по теме ${getSubjectTheme(subject?.subjectId,subject?.subjectTheme)}`];
    case '/student/homework':
      return [...profilePathLinkList,`Каталог заданий по предмету`];
    default:
      return profilePathLinkList;
  }
}