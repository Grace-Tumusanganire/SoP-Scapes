import { Record } from '@awarns/core/entities';

export const contextualRecords = 'questionnaire-answers';

export class QuestionnaireAnswers extends Record {
  constructor(
    public questionnaireId: string,
    public answers: Array<QuestionnaireResponse>,
    public duuid: string,
    answeredAt = new Date(),
  

  ) {
      // Format answeredAt
      answeredAt.toLocaleString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: 'Europe/Madrid'
      });
    super(contextualRecords, answeredAt);
  }
}

export interface QuestionnaireResponse {
  questionId: number;
  emojiValue: number;
}

export interface InitialResponse {
  questionId: number;
  answer: string;
}
