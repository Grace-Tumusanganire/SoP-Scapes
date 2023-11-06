import { Record } from '@awarns/core/entities';

export const contextualRecords = 'questionnaire-answers';

export class QuestionnaireAnswers extends Record {
  constructor(
    public questionnaireId: string,
    public answers: Array<QuestionnaireAnswer>,
    answeredAt = new Date(),
  ) {
    super(contextualRecords, answeredAt);
  }
}

export interface QuestionnaireAnswer {
  title: number;
  answer: number;
}