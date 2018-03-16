// Brett Rogers (Kloe)

// Require the file with the function
const FormGen = require('./tool.js');
const Util = require('apex-util');
// call the function
Util.log(
  'The form: ', FormGen({
    tags: [
      {
        tag: 'input',
        type: 'text',
        label: false,
        labelVal: 'Name',
        name: 'name',
        id: 'nameVal',
      },
      {
        tag: 'select',
        options: ['blue', 'yellow', 'purple'],
        label: true,
        labelVal: 'Select a color',
      },
    ],
    settings: {
      action: '/save-item',
      method: 'POST',
    },
  }),
  1,
);
