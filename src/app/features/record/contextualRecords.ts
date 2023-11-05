import { Record } from '@awarns/core/entities';
import {UserResponsesService} from '../survey/user-responses.service'

export const contextualRecords = 'questionnaire-answers';

export class QuestionnaireAnswers extends Record {
  constructor(
    public questionnaireId: string,
    public answers: Array<QuestionnaireAnswer>,
    public geolocation: Array<Geolocation>,
    public notificationId?: number,
    answeredAt = new Date(),
  ) {
    super(contextualRecords, answeredAt);
  }
}

export interface QuestionnaireAnswer {
  title: number;
  answer: number;
  time: Date;
  location: GeolocationCoordinates;
  millisecondsToAnswer: number;
}