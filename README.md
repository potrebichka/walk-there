# _Doctor Lookup_

#### _Version 11/22/2019_

#### By _**Nina Potrebich**_

## Description

_A website where user can look up for doctor in her/his area._

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* NodeJS
* Go to website https://developer.betterdoctor.com/ and get your own API key(YOUR_KEY).

### Installing

Create a `.env` file in the root of your project and insert your key/value pairs in the following format of `KEY=VALUE`:

```sh
API_KEY=YOUR_KEY
```

Using Node, install the project dependencies: 
```
npm install
```

Once the dependencies are installed (it will take a few minutes), your project is ready to go.:

```
npm run build
```

## Specifications:
* A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
* A user should be able to enter a name to receive a list of doctors in the Portland area that fit the search query.
* If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
* If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
* If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

Extra:
* Allow users to search by location (instead of just hardcoding a value for Portland). This will involve making two API calls: one to geocode the latitude and longitude of a location and then a second call to the BetterDoctor API.
* Add an additional API call to retrieve the list of specialities from the database before you query for a doctor, then return that list in a dropdown menu.
* Create a list of "recently viewed" doctors and display it.
* Create a list of "related doctors" and display it. You can define related however you wish.
* Add static pages, links to your GitHub, social media, and more.
* Use Google Maps API to plot the locations of doctors's practices on a map.


## Technologies Used

_HTML, CSS, jQuery, Bootstrap, JavaScript, NodeJS_

### License

*_Copyright (c) 2019 **Nina Potrebich**_*