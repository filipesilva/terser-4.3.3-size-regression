const fs = require('fs');
const Terser_4_3_2 = require('./terser-4.3.2');
const Terser_4_3_3 = require('./terser-4.3.4');

const input = fs.readFileSync('./input.js', 'utf-8');
console.log(`input is ${(input.length / 1024).toFixed(2)} kB at ./input.js`);
const terserOptions = {
  warnings: false,
  safari10: true,
  output: { ecma: 6, comments: false, webkit: true },
  compress: {
    ecma: 6,
    pure_getters: true,
    passes: 3,
    global_defs: { ngDevMode: false, ngI18nClosureMode: false }
  },
  mangle: true
};

const result_4_3_2 = Terser_4_3_2.minify(input, terserOptions);
if (result_4_3_2.error) {
  throw new Error(result_4_3_2.error);
} else {
  fs.writeFileSync('./output-4.3.2.js', result_4_3_2.code);
  console.log(`terser@4.3.2 output is ${(result_4_3_2.code.length / 1024).toFixed(2)} kB at ./output-4.3.2.js`);
}

const result_4_3_3 = Terser_4_3_3.minify(input, terserOptions);
if (result_4_3_3.error) {
  throw new Error(result_4_3_3.error);
} else {
  fs.writeFileSync('./output-4.3.4.js', result_4_3_3.code);
  console.log(`terser@4.3.4 output is ${(result_4_3_3.code.length / 1024).toFixed(2)} kB at ./output-4.3.4.js`);
}

