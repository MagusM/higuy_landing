import { airbnb, binance, coinbase, dropbox, facebook, instagram, linkedin, people01, people02, people03, send, shield, simon, star, talia, twitter } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
  {
    id: "About_us",
    title: "About us"
  }
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Instant Customer Support",
    content:
      "HiGuy leverages advanced AI to provide instant responses to customer queries, reducing wait times and improving customer satisfaction. By analyzing customer data and understanding their needs, HiGuy offers personalized solutions, making every interaction meaningful and efficient.",
  },
  {
    id: "Smart Sales Assistance",
    icon: shield,
    title: "Smart Sales Assistance",
    content:
      "HiGuy’s smart conversational AI enhances the sales process by providing tailored product recommendations and timely follow-ups. It identifies upsell and cross-sell opportunities, helping businesses maximize their sales potential. With HiGuy, your sales team can focus on high-value activities, driving growth and improving customer engagement.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Proactive Service Enhancement",
    content:
      "HiGuy continuously learns from every interaction, improving its understanding of customer preferences and behaviors. This proactive approach allows HiGuy to anticipate customer needs, offering personalized and proactive support. By automating routine tasks and providing insightful data analysis, HiGuy ensures a seamless and exceptional customer service experience.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "HiGuy’s AI assistant has revolutionized our customer service. It’s like having an extra team member who never sleeps.",
    name: "Jessica Jensen",
    title: "Founder & CEO, TrendyShop",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "With HiGuy, our customer interactions have become more efficient and personalized. It’s a game-changer for our business.",
    name: "Steve Mark",
    title: "Owner, Stylish Goods",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "HiGuy’s AI has not only improved our customer service but also provided valuable insights into our customers’ needs.",
    name: "Kenn Gallagher",
    title: "Co-Founder, CoolStuff Inc",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.higuy.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.higuy.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.higuy.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.higuy.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.higuy.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.higuy.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.higuy.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.higuy.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.higuy.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.higuy.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.higuy.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.higuy.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const aboutUs = [
  {
    title: "CEO",
    name: "Talia Chriqui",
    pic: talia,
    description: "Talia Chriqui is an experienced business analyst with over 10 years of expertise in sales, analytics, and operations within the high-tech industry. She is skilled in business planning, Salesforce, SQL, and market research. Talia holds a Master’s Degree in Finance and Economics from IDC Herzliya. She has a proven track record in optimizing sales processes, implementing Salesforce applications, and delivering actionable business insights.",
    links: [
      {
        label: "LinkedIn",
        icon: linkedin,
        url: "https://www.linkedin.com/in/taliachriqui/"
      }
    ]
  },
  {
    title: "CTO",
    name: "Simon Mor",
    pic: simon,
    description: "Simon Mor is an accomplished Full Stack Developer and team leader with over 9 years of experience. He excels in managing projects from conception to production using Agile methodologies. Proficient in JavaScript, React, TypeScript, NodeJS, NextJS, PHP, and SQL databases, Simon also has experience with AWS, GCP, and Azure. He has successfully led the development of multiple projects, mentored developers, and transformed startups into stable, profitable products.",
    links: [
      {
        label: "LinkedIn",
        icon: linkedin,
        url: "https://www.linkedin.com/in/simonmor/"
      }
    ]
  }
];
