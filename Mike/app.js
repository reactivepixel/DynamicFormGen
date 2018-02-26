// app.js
// Creator Michael Sewell

const obj = require('./formCreate.js')

data = [{
        "type": "label",
        "for": "firstname"
    },
    {
        "type": "text",
        "name": "firstname"
    },
    {
        "type": "label",
        "for": "lastname"
    },
    {
        "type": "text",
        "name": "lastname"
    },
    {
        "type": "label",
        "for": "state"
    },
    {
        "type": "select",
        "name": "state",
        "option": [
            "New York",
            "Florida"
        ]
    },
    {
        "type":"color",
        "name": "color"
    },
    {
        "type": "email",
        "name": "email"
    },
    {
        "type": "tel",
        "name": "cell"
    }
]

obj.convert(data)