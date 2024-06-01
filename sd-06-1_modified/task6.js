function ShoppingList() {
  this.items = [];

  this.addItem = function(item) {
    this.items.push(item);
  };

  this.printList = function() {
    console.log("Shopping List:");
    this.items.forEach(item => {
      console.log("- " + item);
    });
  };
}

const shoppingList = new ShoppingList();

for (let i = 2; i < process.argv.length; i++) {
  shoppingList.addItem(process.argv[i]);
}

shoppingList.printList();
