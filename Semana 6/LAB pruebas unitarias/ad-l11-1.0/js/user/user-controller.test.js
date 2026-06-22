const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test('add user not present in list', () => {
  const userController = new UserController();

  let user = new User(5678, "Laura", "laura@generation.org");

  expect(userController.getUsers()).not.toContain(user);

  userController.add(user);

  expect(userController.getUsers()).toContain(user);
});

test('remove user not present in list', () => {
  const userController = new UserController();

  let user = new User(5678, "Laura", "laura@generation.org");

  userController.remove(user);

  expect(userController.getUsers()).toHaveLength(0);
});

test('find user by existing email', () => {
  const userController = new UserController();

  let user = new User(1234, "Santiago", "santiago@generation.org");

  userController.add(user);

  expect(
    userController.findByEmail("santiago@generation.org")
  ).toBe(user);
});

test('find user by non existing email', () => {
  const userController = new UserController();

  let user = new User(1234, "Santiago", "santiago@generation.org");

  userController.add(user);

  expect(
    userController.findByEmail("laura@generation.org")
  ).toBeUndefined();
});


test('find user by existing id', () => {
  const userController = new UserController();

  let user = new User(1234, "Santiago", "santiago@generation.org");

  userController.add(user);

  expect(
    userController.findById(1234)
  ).toBe(user);
});

test('find user by non existing id', () => {
  const userController = new UserController();

  let user = new User(1234, "Santiago", "santiago@generation.org");

  userController.add(user);

  expect(
    userController.findById(9999)
  ).toBeUndefined();
});