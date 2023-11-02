// // visit-couters.ts
// import { AwarnsStore } from '@awarns/persistence';

// // (Optional) Declare the interface that your persistence component will have
// export interface VisitCountersStore {
//   increase(id: string): Promise<void>;
//   get(id: string): Promise<number>;
//   reset(id: string): Promise<void>;
//   clear(): Promise<void>;
// }

// // Required to distinguish different entity types inside the framework store
// const DOC_TYPE = 'visit-counter';

// class VisitCountersStoreDB implements VisitCountersStore {
//   private readonly store: AwarnsStore<VisitCounter>;

//   constructor() {
//     // Creating a new store requires:
//     // - The type that the store will work with
//     // - A string to uniquely identify the entities being managed
//     // - A function to transform (serialize) entities into DB documents
//     // - A function to reverse the transform (deserialize) DB documents back into entities
//     this.store = new AwarnsStore<VisitCounter>(DOC_TYPE, docFrom, nearbyAreaFrom);
//   }

//   async increase(id: string): Promise<void> {
//     const doc = await this.store.get(id);
//     if (!doc) {
//       const counter = { id, visits: 1 };
//       await this.store.create(counter, id);
//       return;
//     }
//     await this.store.update(id, { visits: doc.visits + 1 });
//   }

//   async get(id: string): Promise<number> {
//     const counter = await this.store.get(id);
//     if (!counter) {
//       return 0;
//     }
//     return counter.visits;
//   }
  
//   async reset(id: string): Promise<void> {
//     await this.store.delete(id);
//   }

//   async clear(): Promise<void> {
//     await this.store.clear();
//   }
// }

// // Typically you'll want to have a external entity representation
// interface VisitCounter {
//   id: string;
//   visits: number;
// }

// // And an internal representation (DB document)
// type VisitCounterDoc = VisitCounter;
// // In this case the two are identical, but sometimes you might want to: 
// // - Change the type of certain properties (for example, Dates, into UNIX timestamp numbers)
// // - Collapse multiple properties into a single JSON string

// // The serialize function
// function docFrom(counter: VisitCounter): VisitCounterDoc {
//   return { ...counter };
// }

// // The deserialize function
// function visitCounterFrom(doc: VisitCounterDoc): VisitCounter {
//   return { ...doc };
// }

// export const visitCountersStoreDB = new VisitCountersStoreDB();
// function nearbyAreaFrom(doc: unknown): VisitCounter {
//   throw new Error('Function not implemented.');
// }

