/** @format */

const plans = [
  {
    name: "Reports",
    price: 200,
    description:
      "Basically to bring information in from QB or other ERP and have better reporting and consolidation (Actuals only)",
    features: [
      "Basic analytics",
      "24/7 email support",
      "Full API access",
      "Basic integrations",
      "Up to 30 departments",
      "Up to 3 dimensions",
      `Up to 5 users`,
    ],
    isPopular: false,
  },
  {
    name: "Planning Basic",
    price: 400,
    description: "Ideal for growing businesses",
    features: [
      "Basic analytics",
      "24/7 email support",
      "Full API access",
      "Basic integrations",
      "Up to 30 departments",
      "Up to 5 dimensions",
      `Up to 5 users`,
      "Additional users $75/user/mo",
    ],
    isPopular: true,
  },
  {
    name: "Planning Plus",
    price: 1000,
    description: "Advanced features for larger teams",
    features: [
      "Basic analytics",
      "24/7 email support",
      "Full API access",
      "Advanced integrations",
      "Up to 30 departments",
      "Up to 5 dimensions",
      `Up to 5 users`,
      "Additional users $75/user/mo",
    ],
    isPopular: false,
  },
  {
    name: "Planning Pro",
    price: 2000,
    description: "Custom solutions for large enterprises",
    features: [
      "Basic analytics",
      "24/7 email support",
      "Full API access",
      "Basic integrations",
      "Up to 30 departments",
      "Up to 5 dimensions",
      `Up to 10 users`,
      "Additional users $75/user/mo",
    ],
    isPopular: false,
  },
  {
    name: "Enterprise",
    price: 0,
    description: "Custom solutions for large enterprises",
    features: [
      "Basic analytics",
      "24/7 email support",
      "Full API access",
      "Advanced integrations",
      "Unlimited departments",
      "Unlimited dimensions",
      `Up to 100 users`,
      "Additional users $75/user/mo",
    ],
    isPopular: false,
  },
];

export default plans;
