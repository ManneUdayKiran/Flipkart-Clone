const csv = require('csvtojson');
const fs = require('fs');

// Replace with your actual CSV filename
const csvFilePath = 'flipkart_products.csv';
const jsonFilePath = 'flipkart_products.json';

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj, null, 2));
    console.log(`Converted ${csvFilePath} to ${jsonFilePath}`);
  })
  .catch((err) => {
    console.error('Error during conversion:', err);
  });
