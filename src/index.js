const tools = require('./tools');

const array = [{
  type: 'label',
  for: 'nameInput',
}, {
  type: 'text',
  for: 'firstNameInput',
  required: true,
}, {
  type: 'text',
  for: 'middleNameInput',
  required: true,
}, {
  type: 'text',
  for: 'LastNameInput',
  required: true,
}, {
  type: 'text',
  for: 'hobbies',
  required: true,
}, {
  type: 'submit',
  for: 'submitButtom',
  value: 'Submit Form',
}];

tools(array);
