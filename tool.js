// Brett Rogers (Kloe)

const generator = obj => {
    let formString = '', error = '';
    // Checking for the settings in the object
    if (obj.settings) {
        formString += `<form action="${obj.settings.action}" method="${obj.settings.method}">`;        
    } else {
        formString += "<form action=\"#\" method=\"POST\">";
    }
    if (obj.tags) {
        obj.tags.forEach(e => {
            // Switch statement to find which tag is wanted
            switch (e.tag) {
                case 'input':
                    // Checks if they added a name
                    if (e.name) {
                        formString += `<input type="${e.type}" name="${e.name}" />`;
                    // Checks if they added an id
                    } else if (e.id) {
                        formString += `<input type="${e.type}" id="${e.id}" />`;
                    // Checks if they added an id and name
                    } else if (e.id && e.name) {
                        formString += `<input type="${e.type}" name="${e.name}" id="${e.id}" />`;
                    } else {
                        formString += `<input type="${e.type}" />`
                    }
                    break;
                case 'label':
                    if (e.for) {
                        formString += `<label for="${e.for}">${e.value}</label>`;
                    } else {
                        formString += `<label>${e.value}</label>`;
                    }
                    break;
                case 'select':
                    if (e.options) {
                        formString += "<select>";
                        e.options.forEach(e => {
                            formString += `<option value="${e.toLowerCase()}">${e}</option>`;
                        });
                        formString += "</select>"
                    } else {
                        formString += "<select></select>";
                    }
                    break;
                default:
                    error = "Not a valid object";
                    break;
                }
            });
            formString += "</form>";
        } else {
            error = "Object does not exist"
        }
    // return the error if the object is not valid if not return the form
    return error ? error : formString;
}
module.exports = generator;