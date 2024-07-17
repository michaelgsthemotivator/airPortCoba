const ViewCommandList = () => {
  console.log("Command List:");
  console.log(`==============`);
  console.log("node app.js");
  console.log("node app.js help");
  console.log("node app.js planeList");
  console.log("node app.js passengerList");
  console.log("node app.js flightInfo <flight_number>");
  console.log(
    "node app.js buyTicket <flight_number> <passenger_name> <passenger_gender> <seat_number> <ticket_type>"
  );
  console.log("node app.js ticketInfo <paseenger_id>");
};

const ViewPlaneList = (data) => {
  //   console.log(data, "ini data di viewplanelist");
  console.table(data);
};

const ViewPassengerList = (data) => {
  //   console.log(data, "udahaannnn");

  data1 = data.map((el) => {
    return {
      id: el.id,
      name: el.name,
      gender: el.gender,
      airlineName: el.ticket.airlineName,
    };
  });
  console.table(data1);
};
module.exports = { ViewCommandList, ViewPlaneList, ViewPassengerList };
