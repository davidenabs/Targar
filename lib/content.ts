// All site copy lives here so content can be edited without touching JSX.
// Copy is preserved verbatim from the existing targar-app.com site per the
// implementation guide (§7 Content Implementation Map).

export const siteConfig = {
  name: "TARGAR",
  url: "https://targar-app.com",
  description:
    "TARGAR lets traders and customers in Nigeria's markets send, receive, and accept payments without bank cards, POS terminals, or cash. Available now on Google Play.",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.targarapp",
  // Flip to true once the iOS app is live; the App Store button + modal
  // logic reads this flag so no component changes are needed later.
  iosAppLive: false,
  contact: {
    email: "support@targar-app.com",
    phone: "+234 805 958 6817",
    phoneHref: "tel:+2348059586817",
    address: "ESBS, Independence Layout, Enugu State Nigeria",
  },
  social: [
    { label: "Facebook", href: "https://www.facebook.com/share/19BnC45e4c/" },
    { label: "X", href: "https://x.com/TargarFinance" },
    { label: "Instagram", href: "https://www.instagram.com/targar_hq?stkn=MzB5NjVkMHExZjNr" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/targar-finance-software-innovations-and-technologies-limited/",
    },
  ],
};

export const nav = [
  { label: "How it works", href: "/#how" },
  { label: "Product", href: "/#product" },
  { label: "Markets", href: "/#markets" },
];

export const hero = {
  eyebrow: "Built for Nigeria's markets",
  headline: `Money should move even where cards, POS, and cash can't.`,
  subtext:
    "TARGAR is payment infrastructure built for Nigeria's informal markets — letting traders and customers send, receive, and accept payments using only a phone number and a secure digital identity. No card. No terminal. No cash in hand.",
  trustRow: ["No bank card needed", "No POS terminal", "No cash required"],
  proofChip: "Sent \u20A65,000 to Ada \u00B7 via tag",
  secureChip: "Identity verified \u00B7 Secure \u00B7 Mobile + digital ID",
};

export const equation = ["No card ×", "No POS ×", "No cash", "=", "One phone number."];

export const howItWorks = {
  eyebrow: "How it works",
  heading: "Infrastructure, not just an app",
  intro:
    "TARGAR sits underneath the transaction — verifying who you are and moving the money, so the hardware in between becomes optional.",
  steps: [
    {
      step: "Step 1",
      title: "Verify once, securely",
      body: "Set up a digital identity tied to your phone number — built with bank-grade security, PIN protection, and OTP verification. To authorize a transaction, you enter your 4-digit PIN directly on the merchant's device — it's highly encrypted and never stored there, and screenshots or screen recording are blocked at that moment for extra protection.",
    },
    {
      step: "Step 2",
      title: "Send or receive instantly",
      body: "Move money by phone number or TARGAR tag. A market trader can collect payment from a customer the same way she'd collect cash — no terminal, no float, no card reader required.",
    },
    {
      step: "Step 3",
      title: "Top up and transact",
      body: "Buy airtime and data, pay bills, and transfer to any bank or user — all from the same wallet, with the same verified identity behind every transaction.",
    },
  ],
};

export const product = {
  eyebrow: "The product",
  heading: "One platform, every everyday payment",
  intro:
    "Designed first for how money actually moves in Nigeria's markets — trader to customer, phone to phone, stall to stall.",
  tabs: [
    {
      id: "individuals",
      label: "FOR INDIVIDUALS",
      image: "/images/targar-mockup.png",
      features: [
        {
          title: "Send & Receive Money",
          body: "Pay anyone by tag or phone number. Quick, easy, and instant — peer-to-peer payments without an account number in sight.",
        },
        {
          title: "Airtime & Data",
          body: "Instant recharge for every major network, at rates that make sense — without leaving the app or waiting on a vendor.",
        },
        {
          title: "Bank & User Transfers",
          body: "Move money to any bank account or TARGAR user directly. One wallet, every destination your money needs to reach.",
        },
        {
          title: "Identity-Secured",
          body: "Every wallet is anchored to a verified digital identity, with PIN protection and OTP on every sensitive action.",
        }
      ]
    },
    {
      id: "merchants",
      label: "FOR MERCHANTS",
      image: "/images/market-vendor.jpg",
      features: [
        {
          title: "No POS Required",
          body: "Get paid by customers, family, or other Targarites with nothing more than your phone number. No hardware needed.",
        },
        {
          title: "Always Reachable",
          body: "Built so payments don't depend on a working POS or a card in your wallet — just a phone number, any time.",
        },
        {
          title: "Detailed Digital Receipts",
          body: "Both customer and merchant get a detailed receipt for every transaction — right in the app and by email.",
        },
        {
          title: "Instant Settlements",
          body: "Your funds land directly in your Targar wallet instantly, completely eliminating end-of-day reconciliation delays.",
        }
      ]
    },
    {
      id: "enterprise",
      label: "FOR ENTERPRISE",
      image: "/images/market-tomatoes.jpg",
      features: [
        {
          title: "Infrastructure APIs",
          body: "Connect TARGAR directly into your existing accounting, payroll, or internal business software for seamless operations.",
        },
        {
          title: "Bulk Disbursements",
          body: "Pay multiple suppliers, staff, or market vendors simultaneously with a single click securely.",
        },
        {
          title: "Role-Based Access",
          body: "Assign secure roles to cashiers or branch managers with specific transaction limits for daily operations.",
        },
        {
          title: "Agent Networks",
          body: "Equip your on-the-ground agents with a seamless digital toolkit to onboard and serve customers across informal markets.",
        }
      ]
    }
  ]
};

