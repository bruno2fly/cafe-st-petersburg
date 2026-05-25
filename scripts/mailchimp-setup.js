#!/usr/bin/env node

// Mailchimp Setup Script for Cafe St Petersburg
// Run: node scripts/mailchimp-setup.js

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function setupMailchimp() {
  console.log('\n🍌 Cafe St Petersburg - Mailchimp Setup\n');
  
  console.log('1. First, create your Mailchimp account at mailchimp.com');
  console.log('2. Get your API key from Account → Extras → API keys');
  console.log('3. Create an audience called "VIP Tasting Access"\n');

  const apiKey = await question('Enter your Mailchimp API key: ');
  
  // Extract server prefix from API key
  const serverPrefix = apiKey.split('-').pop();
  console.log(`Detected server prefix: ${serverPrefix}`);

  const listId = await question('Enter your VIP audience list ID: ');

  // Update .env.local file
  const envPath = path.join(__dirname, '..', '.env.local');
  let envContent = fs.readFileSync(envPath, 'utf8');

  // Replace placeholders
  envContent = envContent.replace('your_mailchimp_api_key_here', apiKey);
  envContent = envContent.replace('us21', serverPrefix);
  envContent = envContent.replace('your_list_id_here', listId);

  fs.writeFileSync(envPath, envContent);

  console.log('\n✅ Environment variables updated!');

  // Test the connection
  console.log('\nTesting Mailchimp connection...');
  
  try {
    const mailchimp = require('@mailchimp/mailchimp_marketing');
    mailchimp.setConfig({
      apiKey: apiKey,
      server: serverPrefix,
    });

    const response = await mailchimp.lists.getList(listId);
    console.log(`✅ Connection successful! List: "${response.name}"`);
    
    // Create initial segments
    console.log('\nCreating VIP segments...');
    
    try {
      await mailchimp.lists.createSegment(listId, {
        name: "VIP Active Tasters",
        options: {
          match: "all",
          conditions: [{
            condition_type: "StaticSegment",
            field: "static_segment", 
            op: "static_is",
            value: "VIP_Tasting"
          }]
        }
      });
      console.log('✅ VIP Active Tasters segment created');
    } catch (error) {
      if (error.title === "Resource Not Found") {
        console.log('⚠️ Segment already exists - skipping');
      } else {
        console.log('⚠️ Could not create segment:', error.detail);
      }
    }

  } catch (error) {
    console.log('❌ Connection failed:', error.message);
    console.log('\nDouble-check your API key and list ID');
  }

  console.log('\n🎯 Next Steps:');
  console.log('1. Start your development server: npm run dev');
  console.log('2. Visit http://localhost:3002/tasting');
  console.log('3. Test the VIP signup form');
  console.log('4. Upload email templates to Mailchimp dashboard');
  console.log('5. Set up automation workflows\n');

  rl.close();
}

// Run setup
setupMailchimp().catch(console.error);