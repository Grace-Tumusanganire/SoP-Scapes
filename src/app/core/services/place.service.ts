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
      aois: ["uji"]
    },
    {
      id: 2,
      title: 'El-Grao Beach',
      image: '~/app/assets/grao.png',
      aois:["elgraob", "elgraopl", "elgraopn", "elgraog"]
    },
    {
      id: 3,
      title: 'Castellon City center',
      image: '~/app/assets/citycenter.png',
      aois:["citycenter"]
     
    },
    {
      id: 4,
      title: 'Castellon Parks',
      image: '~/app/assets/parsks.png',
      aois:["merida","botanica", "eugenio", "pontferro", "bonarea", "jesegeol", "ribalta", "rafalafena", "guitarista"]
    },
  ];

  getPlaces(): PlaceModel[] {
    return this.places;
  }

  getPlaceById(id: number): PlaceModel | undefined {
    return this.places.find((place) => place.id === id) || undefined;
  }

  getPlaceByAo(aois: string[]): PlaceModel | undefined {
    return this.places.find((place) => {
      // Check if all AOIs in the place match the provided AOIs
      return aois.every((aoi) => place.aois.includes(aoi));
    });
  }

  getAllAOIs(): string[] {
    const allAOIs: string[] = [];

    this.places.forEach((place) => {
      place.aois.forEach((aoi) => {
        if (!allAOIs.includes(aoi)) {
          allAOIs.push(aoi);
        }
      });
    });

    return allAOIs;
  }

}