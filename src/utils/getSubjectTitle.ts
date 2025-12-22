import { SubjectId } from '../models/Themes.ts';

function getSubjectTitle(subjectId?: SubjectId) {
  const titles = {
    emath: 'ЕГЭ Математика',
    omath: 'ОГЭ Математика',
    ephysic: 'ЕГЭ Физика',
    ophysic: 'ОГЭ Физика',
  };

  return subjectId ? titles[subjectId] : 'Выберите предмет';
}

export default getSubjectTitle;
