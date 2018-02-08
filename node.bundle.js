const fs = require('fs');
const path = require('path');

const lib = path.join(__dirname, './dist/tmp/lib.bundle.js');
const app = path.join(__dirname, './dist/tmp/app.js');
const bundle = path.join(__dirname, './dist/bundle.js');

let libContent =  fs.readFileSync(lib); 
let appContent =  fs.readFileSync(app); 

fs.writeFileSync(bundle, libContent+'\n'+appContent);

console.log('FS Merge Complete!')