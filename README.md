# Form Generator 

Created to help generate a form with a javascript object

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Git](https://git-scm.com/downloads)
* [NPM](https://www.npmjs.com/get-npm)
* [Mocha](https://mochajs.org/)


### Installing

Follow these steps to get yourself up and running on your local machine

1. ```$ git clone https://github.com/reactivepixel/DynamicFormGen.git```


2. cd into that created folder 


3. ```$ npm install```


## Running the tests
Then next command with run the test for the airbnb style guide

```$ npm test```
## Style Guide
This setup uses ESlint and Prettier together on save to refactor code to [Airbnb Style Guide](https://github.com/airbnb/javascript).

Created with [VScode](https://code.visualstudio.com/)

This code base used the [Airbnb Style Guide](https://github.com/airbnb/javascript)
To follow this guide

* You **MUST** have [ESlint](https://eslint.org/) installed on your local machine
* .eslintrc file must have 

### Setup
Create a .eslintrc file

```javascript
//.eslintrc
{
    "extends": [
        "airbnb-base"
    ],
    "plugins": [
        "prettier"
    ]
}
```
Use dev dependencies

```javascript
// package.json

"devDependencies": {
    "eslint-config-prettier": "^2.9.0",
    "mocha-eslint": "^4.1.0",
    "prettier": "1.11.0",
    "eslint-plugin-prettier": "2.6.0",
    "eslint-config-airbnb-base": "^12.1.0",
    "eslint-plugin-import": "^2.9.0"
  },
```
Add the following code to the vscode user settings

```javascript
    "eslint.autoFixOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "eslint.alwaysShowStatus": true,
```


`$ npm install --save-dev eslint-config-airbnb-base`

## Author

[MikeSewell](https://github.com/MikeSewell)