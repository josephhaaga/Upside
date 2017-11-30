# Your Task
There are 3 sets of data that need to be merged in order to display a summary
of the travlers on a **trip** and their flight information.

The `index.js` file contains a sample object for one of the travelers. The basic
structure is as follows.

```
{
  travelers: [
    id,
    name,
    flights: [
      {
        airlineCode,
        airlineName,
        flightNumber,
        frequentFlyerNumber
      }
    ]
  ]
}
```

Your task is to replace the hard coded response and write a function that merges
the data found in the `/data` folder. The following are things to keep in mind as
you work on your solution

  - The trip defines whos flying where and on what airlines
  - The order of the flights and legs matter.
  - It's not guarenteed a traveler participates in the entire trip


# Working with the Data
This assignment isn't intended to assess you ability to integrate external services,
read from a database/file system, etc... Each of the files in the `/data` folder have a `get` method that allows you to access the information.


# External Dependencies
This assignment doesn't *require* an external dependencies. If you feel an external
library is required please explain its benefit when submitting your solution. Also
include the necessary `package.json` file.
