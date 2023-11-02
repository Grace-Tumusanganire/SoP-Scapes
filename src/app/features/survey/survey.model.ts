// src/app/features/survey/survey.model.ts

export interface SurveyModel {
    id: string;
    questions :{
        id:number
        question: string
        answers: {
            value: number
            emoji: string
        }[]
    }[]
}