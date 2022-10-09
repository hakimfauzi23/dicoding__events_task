// TODO 1
const { EventEmitter } = require("events");

const sayBirthday = (name) => {
  console.log(`Happy birthday ${name}!`);
};

const makeAWish = (wish) => {
  console.log(wish);
};

const birthdayEventListener = ({ name, wish }) => {
  sayBirthday(name);
  makeAWish(wish);
};

// TODO 2
const myEmitter = new EventEmitter();

// TODO 3
myEmitter.on("say-birthday", birthdayEventListener);

// TODO 4
myEmitter.emit("say-birthday", {
  name: "Hanif Fauzi Hakim",
  wish: "Hope you successful one day",
});
