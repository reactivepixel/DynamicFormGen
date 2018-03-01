// app.js
// Creator Michael Sewell

const obj = require('./formCreate.js');

const data = [{
  type: 'label',
  forAttr: 'firstname',
},
{
  type: 'text',
  name: 'firstname',
},
{
  type: 'label',
  forAttr: 'lastname',
},
{
  type: 'text',
  name: 'lastname',
},
{
  type: 'label',
  forAttr: 'state',
},
{
  type: 'select',
  name: 'state',
  options: [
    'New York',
    'Florida',
  ],
},
{
  type: 'color',
  name: 'color',
},
{
  type: 'email',
  name: 'email',
},
{
  type: 'tel',
  name: 'cell',
},
];

obj.convert(data);
