// // accumulated-visit.ts
// import { Change, Record } from '@awarns/core/entities';
// import {AppComponent} from '../app.component'
// import { AreaOfInterest } from '@awarns/geofencing';
// export const AccumulatedAoIVisitType = 'accumulated-aoi-visit';

// export class AccumulatedAoIVisit extends Record {
//   constructor(
//     public aoi: AreaOfInterest,
//     public visitNumber: number,
//     timestamp = new Date()
//   ) {
//     super(AccumulatedAoIVisitType, timestamp, Change.NONE);
//   }
// }