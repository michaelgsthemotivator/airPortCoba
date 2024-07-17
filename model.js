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
    const number1 = +number;
    const data = JSON.parse(await fs.readFile("./plane.json", "utf-8"));
    const data1 = data
      .filter((el) => {
        return el.flightNumber === number1;
      })
      .map(async (el) => {
        try {
          const data = JSON.parse(
            await fs.readFile("./passanger.json", "utf-8")
          );

          const data1 = data.filter((f) => {
            return el.airlineName === f.ticket.airlineName;
          });

          return {
            flightNumber: el.flightNumber,
            airlineName: el.airlineName,
            origin: el.origin,
            destination: el.destination,
            passengers: [data1],
          };
        } catch (error) {
          console.log(error, "error finding passanger");
        }
      });
  } catch (error) {
    console.log(error, "error finding flight");
  }
};

module.exports = { ReadPlanes, ReadPassengers, FindFlight };
