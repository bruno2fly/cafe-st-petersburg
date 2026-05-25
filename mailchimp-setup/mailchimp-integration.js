// Cafe St Petersburg - Mailchimp Integration
// Run: npm install @mailchimp/mailchimp_marketing

const mailchimp = require('@mailchimp/mailchimp_marketing');

// Configuration
const config = {
  apiKey: 'YOUR_MAILCHIMP_API_KEY', // Replace with actual API key
  serverPrefix: 'us21', // Replace with your server prefix (us1, us2, etc.)
  listId: 'YOUR_LIST_ID' // Replace with your audience list ID
};

mailchimp.setConfig({
  apiKey: config.apiKey,
  server: config.serverPrefix,
});

class CafeMailchimpManager {
  constructor() {
    this.listId = config.listId;
  }

  // 1. Create VIP Tasting List
  async createVIPTastingList() {
    try {
      const list = await mailchimp.lists.createList({
        name: "VIP Tasting Access - Cafe St Petersburg",
        contact: {
          company: "Cafe St Petersburg",
          address1: "57 Union Street",
          city: "Newton",
          state: "MA",
          zip: "02458",
          country: "US"
        },
        permission_reminder: "You signed up for VIP tasting access at Cafe St Petersburg",
        campaign_defaults: {
          from_name: "Cafe St Petersburg",
          from_email: "tasting@cafestpetersburg.com",
          subject: "Your VIP Tasting Experience",
          language: "en"
        },
        email_type_option: true
      });
      
      console.log('VIP List created:', list.id);
      return list.id;
    } catch (error) {
      console.error('Error creating list:', error);
    }
  }

  // 2. Add VIP subscriber with tags
  async addVIPSubscriber(email, firstName, lastName = '', phone = '') {
    try {
      const subscriberHash = this.getSubscriberHash(email);
      
      const response = await mailchimp.lists.addListMember(this.listId, {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          PHONE: phone
        },
        tags: ["VIP_Tasting", "Active_Subscriber"]
      });

      console.log('VIP subscriber added:', response.email_address);
      return response;
    } catch (error) {
      console.error('Error adding subscriber:', error);
    }
  }

  // 3. Create Tasting Night Automation
  async createTastingAutomation() {
    try {
      const automation = await mailchimp.automations.create({
        type: "date_based",
        recipients: {
          list_id: this.listId,
          segment_opts: {
            match: "all",
            conditions: [{
              condition_type: "StaticSegment",
              field: "static_segment",
              op: "static_is",
              value: "VIP_Tasting"
            }]
          }
        },
        settings: {
          title: "VIP Tasting Weekly Sequence",
          from_name: "Cafe St Petersburg",
          reply_to: "info@cafestpetersburg.com",
          authenticate: true,
          auto_footer: false,
          inline_css: false
        },
        tracking: {
          opens: true,
          html_clicks: true,
          text_clicks: false,
          goal_tracking: false,
          ecomm360: false,
          google_analytics: "UA-XXXXXXX-1"
        }
      });

      console.log('Automation created:', automation.id);
      return automation.id;
    } catch (error) {
      console.error('Error creating automation:', error);
    }
  }

  // 4. Create Campaign for Weekly Tasting
  async createWeeklyTastingCampaign(menuPreview, date) {
    try {
      const campaign = await mailchimp.campaigns.create({
        type: "regular",
        recipients: {
          list_id: this.listId,
          segment_opts: {
            match: "all", 
            conditions: [{
              condition_type: "StaticSegment",
              field: "static_segment",
              op: "static_is",
              value: "VIP_Tasting"
            }]
          }
        },
        settings: {
          subject_line: `This Thursday: Exclusive Tasting Menu Preview 🍷`,
          preview_text: `${menuPreview} - Reserve your VIP spot now`,
          title: `VIP Tasting - ${date}`,
          from_name: "Cafe St Petersburg",
          reply_to: "info@cafestpetersburg.com",
          to_name: "*|FNAME|*",
          folder_id: "",
          authenticate: true,
          auto_footer: false,
          inline_css: false
        },
        tracking: {
          opens: true,
          html_clicks: true,
          text_clicks: false,
          goal_tracking: false,
          ecomm360: false
        }
      });

      console.log('Weekly campaign created:', campaign.id);
      return campaign.id;
    } catch (error) {
      console.error('Error creating campaign:', error);
    }
  }

  // 5. Send Post-Tasting Follow-up
  async sendPostTastingFollowup(email, tastingDate) {
    try {
      // Add tag for completed tasting
      const subscriberHash = this.getSubscriberHash(email);
      
      await mailchimp.lists.updateListMemberTags(this.listId, subscriberHash, {
        tags: [
          { name: "Completed_Tasting", status: "active" },
          { name: `Tasting_${tastingDate}`, status: "active" }
        ]
      });

      // Trigger follow-up email (this would be set up as automation)
      console.log('Post-tasting follow-up triggered for:', email);
      
    } catch (error) {
      console.error('Error sending follow-up:', error);
    }
  }

  // 6. Create Segments
  async createSegments() {
    try {
      // VIP Active Segment
      const vipSegment = await mailchimp.lists.createSegment(this.listId, {
        name: "VIP Active Tasters",
        static_segment: ["VIP_Tasting", "Active_Subscriber"]
      });

      // Completed Tasting Segment
      const completedSegment = await mailchimp.lists.createSegment(this.listId, {
        name: "Completed First Tasting", 
        static_segment: ["Completed_Tasting"]
      });

      console.log('Segments created:', {
        vip: vipSegment.id,
        completed: completedSegment.id
      });

    } catch (error) {
      console.error('Error creating segments:', error);
    }
  }

  // Helper function
  getSubscriberHash(email) {
    const crypto = require('crypto');
    return crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
  }

  // 7. Analytics & Reporting
  async getTastingAnalytics() {
    try {
      const listStats = await mailchimp.lists.getList(this.listId);
      const campaigns = await mailchimp.campaigns.list({
        count: 10,
        status: 'sent'
      });

      return {
        totalVIPMembers: listStats.stats.member_count,
        totalCampaigns: campaigns.total_items,
        avgOpenRate: listStats.stats.avg_open_rate,
        avgClickRate: listStats.stats.avg_click_rate,
        recentCampaigns: campaigns.campaigns.slice(0, 5)
      };
    } catch (error) {
      console.error('Error getting analytics:', error);
    }
  }
}

// Usage Examples:
const cafeMailchimp = new CafeMailchimpManager();

// Example: Add new VIP subscriber
async function addNewVIPMember() {
  await cafeMailchimp.addVIPSubscriber(
    'customer@example.com',
    'John',
    'Smith', 
    '617-555-0123'
  );
}

// Example: Create weekly tasting campaign
async function createThisWeeksTasting() {
  await cafeMailchimp.createWeeklyTastingCampaign(
    'Journey I: Classic Borscht & Beef Stroganoff',
    '2026-05-29'
  );
}

module.exports = CafeMailchimpManager;