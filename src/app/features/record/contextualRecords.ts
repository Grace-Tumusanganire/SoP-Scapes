import { Record } from '@awarns/core/entities';
import {SurveyComponent} from '../../features/survey/survey.component'

export const contextualRecords = 'questionnaire-answers';

export class QuestionnaireAnswers extends Record {
  constructor(
    public questionnaireId: string,
    public answers: Array<QuestionnaireAnswer>,
    public notificationId?: number,
    // public geolocation: Array<coordinates>,
    answeredAt = new Date(),
  ) {
    super(contextualRecords, answeredAt);
  }
}

export interface QuestionnaireAnswer {
  title: string;
  answer: number | string | boolean;
  millisecondsToAnswer?: number;
}