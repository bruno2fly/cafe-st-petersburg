// API Route for VIP signup
import { NextRequest, NextResponse } from 'next/server';

const mailchimp = require('@mailchimp/mailchimp_marketing');

// Mailchimp configuration
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // us21, etc.
});

const LIST_ID = process.env.MAILCHIMP_VIP_LIST_ID;

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName = '', phone = '' } = await request.json();

    if (!email || !firstName) {
      return NextResponse.json({ error: 'Email and first name required' }, { status: 400 });
    }

    // Add subscriber to VIP list
    const response = await mailchimp.lists.addListMember(LIST_ID, {
      email_address: email.toLowerCase(),
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        PHONE: phone
      },
      tags: ["VIP_Tasting", "Active_Subscriber", "Website_Signup"]
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully added to VIP list',
      email: response.email_address 
    });

  } catch (error: any) {
    console.error('Mailchimp error:', error);

    // Handle duplicate email
    if (error.status === 400 && error.title === "Member Exists") {
      return NextResponse.json({ 
        success: true, 
        message: 'Already on VIP list - welcome back!' 
      });
    }

    return NextResponse.json({ 
      error: 'Failed to join VIP list',
      details: error.detail || error.message 
    }, { status: 500 });
  }
}