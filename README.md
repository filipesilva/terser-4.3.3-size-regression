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

# Testing the output correctness

To test if the output results in a correct app, follow the commands below, replacing the output file with the one you want to test:
```
cp output-4.3.2.js jsdom-test/main-es2015.js
node run-jsdom-test.js
```

If the app works, nothing is printed and the exit code is 0.


If the app does not work, you should get a thrown error like this:
```
$ node run-jsdom-test.js
D:\sandbox\terser-size-regression\run-jsdom-test.js:13
      throw new Error('Angular app was not rendered correctly.')
      ^

Error: Angular app was not rendered correctly.
    at Timeout.setTimeout [as _onTimeout] (D:\sandbox\terser-size-regression\run-jsdom-test.js:13:13)
    at ontimeout (timers.js:436:11)
    at tryOnTimeout (timers.js:300:5)
    at listOnTimeout (timers.js:263:5)
    at Timer.processTimers (timers.js:223:10)
```
