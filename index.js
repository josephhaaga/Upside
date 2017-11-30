'use strict';

function getTravlersFightInfo() {

  var airlines = require('./data/airlines.js');
  var profiles = require('./data/profiles.js');
  var trip = require('./data/trip.js');

  var result = {};

  // For loop: its ugly, but performant
  // https://coderwall.com/p/kvzbpa/don-t-use-array-foreach-use-for-instead
  for(var i=0; i<trip().flights.length; i++){ // for each flight
    var this_flight = trip().flights[i];
    var travelers = this_flight.travelerIds;  // get travelers on this flight
    for(var j=0; j<travelers.length; j++){    // for each traveler
      var person = travelers[j];
      person = profiles().find(x => x.personId === person)  // grab their profile (& rewards IDs)
      var rewards = person.rewardPrograms.air;
      if(!(person.personId in result)){     // create person object if not yet exists
        result[person.personId] = {};
        result[person.personId]['name'] = person.name;
        result[person.personId]['id'] = person.personId;
        result[person.personId]['flights'] = [];
      }
      var flight_legs = this_flight.legs;   // break flight into legs
      var parsed_flight = {'legs': []};     // set up result data structure
      for(var z=0; z<flight_legs.length; z++){  // for each leg of this flight
        var leg = flight_legs[z];
        leg['airlineName'] = airlines().find(x => x.code === leg.airlineCode).name;
        if(leg.airlineCode in rewards){       // bugfix: everyone had `undefined` as a rewards program ID
          leg['frequentFlyerNumber'] = rewards[leg.airlineCode]
        }
        parsed_flight['legs'].push(leg)       // push leg to flight (maintains order per requirements)
      }
      result[person.personId]['flights'].push(parsed_flight)  // push this flight to this person's flight list
    }
  }
  result = { 'travelers': Object.values(result)}  // convert to desired output
  return result;
}

module.exports = getTravlersFightInfo;
