
export class FriendNames {
  constructor() {
      this.name1 = process.argv[3];
      this.name2 = process.argv[4];
      this.name3 = process.argv[5];
  }
}

// Create the object and log it
let inputNames = new FriendNames();
console.log(inputNames);
