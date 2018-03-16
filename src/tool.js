// Brett Rogers (Kloe)

const generator = (formData) => {
  let formString = '';
  // Checking for the settings in the object
  if (formData.settings) {
    const { action, method } = formData.settings;
    formString += `<form${action ? ` action="${action}"` : ' '}${method ? ` method="${method}"` : ' '}>`;
  } else {
    formString += '<form>';
  }
  if (formData.tags) {
    formData.tags.forEach((tagString) => {
      const {
        type, id, options, name, labelVal, label,
      } = tagString;
      // Switch statement to find which tag is wanted
      switch (tagString.tag) {
        case 'input': {
          formString += label ? `<label${name ? ` for="${name}"` : ' '}>${labelVal || ''}</label>` : '';
          const inputTypes = ['submit', 'button', 'text', 'color', 'date', 'datetime', 'email', 'month', 'number', 'range', 'search', 'tel', 'time', 'url', 'week'];
          const checkType = inputType => inputType === type;
          if (inputTypes.some(checkType)) {
            formString += `<input type="${type}"${id ? ` id="${id}"` : ''}${name ? ` name="${name}"` : ''}/>`;
          } else {
            throw new Error(`Invalid input type: ${type}`);
          }
          break;
        }
        case 'select': {
          formString += '<select>';
          if (options) {
            options.forEach((optionValue) => {
              formString += `<option value="${optionValue.toLowerCase()}">${optionValue}</option>`;
            });
          }
          formString += '</select>';
          break;
        }
        default: {
          throw new Error('Not a valid object');
        }
      }
    });
    formString += '</form>';
  } else {
    throw new Error('Object does not exist');
  }
  return formString;
};
module.exports = generator;
