export interface FAQ {
  id: number;
  category: string;
  question: string;
  keywords: string[];
  answer: string;
}

export const faqs: FAQ[] = [
  // SERVICES - Main Overview
  {
    id: 1,
    category: "Services",
    question: "What services does Yahvi Aura provide?",
    keywords: ["services", "provide", "offer", "what do you do", "what services", "your services", "list of services", "service list"],
    answer: "Yahvi Aura offers comprehensive event management services across 4 main categories: 1) Corporate Events (conferences, product launches, award ceremonies, hybrid events), 2) Wedding Events (destination weddings, traditional ceremonies, full planning & coordination), 3) Experiential Events (brand activations, immersive experiences), and 4) Social Events (birthdays, anniversaries, celebrations). We provide end-to-end planning, execution, vendor management, and on-site coordination."
  },
  
  // CORPORATE EVENTS - Detailed
  {
    id: 2,
    category: "Corporate",
    question: "What corporate event services do you offer?",
    keywords: ["corporate", "corporate events", "business events", "corporate services", "company events", "office events", "business"],
    answer: "Our corporate services include: Conference & Summit Planning, Product Launch Events, Award Ceremonies & Galas, Team Building Activities, Corporate Retreats, Hybrid Events (virtual + in-person), Trade Shows & Exhibitions, Annual General Meetings (AGM), and Executive Networking Events. We focus on Business-Aligned Planning to ensure your event meets KPIs and brand objectives."
  },
  {
    id: 3,
    category: "Corporate",
    question: "Do you organize conferences and seminars?",
    keywords: ["conference", "seminar", "summit", "convention", "symposium", "business meeting"],
    answer: "Yes! We specialize in organizing professional conferences, seminars, and summits. Our services include venue selection, speaker coordination, AV setup, stage design, attendee management, registration systems, and post-event analytics. We've successfully managed conferences for 50 to 5000+ attendees."
  },
  {
    id: 4,
    category: "Corporate",
    question: "Can you handle product launch events?",
    keywords: ["product launch", "launch event", "new product", "product unveiling", "launch party"],
    answer: "Absolutely! We create memorable product launch experiences with innovative concepts, media management, influencer coordination, interactive demonstrations, branded environments, and post-launch buzz generation. Our launches are designed to maximize media coverage and audience engagement."
  },

  // WEDDING EVENTS - Comprehensive
  {
    id: 5,
    category: "Weddings",
    question: "What wedding services do you provide?",
    keywords: ["wedding", "wedding services", "marriage", "shaadi", "wedding planning", "wedding planner"],
    answer: "We offer complete wedding planning services including: Full Wedding Coordination (concept to execution), Partial Planning (specific elements), Day-of Coordination, Destination Wedding Planning, Venue Selection & Management, Vendor Coordination (photographers, caterers, decorators), Theme Design & Decor, Guest Management, and Traditional Ceremony Planning. We handle all pre-wedding, wedding day, and post-wedding events."
  },
  {
    id: 6,
    category: "Weddings",
    question: "Do you plan destination weddings?",
    keywords: ["destination wedding", "destination", "beach wedding", "hill station wedding", "international wedding", "exotic wedding"],
    answer: "Yes! Destination weddings are our specialty. We plan weddings across India (Goa, Rajasthan, Udaipur, Kerala, Himachal) and internationally. We handle travel logistics, accommodation bookings, local vendor coordination, legal documentation, and ensure a seamless experience for you and your guests. We've executed 100+ destination weddings successfully."
  },
  {
    id: 7,
    category: "Weddings",
    question: "Can you help with just wedding decor?",
    keywords: ["decor", "decoration", "wedding decor", "stage decoration", "mandap", "theme decoration"],
    answer: "Yes! We offer standalone decor services. Whether you need mandap design, stage decoration, floral arrangements, lighting design, entrance decor, or complete venue transformation - we create stunning visual experiences. We work with premium vendors and can execute any theme from traditional to contemporary."
  },
  {
    id: 8,
    category: "Weddings",
    question: "Do you coordinate pre-wedding and post-wedding events?",
    keywords: ["pre-wedding", "post-wedding", "mehendi", "sangeet", "haldi", "reception", "cocktail"],
    answer: "Absolutely! We plan and coordinate all wedding-related events including Mehendi, Sangeet, Haldi, Cocktail Parties, Reception, and Welcome/Farewell dinners. Each event is designed with its unique theme and executed flawlessly."
  },

  // EXPERIENTIAL EVENTS
  {
    id: 9,
    category: "Experiential",
    question: "What are experiential events?",
    keywords: ["experiential", "experiential events", "brand activation", "immersive experience", "activation"],
    answer: "Experiential events are immersive brand experiences that engage audiences through interactive activities. We create brand activations, pop-up experiences, product sampling campaigns, interactive installations, and promotional events that leave lasting impressions. Perfect for brands looking to connect emotionally with their target audience."
  },

  // SOCIAL EVENTS
  {
    id: 10,
    category: "Social",
    question: "What social events do you organize?",
    keywords: ["social events", "birthday", "anniversary", "party", "celebration", "private events"],
    answer: "We organize all types of social celebrations: Birthday Parties (kids & adults), Anniversary Celebrations, Engagement Parties, Baby Showers, Graduation Parties, Retirement Functions, and Milestone Celebrations. From intimate gatherings to grand celebrations, we bring your vision to life."
  },
  {
    id: 11,
    category: "Social",
    question: "Do you plan birthday parties?",
    keywords: ["birthday", "birthday party", "bday", "kids birthday", "adult birthday", "birthday celebration"],
    answer: "Yes! We plan birthday parties for all ages - from themed kids' parties with entertainment, games, and decorations to elegant adult celebrations. We handle venue, catering, entertainment, themes, invitations, and all logistics to make your special day memorable."
  },

  // PRICING & PACKAGES
  {
    id: 12,
    category: "Pricing",
    question: "How much do your services cost?",
    keywords: ["cost", "price", "pricing", "how much", "charges", "fees", "rates", "expensive", "affordable"],
    answer: "Our pricing is customized based on event type, scale, requirements, and services needed. We offer flexible packages to fit various budgets without compromising quality. For a detailed quote tailored to your event, please call us at +91 9315547880 or submit a request through our website. We believe in transparent pricing with no hidden costs."
  },
  {
    id: 13,
    category: "Pricing",
    question: "Do you have package options?",
    keywords: ["packages", "package", "plans", "options", "pricing plans", "service packages"],
    answer: "Yes! We offer flexible packages: Basic (essential planning & coordination), Premium (comprehensive planning with premium vendors), and Luxury (end-to-end concierge service with exclusive experiences). Each package can be customized. We also offer à la carte services if you only need specific elements."
  },
  {
    id: 14,
    category: "Pricing",
    question: "Is there a minimum budget requirement?",
    keywords: ["minimum", "minimum budget", "budget requirement", "lowest price", "starting price"],
    answer: "We work with a range of budgets and tailor our services accordingly. While pricing varies by event type, we're committed to delivering exceptional experiences at every price point. Contact us to discuss your budget, and we'll create a plan that maximizes value."
  },

  // LOCATION & COVERAGE
  {
    id: 15,
    category: "Location",
    question: "Where is Yahvi Aura located?",
    keywords: ["location", "address", "office", "where located", "based", "headquarters"],
    answer: "We are based in Ghaziabad, Vaishali (NCR region), but we serve clients across India and internationally. Our physical office allows for in-person consultations, but we also coordinate events remotely for destination locations."
  },
  {
    id: 16,
    category: "Location",
    question: "Do you work outside Ghaziabad?",
    keywords: ["outside ghaziabad", "other cities", "pan india", "travel", "different city", "other locations"],
    answer: "Absolutely! While based in Ghaziabad, we execute events across India - Delhi NCR, Mumbai, Bangalore, Goa, Rajasthan, Udaipur, Jaipur, Kerala, Himachal Pradesh, and more. We also manage international destination events. Our team travels to ensure flawless execution wherever you need us."
  },
  {
    id: 17,
    category: "Location",
    question: "Do you organize events in Delhi NCR?",
    keywords: ["delhi", "ncr", "delhi ncr", "noida", "gurugram", "gurgaon", "faridabad"],
    answer: "Yes! Delhi NCR is our primary service area. We have extensive experience with venues across Delhi, Noida, Greater Noida, Gurugram, Ghaziabad, and Faridabad. We know the best venues, vendors, and logistics partners in the region."
  },

  // PROCESS & BOOKING
  {
    id: 18,
    category: "Process",
    question: "How do I book your services?",
    keywords: ["book", "booking", "hire", "get started", "how to book", "reservation"],
    answer: "Booking is easy! Step 1: Contact us at +91 9315547880 or through our website. Step 2: Schedule a consultation (in-person or virtual) to discuss your vision. Step 3: Receive a customized proposal with pricing. Step 4: Sign agreement and pay advance to secure your date. Step 5: We begin planning your dream event!"
  },
  {
    id: 19,
    category: "Process",
    question: "What is your planning process?",
    keywords: ["process", "planning process", "how do you plan", "workflow", "steps"],
    answer: "Our process: 1) Initial Consultation - understand your vision, budget, and requirements, 2) Concept Development - create themes, mood boards, and designs, 3) Vendor Selection - curate and coordinate best-fit vendors, 4) Timeline Creation - detailed schedule and milestones, 5) Regular Updates - weekly/bi-weekly check-ins, 6) Final Coordination - rehearsals and day-of management, 7) Execution - flawless on-site coordination, 8) Post-Event - debrief and feedback."
  },
  {
    id: 20,
    category: "Process",
    question: "How far in advance should I book?",
    keywords: ["advance", "how early", "when to book", "lead time", "notice period"],
    answer: "We recommend booking 6-12 months in advance for weddings, 3-6 months for corporate events, and 1-3 months for social events. However, we've successfully executed events with shorter timelines too. The earlier you book, the better availability we can secure for vendors and venues."
  },

  // VENDOR & LOGISTICS
  {
    id: 21,
    category: "Vendors",
    question: "Do you work with my existing vendors?",
    keywords: ["existing vendors", "my vendors", "own vendors", "bring my own"],
    answer: "Yes! We're happy to collaborate with your preferred vendors. We'll coordinate with them, manage timelines, and ensure seamless integration. If needed, we can also supplement with our vetted vendor network to fill any gaps."
  },
  {
    id: 22,
    category: "Vendors",
    question: "Do you provide vendors like photographers and caterers?",
    keywords: ["vendors", "photographer", "caterer", "decorator", "dj", "makeup artist", "florist"],
    answer: "Yes! We have a curated network of premium vendors including photographers, videographers, caterers, decorators, florists, DJs, makeup artists, entertainment acts, and technical teams. All our vendors are vetted for quality, reliability, and professionalism. We handle all vendor coordination and contracts."
  },

  // CUSTOMIZATION
  {
    id: 23,
    category: "Customization",
    question: "Can you execute custom themes?",
    keywords: ["custom", "theme", "unique", "personalized", "customization", "tailored"],
    answer: "Absolutely! Customization is our strength. Whether you want a Bollywood theme, Royal Rajasthani, Modern Minimalist, Vintage, Tropical, or something completely unique - we bring your vision to life. We create custom concepts, designs, and experiences tailored to your personality and preferences."
  },

  // TRUST & CREDIBILITY
  {
    id: 24,
    category: "Trust",
    question: "Why should I choose Yahvi Aura?",
    keywords: ["why", "why choose", "best", "better", "different", "stand out"],
    answer: "Choose us for: 1) Founder-led Quality Control - personal attention to every detail, 2) 10+ Years Experience - successfully executed 500+ events, 3) Vetted Vendor Network - only premium, reliable partners, 4) Transparent Pricing - no hidden costs, 5) Stress-Free Execution - we handle everything, 6) Multicultural Expertise - experience with diverse traditions and styles, 7) 24/7 Support - we're always available."
  },
  {
    id: 25,
    category: "Trust",
    question: "How experienced is your team?",
    keywords: ["experience", "team", "expertise", "qualified", "professionals"],
    answer: "Our team has 10+ years of collective experience in event management. We've executed 500+ events including large-scale conferences, luxury weddings, and international destinations. Our team includes certified event planners, designers, and coordinators with expertise across all event types."
  },

  // CONTACT & COMMUNICATION
  {
    id: 26,
    category: "Contact",
    question: "How can I contact you?",
    keywords: ["contact", "call", "phone", "email", "whatsapp", "reach"],
    answer: "You can reach us at: Phone/WhatsApp: +91 9315547880, or visit our Contact page on the website to send a message. We respond within 24 hours and are available for consultations via call, WhatsApp, video call, or in-person meetings."
  },
  {
    id: 27,
    category: "Contact",
    question: "What are your working hours?",
    keywords: ["hours", "timings", "working hours", "open", "availability"],
    answer: "Our office hours are Monday-Saturday, 10 AM - 7 PM. However, for urgent event matters and day-of coordination, we're available 24/7. You can reach us anytime via WhatsApp at +91 9315547880."
  },

  // VENUE
  {
    id: 28,
    category: "Venue",
    question: "Do you help with venue selection?",
    keywords: ["venue", "venue selection", "location", "find venue", "venue recommendation"],
    answer: "Yes! Venue selection is a crucial part of our service. We have partnerships with premium venues across India - banquet halls, hotels, resorts, farmhouses, palaces, beaches, and unique locations. We'll shortlist options based on your requirements, budget, guest count, and theme, and coordinate site visits."
  },

  // GUEST MANAGEMENT
  {
    id: 29,
    category: "Logistics",
    question: "Do you handle guest management?",
    keywords: ["guest management", "guests", "invitations", "rsvp", "accommodation"],
    answer: "Yes! We provide complete guest management including: Digital & Physical Invitations, RSVP Tracking, Accommodation Booking & Coordination, Transportation Arrangements, Welcome Kits, On-site Guest Assistance, and Seating Arrangements. We ensure your guests have a seamless experience."
  },

  // ENTERTAINMENT
  {
    id: 30,
    category: "Entertainment",
    question: "Do you provide entertainment for events?",
    keywords: ["entertainment", "performers", "artists", "band", "singer", "dance"],
    answer: "Yes! We arrange all types of entertainment: Live Bands, DJ Services, Singers, Dancers (classical, Bollywood, contemporary), Celebrity Performers, Stand-up Comedians, Magicians, Emcees/Hosts, and Interactive Activities. We curate entertainment that matches your event theme and audience."
  },

  // DECOR & DESIGN
  {
    id: 31,
    category: "Design",
    question: "What decor styles do you specialize in?",
    keywords: ["decor style", "decoration style", "design", "aesthetic"],
    answer: "We excel in all decor styles: Traditional (Indian, Regional), Contemporary Modern, Minimalist Elegant, Royal & Regal, Bohemian, Vintage, Rustic, Floral Paradise, Glamorous, and Fusion styles. We create custom designs based on your preferences, venue, and theme."
  },

  // PHOTOGRAPHY & VIDEOGRAPHY
  {
    id: 32,
    category: "Media",
    question: "Do you provide photography and videography?",
    keywords: ["photography", "videography", "photographer", "videographer", "photo", "video"],
    answer: "Yes! We work with award-winning photographers and videographers who specialize in events, weddings, and corporate coverage. Services include candid photography, traditional portraits, cinematic videos, drone shots, pre-event shoots, and same-day edits. We ensure every moment is beautifully captured."
  },

  // CATERING
  {
    id: 33,
    category: "Catering",
    question: "Do you arrange catering?",
    keywords: ["catering", "food", "menu", "caterer", "cuisine", "dining"],
    answer: "Yes! We coordinate with premium caterers offering diverse cuisines - Indian (North & South), Continental, Oriental, Mediterranean, and Fusion. We arrange food tastings, customize menus, handle dietary restrictions, and ensure quality service. Options include buffet, plated service, and live counters."
  },

  // ABOUT COMPANY
  {
    id: 34,
    category: "About",
    question: "Tell me about Yahvi Aura Events",
    keywords: ["about", "company", "yahvi aura", "who are you"],
    answer: "Yahvi Aura Events is a premium event management company founded with a vision to transform ordinary moments into 'Heavenly' experiences. Based in Ghaziabad, we serve clients across India and internationally. With 10+ years of expertise, we've successfully executed 500+ events across Corporate, Wedding, Experiential, and Social categories. We're known for our founder-led quality control, transparent pricing, and stress-free execution."
  }
];
