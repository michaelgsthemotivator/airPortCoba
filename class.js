class Plane {
  constructor(flightNumber, airlineName, origin, destination) {
    this.flightNumber = flightNumber;
    this.airlineName = airlineName;
    this.origin = origin;
    this.destination = destination;
  }
}
class Passenger {
  constructor(id, name, gender, ticket) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.ticket = Factory.createTicket(
      ticket.airlineName,
      ticket.type,
      ticket.origin,
      ticket.destination,
      ticket.seatNumber
    );
  }
}

class Ticket {
  constructor(airlineName, type, origin, destination, seatNumber) {
    this.airlineName = airlineName;
    this.type = type;
    this.origin = origin;
    this.destination = destination;
    this.seatNumber = seatNumber;
  }
}
class VIP extends Ticket {
  constructor(airlineName, type, origin, destination, seatNumber) {
    super(airlineName, "VIP", origin, destination, seatNumber);
  }
}
class Business extends Ticket {
  constructor(airlineName, origin, destination, seatNumber) {
    super(airlineName, "Business", origin, destination, seatNumber);
  }
}
class Economy extends Ticket {
  constructor(airlineName, origin, destination, seatNumber) {
    super(airlineName, "Economy", origin, destination, seatNumber);
  }
}
class Factory {
  static createPlane(flightNumber, airlineName, origin, destination) {
    return new Plane(flightNumber, airlineName, origin, destination);
  }
  static createPassenger(id, name, gender, ticket) {
    return new Passenger(id, name, gender, ticket);
  }
  static createTicket(airlineName, type, origin, destination, seatNumber) {
    if (type === "VIP") {
      return new VIP(airlineName, type, origin, destination, seatNumber);
    } else if (type === "Business") {
      return new Business(airlineName, type, origin, destination, seatNumber);
    } else if (type === "Economy") {
      return new Economy(airlineName, type, origin, destination, seatNumber);
    }
  }
}
module.exports = { Plane, Passenger, Factory };
