const formData = require('./index');

let formString = ''; // makes a string to concat with
if (formData) {
  // loops through all the objects in the input array
  formData.forEach((data) => {
    // data is a single input object

    // check on each type of input
    if (data.type === 'label') {
      // console.log('it is a', data.type);
      // add to the formString
      formString += `<label for='${data.for}'/>`;
    } else if (data.type === 'text') {
      // console.log('it is a', data.type);

      formString += `<input type='${data.type}' name='${data.for}'/>`;
      // add to the formString
    } else if (data.type === 'submit') {
      // console.log('it is a', data.type);

      formString += `<input type='${data.type}' name='${data.for}' value='${data.value}'/>`;
      // add to the formString
    }
  });

  // Return entire string
  console.log('the entire string', formString);
} else {
  console.log('You broke me');
}
