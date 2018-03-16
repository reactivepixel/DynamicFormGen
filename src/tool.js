// Brett Rogers (Kloe)

const generator = (formData) => {
  let formString = '';
  // Checking for the settings in the object
  if (formData.settings) {
    const { action, method } = formData.settings;
    formString += `<form${action ? ` action="${action}"` : ' '}${method ? ` method="${method}"` : ' '}>`;
  }
  if (formData.tags) {
    formData.tags.forEach((tagString) => {
      // Switch statement to find which tag is wanted
      switch (tagString.tag) {
        case 'input': {
          const inputTypes = ['submit', 'button', 'text', 'color', 'date', 'datetime', 'email', 'month', 'number', 'range', 'search', 'tel', 'time', 'url', 'week'];
          const checkType = type => type === tagString.type;
          if (inputTypes.some(checkType)) {
            formString += `<input type="${tagString.type}"${tagString.id ? ` id="${tagString.id}"` : ''}${tagString.name ? ` name="${tagString.name}"` : ''}/>`;
          } else {
            throw new Error(`Invalid input type: ${tagString.type}`);
          }
          break;
        }
        case 'label': {
          formString += '<label ';
          formString += tagString.for ? ` for="${tagString.for}" ` : '';
          formString += tagString.value ? `>${tagString.value}</label>` : '></label>';
          break;
        }
        case 'select': {
          formString += '<select>';
          if (tagString.options) {
            tagString.options.forEach((o) => {
              formString += `<option value="${o.toLowerCase()}">${o}</option>`;
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
