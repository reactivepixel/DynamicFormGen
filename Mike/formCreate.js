// formCreate.js
// Creator Michael Sewell

exports.convert = async (obj) => {
    let formString = "<form>"

    if (obj) { // error handling
        await obj.forEach(element => {
            
            const type = element.type
            if (type == "label") {
                formString += `<label for="${element.for}"></label>`;
            } else if (type == "text" || type == "color" || type == "email" || type == "tel") {
                formString += `<input type="${element.type}" id="${element.name}" name="${element.name}" />`;
            } else if (type == "select") { //
                formString += `<select id=${element.name} >`
                let options = element.option
                options.forEach(element => {
                    formString += `<option>${element}</option>`
                })
                formString += "</select>"
            }
        });
    } else { // error handling
        console.log(obj);
        console.log('Not a valid object');
    }
    formString += "</form>"
    console.log(formString);
}