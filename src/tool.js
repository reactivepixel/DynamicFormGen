exports.formGen = (formInputs) => {
  let output = '';

  formInputs.forEach((input) => {
    if (input.type) {
      switch (input.type.toLowerCase()) {
        case 'label':
          output += '<label ';
          output += input.id ? `id="${input.id}" ` : '';
          output += input.for ? `for="${input.for}" ` : '';
          output += input.text ? `>${input.text}</label>` : '></label>';
          break;

        case 'text':
          output += `<input type="${input.type}" `;
          output += input.id ? `id="${input.id}" ` : '';
          output += input.placeholder ? `placeholder="${input.placeholder}" ` : '';
          output += input.required ? 'required' : '';
          output += '/>';
          break;

        case 'password':
          output += `<input type="${input.type}" `;
          output += input.id ? `id="${input.id}" ` : '';
          output += input.placeholder ? `placeholder="${input.placeholder}" ` : '';
          output += input.required ? 'required' : '';
          output += '/>';
          break;

        case 'submit':
          output += `<input type="${input.type}" `;
          output += input.id ? `id="${input.id}" ` : '';
          output += input.name ? `name="${input.name}" ` : '';
          output += input.value ? `value="${input.value}" ` : '';
          output += '></input>';
          break;

        default:

      }
    }
  });
  return `FormGen: <form method="post">${output}</form>`;
};
