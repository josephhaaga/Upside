module.exports = function get() {
  return {
    flights: [
      {
        travelerIds: [1, 2, 3],
        legs: [
          {
            airlineCode: 'AA',
            flightNumber: 'AA456'
          }
        ]
      },
      {
        travelerIds: [1, 2],
        legs: [
          {
            airlineCode: 'VA',
            flightNumber: 'VA789'
          },
          {
            airlineCode: 'AK',
            flightNumber: 'AA789'
          }
        ]
      }
    ]
  };
}