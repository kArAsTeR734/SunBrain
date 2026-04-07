export type KnowledgeTestSubjectId = 'emath' | 'omath' | 'ephysic' | 'ophysic';

export interface KnowledgeTestSubject {
  id: KnowledgeTestSubjectId;
  title: string;
  examLabel: string;
  subjectLabel: string;
  examTaskCount: number;
  estimatedDurationMinutes: number;
}

export interface KnowledgeTestTask {
  id: number;
  examNumber: number;
  difficultyLevel: 1 | 2 | 3;
  question: string;
  type: 'number';
  points: number;
  correctAnswer: string;
}

export type UserAnswerValue = string | string[] | number;

export interface KnowledgeTestAnswerResult {
  taskId: number;
  userAnswer: UserAnswerValue;
  correctAnswer: UserAnswerValue;
  isCorrect: boolean;
}
