import { NumbersCollection } from "./NumbersCollection";
export class Sorter /* <T> */ {
  constructor(public collection: NumbersCollection /* : T[] */) {}

  sort(): void {
    // const { length } = this.collection;
    for (let i1 = 0; i1 < this.collection.length; i1++) {
      for (let i2 = 0; i2 < this.collection.length - i1 - 1; i2++) {
        if (this.collection.compare(i2, i2 + 1)) {
          this.collection.swap(i2, i2 + 1);
        }
      }
    }
  }
}
