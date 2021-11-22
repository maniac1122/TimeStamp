# FreeCodeCamp: Timestamp Microservice

This is my entry for [Free Code Camp's first API project](https://www.freecodecamp.com/challenges/timestamp-microservice). Demo is available on [Heroku](http://fcc-api-ts.herokuapp.com/).

## User Stories

- [x] I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
- [x] If it does, it returns both the Unix timestamp and the natural language form of that date.
- [x] If it does not contain a date or Unix timestamp, it returns null for those properties.

### Example Usage

```
http://fcc-api-ts.herokuapp.com/June%2019,%202016
http://fcc-api-ts.herokuapp.com/06-19-2016
http://fcc-api-ts.herokuapp.com/1466290800
```

### Example Output

```json
{
  "unix": 1466290800,
  "natural": "June 19, 2016"
}
```
