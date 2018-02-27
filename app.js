// Brett Rogers (Kloe)

// Require the file with the function
const FormGen = require('./tool.js');
// call the function
console.log(FormGen(
    {
        tags: [
            {
                tag:"label",
                value:"Name",
                for: "name"
            },
            {
                tag: "input",
                type: "text",

            },
            {
                tag:"select",
                options: [
                    "THis",
                    "Is",
                    "a",
                    "valuE"
                ]
            },
            {
                tag: "input",
                type: "email",
                name: "i"
            },
            {
                tag: "input",
                type: "text",
                name: "NAME",
                id: "ID"
            },
            {
                tag: "input",
                type: "text",
                id: "THAT ID"
            },
            {
                tag: 'input',
                type: 'submit'
            }
        ],
        settings: {
            action: "/save-item",
            method: "POST"
        }
    }
));