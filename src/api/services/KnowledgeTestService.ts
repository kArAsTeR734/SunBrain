import {
  FinishTestParams,
  FinishTestResponse,
  GetTestPoolMetaResponse,
  KnowledgeTestSubjectCode,
  StartTestResponse,
  SubmitTestAnswerParams,
  SubmitTestAnswerRequest,
  SubmitTestAnswerResponse,
} from '@features/Test/models/types.ts';
import { request } from '@shared/api/api-client.ts';
import { api } from '@/api/config/api.config.ts';

export class KnowledgeTestService {
  public static async getTestMetaData({
    subjectCode,
  }: KnowledgeTestSubjectCode): Promise<GetTestPoolMetaResponse> {
    return request(api.get(`/api/test/subjects/${subjectCode}/pool-meta`));
  }

  public static async startTest({
    subjectCode,
  }: KnowledgeTestSubjectCode): Promise<StartTestResponse> {
    return request(
      api.post('/api/test/start', {
        subjectCode,
      }),
    );
  }

  public static async testAnswer(
    { testId }: SubmitTestAnswerParams,
    { taskId, answer }: SubmitTestAnswerRequest,
  ): Promise<SubmitTestAnswerResponse> {
    return request(
      api.post(`/api/test/${testId}/answer`, {
        taskId,
        answer,
      }),
    );
  }

  public static async finishTest({
    testId,
  }: FinishTestParams): Promise<FinishTestResponse> {
    return request(api.post(`/api/test/${testId}/finish`));
  }
}
