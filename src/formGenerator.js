/**
 * Daniel Rubio
 * Form Generator
 */

exports.build = formObjectArray => {
  if(validateFormObject(formObjectArray)){
    try {
      console.log(displayForm(formObjectArray));
    } 
    catch(err) {
      console.error(err.message); 
    }
  }
}

function renderInputElement(e) {
  return `<label for="${e.id}">${e.labelName}</label>
    <${e.tag} type="${e.type}" id="${e.id}"/>
  `;
}

function renderTextAreaElement(e) {
  return `<label for="${e.id}">${e.labelName}</label>
  <${e.tag} id="${e.id}"></${e.tag}>`;
}

function renderSelectElement(e){
  return `<label for="${e.id}">${e.labelName}</label>
  <select id="${e.id}">
    ${e.options.map(option => 
    `<option value="${option.value}">${option.text}</option>`
    ).join('\n')}
</select>
  `;
}

function displayForm(form) {
  const action = form.attributes.action,
    method = form.attributes.method,
    formId = form.attributes.id,
    elements = form.elements;
    
  const formTemplate = `
  <form action="${action}" method="${method}" id="${formId}">
    ${elements.map(element => `${ 
      (element.tag === 'input') ? renderInputElement(element) : 
      (element.tag === 'textarea') ? renderTextAreaElement(element) :
      (element.tag === 'select') ? renderSelectElement(element)
      : `na`}`).join(' ')}
  </form>
  `;
  return formTemplate;
}

function validateFormObject(userInput){
  if(userInput !== null && typeof userInput === 'object'){
    return true;
  }else{
    console.error('Error: Form Object is not in the correct format or is NULL');
  }
}