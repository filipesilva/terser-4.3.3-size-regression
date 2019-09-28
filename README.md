Repro for https://github.com/terser/terser/issues/470

```
git clone https://github.com/filipesilva/terser-4.3.4-size-regression
cd terser-4.3.4-size-regression
npm i
npm test
```

You should see the following output:
```
input is 1454.80 kB at ./input.js
terser@4.3.2 output is 13.58 kB at ./output-4.3.2.js
terser@4.3.4 output is 124.01 kB at ./output-4.3.4.js
```