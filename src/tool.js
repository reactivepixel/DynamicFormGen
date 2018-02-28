// Brett Rogers (Kloe)

const generator = (obj) => {
  let formString = '';
  let error = '';
  // Checking for the settings in the object
  //   prettier-ignore
  if (obj.settings) {
    formString += '<form';
    formString += obj.settings.action ? ` action="${obj.settings.action}"` : ' action="#"';
    formString += obj.settings.method ? ` method="${obj.settings.method}"` : ' method="POST"';
    formString += '>';
  } else {
    formString += '<form action="#" method="POST">';
  }
  if (obj.tags) {
    obj.tags.forEach((e) => {
      // Switch statement to find which tag is wanted
      switch (e.tag) {
        case 'input': {
          // prettier-ignore
          const inputTypes = ['submit', 'button', 'text', 'color', 'date', 'datetime', 'email', 'month', 'number', 'range', 'search', 'tel', 'time', 'url', 'week'];
          const checkType = type => type === e.type;
          if (inputTypes.some(checkType)) {
            formString += `<input type="${e.type}"`;
            // Checks if they added an
            formString += e.id ? ` id="${e.id}" ` : '';
            // Checks if they added a name
            formString += e.name ? ` name="${e.name}" ` : '';
            formString += ' />';
          } else {
            error = `Invalid input type: ${e.type}`;
          }
          break;
        }
        case 'label': {
          formString += '<label ';
          formString += e.for ? ` for="${e.for}" ` : '';
          formString += e.value ? `>${e.value}</label>` : '></label>';
          break;
        }
        case 'select': {
          formString += '<select>';
          if (e.options) {
            e.options.forEach((o) => {
              formString += `<option value="${o.toLowerCase()}">${o}</option>`;
            });
          }
          formString += '</select>';
          break;
        }
        default: {
          error = 'Not a valid object';
          break;
        }
      }
    });
    formString += '</form>';
  } else {
    error = 'Object does not exist';
  }
  // return the error if the object is not valid if not return the form
  if (error) return error;
  return formString;
};
module.exports = generator;
