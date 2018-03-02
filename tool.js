exports.debug = (output) => {
  if (process.env.DEBUG_MODE) {
    console.log(output);
  }
};
