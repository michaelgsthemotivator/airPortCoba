const { Console } = require("console");
const { Factory } = require("./class");

const fs = require("fs").promises;
const ReadPlanes = async () => {
  //   console.log("aku di readplane");
  try {
    const data = JSON.parse(await fs.readFile("./plane.json", "utf-8"));

    const data1 = data.map((el) => {
      return Factory.createPlane(
        el.flightNumber,
        el.airlineName,
        el.origin,
        el.destination
      );
    });

    return data1;
  } catch (error) {
    console.log(error, "error di ReadPlanes");
  }
};

const ReadPassengers = async () => {
  try {
    // console.log("masuk sini");
    const data = JSON.parse(await fs.readFile("./passanger.json", "utf-8"));
    // console.log(data, "ini data zzz");

    const data1 = data.map((el) => {
      // return el.name;
      return Factory.createPassenger(el.id, el.name, el.gender, el.ticket);
    });
    return data1;
  } catch (error) {
    console.log(error, "ini error readPassenger File");
  }
};

const FindFlight = async (number) => {
  try {
    // console.log(number);
    const data = JSON.parse(await fs.readFile("./plane.json", "utf-8")).filter(
      (f) => f.flightNumber === +number
    );
    // console.log(data);
    const airlineNameToFind = data[0].airlineName;
    // console.log(airlineNameToFind);

    const passangerData = JSON.parse(
      await fs.readFile("./passanger.json", "utf-8")
    ).filter((f) => f.ticket.airlineName === airlineNameToFind);
    // console.log(passangerData);

    return {
      flightNumber: data[0].flightNumber,
      airlineName: data[0].airlineName,
      origin: data[0].origin,
      destination: data[0].destination,
      passenger: [passangerData],
    };
  } catch (error) {
    console.log(error, "error finding flight");
  }
};

module.exports = { ReadPlanes, ReadPassengers, FindFlight };
