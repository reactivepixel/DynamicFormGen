// Brett Rogers (Kloe)

// Require the file with the function
const FormGen = require('./tool.js');
const Util = require('apex-util');
// call the function
Util.log(
  'The form: ', FormGen({
    tags: [
      {
        tag: 'label',
        value: 'Name',
        for: 'name',
      },
      {
        tag: 'input',
        type: 'text',
      },
      {
        tag: 'select',
        options: ['THis', 'Is', 'a', 'valuE'],
      },
    ],
    settings: {
      action: '/save-item',
      method: 'POST',
    },
  }),
  1,
);
