const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'dist');

fs.rm(directory, { recursive: true, force: true }, (error) => {
  if (error) {
    console.error(`Error removing the directory ${directory}: ${error}`);
  } else {
    console.log('Successfully removed the dist directory.');
  }
});
