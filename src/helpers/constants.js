export const MainNavs = {
  dashboard: "",
  orders: "orders",
  teamMembers: "team-members",
  partners: "partners",
  productListings: "product-listings",
  awardsHonours: "awards-honours",
  aboutUs: "about-us",
  paymentInfo: "payment-info",
};

export const AboutUsNavs = {
  info: "info",
  FAQ: "faq",
  complaintsFeedBack: "complaints-feedback",
  privacyPolicy: "privacy-policy",
  termsCondition: "terms-condition",
};

export const navItems = [
  {
    id: "nav-dashboard",
    icon: "dashboard",
    name: "Dashboard",
    toUrl: MainNavs.dashboard,
    component: "Default",
  },
  {
    id: "nav-orders",
    icon: "shopping-basket",
    name: "Orders",
    toUrl: MainNavs.orders,
    component: "Default",
  },
  {
    id: "nav-team-members",
    icon: "people-group",
    name: "Team Members",
    toUrl: MainNavs.teamMembers,
    component: "Default",
  },
  {
    id: "nav-partners",
    icon: "handshake-angle",
    name: "Partners",
    toUrl: MainNavs.partners,
    component: "Default",
  },
  {
    id: "nav-product-listings",
    icon: "list",
    name: "Product Listings",
    toUrl: MainNavs.productListings,
    component: "Default",
  },
  {
    id: "nav-awards-honours",
    icon: "award",
    name: "Awards & Honours",
    toUrl: MainNavs.awardsHonours,
    component: "Default",
  },
  {
    id: "nav-about-us",
    icon: "info",
    name: "About Us",
    toUrl: MainNavs.aboutUs,
    component: "AboutUs",
  },
  {
    id: "nav-payment-info",
    icon: "money-bill",
    name: "Payment Info",
    toUrl: MainNavs.paymentInfo,
    component: "Default",
  },
];

export const AboutUsItems = [
  {
    id: "about-nav-info",
    name: "Info",
    toUrl: AboutUsNavs.info,
    component: "",
  },
  {
    id: "about-nav-faq",
    name: "FAQ",
    toUrl: AboutUsNavs.FAQ,
    component: "",
  },
  {
    id: "about-nav-complaints-feedback",
    name: "Complaints and feedback",
    toUrl: AboutUsNavs.complaintsFeedBack,
    component: "",
  },
  {
    id: "about-nav-privacy-policy",
    name: "Privacy Policy",
    toUrl: AboutUsNavs.privacyPolicy,
    component: "",
  },
  {
    id: "about-nav-terms-condition",
    name: "Terms & Condition",
    toUrl: AboutUsNavs.termsCondition,
    component: "",
  },
];
