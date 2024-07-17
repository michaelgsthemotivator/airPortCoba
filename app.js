const { Help, PlaneList, PassengerList, FlightInfo } = require("./controller");

let command1 = process.argv[2];

let [, , command, ...args] = process.argv;
// console.log(process.argv, "ini process argv");
// console.log(command, args);

if (command === "help") {
  Help();
} else if (command === "planeList") {
  //   console.log("hello");
  PlaneList();
} else if (command === "passengerList") {
  PassengerList();
} else if (command === "flightInfo") {
  //   console.log(args[0]);
  FlightInfo(args[0]);
}

// commit practice add comment
