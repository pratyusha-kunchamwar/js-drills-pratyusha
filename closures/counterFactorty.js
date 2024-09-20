function counterFactory() {
  let counter = 0;
  return {
    increment: function () {
      counter++;
      return counter;
    },
    decrement: function () {
      counter--;

      return counter;
    },
  };
};
const myCounter = counterFactory();
console.log("Increment:",myCounter.increment());
console.log("Increment:",myCounter.increment());
console.log("Decrement:",myCounter.decrement());
console.log("Decrement:",myCounter.decrement());
