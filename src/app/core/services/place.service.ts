import { Injectable } from '@angular/core';
import { PlaceModel } from '../models/place.model';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  private places: PlaceModel[] = [
    {
      id: 1,
      title: 'UJI Campus',
      image: '~/app/assets/uji.png',
      survey: [
        {id:10,
        questions:[
          {id:1,
          question:"I perform my daily main tasks in this place (work, school, chores)",
          answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:2,
            question:"I gradually find this place suitable for accomplishing my tasks",
            answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:3,
          question:"I feel joy when I visit this place.",
          answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:4,
            question:"My social interactions evolve the more I visit this place.",
            answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},
          
          {id:5,
          question:"I feel safe in this place",
          answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:6,
            question:"I can easily commute to this place",
            answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:7,
          question:"I feel relaxed while navigating in the city",
          answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},
        ]}

      ]
    },
    {
      id: 2,
      title: 'El-Grao Beach',
      image: '~/app/assets/grao.png',
      survey: [
        {id:10,
        questions:[
          {id:1,
          question:"I perform my daily main tasks in this place (work, school, chores)",
          answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:2,
            question:"I gradually find this place suitable for accomplishing my tasks",
            answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:3,
          question:"I feel joy when I visit this place.",
          answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:4,
            question:"My social interactions evolve the more I visit this place.",
            answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},
          
          {id:5,
          question:"I feel safe in this place",
          answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:6,
            question:"I can easily commute to this place",
            answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:7,
          question:"I feel relaxed while navigating in the city",
          answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},
        ]}

      ]
    },
    {
      id: 3,
      title: 'Castellon City center',
      image: '~/app/assets/citycenter.png',
      survey: [
        {id:10,
        questions:[
          {id:1,
          question:"I perform my daily main tasks in this place (work, school, chores)",
          answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:2,
            question:"I gradually find this place suitable for accomplishing my tasks",
            answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:3,
          question:"I feel joy when I visit this place.",
          answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:4,
            question:"My social interactions evolve the more I visit this place.",
            answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},
          
          {id:5,
          question:"I feel safe in this place",
          answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:6,
            question:"I can easily commute to this place",
            answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:7,
          question:"I feel relaxed while navigating in the city",
          answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},
        ]}

      ]
    },
    {
      id: 3,
      title: 'Castellon Parks',
      image: '~/app/assets/parsks.png',
      survey: [
        {id:10,
        questions:[
          {id:1,
          question:"I perform my daily main tasks in this place (work, school, chores)",
          answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:2,
            question:"I gradually find this place suitable for accomplishing my tasks",
            answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:3,
          question:"I feel joy when I visit this place.",
          answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:4,
            question:"My social interactions evolve the more I visit this place.",
            answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},
          
          {id:5,
          question:"I feel safe in this place",
          answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:6,
            question:"I can easily commute to this place",
            answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},

          {id:7,
          question:"I feel relaxed while navigating in the city",
          answers: [" 😡 ", " 😠 ", " 😐 ", " 😊 ", " 😃 "]},
        ]}

      ]
    },
  ];

  // private createSurvey() {
  //   const questions = [
  //     "I perform my daily main tasks in this place (work, school)",
  //     "I gradually find this place suitable for accomplishing my tasks",
  //     "I feel joy when I visit this place",
  //     "My social interactions evolve the more I visit this place.",
  //     "I feel safe in this place",
  //     "I can easily commute to this place",
  //     "I feel relaxed while navigating in the city",
  //   ];

  //   const survey = questions.map((question, index) => {
  //     const answer = [
  //       { emoji: "😡", emoValue: 1 },
  //       { emoji: "😠", emoValue: 2 },
  //       { emoji: "😐", emoValue: 3 },
  //       { emoji: "😊", emoValue: 4 },
  //       { emoji: "😃", emoValue: 5 },
  //     ];

  //     return {
  //       id: index,
  //       question,
  //       answer,
  //     };
  //   });

  //   return survey;
  // }

  getPlaces(): PlaceModel[] {
    return this.places;
  }

  getPlaceById(id: number): PlaceModel | undefined {
    return this.places.find((place) => place.id === id) || undefined;
  }
}
