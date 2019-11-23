# _Doctor Lookup_

#### _Version 11/22/2019_

#### By _**Nina Potrebich**_

## Description

_A website where user can look up for doctor in her/his area._

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* NodeJS
* Go to the website https://developer.betterdoctor.com/ and get your own API key(YOUR_KEY1).
* Go to the website https://opencagedata.com/api and get your own API key(YOUR_KEY2).

### Installing

Create a `.env` file in the root of your project and insert your key/value pairs in the following format of `KEY=VALUE`:

```sh
API_KEY1=YOUR_KEY1
API_KEY2=YOUR_KEY2
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
* A user is able to select location where he/she looks for doctor.
* If user left field empty he gets data for his current location. (Allow your browser to use your location).
* A user is able to enter a medical issue to receive a list of doctors in the chosen location area that fit the search query.
* A user is able to enter a name to receive a list of doctors in the chosen location area that fit the search query.
* If the query response includes any doctors, the following information is included about each doctor: first name, last name, address, phone number and whether or not the doctor is accepting new patients (the API provides this data).
* If the API call results in an error (any message not a 200 OK), the application returning a notification that states what the error is.
* If the query response doesn't include any doctors, user gets message that 'No Doctors were found'. 


## Technologies Used

_HTML, CSS, jQuery, Bootstrap, JavaScript, NodeJS_

### License

*_Copyright (c) 2019 **Nina Potrebich**_*