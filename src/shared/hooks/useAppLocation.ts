import {useLocation, useParams} from "react-router-dom";

export const useAppLocation = () => {
  const location = useLocation();
  const { subjectId, themeId } = useParams<{
    subjectId: string;
    themeId?: string;
  }>();

  const profilePathLinkList = ['Личный кабинет']
  switch (location.pathname) {
    case '/student/catalog':
      return [...profilePathLinkList,'Каталог заданий'];
    case '/student/catalog/*':
      return [...profilePathLinkList,`Каталог заданий по предмету ${subjectId}`];
    case '/student/calendar':
      return [...profilePathLinkList,'Каледарь заданий'];
    case '/student/homework':
      return [...profilePathLinkList,`Каталог заданий по предмету ${subjectId}`, `Задания по теме ${themeId}`];
    default:
      return profilePathLinkList;
  }
}