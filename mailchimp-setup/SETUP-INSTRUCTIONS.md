# Cafe St Petersburg - Mailchimp Email Marketing Setup

## 🚀 Quick Setup Guide

### 1. Mailchimp Account Setup
1. **Create Mailchimp account** at mailchimp.com
2. **Get API Key**: Account → Extras → API keys → Create New Key
3. **Find Server Prefix**: Look at end of API key (us1, us2, etc.)
4. **Create Audience**: Audience → Create Audience → "VIP Tasting Access"

### 2. Install Dependencies
```bash
cd cafe-st-petersburg/mailchimp-setup
npm init -y
npm install @mailchimp/mailchimp_marketing crypto
```

### 3. Configure API Settings
Edit `mailchimp-integration.js`:
```javascript
const config = {
  apiKey: 'YOUR_ACTUAL_API_KEY_HERE',
  serverPrefix: 'us21', // Your server prefix
  listId: 'YOUR_AUDIENCE_ID_HERE' // Get from Mailchimp dashboard
};
```

### 4. Run Initial Setup
```bash
node setup-script.js
```

## 📧 Email Campaign Structure

### Automation Flows Created:

#### 1. **VIP Welcome Series** (3 emails)
- **Email 1**: Immediate welcome + benefits
- **Email 2**: First menu preview (day 2)  
- **Email 3**: Reservation reminder (day 5)

#### 2. **Weekly Tasting Flow**
- **Monday 9AM**: VIP menu preview
- **Tuesday 10AM**: Early reservations open
- **Wednesday 11AM**: Final call (if no reservation)

#### 3. **Post-Tasting Follow-up**
- **Day 1**: Thank you + review request
- **Day 7**: Return invitation + discount
- **Day 30**: Monthly check-in

## 🎯 Segments & Tags

### Automatic Tags:
- `VIP_Tasting` - All VIP members
- `Active_Subscriber` - Engaged subscribers
- `Completed_Tasting` - Attended at least once
- `Reserved_This_Week` - Has Thursday reservation
- `Loyal_Taster` - 3+ tastings attended

### Smart Segments:
- **VIP Active**: VIP + Active tags
- **Completed First**: Completed tasting tag
- **Loyal Members**: 3+ tasting tags
- **Dormant VIP**: 30+ days no engagement

## 🔗 Website Integration

### Add to Website Forms:
```html
<!-- VIP Signup Form -->
<form id="vip-signup-form">
  <input type="email" name="email" placeholder="Email" required>
  <input type="text" name="firstName" placeholder="First Name">
  <input type="tel" name="phone" placeholder="Phone">
  <button type="submit">Join VIP Access</button>
</form>

<script>
document.getElementById('vip-signup-form').onsubmit = async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const response = await fetch('/api/mailchimp/add-vip', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: formData.get('email'),
      firstName: formData.get('firstName'),
      phone: formData.get('phone')
    })
  });
  
  if (response.ok) {
    alert('Welcome to VIP Access! Check your email.');
  }
};
</script>
```

## 🔄 POS Integration (Toast)

### Webhook Setup:
```javascript
// Add to your server
app.post('/webhook/reservation-made', async (req, res) => {
  const { customerEmail, firstName, lastName, phone, reservationDate } = req.body;
  
  // Add to VIP list if not already
  await cafeMailchimp.addVIPSubscriber(customerEmail, firstName, lastName, phone);
  
  // Tag as reserved for this week
  await cafeMailchimp.tagCustomer(customerEmail, 'Reserved_This_Week');
  
  res.json({ success: true });
});

app.post('/webhook/tasting-completed', async (req, res) => {
  const { customerEmail, tastingDate } = req.body;
  
  // Trigger post-tasting follow-up
  await cafeMailchimp.sendPostTastingFollowup(customerEmail, tastingDate);
  
  res.json({ success: true });
});
```

## 📊 Analytics Dashboard

### Key Metrics to Track:
- **VIP List Growth**: New signups per week
- **Open Rates**: Target 25%+ (restaurant industry average: 22%)
- **Click Rates**: Target 3%+ (restaurant average: 2.5%)
- **Reservation Conversion**: Email → Reservation rate
- **Return Rate**: First tasting → Second tasting

### Monthly Reporting:
```javascript
// Get monthly analytics
const analytics = await cafeMailchimp.getTastingAnalytics();
console.log({
  totalVIPMembers: analytics.totalVIPMembers,
  avgOpenRate: analytics.avgOpenRate,
  avgClickRate: analytics.avgClickRate,
  recentCampaigns: analytics.recentCampaigns
});
```

## 🎨 Email Templates

### HTML Templates Included:
1. `tasting-night-weekly.html` - Weekly promotion
2. `post-tasting-followup.html` - Thank you + review
3. `lead-magnet-signup.html` - VIP welcome

### Uploading to Mailchimp:
1. Go to Campaigns → Email templates
2. Create new template → Code your own
3. Paste HTML from template files
4. Save with descriptive names

## ⚙️ Advanced Features

### A/B Testing Setup:
```javascript
// Test subject lines
const campaignA = await mailchimp.campaigns.create({
  // ... standard config
  settings: {
    subject_line: "This Thursday: Exclusive Tasting Menu 🍷",
    // ... other settings
  }
});

const campaignB = await mailchimp.campaigns.create({
  // ... standard config  
  settings: {
    subject_line: "VIP Preview: Thursday's Eastern European Journey",
    // ... other settings
  }
});
```

### Personalization Variables:
- `*|FNAME|*` - First name
- `*|LNAME|*` - Last name  
- `*|EMAIL|*` - Email address
- `*|PHONE|*` - Phone number
- `*|JOURNEY|*` - Customer journey stage

## 🚨 Important Notes

### Compliance:
- ✅ GDPR compliant opt-in forms
- ✅ Clear unsubscribe links in all emails
- ✅ Privacy policy reference
- ✅ No purchased email lists

### Best Practices:
- Send VIP previews Monday 9AM EST
- Limit to 2-3 emails per week maximum  
- Always include clear call-to-action
- Mobile-responsive templates
- Test emails before sending

### Emergency Contacts:
- Mailchimp Support: support@mailchimp.com
- Integration Issues: Check API status at status.mailchimp.com

---

## 🎯 Success Targets (Month 1)

- **VIP List**: 100+ subscribers
- **Open Rate**: 25%+
- **Click Rate**: 3%+
- **Email → Reservation**: 8%+
- **Customer Retention**: 30%+ return rate

Ready to launch the most sophisticated restaurant email marketing in Newton! 🍌