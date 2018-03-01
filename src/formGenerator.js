/**
 * Daniel Rubio
 * Form Generator
 */

function renderInputElement(e) {
  return `<label for="${e.id}">${e.labelName}</label>
    <${e.tag} type="${e.type}" id="${e.id}"/>
  `;
}

function renderTextAreaElement(e) {
  return `<label for="${e.id}">${e.labelName}</label>
  <${e.tag} id="${e.id}"></${e.tag}>`;
}

function renderSelectElement(e) {
  return `<label for="${e
    .id}">${e
    .labelName}</label>
  <select id="${e
    .id}">
    ${e
    .options
    .map(option => `<option value="${option.value}">${option.text}</option>`)
    .join('\n')}
</select>
  `;
}
function filterFormElement(e) {
  let formElement;
  if (e.tag === 'input') {
    formElement = renderInputElement(e);
  } else if (e.tag === 'textarea') {
    formElement = renderTextAreaElement(e);
  } else if (e.tag === 'select') {
    formElement = renderSelectElement(e);
  }
  return formElement;
}
function displayForm(form) {
  const { action } = form.attributes;
  const { method } = form.attributes;
  const { id } = form.attributes;
  const { elements } = form;

  const formTemplate = `
  <form action="${action}" method="${method}" id="${id}">
    ${elements
    .map(element => filterFormElement(element))
    .join(' ')}
  </form>
  `;
  return formTemplate;
}

function validateFormObject(userInput) {
  let isValid;
  if (userInput !== null && typeof userInput === 'object') {
    isValid = true;
  } else {
    isValid = false;
    console.error('Error: Form Object is not in the correct format or is NULL');
  }
  return isValid;
}

exports.build = (formObjectArray) => {
  if (validateFormObject(formObjectArray)) {
    try {
      console.log(displayForm(formObjectArray));
    } catch (err) {
      console.error(err.message);
    }
  }
};
