const concat = require("concat");
(async function build(){
  const files = [
    "./dist/angular-elements-project/runtime.js",
    "./dist/angular-elements-project/polyfills.js",
    "./dist/angular-elements-project/main.js",
  ];

  await concat(files, "./dist/angular-elements-project/angular-elements-mfe.js")
})();
