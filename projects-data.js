const PROJECTS_DATA = [
  {
    id: "Sitmycat",
    category: "design,development",
    title: "Sitmycat",
    shortDescription: "Pet sitting website redesign with full case study",
    fullDescription:
      "A complete website redesign and build for a pet sitting service. I led the entire process from UX research and design to development and launch in Framer. Documented through a 4 part case study covering market research, multichannel validation, visual redesign, and implementation. I built the site with Framer, managed the project in Notion and launched my newsletter alongside the case study to share the process and learnings",
    tags: ["Redesign", "Website"],
    expandedTags: ["Web Design", "Case Study", "Framer"],
    timeline: "4 weeks",
    year: "2025",
    team: null,
    thumbnail: "/pictures/sitmycat-thumb.png",
    heroImage: "/pictures/sitmycat-thumb.png",
    tech: [
      { name: "Figma", icon: "figma/figma-original.svg" },
      { name: "Notion", icon: "notion/notion-original.svg" },
      { name: "Tally", icon: "https://tally.so/favicon.ico" },
      { name: "React ", icon: "react/react-original.svg" },
      {
        name: "MailerLite",
        icon: "https://www.google.com/s2/favicons?domain=mailerlite.com&sz=64",
      },
    ],
    features: [],
    video: "https://www.youtube.com/embed/eCqMsQ2sxcA",
    screenshots: [],
    links: [
      {
        label: "View Case Study",
        url: "https://substack.com/home/post/p-180298640",
        primary: true,
      },
      {
        label: "View Website",
        url: "https://katzenbetreuung-hamburg.com/",
        primary: false,
      },
    ],
  },
  {
    id: "Constrains Framework",
    category: "design",
    title: "Constrains Framework",
    shortDescription: "Research method for understanding customer decisions",
    fullDescription:
      "Why do people choose your solution? Not because of who they are, but because of what they're dealing with right now. This framework, rooted in Jobs to be Done theory, helps find patterns in customer decisions by examining constraints and trigger moments. Available as a free Notion document. ",
    tags: [" UX Research", "Framework"],
    expandedTags: [" UX Research", "JTBD", "Product"],
    timeline: "3 Days",
    year: "2025",
    team: null,
    thumbnail: "/pictures/constrains-thumb.png",
    heroImage: "/pictures/constrains-thumb.png",
    tech: [
      { name: "Notion", icon: "notion/notion-original.svg" },
      { name: "Figma", icon: "figma/figma-original.svg" },
    ],
    features: [
      "Constraint based analysis",
      "Find trigger moments that drive decision-making",
      "Methods for both AI-assisted and manual pattern recognition",
      "Free downloadable Notion document",
    ],
    screenshots: ["/pictures/constrains-framework.png"],
    links: [
      {
        label: "Download Free",
        url: "https://lilanika.gumroad.com/l/nfashp",
        primary: true,
      },
      {
        label: "Preview",
        url: "https://lilanika.gumroad.com/l/nfashp",
        primary: false,
      },
    ],
  },
  {
    id: "mate",
    category: "design,development",
    title: "Mate",
    shortDescription: "Spontaneous meetups with travelers and locals nearby",
    fullDescription:
      "Want to grab lunch with someone right now? Mate connects people who want to hang out spontaneously. Set your status and others nearby can join you. Started as a side project with two developer friends in 2023. We built the prototype in Figma, backend in Rust, and started on iOS (Swift) and React Native versions. Managed via GitHub Project boards. Currently paused but open to collaboration.",
    tags: ["Full Stack", "Frontend"],
    expandedTags: ["Design", "Frontend", "Project Managment"],
    timeline: "Ongoing",
    year: "2023",
    team: 3,
    thumbnail: "/pictures/mate-thumb.png",
    heroImage: "/pictures/mate-thumb.png",
    tech: [
      { name: "Figma", icon: "figma/figma-original.svg" },
      { name: "TypeScript", icon: "typescript/typescript-original.svg" },
      { name: "React Native", icon: "react/react-original.svg" },
      { name: "GitHub", icon: "github/github-original.svg" },
    ],
    features: [
      "Activity and location based matching",
      "Group chat for coordinating meetup detail",
      "Designed for both travelers and locals",
    ],
    screenshots: ["/pictures/mate.png"],
    links: [
      {
        label: "View Code",
        url: "https://github.com/To-Be-Named-Soon",
        primary: true,
      },
      {
        label: "Request Prototype",
        url: "https://www.linkedin.com/in/lilanika/",
        primary: false,
      },
    ],
  },

  {
    id: "papagei",
    category: "development",
    title: "Papagei",
    shortDescription: "Connect with language partners in your city",
    fullDescription:
      "Learning a language is better with someone by your side. Papagei brings together people in the same city who want to practice languages together. Whether you're learning Spanish and can help someone with English, or vice versa, with Papagei you can find your match, chat, and meet up to practice in person.",
    tags: ["Full-Stack", "MERN"],
    expandedTags: ["Full-Stack", "React", "MongoDB"],
    timeline: "7 days",
    year: "2021",
    team: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop",
    tech: [
      { name: "React", icon: "react/react-original.svg" },
      { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
      { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
      { name: "Express", icon: "express/express-original.svg" },
    ],
    features: [
      "Authentication with Passport.js",
      "Filter by city, native language, and language you want to learn",
      "Profile editing with image upload functionality",
      "Direct messaging between language partners",
      "Profile photos with Cloudinary integration",
      "Responsive Design",
    ],
    screenshots: ["/pictures/papagei-new.png"],
    links: [
      {
        label: "View Website",
        url: "https://papagei-language-app.onrender.com/",
        primary: true,
      },
      {
        label: "View Code",
        url: "https://github.com/lilanika/papagei-language-app",
        primary: false,
      },
    ],
  },
  {
    id: "wander",
    category: "development",
    title: "Wander",
    shortDescription: "Save and organize your favorite places around the world",
    fullDescription:
      "Your favorite coffee shop in Berlin, that hidden beach in Portugal, the restaurant you want to try next - Wander helps you remember and organize all the places that matter to you. Pin locations on an interactive map, add notes, color-code by category, and switch between light and dark mode.",
    tags: ["Full Stack", "Mapbox API"],
    expandedTags: ["FullStack", "Handlebars", "Mapbox"],
    timeline: "5 days",
    year: "2021",
    team: 2,
    thumbnail: "/pictures/wander-thumb.png",
    heroImage: "/pictures/wander-thumb.png",
    tech: [
      { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
      { name: "Express", icon: "express/express-original.svg" },
      { name: "Handlebars", icon: "handlebars/handlebars-original.svg" },
      { name: "Mapbox", icon: "mapbox/mapbox-original.svg" }, // might not exist
      { name: "CSS3", icon: "css3/css3-original.svg" },
    ],
    features: [
      "Pin locations with custom notes and categories and a rating",
      "Dark and light mode",
      "Interactive maps with Mapbox API",
    ],
    screenshots: ["/pictures/wander-new.png"],
    links: [
      {
        label: "Visit Website",
        url: "https://wander-k8m6.onrender.com/",
        primary: true,
      },
      {
        label: "View Code ",
        url: "https://github.com/lilanika/Redesign-Wander",
        primary: false,
      },
    ],
  },
  {
    id: "bubbles",
    category: "development",
    title: "Bubbles",
    shortDescription: "A playful browser game for kids",
    fullDescription:
      "My first JavaScript project at Ironhack bootcamp, a simple game that taught me how powerful JavaScript can be. Following Frank's Laboratory tutorials as a base, I learned about sprite animation, collision detection, and game loops. Works great on touchscreens too, making it perfect for kids to play.",
    tags: ["Game", "JavaScript"],
    expandedTags: ["Game", "JavaScript", "Canvas API"],
    timeline: "7 days",
    year: "2021",
    team: null,
    thumbnail: "pictures/bubbles-game.png?w=1200&h=600&fit=crop",
    heroImage: "pictures/bubbles-game.png?w=1200&h=600&fit=crop",
    tech: [
      { name: "JavaScript", icon: "javascript/javascript-original.svg" },
      { name: "HTML5", icon: "html5/html5-original.svg" },
      { name: "CSS3", icon: "css3/css3-original.svg" },
    ],
    features: [
      "Designed for children with simple, intuitive controls",
      "Touch and mouse input support",
      "Simple canvas based sprite animation and rendering",
    ],
    video: "/pictures/Bubbles.mp4",
    screenshots: [],
    links: [
      {
        label: "Play Demo",
        url: "https://master--bubbels.netlify.app/",
        primary: true,
      },
      {
        label: "View Code",
        url: "https://github.com/lilanika/Bubbels-Game",
        primary: false,
      },
    ],
  },
];
