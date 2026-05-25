// Cafe St Petersburg - Mailchimp Automation Workflows

const CafeMailchimpManager = require('./mailchimp-integration');

class TastingAutomationWorkflows {
  constructor() {
    this.mailchimp = new CafeMailchimpManager();
  }

  // 1. VIP Welcome Series (3-email sequence)
  async setupWelcomeAutomation() {
    const automationConfig = {
      type: "signup_based",
      recipients: {
        list_id: this.mailchimp.listId,
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
        title: "VIP Tasting Welcome Series",
        from_name: "Cafe St Petersburg",
        reply_to: "info@cafestpetersburg.com"
      },
      emails: [
        {
          // Email 1: Immediate welcome (send immediately)
          delay: {
            amount: 0,
            type: "immediate"
          },
          settings: {
            subject_line: "Welcome to VIP Tasting Access! 🍷",
            title: "VIP Welcome"
          },
          content: "vip-welcome-email-html" // Reference to HTML template
        },
        {
          // Email 2: First menu preview (2 days later)
          delay: {
            amount: 2,
            type: "day"
          },
          settings: {
            subject_line: "Your First VIP Menu Preview Inside 👀",
            title: "First Menu Preview"
          },
          content: "first-menu-preview-html"
        },
        {
          // Email 3: Reservation reminder (5 days later)
          delay: {
            amount: 5, 
            type: "day"
          },
          settings: {
            subject_line: "Don't Miss This Thursday's Tasting ⏰",
            title: "Reservation Reminder"
          },
          content: "reservation-reminder-html"
        }
      ]
    };

    console.log('Welcome automation configured:', automationConfig);
    return automationConfig;
  }

  // 2. Weekly Tasting Sequence
  async setupWeeklyTastingFlow() {
    const weeklyFlow = {
      // Monday: VIP Preview
      mondayPreview: {
        day: "monday",
        time: "09:00",
        subject: "🔒 VIP Exclusive: This Week's Tasting Menu",
        segment: "VIP_Tasting",
        template: "weekly-vip-preview"
      },

      // Tuesday: Early Reservations  
      tuesdayReservations: {
        day: "tuesday", 
        time: "10:00",
        subject: "VIP Reservations Now Open - Limited Spots",
        segment: "VIP_Tasting",
        template: "early-reservations"
      },

      // Wednesday: Final Call
      wednesdayFinal: {
        day: "wednesday",
        time: "11:00", 
        subject: "Last Chance: Tomorrow's Tasting Experience",
        segment: "VIP_Tasting",
        condition: "has_not_reserved", // Only send if no reservation detected
        template: "final-call"
      }
    };

    return weeklyFlow;
  }

  // 3. Post-Tasting Follow-up Automation
  async setupPostTastingAutomation() {
    const postTastingFlow = {
      // Day 1: Thank you + Review request
      thankYouEmail: {
        delay: "1 day after tasting",
        subject: "Thank you for an amazing evening! ✨",
        template: "post-tasting-thankyou",
        actions: ["request_review", "social_share"]
      },

      // Day 7: Return invitation with discount
      returnInvitation: {
        delay: "7 days after tasting",
        subject: "Miss us already? Special return offer inside 💝",
        template: "return-invitation",
        discount_code: "RETURN15",
        actions: ["apply_discount", "track_return_visit"]
      },

      // Day 30: Monthly check-in
      monthlyCheckin: {
        delay: "30 days after tasting",
        subject: "Your next Eastern European adventure awaits",
        template: "monthly-checkin",
        actions: ["seasonal_menu_preview", "event_invitations"]
      }
    };

    return postTastingFlow;
  }

  // 4. Behavioral Triggers
  async setupBehavioralTriggers() {
    const triggers = {
      // Opened email but didn't reserve
      emailOpenerNonReserver: {
        trigger: "opened_email_no_reservation",
        wait: "24 hours",
        action: "send_reservation_reminder",
        subject: "Still thinking about Thursday? We saved your spot..."
      },

      // Clicked reservation link but didn't complete
      cartAbandonment: {
        trigger: "clicked_reserve_no_completion",
        wait: "2 hours", 
        action: "send_completion_reminder",
        subject: "Complete your tasting reservation in just one click"
      },

      // Multiple tastings attended
      loyalTaster: {
        trigger: "attended_3_tastings",
        action: "upgrade_to_premium_vip",
        benefits: ["chef_table_access", "menu_consultation", "exclusive_events"]
      },

      // Long-time subscriber, no attendance
      dormantVIP: {
        trigger: "30_days_no_engagement",
        action: "reengagement_campaign", 
        offer: "special_comeback_discount"
      }
    };

    return triggers;
  }

