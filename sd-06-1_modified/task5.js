function FriendsList() {
  this.names = [];
  this.addName = function(name) {
    this.names.push(name);
  };
}

const friendsList = new FriendsList();

const numNames = parseInt(process.argv[2]);
for (let i = 0; i < numNames; i++) {
  friendsList.addName(process.argv[3 + i]);
}

console.log(JSON.stringify(friendsList.names));
