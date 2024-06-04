const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
});

test('remove user from userController', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);
});

test('find user by email in userController', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.findByEmail("santiago@generation.org")).toStrictEqual(user);
});

test('find user by email not in userController', () => {
    expect(userController.findByEmail("nonexistent@generation.org")).toBeUndefined();
});

test('find user by ID in userController', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.findById(1234)).toStrictEqual(user);
});

test('find user by ID not in userController', () => {
    expect(userController.findById(9999)).toBeUndefined();
});
