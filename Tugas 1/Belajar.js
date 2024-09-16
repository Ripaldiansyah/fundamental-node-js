// greeting("ripal");

// function greeting(name) {
//   if (typeof name !== "string") {
//     throw new Error("test");
//   }
//   console.log(`Hallo ${name}`);
// }

// const sayHello = function (name) {
//   console.log(`halo ${name}`);
//   return name;
// };

// let result = sayHello("budi");
// console.log(result);

// const sayHello2 = (name) => {
//   console.log(`Halo ${name}`);
//   return name;
// };

// let result2 = sayHello2("budi");

const car = {
  name: "Avanza",
  start() {
    console.log(this.name);
  },
  start1: function () {
    console.log(this.name);
  },
  start2: () => {
    console.log(car.name);
  },
};

// car.start();
// car.start1();
// car.start2();

let name = "brio";
//rest operator
const { name: carName, start, ...sisa } = car;

console.log(carName);

const newCar = { ...car };
newCar.name = "Xenia";

console.log(car.name);
console.log(newCar.name);

const tesla = {
  name: "tesla",
  seatInfo: {
    capacity: 4,
    type: "Leather",
    obj: {
      obj1: "object 1",
    },
  },
};

const newTesla = {
  ...tesla,
  seatInfo: {
    ...tesla.seatInfo,
    obj: {
      ...tesla.seatInfo.obj,
    },
  },
};

newTesla.seatInfo.capacity = 6;
newTesla.seatInfo.obj.obj1 = "bukan obj 1";

console.log(tesla);
console.log(newTesla);

let numbers = [1, 2, 3];

for (let indexNumber in numbers) {
  console.log(numbers[indexNumber]);
}

for (let number of numbers) {
  console.log(number);
}

const supra = {
  model: 2017,
  1: "test",
};

supra.name = "supra";
console.log(supra);

function sayHello(name, callback) {
  
}
