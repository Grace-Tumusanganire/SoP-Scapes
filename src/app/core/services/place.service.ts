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
      
    },
    {
      id: 2,
      title: 'El-Grao Beach',
      image: '~/app/assets/grao.png',
    },
    {
      id: 3,
      title: 'Castellon City center',
      image: '~/app/assets/citycenter.png',
     
    },
    {
      id: 4,
      title: 'Castellon Parks',
      image: '~/app/assets/parsks.png',
     
    },
  ];

  getPlaces(): PlaceModel[] {
    return this.places;
  }

  getPlaceById(id: number): PlaceModel | undefined {
    return this.places.find((place) => place.id === id) || undefined;
  }
}