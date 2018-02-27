const FormGenerator = require('./formGenerator.js');

const form = {
  attributes: {
    action: '/test',
    method: 'POST',
    id: 'test-form',
  },
  elements: [
    {
      labelName: 'First Name',
      tag: 'input',
      type: 'text',
      id: 'first-name',
    },
    {
      labelName: 'Comment',
      tag: 'textarea',
      id: 'comment',
    },
    {
      labelName: 'Select List',
      tag: 'select',
      id: 'select-me',
      options:[
        {
        text:"Select Item 1",
        value:"item1"
      },
      {
        text:"Select Item 2",
        value:"item2"
      },
      {
        text:"Select Item 3",
        value:"item3"
      }
    ]
    }
  ]
}

FormGenerator.build(form);