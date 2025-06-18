const admin = require('firebase-admin');
const fs = require('fs');

// Replace with path to your Firebase Admin SDK key
const serviceAccount = require('./flipkart-clone-cd16f-firebase-adminsdk-fbsvc-613ebdba41.json');

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Load your dataset
const products = JSON.parse(fs.readFileSync('flipkart_products.json', 'utf-8'));

// Upload each product to Firestore
async function uploadProducts() {
  for (let product of products) {
    try {
      await db.collection('Products').add(product);
      console.log(`Uploaded: ${product.product_name}`);
    } catch (err) {
      console.error(`Failed: ${product.product_name}`, err);
    }
  }
}

uploadProducts();