export const market = {
  eyebrow: "Built for the market",
  headingPrefix: "Payment infrastructure for",
  heading: "Where Nigeria actually trades",
  intro:
    "Not a boutique or a checkout page — the open-air market, the roadside stall, the trader calling out prices over a pile of tomatoes. TARGAR is built for how money already moves there, just without the card reader.",
  cards: [
    {
      tag: "CUSTOMER",
      title: "Zero-Hardware Payments",
      subtitle: "NO CARDS, NO CASH, NO SMARTPHONE ACCESS",
      quote: "You don't need cash, cards, or even your smartphone at the point of payment.",
    },
    {
      tag: "MERCHANT",
      title: "Faster Payouts",
      subtitle: "NO TERMINAL REQUIRED, JUST THE SMARTPHONE THEY ALREADY OWN",
      quote: "Accept secure payments instantly using just the smartphone you already own.",
    },
    {
      tag: "INFRASTRUCTURE",
      title: "Every trader is a merchant",
      subtitle: "POWERING INFORMAL TRADE",
      quote: "Every trader is already a merchant \u2014 TARGAR just removes the terminal.",
    },
  ],
  lead: {
    src: "/images/market-apron.jpg",
    alt: "A TARGAR trader packs fresh tomatoes into a bag while completing a payment on her phone",
    caption: "Every trader is already a merchant \u2014 TARGAR just removes the terminal.",
  },
  gallery: [
    {
      src: "/images/market-tomatoes.jpg",
      alt: "A trader sells fresh tomatoes and peppers at an open-air Nigerian market",
      caption: "Every stall is a payment point \u2014 no terminal required.",
    },
    {
      src: "/images/market-vendor.jpg",
      alt: "A market vendor stands behind baskets of fresh chili peppers and tomatoes",
      caption: "Traders sell the same way \u2014 now they get paid a faster way.",
    },
    {
      src: "/images/market-plantain.jpg",
      alt: "A food stall vendor serves a customer at a roadside plantain stand",
      caption: "Roadside, market, or stall \u2014 one phone number is all it takes.",
    },
    {
      src: "/images/market-stall.jpg",
      alt: "A grains trader at a busy Nigerian market stall",
      caption: "Built around how informal markets already run \u2014 just faster.",
    },
  ],
};

export const finalCta = {
  eyebrow: "Available now",
  heading: "Get the app and start moving money.",
  body: "TARGAR is live for traders and customers across Nigeria's markets. Download it on Google Play today \u2014 the App Store version is on its way.",
  fineprint: "Free to download. No bank card, POS terminal, or cash required.",
};

export const appStoreModal = {
  heading: "On its way",
  body: "The iOS version is on its way. Check back soon.",
  cta: "Got it",
};

export const footer = {
  tagline:
    "Payment infrastructure for Nigeria's informal markets \u2014 built for a world without cards, POS terminals, or cash.",
  quickLinks: [
    { label: "How it works", href: "/how" },
    { label: "Product", href: "/#product" },
    { label: "Markets", href: "/#markets" },
    { label: "Download", href: "/#download" },
  ],
  services: [
    { label: "Send money", href: "/#product" },
    { label: "Receive money", href: "/#product" },
    { label: "Airtime & data", href: "/#product" },
    { label: "Bank transfers", href: "/#product" },
  ],
  regulatory:
    "TARGAR operates in partnership with licensed Payment Service Providers and Microfinance Banks. All user funds are securely handled, insured, and managed by these regulated financial institutions.",
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  copyright: "\u00A9 2026 TARGAR. All rights reserved.",
};
