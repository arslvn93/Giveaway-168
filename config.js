const config = {
  "settings": {
    "webhookUrl": "https://n8n.salesgenius.co/webhook/giveaway",
    "confettiColors": ["#005bbb", "#00aaff", "#ff0000", "#ffffff", "#cccccc"]
  },
  "modalQuestions": [
    {
      "id": "favorite_local_events",
      "questionText": "Which type of local events do you enjoy attending most in Toronto?",
      "options": [
        { "value": "major_league_sports_games", "text": "Major league sports games" },
        { "value": "food_wine_festivals", "text": "Food and wine festivals" },
        { "value": "music_concerts", "text": "Music concerts" },
        { "value": "art_exhibitions", "text": "Art exhibitions" }
      ]
    },
    {
      "id": "lifestyle_preferences",
      "questionText": "On a typical weekend, how do you prefer to spend your time?",
      "options": [
        { "value": "exploring_real_estate", "text": "Exploring new real estate developments or open houses" },
        { "value": "relaxing_home", "text": "Relaxing at home with friends and family" },
        { "value": "outdoor_activities", "text": "Engaging in outdoor activities like hiking or biking" },
        { "value": "dining_trendy", "text": "Dining at trendy restaurants or cafes" }
      ]
    },
    {
      "id": "travel_habits",
      "questionText": "How do you typically spend your vacations?",
      "options": [
        { "value": "international_travel", "text": "Traveling to international destinations" },
        { "value": "local_attractions", "text": "Visiting local attractions around Toronto" },
        { "value": "staycations_luxury", "text": "Taking staycations in luxury accommodations" },
        { "value": "road_trips", "text": "Going on road trips to explore new areas" }
      ]
    },
    {
      "id": "community_engagement",
      "questionText": "How involved are you in community activities or neighborhood associations?",
      "options": [
        { "value": "very_involved", "text": "Very involved, I attend meetings and events regularly" },
        { "value": "somewhat_involved", "text": "Somewhat involved, I participate occasionally" },
        { "value": "interested_but_not_involved", "text": "Not very involved, but I’m interested in what's happening" },
        { "value": "not_involved", "text": "Not involved at all" }
      ]
    }
  ],
  "giveaway": {
    "name": "Toronto Blue Jays Tickets Giveaway",
    "heroHeadline": "Win <span class='highlight'>Toronto Blue Jays Tickets</span> for Canada Day!",
    "heroSubheadline": "Join us on July 1st at the Canada Day event for a chance to win tickets worth $100 to a live Blue Jays game—experience summer baseball excitement!",
    "promotionDates": "Promotion runs from June 18, 2025 until July 1, 2025.",
    "endDate": "2025-07-02T23:59:59",
    "heroBackgroundImageUrl": "https://api.typeform.com/responses/files/4d70b80ce239ac7cb2403d6b95dd028bdd857cb5c8f1881dd46254015f5d135c/Screenshot_20250616_142200_Canva.jpg",
    "heroCtaText": "Enter Now to Win!",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "🎉 Congratulations! You're in the Draw! 🎉",
    "successModalMainMessage": "Your entry for the <strong>Toronto Blue Jays Tickets Giveaway</strong> has been submitted successfully. Best of luck!",
    "successModalEmailPrompt": "We'll announce the winner via email on July 2, 2025. Keep an eye on your inbox!"
  },
  "prize": {
    "name": "Toronto Blue Jays Tickets",
    "value": "$100 Value",
    "description": "Win tickets to enjoy an unforgettable day at the Rogers Centre watching the Toronto Blue Jays—perfect for baseball fans and summer fun seekers alike.",
    "images": [
      {
        "src": "https://cdn.britannica.com/17/183217-050-7ED858AD/Toronto-Blue-Jays-MLB-baseball-Rogers-Centre-2012.jpg",
        "alt": "Toronto Blue Jays Game"
      },
      {
        "src": "https://upload.wikimedia.org/wikipedia/commons/4/42/Toronto_Blue_Jays_Logo.svg",
        "alt": "Blue Jays Logo"
      },
      {
        "src": "https://assets.nypost.com/v1/images/5d45504499a738758f570061/5d45504499a738758f570064-640x427.jpg",
        "alt": "Fans Enjoying Game"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-ticket-alt", "text": "Tickets worth $100 to a Blue Jays game" },
      { "icon": "fas fa-baseball-ball", "text": "Experience live Major League Baseball action" },
      { "icon": "fas fa-users", "text": "Perfect for family and friends" },
      { "icon": "fas fa-map-marker-alt", "text": "Enjoy the iconic Rogers Centre stadium" },
      { "icon": "fas fa-check-circle", "text": "Free to enter, no purchase necessary" }
    ],
    "limitedTimeOfferText": "🏟️ Limited Time Canada Day Giveaway!",
    "ctaButtonText": "I Want These Tickets!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-map-marker-alt",
        "title": "Visit Our Booth",
        "description": "Join us at the Canada Day event on July 1st and find our booth to enter."
      },
      {
        "icon": "fas fa-clipboard-check",
        "title": "Complete a Quick Survey",
        "description": "Fill out a short and fun survey to enter the draw."
      },
      {
        "icon": "fas fa-envelope",
        "title": "Wait for the Draw",
        "description": "We’ll announce the winner on July 2nd via email."
      }
    ],
    "highlights": [
      { "icon": "fas fa-baseball-ball", "text": "Exciting baseball experience" },
      { "icon": "fas fa-crown", "text": "Chance to win a $100 prize" },
      { "icon": "fas fa-smile", "text": "Free and easy to enter" }
    ]
  },
  "entryForm": {
    "subtitle": "Provide your details below to win tickets to the Blue Jays game!",
    "entryCountText": "Join hundreds of fans already entering!",
    "socialSharePrompt": "Share the excitement with your friends:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Win Toronto Blue Jays Tickets for Canada Day! Enter now!")
    }
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair and Random Winner Selection",
      "text": "The winner will be selected randomly and fairly to ensure equal opportunity for all participants."
    },
    "importantNotice": {
      "title": "Winner Notification",
      "text": "The winner will be notified via the email address provided. Please check your inbox and spam folder on July 2, 2025."
    },
    "faq": [
      {
        "q": "Who is eligible to enter?",
        "a": "The giveaway is open to all baseball fans aged 18 or older."
      },
      {
        "q": "When does the giveaway run?",
        "a": "The promotion starts on June 18, 2025 and ends on July 1, 2025. Entries must be received by the event date."
      },
      {
        "q": "How is the winner selected?",
        "a": "The winner is chosen in a random draw from all eligible entries."
      },
      {
        "q": "When will the winner be notified?",
        "a": "The winner will be announced on July 2, 2025 by email."
      },
      {
        "q": "How many entries are allowed per person?",
        "a": "One entry per person during the giveaway period to ensure fairness."
      },
      {
        "q": "Is my personal information secure?",
        "a": "Your information will be used only for this giveaway and handled according to our Privacy Policy."
      }
    ],
    "tips": [
      "Double-check your email before submitting.",
      "Add our contact email to your address book to ensure you receive updates.",
      "Visit our booth on Canada Day to enter and learn more."
    ]
  },
  "footerContact": {
    "organizerName": "Sky Group",
    "organizerLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/777776b6-d7a4-424e-8ea4-333ed3be7501/The_Sky_Group_X_Property.ca_cobranded_logo.pdf",
    "email": "shar@theskygroup.ca",
    "phone": "1 647 887 4996",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4",
    "social": {
      "facebook": "https://www.facebook.com/theskygroupre",
      "instagram": "https://www.instagram.com/theskygroup_re"
    },
    "copyrightOwner": "Sky Group"
  },
  "meta": {
    "pageTitle": "Win Toronto Blue Jays Tickets for Canada Day!",
    "navBrandLogoText": "Sky Group"
  },
  "settings": {
    "webhookUrl": "https://n8n.salesgenius.co/webhook/giveawayupdate",
    "confettiColors": ["#005bbb", "#00aaff", "#ff0000", "#ffffff", "#cccccc"],
    "showCountdownInHero": true
  },
  "deploymentInfo": {
    "repoName": "Giveaway-168",
    "repoUrl": "https://github.com/arslvn93/Giveaway-168",
    "tag": "Canada Day Blue Jays Giveaway",
    "netlifyUrl": "http://Giveaway-168.netlify.app",
    "netlifyId": "1003254812"
  }
};