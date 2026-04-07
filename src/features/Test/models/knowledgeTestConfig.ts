import {
  KnowledgeTestSubject,
  KnowledgeTestSubjectId,
  KnowledgeTestTask,
} from '@features/Test/models/types.ts';

const DIFFICULTY_LEVELS = [1, 2, 3] as const;

export const KNOWLEDGE_TEST_SUBJECTS: KnowledgeTestSubject[] = [
  {
    id: 'emath',
    title: 'ЕГЭ Математика',
    examLabel: 'ЕГЭ',
    subjectLabel: 'Математика',
    examTaskCount: 19,
    estimatedDurationMinutes: 180,
  },
  {
    id: 'omath',
    title: 'ОГЭ Математика',
    examLabel: 'ОГЭ',
    subjectLabel: 'Математика',
    examTaskCount: 25,
    estimatedDurationMinutes: 235,
  },
  {
    id: 'ephysic',
    title: 'ЕГЭ Физика',
    examLabel: 'ЕГЭ',
    subjectLabel: 'Физика',
    examTaskCount: 30,
    estimatedDurationMinutes: 235,
  },
  {
    id: 'ophysic',
    title: 'ОГЭ Физика',
    examLabel: 'ОГЭ',
    subjectLabel: 'Физика',
    examTaskCount: 25,
    estimatedDurationMinutes: 180,
  },
];

export const getKnowledgeTestSubjectById = (
  id: string,
): KnowledgeTestSubject | undefined => {
  return KNOWLEDGE_TEST_SUBJECTS.find((subject) => subject.id === id);
};

export const getKnowledgeTestTotalTaskCount = (
  subject: KnowledgeTestSubject,
): number => {
  return subject.examTaskCount * DIFFICULTY_LEVELS.length;
};

export const buildKnowledgeTestTasks = (
  subjectId: KnowledgeTestSubjectId,
): KnowledgeTestTask[] => {
  const subject = getKnowledgeTestSubjectById(subjectId);

  if (!subject) {
    return [];
  }

  let taskId = 1;
  const tasks: KnowledgeTestTask[] = [];

  for (
    let examNumber = 1;
    examNumber <= subject.examTaskCount;
    examNumber += 1
  ) {
    DIFFICULTY_LEVELS.forEach((difficultyLevel) => {
      tasks.push({
        id: taskId,
        examNumber,
        difficultyLevel,
        question: `${subject.examLabel} ${subject.subjectLabel}. Номер ${examNumber}, уровень ${difficultyLevel}. Введите числовой ответ.`,
        type: 'text',
        points: difficultyLevel,
        correctAnswer: String(examNumber * difficultyLevel),
      });

      taskId += 1;
    });
  }

  return tasks;
};
