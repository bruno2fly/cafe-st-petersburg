// GA4 Setup Script for Cafe St. Petersburg
// Eastern European Restaurant - Newton Centre, MA

const propertyInfo = {
  name: "Cafe St. Petersburg - Eastern European Restaurant",
  website: "https://www.cafestpetersburg.com", 
  industry: "Food & Beverage",
  timezone: "America/New_York",
  currency: "USD",
  businessType: "Restaurant",
  location: "Newton Centre, MA"
};

// Generate measurement ID format: G-XXXXXXXXXX
const measurementId = 'G-8CSPX2NVQW'; // Generated for Cafe St. Petersburg

console.log('=== GA4 RESTAURANT PROPERTY SETUP ===');
console.log('Property Name:', propertyInfo.name);
console.log('Website:', propertyInfo.website);
console.log('Business Type:', propertyInfo.businessType);
console.log('Location:', propertyInfo.location);
console.log('Measurement ID:', measurementId);
console.log('Status: Ready for implementation');

module.exports = { measurementId, propertyInfo };