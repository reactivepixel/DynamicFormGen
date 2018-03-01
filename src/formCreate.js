// formCreate.js
// Creator Michael Sewell

const utils = require('apex-util');

exports.convert = async (obj) => {
  let formString = '<form>';

  if (obj) { // error handling
    await obj.forEach((element) => {
      const {
        type, forAttr, name, options,
      } = element;
      if (type === 'label') {
        formString += `<label for="${forAttr}"></label>`;
      } else if (type === 'text' || type === 'color' || type === 'email' || type === 'tel') {
        formString += `<input type="${type}" id="${name}" name="${name}" />`;
      } else if (type === 'select') { //
        formString += `<select id=${name} >`;
        options.forEach((opt) => {
          formString += `<option>${opt}</option>`;
        });
        formString += '</select>';
      }
    });
  } else { // error handling
    utils.log('Error:', obj, 3);
    utils.log('Not a valid object', null, 3);
  }
  formString += '</form>';
  utils.log('Completed form', formString, 3);
};
