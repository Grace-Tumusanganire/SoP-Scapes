// src/app/core/models/place.model.ts

export interface PlaceModel {
    id: number
    title: string
    image: string
    survey: {
        id: number
        questions: {
            id: number
            question: string
            answers: string[]
        }[]
  }[]
}