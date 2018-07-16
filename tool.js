/**
 * Production 0
 * Staging 1
 * Dev 2
 * Detailed 3
 */

exports.debug = (context, output, level) => {
  if (level <= parseInt(process.env.DEBUG_MODE, 0)) {
    console.log(`--- ${context} ---`, output);
  }
};
