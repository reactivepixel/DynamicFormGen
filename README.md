# DynamicFormGen

### How to Use

#### Require and Build the JSON

1.  Require the util file

```
const FormGen = require('./someFolder/tool.js')
```

2.  Sample object to create the form

```
FormGen(
  {
  tags: [
    {
        tag: 'input',
        type: 'text',
        name: 'name',
        id: 'nameVal',
        label: true,
        labelVal: 'Name',
      },
  ],
  settings: {
      action: '/save-item',
      method: 'POST',
    },
})
```

If a label is wanted to the inputs, `label: true` is needed along with the `labelVal` for the label's value.

#### Acceptable tags

* input
* select

#### Valid Inputs

'submit', 'button', 'text', 'color', 'date', 'datetime', 'email', 'month', 'number', 'range', 'search', 'tel', 'time', 'url', 'week'

### A quick quide to run the code

1.  Clone or download the code

```
git clone https://github.com/reactivepixel/DynamicFormGen.git
```

2.  Run the app.js file with Node

```
node app.js
```

### Adding Testing Capabilities

1.  Install Mocha globally

```
npm install -G mocha
```

2.  Install Chai locally

```
npm install -D chai
```

3.  Install Mocha-ESLint

```
npm install -D mocha-eslint
```

4.  Add the [`test/_eslint.js`](https://github.com/krogers78/Max-Bot/blob/dev/test/__eslint.js) file to your project.

5.  Run `npm test` to test your code.

### How to add ESLint and the Airbnb Style Sheet

1.  Install ESLint, AirBnb-Base, and ESLint-Plugin-Import as devDependencies

```
npm install -D eslint eslint-config-airbnb-base eslint-plugin-import
```

2.  Create a `.eslintrc` file in the root directory and add this to the file

```
{
  "extends": "airbnb-base"
}
```
