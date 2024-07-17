const { ReadPlanes, ReadPassengers, FindFlight } = require("./model");
const { ViewCommandList, ViewPlaneList, ViewPassengerList } = require("./view");

const Help = () => {
  ViewCommandList();
};
const PlaneList = async () => {
  const data = await ReadPlanes();
  //   console.log(data, "ini data dari model");
  ViewPlaneList(data);
};

const PassengerList = async () => {
  //   console.log("tearlament");
  const data = await ReadPassengers();
  //   console.log(data, "halsdfa;dlsfkj");
  ViewPassengerList(data);
};

const FlightInfo = async (number) => {
  //   console.log(number, "asdfa");
  const data = await FindFlight(number);
  console.log(data);
};

module.exports = { Help, PlaneList, PassengerList, FlightInfo };
