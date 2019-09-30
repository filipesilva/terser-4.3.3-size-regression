const { JSDOM } = require('jsdom');

const options = {
  resources: 'usable',
  runScripts: 'dangerously',
};

JSDOM.fromFile('jsdom-test/index.html', options).then((dom) => {
  setTimeout(() => {
    const bodyContent = dom.window.document.body.textContent.trim();
    // Check if the dom body contains a string set by the app.
    if (bodyContent != 'Welcome to cli-hello-world-ivy-minimal!') {
      throw new Error('Angular app was not rendered correctly.')
    }
    // Wait two seconds for the script to load and execute.
    // https://github.com/jsdom/jsdom/issues/1867
  }, 0);
});