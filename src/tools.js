
const util = require('apex-util');

const formGen = (data) => {
  let formString = ''; // makes a string to concat with
  if (data) {
  // loops through all the objects in the input array
    data.forEach((singledata) => {
    // data is a single input object

    // check on each type of input
      if (singledata.type === 'label') {
      // console.log('it is a', data.type);
      // add to the formString
        formString += `<label for='${singledata.for}'/>`;
      } else if (singledata.type === 'text') {
      // console.log('it is a', data.type);

        formString += `<input type='${singledata.type}' name='${data.for}'/>`;
      // add to the formString
      } else if (singledata.type === 'submit') {
      // console.log('it is a', data.type);

        formString += `<input type='${singledata.type}' name='${singledata.for}' value='${singledata.value}'/>`;
      // add to the formString
      }
    });
    // Return entire string
    util.log('the entire string', formString);
  } else {
    util.log('You broke me');
  }
};
module.exports = formGen;