  // 5. Seasonal Campaign Automation
  async setupSeasonalCampaigns() {
    const seasonalCampaigns = {
      // Holiday Menus
      holidays: {
        christmas: {
          dates: ["2026-12-15", "2026-12-22"],
          subject: "Christmas in St. Petersburg: Special Holiday Menu",
          menu_theme: "traditional_holiday",
          pricing: 85 // Special holiday pricing
        },
        newyear: {
          dates: ["2026-12-29", "2027-01-05"],
          subject: "New Year's Eve Tasting: Russian Celebration Style",
          menu_theme: "celebration",
          pricing: 95
        },
        easter: {
          dates: ["2027-04-18", "2027-04-25"], 
          subject: "Easter Traditions: Orthodox & Western Flavors",
          menu_theme: "easter_traditional",
          pricing: 80
        }
      },

      // Cultural Events
      culturalEvents: {
        russianNewYear: {
          date: "2027-01-14",
          subject: "Old New Year: Traditional Russian Celebration",
          special_features: ["live_music", "traditional_dance", "storytelling"]
        },
        maslenitsa: {
          date: "2027-02-28",
          subject: "Maslenitsa Week: Blini & Celebration",
          menu_focus: "pancakes_varieties"
        }
      }
    };

    return seasonalCampaigns;
  }

  // 6. Integration with Restaurant POS
  async setupPOSIntegration() {
    const integration = {
      // When reservation made through Toast POS
      onReservationMade: async (customerData) => {
        await this.mailchimp.addVIPSubscriber(
          customerData.email,
          customerData.firstName,
          customerData.lastName,
          customerData.phone
        );
        
        // Tag as "Reserved" for this week
        await this.tagCustomer(customerData.email, "Reserved_This_Week");
      },

      // When tasting completed (checked in at restaurant)
      onTastingCompleted: async (customerEmail, tastingDate) => {
        await this.mailchimp.sendPostTastingFollowup(customerEmail, tastingDate);
        
        // Update customer journey stage
        await this.updateCustomerJourney(customerEmail, "completed_tasting");
      },

      // When customer becomes repeat visitor
      onRepeatVisit: async (customerEmail, visitCount) => {
        if (visitCount >= 3) {
          await this.tagCustomer(customerEmail, "Loyal_Taster");
          await this.triggerLoyaltyRewards(customerEmail);
        }
      }
    };

    return integration;
  }

  // Helper functions
  async tagCustomer(email, tag) {
    const subscriberHash = this.mailchimp.getSubscriberHash(email);
    await mailchimp.lists.updateListMemberTags(this.mailchimp.listId, subscriberHash, {
      tags: [{ name: tag, status: "active" }]
    });
  }

  async updateCustomerJourney(email, stage) {
    const subscriberHash = this.mailchimp.getSubscriberHash(email);
    await mailchimp.lists.updateListMember(this.mailchimp.listId, subscriberHash, {
      merge_fields: {
        JOURNEY: stage,
        LAST_TASTING: new Date().toISOString().split('T')[0]
      }
    });
  }
}

// Export for use
module.exports = TastingAutomationWorkflows;

// Usage example:
async function setupFullTastingAutomation() {
  const workflows = new TastingAutomationWorkflows();
  
  // Set up all automation flows
  const welcomeSeries = await workflows.setupWelcomeAutomation();
  const weeklyFlow = await workflows.setupWeeklyTastingFlow(); 
  const postTasting = await workflows.setupPostTastingAutomation();
  const behavioral = await workflows.setupBehavioralTriggers();
  
  console.log('All tasting automations configured successfully!');
  
  return {
    welcomeSeries,
    weeklyFlow, 
    postTasting,
    behavioral
  };
}