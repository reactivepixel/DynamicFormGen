exports.formGen = (formInputs) => {
  // empty string for output
  let output = '';

  // loop through array
  formInputs.forEach((input) => {
    // check for element type
    if (input.type) {
      // check form for id, text, name, etc.
      switch (input.type.toLowerCase()) {
        // labels
        case 'label':
          output += '<label ';
          output += input.id ? `id="${input.id}" ` : '';
          output += input.for ? `for="${input.for}" ` : '';
          output += input.text ? `>${input.text}</label>` : '></label>';
          break;

        // text or username
        case 'text':
          output += `<input type="${input.type}" `;
          output += input.id ? `id="${input.id}" ` : '';
          output += input.placeholder ? `placeholder="${input.placeholder}" ` : '';
          output += input.required ? 'required' : '';
          output += '/>';
          break;

        // password
        case 'password':
          output += `<input type="${input.type}" `;
          output += input.id ? `id="${input.id}" ` : '';
          output += input.placeholder ? `placeholder="${input.placeholder}" ` : '';
          output += input.required ? 'required' : '';
          output += '/>';
          break;

        // submit
        case 'submit':
          output += `<input type="${input.type}" `;
          output += input.id ? `id="${input.id}" ` : '';
          output += input.name ? `name="${input.name}" ` : '';
          output += input.value ? `value="${input.value}" ` : '';
          output += '></input>';
          break;

        default:
          // error input dype does not match
          throw new Error(`-Error- invalid type ${input.type}`);
      }
    } else {
      // error input type missing
      throw new Error('-Error- Missing input type Check input array please');
    }
  });
  // return Output
  return `FormGen: <form method="post">${output}</form>`;
};
