export type Service = {
  slug: string;
  title: string;
  summary: string;
  body: string;
  image: string;
  video?: string;
};

export const services: Service[] = [
  {
    slug: "ai-consulting-and-transformation",
    title: "AI consulting & transformation",
    summary:
      "AI strategy, readiness, opportunity discovery and transformation roadmaps built around measurable business value.",
    body:
      "MomentumX helps organizations identify where AI can create measurable value, then shapes readiness plans, opportunity maps and transformation roadmaps that connect strategy to delivery.",
    image: "/assets/imgs/services-1.png",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/1180785751/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&log_user=0&signature=2234eb566b5ec5bbd384eb07afd23de891bf90694be298ac9e618a4d194bf0ce"
  },
  {
    slug: "ai-solutions-and-intelligent-systems",
    title: "AI solutions & intelligent systems",
    summary:
      "AI agents, copilots, generative AI, computer vision, machine learning and intelligent applications built for real-world use.",
    body:
      "We design and build intelligent systems for real operational contexts, including AI agents, copilots, generative AI tools, computer vision, machine learning and applied AI products.",
    image: "/assets/imgs/services-2.png",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/1096949701/rendition/720p/file.mp4?loc=external&log_user=0&signature=39f7576c7b26eabaee6ae6cacafd39551d5716c492e712e88f824151f03ddb19"
  },
  {
    slug: "automation-and-enterprise-solutions",
    title: "automation & enterprise solutions",
    summary:
      "Intelligent workflows, document AI, CRM, ERP and custom enterprise systems that transform how work gets done.",
    body:
      "Automation and enterprise work connects business processes with practical systems, from intelligent workflows and document AI to CRM, ERP and custom operational platforms.",
    image: "/assets/imgs/services-3.png",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/1180785751/rendition/720p/file.mp4%20%28720p%29.mp4?loc=external&log_user=0&signature=2234eb566b5ec5bbd384eb07afd23de891bf90694be298ac9e618a4d194bf0ce"
  },
  {
    slug: "digital-experience-and-platforms",
    title: "digital experience & platforms",
    summary:
      "High-performance websites, portals, commerce and digital platforms designed around customers and business objectives.",
    body:
      "Digital experience and platform work brings together customer journeys, content, performance, commerce and technology into platforms that support business outcomes.",
    image: "/assets/imgs/services-4.png",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/787553887/rendition/720p/file.mp4?loc=external&signature=75c1c8aeb372612ddaced02827f766136f000d54fbd337c1b57d39d17773eff7"
  },
  {
    slug: "web-and-mobile-applications",
    title: "web & mobile applications",
    summary:
      "Custom web and mobile applications engineered for complex customer, operational and enterprise requirements.",
    body:
      "MomentumX engineers custom web and mobile applications around complex user journeys, operational requirements, integrations and enterprise-grade product needs.",
    image: "/assets/imgs/services-5.png",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/1064974329/rendition/720p/file.mp4?loc=external&log_user=0&signature=fb060fa5b22e73dec477b9bee7da9fdfede4c914425e71174256c3ec056f5fdb&user_id=20404911"
  },
  {
    slug: "data-and-intelligence",
    title: "data & intelligence",
    summary:
      "Business intelligence, analytics, dashboards, forecasting and AI-powered insights that turn data into better decisions.",
    body:
      "Data and intelligence engagements turn information into business visibility through analytics, dashboards, forecasting, reporting and AI-powered insight layers.",
    image: "/assets/imgs/services-6.png"
  },
  {
    slug: "smart-and-connected-technology",
    title: "smart & connected technology",
    summary:
      "IoT, sensors, Wi-Fi intelligence, computer vision and indoor analytics connecting physical environments with digital intelligence.",
    body:
      "Smart and connected technology links physical spaces with digital intelligence through IoT, sensors, Wi-Fi intelligence, computer vision and indoor analytics.",
    image: "/assets/imgs/services-7.png",
    video:
      "https://player.vimeo.com/progressive_redirect/playback/1096861274/rendition/720p/file.mp4?loc=external&log_user=0&signature=a682a6ebf6953100276ad90c0de14ce7bbe4798482fd9aaac9bba2e6b455ead2"
  },
  {
    slug: "cloud-and-infrastructure",
    title: "cloud & infrastructure",
    summary:
      "Secure, scalable cloud architecture, deployment and infrastructure across AWS, Azure and modern cloud environments.",
    body:
      "Cloud and infrastructure work covers secure architecture, deployment environments, scaling, reliability and modern cloud operations across AWS, Azure and related platforms.",
    image: "/assets/imgs/services-8.png"
  },
  {
    slug: "managed-services",
    title: "managed services",
    summary:
      "Ongoing AI operations, application support, optimisation, maintenance and continuous development after launch.",
    body:
      "Managed services keep AI systems, applications and platforms improving after launch through operations, support, optimisation, maintenance and continuous development.",
    image: "/assets/imgs/services-9.png"
  }
];

export const serviceDetailBlocks = {
  introTitle: "Digital & AI transformation built around measurable business value.",
  introBody:
    "Each service connects Momentum's regional business understanding with MomentumX capability across AI, software engineering, automation, data, platforms and connected technology.",
  process: [
    {
      title: "discover",
      body: "We map business goals, operational context, customer behavior, data readiness, existing systems and transformation opportunities before solution design begins."
    },
    {
      title: "design",
      body: "Roadmaps, workflows, prototypes, experience models and technical architecture define how the solution should work in the real business environment."
    },
    {
      title: "build",
      body: "AI, software, integrations, automation, data layers, platforms and QA come together in an implementation ready for adoption and scale."
    },
    {
      title: "optimize",
      body: "After launch, monitoring, optimisation, support and continuous development keep systems useful, reliable and aligned with business outcomes."
    }
  ],
  technologies: [
    {
      title: "Our Tech Stack",
      image: "https://storage.tentwenty.com/small_tech_stack_1f2d5c8d39.jpg"
    },
    {
      title: "Strapi CMS",
      image: "https://storage.tentwenty.com/small_strapi_ea2b501fda.jpg"
    },
    {
      title: "ChatGPT and AI workflows",
      image: "https://storage.tentwenty.com/small_03_01_1_1_e912deeb08.jpg"
    },
    {
      title: "Algolia personalization",
      image: "https://storage.tentwenty.com/small_03_01_4_c62b6b7a0d.jpg"
    },
    {
      title: "API integrations",
      image: "https://storage.tentwenty.com/small_api_x_tentwenty_2afbcfdd98.jpg"
    },
    {
      title: "WordPress CMS",
      image: "https://storage.tentwenty.com/small_wordpress_f0791deee9.jpg"
    }
  ],
  testimonials: [
    "Thoroughly recommended. The team is professional, patient, and deeply aware of how digital products need to move across regional markets.",
    "After working with MomentumX on digital platforms and customer experiences, I would wholeheartedly recommend them."
  ]
};

export const servicePageDetails: Record<
  string,
  {
    hero: { summary: string; capabilityLine: string };
    intro: {
      title: string;
      lead: string;
      body: string[];
      principles: { title: string; body: string }[];
    };
    subServices: { title: string; items: { title: string; body: string }[] };
    process: { title: string; items: { title: string; body: string }[] };
    execution: { title: string; body: string; steps: string[]; note: string };
    capabilities: { title: string; body: string; items: string[] };
    valueAreas: { title: string; items: { title: string; body: string }[] };
    engagements: { title: string; body: string }[];
    lab?: { title: string; body: string; items: { title: string; body: string }[] };
    serviceModels?: { title: string; items: { title: string; body: string }[] };
    insights: string[];
    otherServices: string[];
    cta: { eyebrow: string; title: string; body: string; href: string; label: string };
  }
> = {
  "ai-consulting-and-transformation": {
    hero: {
      summary:
        "Helping organisations identify where AI can create real value - and build a practical roadmap from opportunity to implementation.",
      capabilityLine: "AI Strategy · Readiness · Opportunity Discovery · Governance · PoCs"
    },
    intro: {
      title: "From AI ambition to actionable transformation.",
      lead: "AI transformation starts with understanding the business - not choosing a technology.",
      body: [
        "We work with leadership and operational teams to identify high-value opportunities, assess organisational readiness and define a practical transformation roadmap aligned with business priorities, existing systems and data.",
        "The objective is simple: focus investment where AI can create measurable value and establish a clear path to implementation."
      ],
      principles: [
        {
          title: "BUSINESS-LED",
          body: "Technology decisions grounded in real business priorities."
        },
        {
          title: "IMPLEMENTATION-FOCUSED",
          body: "Strategy designed to move into prototypes and working solutions."
        },
        {
          title: "BUILT TO SCALE",
          body: "Data, integration, governance and adoption considered from the beginning."
        }
      ]
    },
    subServices: {
      title: "What we cover",
      items: [
        {
          title: "AI Strategy & Roadmaps",
          body: "Define where AI fits within your organisation and establish a prioritised implementation roadmap."
        },
        {
          title: "AI Readiness Assessment",
          body: "Assess your data, technology, processes, capabilities and organisational readiness for AI adoption."
        },
        {
          title: "AI Opportunity Discovery",
          body: "Identify practical AI and automation opportunities across operations, customer experience and decision-making."
        },
        {
          title: "Digital Transformation Consulting",
          body: "Identify where technology can improve processes, customer experiences and business models beyond AI alone."
        },
        {
          title: "AI Governance & Responsible AI",
          body: "Establish practical frameworks for security, privacy, governance, human oversight and responsible adoption."
        },
        {
          title: "Proof of Concept Development",
          body: "Turn promising opportunities into prototypes and PoCs to validate feasibility and business potential."
        },
        {
          title: "AI Adoption & Change Management",
          body: "Help teams integrate new technologies into day-to-day operations through adoption planning and enablement."
        },
        {
          title: "Executive & Team AI Training",
          body: "Practical workshops designed around how leadership and teams can use AI within their organisation."
        }
      ]
    },
    process: {
      title: "From opportunity to implementation.",
      items: [
        {
          title: "DISCOVER",
          body: "Understand objectives, processes, systems, data and current challenges."
        },
        {
          title: "ASSESS",
          body: "Evaluate readiness, opportunities, feasibility and potential business value."
        },
        {
          title: "ROADMAP",
          body: "Prioritise initiatives and define technology, governance and implementation requirements."
        },
        {
          title: "VALIDATE",
          body: "Prototype high-value opportunities before moving into full implementation."
        }
      ]
    },
    execution: {
      title: "Consulting doesn't end with a roadmap.",
      body:
        "MomentumX combines consulting with the engineering capabilities required to take identified opportunities into implementation.",
      steps: ["AI STRATEGY", "PROTOTYPE / PoC", "AI SOLUTION", "INTEGRATION", "DEPLOYMENT", "OPTIMISATION"],
      note: "One team from opportunity discovery through technology execution."
    },
    capabilities: {
      title: "Technology-agnostic by design.",
      body:
        "We recommend technologies based on the business requirement, existing environment, data and long-term objectives.",
      items: [
        "Generative AI & LLMs",
        "Enterprise AI",
        "Machine Learning",
        "Computer Vision",
        "Data & Analytics",
        "Automation",
        "Cloud AI",
        "Enterprise Integrations"
      ]
    },
    valueAreas: {
      title: "Across the organisation",
      items: [
        {
          title: "CUSTOMER EXPERIENCE",
          body: "AI assistants · Personalisation · Customer intelligence"
        },
        {
          title: "SALES & MARKETING",
          body: "Lead intelligence · Content · Recommendations · Automation"
        },
        {
          title: "OPERATIONS",
          body: "Process automation · Knowledge AI · Document intelligence"
        },
        {
          title: "FINANCE & COMPLIANCE",
          body: "Document processing · Risk intelligence · Compliance assistance"
        },
        {
          title: "PROCUREMENT",
          body: "Vendor intelligence · Tender analysis · Contract intelligence"
        },
        {
          title: "PEOPLE & HR",
          body: "Knowledge assistants · Recruitment · Employee support"
        }
      ]
    },
    engagements: [
      {
        title: "Retail Intelligence",
        body: "AI / Computer Vision"
      },
      {
        title: "Enterprise CRM",
        body: "Digital Transformation"
      },
      {
        title: "Consumer Engagement Platform",
        body: "Digital Experience"
      }
    ],
    lab: {
      title: "From opportunities to prototypes.",
      body:
        "Explore how our Innovation Lab turns emerging technologies and business challenges into working concepts.",
      items: [
        {
          title: "Shelf Vision AI",
          body: "Computer vision for shelf, stock and merchandising intelligence."
        },
        {
          title: "Smart Space",
          body: "Wi-Fi, sensor and AI-powered intelligence for physical spaces."
        },
        {
          title: "AML Copilot",
          body: "AI-assisted investigation and intelligence for compliance teams."
        }
      ]
    },
    insights: [
      "How to identify high-value AI use cases",
      "Is your organisation ready for AI?",
      "From AI pilot to enterprise adoption",
      "Building an AI governance framework"
    ],
    otherServices: [
      "ai-solutions-and-intelligent-systems",
      "automation-and-enterprise-solutions",
      "data-and-intelligence",
      "smart-and-connected-technology"
    ],
    cta: {
      eyebrow: "Ready to identify where AI can create value?",
      title: "Start your AI transformation.",
      body:
        "Let's identify the opportunities, priorities and practical next steps for your organisation.",
      href: "/book-meeting",
      label: "Book a consultation"
    }
  },
  "ai-solutions-and-intelligent-systems": {
    hero: {
      summary: "Building intelligent systems that understand, assist, predict and act.",
      capabilityLine: "Generative AI · Agents · Knowledge AI · Computer Vision · Voice AI · Machine Learning"
    },
    intro: {
      title: "AI designed around real business workflows.",
      lead:
        "The value of AI comes from how effectively it connects with people, data, processes and existing systems.",
      body: [
        "We design and engineer intelligent applications around specific business requirements - from enterprise copilots and autonomous agents to computer vision, predictive models and conversational experiences."
      ],
      principles: [
        { title: "PURPOSE-BUILT", body: "AI designed around a defined business problem or opportunity." },
        { title: "CONNECTED", body: "Integrated with the systems, knowledge and data needed to perform." },
        { title: "CONTROLLED", body: "Built with appropriate security, permissions, monitoring and human oversight." }
      ]
    },
    subServices: {
      title: "What we build",
      items: [
        { title: "Generative AI Solutions", body: "Custom applications powered by language and multimodal models for content, analysis, reasoning and interaction." },
        { title: "AI Agents & Agentic Systems", body: "AI systems that can plan, perform tasks and coordinate actions across approved tools and workflows." },
        { title: "AI Assistants & Copilots", body: "Role-specific assistants that help employees search, analyse, create and complete everyday work." },
        { title: "Enterprise Knowledge AI", body: "Secure knowledge assistants grounded in organisational documents, policies, systems and data." },
        { title: "Conversational AI & Chatbots", body: "Intelligent customer and employee conversations across websites, apps, messaging and service channels." },
        { title: "Voice AI & Speech Intelligence", body: "Voice assistants, transcription, call intelligence and speech-enabled workflows." },
        { title: "Computer Vision", body: "Image and video intelligence for recognition, inspection, monitoring, counting and behavioural analysis." },
        { title: "Machine Learning & Predictive AI", body: "Models for classification, forecasting, recommendations, risk scoring and optimisation." },
        { title: "Recommendation & Personalisation", body: "Dynamic recommendations and experiences based on behaviour, context and business rules." },
        { title: "Custom AI Integrations", body: "Embed AI capabilities into existing applications, CRM, ERP and enterprise workflows." }
      ]
    },
    process: {
      title: "From use case to production.",
      items: [
        { title: "DEFINE", body: "Clarify the user, business objective, workflow and success criteria." },
        { title: "DESIGN", body: "Select the right AI approach, data sources, controls and user experience." },
        { title: "BUILD", body: "Develop the model orchestration, application layer and integrations." },
        { title: "EVALUATE", body: "Test quality, reliability, security and real-world performance." },
        { title: "DEPLOY", body: "Launch into the target environment with monitoring and controls." }
      ]
    },
    execution: {
      title: "AI is only one layer.",
      body:
        "MomentumX combines AI engineering with software and integration capability so the result is a working business system - not a disconnected model demo.",
      steps: ["BUSINESS WORKFLOW", "DATA & KNOWLEDGE", "AI / MODEL LAYER", "APPLICATION", "INTEGRATIONS", "HUMAN OVERSIGHT", "MONITORING"],
      note: "From model capability to usable business system."
    },
    capabilities: {
      title: "Technology & capabilities",
      body: "We combine AI model capability with application, integration, evaluation and monitoring layers.",
      items: [
        "Large Language Models & Multimodal AI",
        "Retrieval-Augmented Generation (RAG)",
        "Agent Orchestration",
        "Computer Vision Models",
        "Speech-to-Text & Text-to-Speech",
        "Machine Learning",
        "Vector Search & Knowledge Retrieval",
        "APIs & Enterprise Integrations",
        "Cloud AI Services",
        "Evaluation & Monitoring"
      ]
    },
    valueAreas: {
      title: "Where intelligent systems create value",
      items: [
        { title: "CUSTOMER SERVICE", body: "AI service assistants · Self-service · Agent support · Voice AI" },
        { title: "KNOWLEDGE & PRODUCTIVITY", body: "Enterprise search · Copilots · Research · Document analysis" },
        { title: "RETAIL", body: "Shelf recognition · Product detection · Merchandising intelligence" },
        { title: "FINANCE & COMPLIANCE", body: "Document analysis · Investigation support · Risk intelligence" },
        { title: "SALES & MARKETING", body: "Personalisation · Lead intelligence · Content assistance" },
        { title: "OPERATIONS", body: "Prediction · Monitoring · Exception handling · Decision support" }
      ]
    },
    engagements: [
      { title: "ShelfVision AI", body: "Visual retail intelligence" },
      { title: "AML Copilot", body: "AI-assisted compliance investigation" },
      { title: "Enterprise Knowledge Copilot", body: "Secure organisational knowledge assistant" }
    ],
    lab: {
      title: "Where emerging use cases become working prototypes.",
      body: "Explore AI prototypes that turn models into usable products.",
      items: [
        { title: "ShelfVision AI", body: "Visual retail intelligence." },
        { title: "AML Copilot", body: "AI-assisted compliance investigation." },
        { title: "Enterprise Knowledge Copilot", body: "Secure organisational knowledge assistant." },
        { title: "SmartSpace", body: "Connected physical-space intelligence." }
      ]
    },
    insights: [
      "AI agents vs copilots: choosing the right approach",
      "Building secure enterprise knowledge AI",
      "Where computer vision creates business value",
      "Moving an AI prototype into production"
    ],
    otherServices: ["ai-consulting-and-transformation", "automation-and-enterprise-solutions", "data-and-intelligence", "managed-services"],
    cta: {
      eyebrow: "have an AI use case worth building?",
      title: "Turn the idea into a working intelligent system.",
      body: "From prototype to enterprise deployment, we design AI around your business, data and users.",
      href: "/enquiry",
      label: "discuss your AI use case"
    }
  },
  "automation-and-enterprise-solutions": {
    hero: {
      summary: "Connecting people, processes and systems to transform how work gets done.",
      capabilityLine: "Intelligent Automation · Document AI · CRM · ERP · Enterprise Applications · Integrations"
    },
    intro: {
      title: "Less manual work. Better connected operations.",
      lead:
        "Many organisations still rely on disconnected systems, spreadsheets, emails and repetitive manual processes to run critical operations.",
      body: [
        "We redesign and digitise those workflows using automation, enterprise applications and system integrations - with AI applied where it adds meaningful intelligence."
      ],
      principles: [
        { title: "PROCESS-FIRST", body: "Start with how work actually moves through the organisation." },
        { title: "CONNECTED", body: "Bring systems, teams and data into a coherent workflow." },
        { title: "MEASURABLE", body: "Design around efficiency, visibility, control and user adoption." }
      ]
    },
    subServices: {
      title: "What we cover",
      items: [
        { title: "Intelligent Process Automation", body: "Combine AI, workflows, business rules and integrations to automate complex operational processes." },
        { title: "Workflow Automation", body: "Digitise approvals, requests, tasks, escalations and recurring business processes." },
        { title: "Document Intelligence", body: "Classify, extract, validate and route information from documents automatically." },
        { title: "OCR & Intelligent Data Extraction", body: "Process invoices, receipts, IDs, forms, contracts and other business documents." },
        { title: "CRM Development & Implementation", body: "Build or implement customer, sales and service platforms around business workflows." },
        { title: "CRM Automation", body: "Automate lead routing, follow-ups, approvals, notifications and customer processes." },
        { title: "ERP Solutions & Extensions", body: "Develop modules and extensions around finance, procurement, operations and other enterprise functions." },
        { title: "Custom Enterprise Applications", body: "Purpose-built systems for processes that off-the-shelf software cannot address effectively." },
        { title: "Systems & API Integration", body: "Connect CRM, ERP, finance, data and third-party systems into unified workflows." },
        { title: "Robotic Process Automation", body: "Automate repetitive interactions with legacy or desktop systems where APIs are unavailable." }
      ]
    },
    process: {
      title: "From process to platform.",
      items: [
        { title: "MAP", body: "Understand the current process, users, systems, bottlenecks and exceptions." },
        { title: "REDESIGN", body: "Simplify the workflow and define the future-state process." },
        { title: "BUILD", body: "Develop the application, automation and integration layers." },
        { title: "INTEGRATE", body: "Connect existing systems, data and communication channels." },
        { title: "OPTIMISE", body: "Measure adoption and continuously improve the workflow." }
      ]
    },
    execution: {
      title: "From fragmented process to connected operation.",
      body: "The objective is not automation for its own sake; it is a simpler, faster and more controllable operating model.",
      steps: ["PEOPLE", "FORMS", "EMAIL", "SPREADSHEETS", "LEGACY SYSTEMS", "CONNECTED WORKFLOW", "AUTOMATION", "ENTERPRISE VISIBILITY"],
      note: "A clearer operating model for teams, systems and data."
    },
    capabilities: {
      title: "Technology & capabilities",
      body: "We connect workflow, application, data and integration layers around the process.",
      items: ["Workflow Engines", "CRM Platforms", "ERP Integrations", "Document AI & OCR", "API Integration", "Identity & Role Management", "Notifications & Approvals", "Cloud Applications", "Data Integration", "RPA"]
    },
    valueAreas: {
      title: "Where automation creates value",
      items: [
        { title: "SALES & CRM", body: "Lead management · Sales workflows · Customer onboarding" },
        { title: "PROCUREMENT", body: "RFQs · Vendor approvals · Purchase orders · Contracts" },
        { title: "FINANCE", body: "Invoices · Reconciliation · Approvals · Reporting" },
        { title: "HR", body: "Requests · Onboarding · Employee workflows · Documents" },
        { title: "OPERATIONS", body: "Tasks · Cases · Service requests · Escalations" },
        { title: "COMPLIANCE", body: "KYC workflows · Document review · Audit trails · Approvals" }
      ]
    },
    engagements: [
      { title: "Enterprise CRM", body: "Workflow and customer platform concept" },
      { title: "Procurement Intelligence", body: "Vendor and tender workflow concept" },
      { title: "Document Intelligence", body: "AI-assisted extraction and review" }
    ],
    lab: {
      title: "Automation concepts enhanced with intelligence.",
      body: "Lab concepts explore how AI can make enterprise workflows more useful.",
      items: [
        { title: "ProcureAI", body: "Vendor, tender and procurement intelligence." },
        { title: "Document Intelligence", body: "AI-assisted extraction, classification and review." },
        { title: "Operational Copilots", body: "Role-based assistants connected to enterprise workflows." }
      ]
    },
    insights: [
      "What should you automate first?",
      "When custom CRM makes sense",
      "Using document AI in enterprise workflows",
      "Connecting AI with existing business systems"
    ],
    otherServices: ["ai-solutions-and-intelligent-systems", "digital-experience-and-platforms", "data-and-intelligence", "managed-services"],
    cta: {
      eyebrow: "still running critical processes manually?",
      title: "Build a more connected operation.",
      body: "Let's identify where automation and enterprise technology can remove friction and improve control.",
      href: "/enquiry",
      label: "discuss your workflow"
    }
  },
  "digital-experience-and-platforms": {
    hero: {
      summary: "Designing digital experiences that connect customers, employees and businesses.",
      capabilityLine: "Websites · Web Apps · Mobile Apps · E-commerce · Portals · SaaS Platforms"
    },
    intro: {
      title: "Experience and technology, designed together.",
      lead:
        "Digital platforms are no longer isolated touchpoints. They are where customers discover, interact, transact and build relationships with organisations.",
      body: [
        "We combine strategy, UX, design and engineering to create high-performance digital experiences that connect front-end experience with the systems and operations behind it."
      ],
      principles: [
        { title: "USER-CENTRED", body: "Designed around real journeys, needs and behaviours." },
        { title: "BUSINESS-CONNECTED", body: "Built around commercial and operational objectives." },
        { title: "ENGINEERED TO SCALE", body: "Modern architecture designed for performance, integration and growth." }
      ]
    },
    subServices: {
      title: "What we build",
      items: [
        { title: "Corporate & Enterprise Websites", body: "High-performance websites designed around brand, content, conversion and business objectives." },
        { title: "Web Applications", body: "Custom browser-based applications for customer, operational and enterprise requirements." },
        { title: "Mobile Applications", body: "Native and cross-platform mobile experiences for customers, employees and field teams." },
        { title: "E-commerce", body: "Commerce experiences integrated with products, payments, fulfilment and business operations." },
        { title: "Marketplaces", body: "Multi-vendor and multi-sided digital platforms with tailored operational workflows." },
        { title: "Customer Portals", body: "Self-service environments for accounts, services, transactions, support and information." },
        { title: "Employee Portals", body: "Internal platforms for knowledge, services, communication and operational workflows." },
        { title: "SaaS Platforms", body: "Design and engineering of scalable software products and subscription platforms." },
        { title: "Digital Experience Design", body: "UX research, information architecture, wireframing, UI systems and interaction design." },
        { title: "Content & CMS Platforms", body: "Flexible content environments designed for internal teams and multi-market publishing." }
      ]
    },
    process: {
      title: "From idea to experience.",
      items: [
        { title: "DISCOVER", body: "Understand audiences, business goals, content, systems and requirements." },
        { title: "STRUCTURE", body: "Define journeys, information architecture and platform requirements." },
        { title: "DESIGN", body: "Create wireframes, visual systems and interactive experiences." },
        { title: "BUILD", body: "Engineer the front end, back end, CMS and integrations." },
        { title: "LAUNCH & EVOLVE", body: "Test, deploy, measure and continuously improve." }
      ]
    },
    execution: {
      title: "A digital experience is only as strong as what sits behind it.",
      body: "We design both the customer experience and the technology architecture required to support it.",
      steps: ["EXPERIENCE", "CONTENT", "APPLICATION LOGIC", "DATA", "CRM / ERP", "PAYMENTS / SERVICES", "ANALYTICS"],
      note: "More than the front end."
    },
    capabilities: {
      title: "Technology & capabilities",
      body: "Modern experience platforms connect interface quality with scalable systems.",
      items: ["Next.js & React", "Node.js & Python", "React Native", "WordPress & Headless CMS", "Commerce Platforms", "APIs & Integrations", "Cloud Hosting", "Search & Personalisation", "Analytics & Tagging", "Performance & Security"]
    },
    valueAreas: {
      title: "What we build for",
      items: [
        { title: "BRAND & CORPORATE", body: "Corporate websites · Content platforms · Multi-market experiences" },
        { title: "CUSTOMER EXPERIENCE", body: "Portals · Self-service · Booking · Loyalty · Personalisation" },
        { title: "COMMERCE", body: "E-commerce · Marketplaces · Payments · Product experiences" },
        { title: "ENTERPRISE", body: "Employee portals · Internal tools · Operational applications" },
        { title: "FIELD & MOBILE", body: "Mobile apps · Survey tools · Field operations · Customer apps" },
        { title: "DIGITAL PRODUCTS", body: "SaaS · Subscription platforms · New digital business models" }
      ]
    },
    engagements: [
      { title: "Customer Portal", body: "Self-service digital experience" },
      { title: "Commerce Platform", body: "Products, payments and fulfilment" },
      { title: "Enterprise Website", body: "Content, conversion and performance" }
    ],
    insights: [
      "When to choose headless architecture",
      "Designing enterprise websites around user journeys",
      "Web app vs mobile app: choosing the right platform",
      "What makes a digital platform scalable"
    ],
    otherServices: ["automation-and-enterprise-solutions", "ai-solutions-and-intelligent-systems", "data-and-intelligence", "managed-services"],
    cta: {
      eyebrow: "planning a new digital experience?",
      title: "Build a platform designed to evolve.",
      body: "From strategy and UX to engineering and integration, let's create the right digital experience for your business.",
      href: "/enquiry",
      label: "start your project"
    }
  },
  "data-and-intelligence": {
    hero: {
      summary: "Turning fragmented data into visibility, prediction and better decisions.",
      capabilityLine: "Data Strategy · BI · Dashboards · Analytics · Forecasting · Decision Intelligence"
    },
    intro: {
      title: "Make data useful, not just available.",
      lead:
        "Most organisations already generate large volumes of data. The challenge is connecting it, understanding it and turning it into information people can act on.",
      body: [
        "We build data and intelligence solutions that bring together operational information, surface the right metrics and add predictive capability where it can improve planning and decisions."
      ],
      principles: [
        { title: "CONNECTED", body: "Bring information together across systems and sources." },
        { title: "ACTIONABLE", body: "Focus on the metrics and intelligence people actually need." },
        { title: "FORWARD-LOOKING", body: "Move from reporting what happened to understanding what may happen next." }
      ]
    },
    subServices: {
      title: "What we cover",
      items: [
        { title: "Data Strategy", body: "Define how data should be collected, structured, governed, connected and used." },
        { title: "Data Integration & Centralisation", body: "Connect multiple platforms and data sources into unified environments." },
        { title: "Business Intelligence", body: "Transform operational and commercial data into accessible business insights." },
        { title: "Executive Dashboards", body: "Create clear real-time views of KPIs, trends, exceptions and performance." },
        { title: "Data Analytics & Visualisation", body: "Explore complex data and communicate insights through intuitive visual experiences." },
        { title: "Predictive Analytics", body: "Use historical and real-time data to estimate future outcomes and risks." },
        { title: "Forecasting", body: "Support demand, sales, inventory, financial and operational planning." },
        { title: "Customer & Behavioural Analytics", body: "Understand journeys, segments, engagement and customer behaviour." },
        { title: "Operational Analytics", body: "Monitor efficiency, service levels, throughput, utilisation and exceptions." },
        { title: "Decision Intelligence", body: "Combine data, analytics, AI and business rules to support complex decisions." }
      ]
    },
    process: {
      title: "From data to decision.",
      items: [
        { title: "CONNECT", body: "Identify sources, systems, ownership and data quality." },
        { title: "MODEL", body: "Structure and prepare data around business questions and KPIs." },
        { title: "VISUALISE", body: "Build dashboards and analytical experiences for each user group." },
        { title: "PREDICT", body: "Apply statistical or AI models where forward-looking intelligence adds value." },
        { title: "ACT", body: "Integrate insights into workflows, alerts and decision processes." }
      ]
    },
    execution: {
      title: "From reporting to intelligence.",
      body: "The goal is to move intelligence closer to the point where business decisions are made.",
      steps: ["RAW DATA", "CONNECTED DATA", "BUSINESS METRICS", "ANALYTICS", "PREDICTION", "DECISION / ACTION"],
      note: "Visibility, prediction and action in one flow."
    },
    capabilities: {
      title: "Technology & capabilities",
      body: "Data platforms should make the right intelligence accessible to the right teams.",
      items: ["Business Intelligence Platforms", "Data Warehousing", "APIs & Data Pipelines", "Cloud Data Services", "Dashboard Development", "Machine Learning", "Predictive Modelling", "Data Visualisation", "Real-Time Data", "AI-assisted Analytics"]
    },
    valueAreas: {
      title: "Where data creates value",
      items: [
        { title: "EXECUTIVE MANAGEMENT", body: "Performance visibility · KPIs · Forecasts · Exceptions" },
        { title: "SALES & MARKETING", body: "Pipeline · Campaigns · Segmentation · Customer behaviour" },
        { title: "RETAIL", body: "Store performance · Inventory · Merchandising · Demand" },
        { title: "OPERATIONS", body: "Throughput · Service levels · Utilisation · Efficiency" },
        { title: "FINANCE", body: "Revenue · Cost · Cash flow · Forecasting · Risk" },
        { title: "PROCUREMENT", body: "Spend · Suppliers · Pricing · Vendor performance" }
      ]
    },
    engagements: [
      { title: "Executive Dashboard", body: "KPI visibility and performance intelligence" },
      { title: "Retail Intelligence", body: "Store-level insight and behavioural signals" },
      { title: "Decision Copilot", body: "Natural-language access to business metrics" }
    ],
    lab: {
      title: "Extending analytics into prediction and decision support.",
      body: "Lab concepts explore how data can move from dashboards into action.",
      items: [
        { title: "Demand Intelligence", body: "Predictive demand and inventory signals." },
        { title: "Retail Intelligence", body: "Visual and behavioural data combined into store-level insight." },
        { title: "Decision Copilots", body: "Natural-language access to approved business data and metrics." }
      ]
    },
    insights: [
      "From dashboards to decision intelligence",
      "What makes a useful executive dashboard?",
      "Preparing business data for AI",
      "Predictive analytics: where to start"
    ],
    otherServices: ["ai-solutions-and-intelligent-systems", "automation-and-enterprise-solutions", "smart-and-connected-technology", "managed-services"],
    cta: {
      eyebrow: "have the data but not the visibility?",
      title: "Turn information into intelligence.",
      body: "Let's connect your data and build the insights your teams need to make better decisions.",
      href: "/enquiry",
      label: "discuss your data challenge"
    }
  },
  "smart-and-connected-technology": {
    hero: {
      summary: "Connecting physical environments with digital intelligence.",
      capabilityLine: "IoT · Sensors · Wi-Fi Intelligence · Indoor Analytics · Computer Vision · Edge AI"
    },
    intro: {
      title: "Understand what is happening in the physical world.",
      lead:
        "Stores, showrooms, offices, airports, warehouses and other physical environments generate valuable signals that are often invisible to traditional business systems.",
      body: [
        "We combine connected devices, Wi-Fi, sensors, computer vision and AI to translate real-world activity into measurable intelligence and operational insight."
      ],
      principles: [
        { title: "REAL-WORLD DATA", body: "Capture signals from spaces, devices, assets and activity." },
        { title: "INTELLIGENT ANALYSIS", body: "Use AI and analytics to understand patterns, events and behaviour." },
        { title: "BUSINESS ACTION", body: "Connect physical intelligence with dashboards, alerts and operational workflows." }
      ]
    },
    subServices: {
      title: "What we build",
      items: [
        { title: "IoT & Smart Sensor Solutions", body: "Connect devices, sensors and physical environments to digital platforms." },
        { title: "Wi-Fi Intelligence", body: "Use network and signal data to understand presence, movement and utilisation." },
        { title: "Indoor Location Intelligence", body: "Analyse zones, movement patterns and activity within physical spaces." },
        { title: "Footfall & Occupancy Analytics", body: "Measure traffic, occupancy, dwell and space utilisation." },
        { title: "Computer & Video Analytics", body: "Use visual AI to recognise objects, activity, conditions and behavioural patterns." },
        { title: "Retail Shelf Intelligence", body: "Analyse product availability, shelf share, facings and merchandising conditions." },
        { title: "Edge AI", body: "Process selected AI workloads close to devices for faster response and reduced data movement." },
        { title: "Real-Time Monitoring", body: "Track assets, environments and operating conditions with alerts and dashboards." },
        { title: "Connected Asset Intelligence", body: "Monitor asset location, usage, condition or status where appropriate." },
        { title: "Smart Retail & Showrooms", body: "Combine physical-space data with customer, merchandising and operational intelligence." }
      ]
    },
    process: {
      title: "From physical signal to business insight.",
      items: [
        { title: "OBSERVE", body: "Define the environment, behaviours, assets or events that need to be understood." },
        { title: "CONNECT", body: "Select and integrate the appropriate devices, networks, sensors or cameras." },
        { title: "INTERPRET", body: "Apply analytics, AI and business logic to transform signals into meaningful information." },
        { title: "VISUALISE", body: "Surface insights through dashboards, heatmaps, alerts and reports." },
        { title: "ACT", body: "Connect intelligence to operational workflows and decisions." }
      ]
    },
    execution: {
      title: "From environment to intelligence.",
      body: "Physical-space signals become useful when they are connected to dashboards, alerts and operational action.",
      steps: ["PHYSICAL SPACE", "DEVICES / WI-FI / CAMERAS / SENSORS", "EDGE / CLOUD", "AI & ANALYTICS", "DASHBOARD / ALERT", "ACTION"],
      note: "Connecting real-world behaviour with digital intelligence."
    },
    capabilities: {
      title: "Technology & capabilities",
      body: "Connected technology combines sensing, networks, analytics and enterprise integration.",
      items: ["IoT Devices & Sensors", "Wi-Fi Analytics", "Computer Vision", "Edge Computing", "Cloud IoT", "Real-Time Data Streaming", "Indoor Analytics", "Heatmaps & Spatial Data", "Dashboards & Alerts", "Enterprise Integrations"]
    },
    valueAreas: {
      title: "Where connected intelligence creates value",
      items: [
        { title: "RETAIL & FMCG", body: "Shelf intelligence · Footfall · Dwell · Merchandising · Store performance" },
        { title: "MALLS & SHOWROOMS", body: "Visitor movement · Zone utilisation · Engagement · Occupancy" },
        { title: "AIRPORTS & TRANSPORT", body: "Flow analysis · Asset monitoring · Operational visibility" },
        { title: "WAREHOUSING & LOGISTICS", body: "Asset tracking · Utilisation · Conditions · Movement" },
        { title: "WORKPLACES", body: "Space utilisation · Occupancy · Environmental monitoring" },
        { title: "HOSPITALITY", body: "Guest flow · Space usage · Service intelligence" }
      ]
    },
    engagements: [
      { title: "SmartSpace", body: "Wi-Fi and sensor-powered indoor intelligence" },
      { title: "ShelfVision AI", body: "Camera-based retail shelf and stock intelligence" },
      { title: "Flow Intelligence", body: "Movement, dwell and space utilisation analytics" }
    ],
    lab: {
      title: "Testing the next generation of connected intelligence.",
      body: "Lab work explores how AI and connected environments create useful operational intelligence.",
      items: [
        { title: "SmartSpace", body: "Wi-Fi and sensor-powered indoor intelligence." },
        { title: "ShelfVision AI", body: "Camera-based retail shelf and stock intelligence." },
        { title: "Flow Intelligence", body: "Prototype analytics for movement, dwell and space utilisation." }
      ]
    },
    insights: [
      "How Wi-Fi can become a source of physical-space intelligence",
      "Computer vision in retail operations",
      "Building privacy-aware smart environments",
      "Edge AI vs cloud AI for connected spaces"
    ],
    otherServices: ["ai-solutions-and-intelligent-systems", "data-and-intelligence", "automation-and-enterprise-solutions", "managed-services"],
    cta: {
      eyebrow: "want to understand what is happening in your physical environment?",
      title: "Connect the space. Understand the signals.",
      body: "Let's explore how connected technology and AI can turn physical activity into useful business intelligence.",
      href: "/enquiry",
      label: "explore a smart solution"
    }
  },
  "managed-services": {
    hero: {
      summary: "Keeping digital and AI systems secure, reliable and continuously improving.",
      capabilityLine: "AI Operations · Application Support · Cloud · DevOps · Monitoring · Continuous Development"
    },
    intro: {
      title: "Launch is the beginning, not the end.",
      lead:
        "Digital platforms and AI systems need ongoing monitoring, maintenance and improvement to remain reliable, secure and useful.",
      body: [
        "Our managed services provide the technical continuity required after launch - from application and cloud operations to AI knowledge management, performance monitoring and iterative development."
      ],
      principles: [
        { title: "PROACTIVE", body: "Monitor systems and address issues before they become business problems." },
        { title: "CONTINUOUS", body: "Improve platforms as requirements, technology and user needs evolve." },
        { title: "ACCOUNTABLE", body: "Maintain clear ownership across support, releases, performance and optimisation." }
      ]
    },
    subServices: {
      title: "What we manage",
      items: [
        { title: "Managed AI Services", body: "Monitor deployed AI applications, quality, usage, integrations and operational performance." },
        { title: "AI Knowledge Management", body: "Maintain approved knowledge sources, retrieval environments and content freshness for enterprise AI." },
        { title: "Application Management", body: "Ongoing support, maintenance and enhancement of web, mobile and enterprise applications." },
        { title: "Website & Platform Maintenance", body: "Updates, fixes, content support, performance and technical upkeep." },
        { title: "Cloud & Infrastructure Management", body: "Manage hosting environments, resources, availability, backups and optimisation." },
        { title: "DevOps & Release Management", body: "Maintain deployment pipelines, environments, releases and development operations." },
        { title: "Performance Monitoring", body: "Track uptime, speed, application health and critical technical indicators." },
        { title: "Security Maintenance", body: "Patching, access controls, dependency updates and ongoing technical security hygiene." },
        { title: "Continuous Development", body: "Deliver iterative features, improvements and integrations as business needs evolve." },
        { title: "Technical Support", body: "Structured support for incidents, requests, troubleshooting and platform users." }
      ]
    },
    process: {
      title: "A continuous operating cycle.",
      items: [
        { title: "MONITOR", body: "Track availability, performance, usage and system health." },
        { title: "SUPPORT", body: "Resolve incidents, requests and operational issues." },
        { title: "MAINTAIN", body: "Keep applications, dependencies, infrastructure and knowledge current." },
        { title: "OPTIMISE", body: "Improve performance, cost, reliability and user experience." },
        { title: "EVOLVE", body: "Deliver new features and enhancements as priorities change." }
      ]
    },
    execution: {
      title: "From project to long-term capability.",
      body: "Managed services keep the technology aligned with the business long after the initial implementation.",
      steps: ["LAUNCH", "MONITOR", "SUPPORT", "MAINTAIN", "OPTIMISE", "ENHANCE", "SCALE"],
      note: "Continuity after launch."
    },
    capabilities: {
      title: "Platforms we support",
      body: "Managed services cover the application, infrastructure, data, automation and AI layers that keep platforms useful.",
      items: ["AI Applications & Knowledge Systems", "Web & Mobile Applications", "Enterprise Platforms", "Websites & CMS", "CRM & Integrations", "Cloud Infrastructure", "APIs & Services", "Data & Dashboards", "Automation Workflows", "Connected Technology Platforms"]
    },
    valueAreas: {
      title: "What we manage",
      items: [
        { title: "RELIABILITY", body: "Uptime · Incidents · Backups · Availability" },
        { title: "PERFORMANCE", body: "Speed · Infrastructure · Application health" },
        { title: "SECURITY", body: "Patching · Access · Dependencies · Monitoring" },
        { title: "AI QUALITY", body: "Knowledge freshness · Usage · Evaluation · Output quality" },
        { title: "RELEASES", body: "Deployment · Environments · Version management" },
        { title: "EVOLUTION", body: "Enhancements · New features · Integrations · Optimisation" }
      ]
    },
    engagements: [
      { title: "Managed Platform", body: "Operational ownership across application, infrastructure and monitoring" },
      { title: "Managed AI", body: "Ongoing operation and optimisation of deployed AI solutions" },
      { title: "Dedicated Capacity", body: "Reserved development capacity for continuous evolution" }
    ],
    serviceModels: {
      title: "Service models",
      items: [
        { title: "ONGOING SUPPORT", body: "Structured maintenance and technical support for live platforms." },
        { title: "DEDICATED CAPACITY", body: "Reserved development and engineering capacity for continuous evolution." },
        { title: "MANAGED PLATFORM", body: "Operational ownership across application, infrastructure and monitoring." },
        { title: "MANAGED AI", body: "Ongoing technical operation and optimisation of deployed AI solutions." }
      ]
    },
    insights: [
      "Why AI systems need ongoing management",
      "What a managed application service should cover",
      "Keeping enterprise knowledge AI current",
      "From launch to continuous product development"
    ],
    otherServices: ["ai-solutions-and-intelligent-systems", "automation-and-enterprise-solutions", "digital-experience-and-platforms", "data-and-intelligence"],
    cta: {
      eyebrow: "need a long-term technology partner after launch?",
      title: "Keep your technology moving forward.",
      body: "From day-to-day support to continuous development, we help keep your digital and AI platforms reliable and evolving.",
      href: "/enquiry",
      label: "discuss managed services"
    }
  }
};

export const cases = [
  {
    slug: "whiskas-interactive-cat-game",
    title: "A game designed for cats, not humans.",
    client: "Whiskas",
    summary:
      "An interactive digital campaign that turned an iPad into a playground for cats and transformed playful moments into campaign entries.",
    image: "https://storage.tentwenty.com/small_play_showreel_dca84a2c40.webp",
    logo: "Whiskas",
    services: [
      "gamification",
      "interactive experience",
      "UGC",
      "campaign technology",
      "digital engagement"
    ]
  },
  {
    slug: "bank-muscat-ibm-api-connect",
    title: "Building the API layer for connected corporate banking.",
    client: "Bank Muscat",
    summary:
      "Implementation of IBM API Connect, creating a managed API environment for secure B2B and corporate banking connectivity.",
    image: "https://storage.tentwenty.com/small_AWS_and_Azure_Hosting_1_8f35b1ee0b.webp",
    logo: "Bank Muscat",
    services: [
      "API management",
      "enterprise integration",
      "API security",
      "B2B connectivity",
      "IBM technology"
    ]
  },
  {
    slug: "ferrero-back-to-school-campaign",
    title: "From receipt to reward. In one conversation.",
    client: "Ferrero Group",
    summary:
      "A WhatsApp-first promotional platform connecting receipt submission, OCR processing, campaign qualification and instant-win outcomes.",
    image: "https://storage.tentwenty.com/medium_Vip_booking_platform_Saudi_Pavilion_d2a25f002b.webp",
    logo: "Ferrero Group",
    services: [
      "WhatsApp",
      "OCR",
      "receipt processing",
      "qualification engine",
      "instant-win logic",
      "campaign operations"
    ]
  },
  {
    slug: "dentazon-ai-dental-care-platform",
    title: "From a dental concern to the right care.",
    client: "Dentazon",
    summary:
      "A connected dental-care platform combining AI-assisted guidance, structured patient history, dentist discovery and appointment management.",
    image: "https://storage.tentwenty.com/small_Mask_group_3_1_96df741620_47c47e2b74.webp",
    logo: "Dentazon",
    services: [
      "AI assistant",
      "patient experience",
      "healthcare platform",
      "dentist discovery",
      "appointment system",
      "patient records"
    ]
  },
  {
    slug: "nolte-digital-transformation",
    title: "One digital foundation. Built to grow across markets.",
    client: "Nolte",
    summary:
      "Creating a premium digital platform for Nolte UAE designed around product discovery, lead generation and regional expansion.",
    image: "https://storage.tentwenty.com/large_G42_Website_Desktop_Screens_1_f4055a5008.jpg",
    logo: "Nolte",
    services: [
      "digital strategy",
      "UX/UI",
      "website development",
      "CMS",
      "lead generation",
      "AI knowledge assistant",
      "multi-market platform"
    ]
  },
  {
    slug: "du-retail-intelligence-platform",
    title: "Turning every retail visit into market intelligence.",
    client: "du",
    summary:
      "A field intelligence platform designed to transform retail observations, images and video into structured commercial intelligence.",
    image: "https://storage.tentwenty.com/large_G42_Website_Mobile_Screens_Banner_fc657376ae.webp",
    logo: "du",
    services: [
      "enterprise platform",
      "field operations",
      "computer vision",
      "data & BI",
      "geospatial intelligence",
      "dashboards"
    ]
  },
  {
    slug: "moments-of-magic",
    title: "Moments of Magic",
    client: "M&M's",
    summary:
      "A digital-ready brand story shaped around memorable moments, content, and audience attention.",
    image: "https://storage.tentwenty.com/98/G42_1cd52cacb0.webp",
    logo: "https://storage.tentwenty.com/1/70/g42_left_94f440e03f.svg",
    services: ["digital strategy", "content experience", "customer engagement"]
  },
  {
    slug: "pawtopia",
    title: "Pawtopia",
    client: "Pedigree & IAMS",
    summary:
      "A pet-focused digital engagement concept designed to bring community and product storytelling together.",
    image: "https://storage.tentwenty.com/98/G42_1_e21d5eb296.webp",
    logo: "https://storage.tentwenty.com/client_3_98ad41588a.svg",
    services: ["digital engagement", "community experience", "content planning"]
  },
  {
    slug: "a-michelin-affair",
    title: "A Michelin Affair",
    client: "Tazal",
    summary:
      "A premium digital storytelling direction built around hospitality, attention, and crafted experience.",
    image: "https://storage.tentwenty.com/medium_UAE_Pavilion_Expo_2025_63f64b6389.webp",
    logo: "https://storage.tentwenty.com/ithra_logo_c69cb03a85.svg",
    services: ["digital storytelling", "experience design", "content direction"]
  },
  {
    slug: "taste-of-abu-dhabi",
    title: "Taste of Abu Dhabi",
    client: "BRF",
    summary:
      "A consumer-facing digital experience shaped for regional audience engagement and content visibility.",
    image: "https://storage.tentwenty.com/medium_Vip_booking_platform_Saudi_Pavilion_d2a25f002b.webp",
    logo: "https://storage.tentwenty.com/Dubai_Watch_Week_fe2ad5f249.svg",
    services: ["customer experience", "regional content", "digital engagement"]
  },
  {
    slug: "ride-back-in-style",
    title: "Ride back in Style",
    client: "Unilever",
    summary: "A lifestyle-led digital engagement connecting brand recall, useful content, and customer touchpoints.",
    image: "https://storage.tentwenty.com/98/Pinza_Thumbnail_3e5ae1a237.webp",
    logo: "https://storage.tentwenty.com/Pinza_7d5b658bc7.svg",
    services: ["digital experience", "content systems", "customer touchpoints"]
  }
];

export const caseDetailBlocks = [
  {
    title: "from brand insight to digital experience",
    body:
      "Each engagement starts with the audience journey: where people meet the brand, what they need, and what action the digital experience should support."
  },
  {
    title: "regional context with digital consistency",
    body:
      "Digital direction balances local market nuance with the standards, tone, and recognition global brands need to protect."
  },
  {
    title: "experiences built for useful interaction",
    body:
      "The work is designed to help people explore, understand, compare, enquire, purchase, or connect through the right digital touchpoints."
  },
  {
    title: "delivery that moves quickly across markets",
    body:
      "From Dubai to the wider region, execution is shaped around practical rollout, digital assets, scalable systems, and measurable business impact."
  }
];

export const caseDetailMedia = [
  {
    title: "digital experience environment",
    image: "https://storage.tentwenty.com/large_G42_Website_Mobile_Screens_Banner_fc657376ae.webp"
  },
  {
    title: "experience planning",
    image: "https://storage.tentwenty.com/G42_Project_Brief_f04fb77727.jpg"
  },
  {
    title: "digital platform assets",
    image: "https://storage.tentwenty.com/large_G42_Website_Desktop_Screens_1_f4055a5008.jpg"
  }
];

export const casePageDetails: Record<
  string,
  {
    eyebrow: string;
    metadata: { label: string; value: string }[];
    story: { title: string; body: string }[];
    builtIntro?: string;
    built: { title: string; body: string }[];
    journeyEyebrow?: string;
    leadJourney: {
      title: string;
      body: string;
      steps: { title: string; body: string }[];
      note: string;
    };
    visualStory: { title: string; body: string; image: string }[];
    ecosystem: {
      title: string;
      body: string;
      steps: string[];
      markets: string[];
    };
    ecosystemEyebrow?: string;
    capabilities: string[];
    impact: { title: string; body: string }[];
    testimonial?: { quote: string; attribution: string };
    relatedWork: { title: string; body: string; href: string }[];
    cta: { eyebrow: string; title: string; body: string; href: string; label: string };
  }
> = {
  "whiskas-interactive-cat-game": {
    eyebrow: "WHISKAS · GAMIFIED CONSUMER EXPERIENCE",
    metadata: [
      { label: "Client", value: "Whiskas" },
      { label: "Engagement", value: "Interactive Cat Game / Gamified Campaign" },
      {
        label: "Capabilities",
        value:
          "Gamification · Interactive Experience · UGC · Campaign Technology · Digital Engagement"
      },
      { label: "Experience", value: "Tablet-based interactive game + video-led campaign participation" }
    ],
    story: [
      {
        title: "THE IDEA",
        body:
          "Instead of creating another digital game for pet owners, the experience was designed around the natural behaviour of cats: curiosity, movement, chasing and play."
      },
      {
        title: "THE INTERACTION",
        body:
          "An iPad placed on the floor becomes the play surface. Animated elements appear and move across the display, encouraging the cat to follow, chase and physically interact with the screen."
      },
      {
        title: "THE CONTENT",
        body:
          "While the cat plays, the owner records the interaction. The gameplay becomes more than an on-screen experience: it creates authentic, entertaining user-generated content around the brand."
      },
      {
        title: "THE CAMPAIGN",
        body:
          "Owners upload their videos as campaign submissions, turning a simple interactive game into a participation mechanic built around pets, people and shareable content."
      }
    ],
    builtIntro:
      "A playful campaign experience that turns screen interaction into physical play, owner-created video and digital participation.",
    built: [
      {
        title: "Interactive Cat Game",
        body: "A tablet-based game experience designed specifically around feline interaction."
      },
      {
        title: "Motion-Based Game Mechanics",
        body: "Animated elements appear and travel across the screen to encourage chasing and tapping."
      },
      {
        title: "Touch Interaction",
        body: "On-screen reactions are designed around physical interaction with the tablet."
      },
      {
        title: "Campaign Experience",
        body: "A digital journey connects the game to the wider Whiskas activation."
      },
      {
        title: "UGC Participation Flow",
        body: "Owners can record and submit their cat's gameplay as campaign participation."
      },
      {
        title: "Video Submission Journey",
        body: "Owner-recorded content is turned into a structured participation asset."
      },
      {
        title: "Campaign Entry Logic",
        body: "Valid submissions connect with the campaign entry process."
      },
      {
        title: "Responsive Digital Experience",
        body: "The campaign experience is designed across the relevant consumer devices and touchpoints."
      }
    ],
    journeyEyebrow: "the campaign journey",
    leadJourney: {
      title: "Play. Capture. Upload. Enter.",
      body:
        "The campaign turns a tablet game into a fluid participation journey, with the pet as the player and the owner as the content creator.",
      steps: [
        { title: "DISCOVER", body: "The owner discovers the Whiskas campaign and interactive cat game." },
        { title: "OPEN", body: "The game is opened on a tablet or iPad." },
        { title: "PLACE", body: "The device is placed on the floor within reach of the cat." },
        { title: "PLAY", body: "Moving interactive elements encourage the cat to chase and tap the screen." },
        { title: "RECORD", body: "The owner captures the cat's reaction and gameplay on video." },
        { title: "UPLOAD", body: "The video is submitted through the campaign participation flow." },
        { title: "ENTER", body: "The content becomes a valid campaign entry according to campaign rules." },
        { title: "WIN", body: "Selected participants have the opportunity to receive campaign rewards." }
      ],
      note:
        "The public case study avoids inventing scores, leaderboards, voting, moderation or reward mechanics beyond the confirmed campaign journey."
    },
    visualStory: [
      {
        title: "THE IDEA",
        body: "A digital game made for a non-human player, with the product's real end beneficiary at the centre.",
        image: "https://storage.tentwenty.com/small_play_showreel_dca84a2c40.webp"
      },
      {
        title: "THE PLAY",
        body: "Moving elements trigger curiosity, chasing, tapping and physical interaction with the screen.",
        image: "https://storage.tentwenty.com/small_Showreel_vertical_09d7c91a59.webp"
      },
      {
        title: "THE MOMENT",
        body: "The owner captures the interaction as video, turning gameplay into a shareable campaign moment.",
        image: "https://storage.tentwenty.com/medium_Vip_booking_platform_Saudi_Pavilion_d2a25f002b.webp"
      },
      {
        title: "THE ENTRY",
        body: "Video upload and campaign submission turn the owner-recorded moment into participation.",
        image: "https://storage.tentwenty.com/large_G42_Website_Mobile_Screens_Banner_fc657376ae.webp"
      },
      {
        title: "THE CONTENT",
        body: "Gameplay becomes user-generated campaign material built around authentic pet-owner moments.",
        image: "https://storage.tentwenty.com/large_G42_Website_Desktop_Screens_1_f4055a5008.jpg"
      }
    ],
    ecosystemEyebrow: "the experience architecture",
    ecosystem: {
      title: "A simple experience. A connected campaign journey.",
      body:
        "The strength of the campaign is its simplicity at the front end: the technology creates a playful trigger, while the participation journey converts that moment into campaign engagement.",
      steps: [
        "WHISKAS CAMPAIGN",
        "INTERACTIVE TABLET GAME",
        "CAT INTERACTION",
        "OWNER VIDEO",
        "UPLOAD / SUBMISSION",
        "CAMPAIGN ENTRY",
        "WINNER / REWARD PROCESS"
      ],
      markets: ["THE PET", "THE OWNER", "THE BRAND"]
    },
    capabilities: [
      "Interactive Game",
      "Motion Mechanics",
      "Touch Interaction",
      "Campaign Experience",
      "UGC Flow",
      "Video Submission",
      "Campaign Entry Logic",
      "Digital Engagement"
    ],
    impact: [
      {
        title: "PET-FIRST INTERACTION",
        body: "A digital experience designed around the behaviour of the product's real end beneficiary."
      },
      {
        title: "OWNER ENGAGEMENT",
        body: "Owners become participants through watching, recording and submitting the experience."
      },
      {
        title: "CONTENT GENERATION",
        body: "The campaign mechanic naturally produces video content from real interactions."
      },
      {
        title: "PHYSICAL + DIGITAL",
        body: "A screen-based experience creates a tangible real-world reaction and campaign moment."
      },
      {
        title: "MEMORABLE BRAND EXPERIENCE",
        body: "The brand becomes associated with an entertaining interaction between pet and owner."
      }
    ],
    relatedWork: [
      { title: "Ferrero Group - Conversational Campaign", body: "OCR · Automation", href: "/cases/ferrero-back-to-school-campaign" },
      { title: "du Retail Intelligence Platform", body: "Enterprise Transformation · Computer Vision · BI", href: "/cases/du-retail-intelligence-platform" },
      { title: "Dentazon - AI Healthcare Product", body: "AI Product · Healthcare", href: "/cases/dentazon-ai-dental-care-platform" },
      { title: "Bank Muscat - IBM API Connect", body: "Enterprise Integration", href: "/cases/bank-muscat-ibm-api-connect" },
      { title: "Nolte - Digital Experience & Transformation", body: "Digital Experience", href: "/cases/nolte-digital-transformation" }
    ],
    cta: {
      eyebrow: "have an idea people should interact with?",
      title: "Turn creative ideas into digital experiences.",
      body:
        "MomentumX combines creative thinking, interaction design and technology to build campaign experiences people - and sometimes their pets - actually want to engage with.",
      href: "/enquiry",
      label: "start a conversation"
    }
  },
  "bank-muscat-ibm-api-connect": {
    eyebrow: "BANK MUSCAT · ENTERPRISE INTEGRATION",
    metadata: [
      { label: "Client", value: "Bank Muscat" },
      { label: "Engagement", value: "IBM API Connect Implementation" },
      { label: "Industry", value: "Banking & Financial Services" },
      {
        label: "Capabilities",
        value:
          "API Management · Enterprise Integration · API Security · B2B Connectivity · IBM Technology"
      },
      { label: "Technology", value: "IBM API Connect" }
    ],
    story: [
      {
        title: "THE BUSINESS",
        body:
          "Corporate banking does not operate in isolation. Enterprise customers increasingly need banking capabilities to connect with the systems they already use to run finance, treasury and business operations."
      },
      {
        title: "THE CHALLENGE",
        body:
          "Connecting enterprise customers to banking services requires more than exposing endpoints. The environment needs to manage how APIs are published, secured, accessed, governed and monitored."
      },
      {
        title: "THE PLATFORM",
        body:
          "MomentumX implemented IBM API Connect as the API management platform supporting Bank Muscat's B2B connectivity requirements."
      },
      {
        title: "THE TRANSFORMATION",
        body:
          "The API management layer creates a foundation through which banking capabilities can integrate more effectively into corporate technology environments."
      }
    ],
    builtIntro:
      "A managed enterprise API foundation designed for secure, governed B2B banking connectivity.",
    built: [
      {
        title: "IBM API Connect Implementation",
        body: "Deployment and configuration of IBM API Connect within the required enterprise environment."
      },
      {
        title: "API Management",
        body: "A framework for managing and exposing APIs to authorised B2B consumers."
      },
      {
        title: "API Gateway",
        body: "A controlled gateway layer through which API traffic is managed."
      },
      {
        title: "Security & Access",
        body: "Authentication, access and API security controls implemented within the solution scope."
      },
      {
        title: "API Policies",
        body: "Configured policies govern how API requests are handled across the managed layer."
      },
      {
        title: "API Publishing",
        body: "Structured publication and management of APIs through IBM API Connect."
      },
      {
        title: "B2B Connectivity",
        body: "Authorised corporate systems can connect with available banking services through the managed API environment."
      },
      {
        title: "Monitoring & Management",
        body: "Operational visibility into API activity and platform behaviour within the implemented scope."
      }
    ],
    journeyEyebrow: "how the connection works",
    leadJourney: {
      title: "From enterprise request to banking response.",
      body:
        "A single authorised request moves through authentication, policy controls, routing and response within a managed API environment.",
      steps: [
        { title: "REQUEST", body: "A corporate system initiates an authorised API request." },
        { title: "AUTHENTICATE", body: "Access and credentials are validated." },
        { title: "APPLY POLICIES", body: "Configured API policies and controls are applied." },
        { title: "ROUTE", body: "The request is securely routed towards the appropriate banking service." },
        { title: "PROCESS", body: "Banking systems process the authorised request." },
        { title: "RESPOND", body: "The response returns through the managed API layer." },
        { title: "ENTERPRISE SYSTEM", body: "The corporate application receives the response." }
      ],
      note:
        "The public case-study view remains conceptual and does not expose confidential endpoints, security configuration, network topology or internal controls."
    },
    visualStory: [
      {
        title: "THE ENTERPRISE",
        body: "Corporate finance, treasury and business systems require controlled banking connectivity.",
        image: "https://storage.tentwenty.com/small_AWS_and_Azure_Hosting_1_8f35b1ee0b.webp"
      },
      {
        title: "THE BRIDGE",
        body: "IBM API Connect acts as the managed bridge between banking systems and authorised corporate consumers.",
        image: "https://storage.tentwenty.com/small_tech_stack_1f2d5c8d39.jpg"
      },
      {
        title: "THE REQUEST",
        body: "Authentication, policy handling, routing, banking service processing and response form one controlled flow.",
        image: "https://storage.tentwenty.com/small_api_x_tentwenty_2afbcfdd98.jpg"
      },
      {
        title: "THE CONTROL",
        body: "Management, security, policies and monitoring give the API environment operational governance.",
        image: "https://storage.tentwenty.com/large_G42_Website_Desktop_Screens_1_f4055a5008.jpg"
      },
      {
        title: "THE CONNECTION",
        body: "Banking capabilities can sit closer to corporate applications and workflows through authorised API consumption.",
        image: "https://storage.tentwenty.com/large_G42_Website_Mobile_Screens_Banner_fc657376ae.webp"
      }
    ],
    ecosystemEyebrow: "the architecture",
    ecosystem: {
      title: "One managed layer between the bank and the enterprise.",
      body:
        "IBM API Connect provides the management layer between Bank Muscat systems and authorised B2B or corporate customers, supporting API gateway, security, access, policies, governance, monitoring and publishing.",
      steps: [
        "BANK MUSCAT SYSTEMS",
        "API GATEWAY",
        "API MANAGEMENT",
        "SECURITY & ACCESS",
        "POLICIES",
        "MONITORING",
        "API PUBLISHING",
        "B2B / CORPORATE CUSTOMERS"
      ],
      markets: ["ERP", "FINANCE SYSTEMS", "TREASURY PLATFORMS", "BUSINESS APPLICATIONS"]
    },
    capabilities: [
      "IBM API Connect",
      "API Management",
      "API Gateway",
      "Security",
      "Policies",
      "Monitoring",
      "Enterprise Integration",
      "B2B Connectivity"
    ],
    impact: [
      {
        title: "MANAGED CONNECTIVITY",
        body: "A structured API environment between Bank Muscat and authorised B2B consumers."
      },
      {
        title: "ENTERPRISE GOVERNANCE",
        body: "Centralised management of API access, policies and controls."
      },
      {
        title: "SCALABLE FOUNDATION",
        body: "An API management architecture capable of supporting expanding B2B digital services."
      },
      {
        title: "CONNECTED EXPERIENCE",
        body: "A technical foundation for bringing banking capabilities closer to corporate systems and workflows."
      }
    ],
    relatedWork: [
      { title: "Ferrero Group - Conversational Campaign Platform", body: "OCR · Automation", href: "/cases/ferrero-back-to-school-campaign" },
      { title: "du Retail Intelligence Platform", body: "Enterprise Transformation · Computer Vision · BI", href: "/cases/du-retail-intelligence-platform" },
      { title: "Dentazon - AI Healthcare Product", body: "AI Product · Healthcare", href: "/cases/dentazon-ai-dental-care-platform" },
      { title: "Nolte - Digital Experience & Transformation", body: "Digital Experience", href: "/cases/nolte-digital-transformation" }
    ],
    cta: {
      eyebrow: "building enterprise systems that need to connect?",
      title: "Make integration part of the architecture.",
      body:
        "MomentumX implements enterprise technology and integration platforms that connect complex systems securely, reliably and at scale.",
      href: "/enquiry",
      label: "start a conversation"
    }
  },
  "ferrero-back-to-school-campaign": {
    eyebrow: "FERRERO GROUP · INTELLIGENT CAMPAIGN PLATFORM",
    metadata: [
      { label: "Client", value: "Ferrero Group" },
      { label: "Campaign", value: "Back to School" },
      { label: "Brands", value: "Nutella / Kinder" },
      { label: "Market", value: "Saudi Arabia" },
      { label: "Engagement", value: "Conversational Campaign Platform" },
      {
        label: "Capabilities",
        value:
          "WhatsApp · OCR · Receipt Processing · Qualification Engine · Instant-Win Logic · Campaign Operations"
      }
    ],
    story: [
      {
        title: "THE PARTICIPATION",
        body:
          "Instead of sending participants through a traditional campaign website and registration flow, the experience brings campaign participation directly into WhatsApp."
      },
      {
        title: "THE INTELLIGENCE",
        body:
          "Participants upload their purchase receipt inside the conversation. OCR and campaign logic read and structure the information required to process participation and assess eligibility."
      },
      {
        title: "THE DECISION",
        body:
          "Eligible receipts are converted into campaign entries and passed into automated campaign logic that determines the participant's instant-win outcome."
      },
      {
        title: "THE MOMENT",
        body:
          "Rather than asking participants to wait for a future draw, the platform can return the outcome within the same WhatsApp journey, making the result part of the campaign experience itself."
      }
    ],
    builtIntro:
      "A conversational campaign engine designed to reduce friction between purchase, participation and result.",
    built: [
      {
        title: "WhatsApp Campaign Chatbot",
        body: "An end-to-end conversational participation journey built around a channel consumers already use."
      },
      {
        title: "Receipt Upload & Processing",
        body: "Participants submit purchase evidence directly within the campaign flow."
      },
      {
        title: "OCR Integration",
        body: "Submitted receipts are processed so relevant purchase information can be extracted and structured."
      },
      {
        title: "Campaign Qualification Engine",
        body: "Campaign eligibility and qualifying-purchase rules are applied consistently within the platform."
      },
      {
        title: "Receipt Review Workflow",
        body: "Operational review supports unclear, corrected or non-qualifying submissions."
      },
      {
        title: "Duplicate Receipt Controls",
        body: "Controls help identify repeated receipt submissions and protect campaign integrity."
      },
      {
        title: "Automated Entry Management",
        body: "Qualifying participation is recorded automatically as campaign entries."
      },
      {
        title: "Instant-Win Engine",
        body: "Automated campaign logic determines outcomes according to configured campaign rules."
      },
      {
        title: "Prize Allocation Logic",
        body: "Winning outcomes connect into the configured reward and fulfilment journey."
      },
      {
        title: "Campaign Operations Platform",
        body: "Participants, receipts, qualification status, winner outcomes and reporting are managed in one campaign environment."
      }
    ],
    journeyEyebrow: "the consumer journey",
    leadJourney: {
      title: "From discovery to reward.",
      body:
        "The experience turns participation into one continuous WhatsApp-led journey, with receipt processing and campaign logic working behind the conversation.",
      steps: [
        { title: "DISCOVER", body: "The consumer encounters the Back to School promotion and begins participation." },
        { title: "WHATSAPP", body: "The campaign opens as a guided conversational experience." },
        { title: "UPLOAD RECEIPT", body: "The participant submits purchase evidence directly in the chat." },
        { title: "READ", body: "OCR extracts relevant receipt information." },
        { title: "VALIDATE", body: "The system checks the receipt and required campaign information." },
        { title: "QUALIFY", body: "Campaign rules determine whether the purchase is eligible." },
        { title: "ENTER", body: "A qualifying participation is recorded automatically." },
        { title: "INSTANT RESULT", body: "The instant-win engine determines the outcome according to campaign logic." },
        { title: "REWARD", body: "Winning participants move into the appropriate prize or fulfilment journey." }
      ],
      note:
        "Confidential probability, prize-allocation and campaign-control logic should remain abstracted in public-facing material."
    },
    visualStory: [
      {
        title: "THE CONVERSATION",
        body: "Consumers participate directly through a guided WhatsApp campaign journey.",
        image: "https://storage.tentwenty.com/small_03_01_1_1_e912deeb08.jpg"
      },
      {
        title: "THE RECEIPT",
        body: "Purchase evidence becomes structured campaign data through OCR and document processing.",
        image: "https://storage.tentwenty.com/G42_Project_Brief_f04fb77727.jpg"
      },
      {
        title: "THE DECISION",
        body: "Validation, qualification and automated entry creation connect the receipt to campaign logic.",
        image: "https://storage.tentwenty.com/large_G42_Website_Mobile_Screens_Banner_fc657376ae.webp"
      },
      {
        title: "THE MOMENT",
        body: "The outcome returns within the same conversation, making participation and result part of one experience.",
        image: "https://storage.tentwenty.com/medium_Vip_booking_platform_Saudi_Pavilion_d2a25f002b.webp"
      },
      {
        title: "THE OPERATIONS",
        body: "A campaign operations layer manages receipts, entries, winners, prize allocation and reporting.",
        image: "https://storage.tentwenty.com/large_G42_Website_Desktop_Screens_1_f4055a5008.jpg"
      }
    ],
    ecosystemEyebrow: "the campaign engine",
    ecosystem: {
      title: "One conversation. An entire campaign engine behind it.",
      body:
        "The receipt is the bridge between a real-world purchase and digital campaign participation. Behind the consumer experience, the operational layer manages participants, receipts, qualification status, entries, winner outcomes and reporting.",
      steps: [
        "WHATSAPP",
        "RECEIPT",
        "OCR",
        "VALIDATION",
        "QUALIFICATION",
        "ENTRY",
        "WIN ENGINE",
        "RESULT",
        "REWARD"
      ],
      markets: ["CONSUMER LAYER", "INTELLIGENCE / AUTOMATION", "CAMPAIGN OPERATIONS"]
    },
    capabilities: [
      "WhatsApp Campaign Chatbot",
      "Receipt Processing",
      "OCR Integration",
      "Qualification Engine",
      "Instant-Win Logic",
      "Prize Allocation",
      "Winner Communication",
      "Campaign Reporting"
    ],
    impact: [
      {
        title: "CONVERSATIONAL ENTRY",
        body: "Bring participation into a channel consumers already use."
      },
      {
        title: "AUTOMATED PROCESSING",
        body: "Convert uploaded purchase evidence into structured campaign information."
      },
      {
        title: "RULE-BASED QUALIFICATION",
        body: "Apply campaign requirements consistently within the platform."
      },
      {
        title: "INSTANT OUTCOME",
        body: "Connect participation and result within the same customer journey."
      },
      {
        title: "CONNECTED OPERATIONS",
        body: "Bring receipts, entries, qualification and winner management into one campaign environment."
      }
    ],
    relatedWork: [
      { title: "du Retail Intelligence Platform", body: "Enterprise Transformation · Computer Vision · BI", href: "/cases/du-retail-intelligence-platform" },
      { title: "Dentazon - AI Healthcare Product", body: "AI Product · Healthcare", href: "/cases/dentazon-ai-dental-care-platform" },
      { title: "Nolte - Digital Experience & Transformation", body: "Digital Experience", href: "/cases/nolte-digital-transformation" },
      { title: "ShelfVision AI", body: "Innovation Lab · Computer Vision", href: "/innovation-lab" }
    ],
    cta: {
      eyebrow: "have a campaign journey worth making smarter?",
      title: "Turn participation into an experience.",
      body:
        "MomentumX combines conversational technology, automation, data and digital experience to build campaign platforms around real consumer behaviour.",
      href: "/enquiry",
      label: "start a conversation"
    }
  },
  "dentazon-ai-dental-care-platform": {
    eyebrow: "DENTAZON · AI-POWERED HEALTHCARE",
    metadata: [
      { label: "Client", value: "Dentazon" },
      { label: "Engagement", value: "AI-Powered Dental Care Platform" },
      {
        label: "Capabilities",
        value:
          "AI Assistant · Patient Experience · Healthcare Platform · Dentist Discovery · Appointment System · Patient Records"
      },
      { label: "Platform", value: "Web / Digital Healthcare" }
    ],
    story: [
      {
        title: "THE PROBLEM",
        body:
          "Dental concerns often begin with uncertainty. Patients may not know what their symptoms mean, how urgent the issue could be, or which type of dental professional they should approach."
      },
      {
        title: "THE IDEA",
        body:
          "Dentazon was designed to make the beginning of the care journey easier: use AI-assisted interaction to understand the concern, collect relevant context and guide the patient towards an appropriate next step."
      },
      {
        title: "THE CONNECTION",
        body:
          "The experience connects guidance with real-world action, helping patients move from an initial concern towards dentist discovery, appointment booking and professional consultation."
      },
      {
        title: "THE PLATFORM",
        body:
          "AI assistance, patient history, dentist access, appointments and care records are brought together within one digital ecosystem rather than existing as disconnected experiences."
      }
    ],
    builtIntro:
      "A connected healthcare product designed to move patients from uncertainty towards appropriate professional care.",
    built: [
      {
        title: "AI Dental Assistant",
        body: "Conversational support helps patients describe dental concerns naturally and receive preliminary guidance within appropriate clinical boundaries."
      },
      {
        title: "AI-Assisted Oral Health Screening",
        body: "An intelligent first layer gathers relevant symptoms, context and history before directing the patient towards the right next step."
      },
      {
        title: "Conversational Patient History",
        body: "Patient conversations are transformed into structured symptom and history information that can support the care journey."
      },
      {
        title: "Patient Profile & Records",
        body: "Relevant interactions, appointments and care information remain connected rather than disappearing after the first AI interaction."
      },
      {
        title: "Dentist Discovery",
        body: "Patients can move from guidance into finding appropriate dental professionals and understanding available care options."
      },
      {
        title: "Appointment Booking & Management",
        body: "The care journey moves directly from concern and guidance into scheduling an appointment."
      },
      {
        title: "Dentist-Side Patient Overview",
        body: "Dental professionals can review relevant patient context before or during consultation."
      },
      {
        title: "Consultation / Care Records",
        body: "Care records help maintain continuity across the patient-to-dentist journey."
      },
      {
        title: "Digital Healthcare Platform Architecture",
        body: "The product foundation connects AI assistance, patient experience, dentist workflows and healthcare records into one platform."
      }
    ],
    journeyEyebrow: "the core journey",
    leadJourney: {
      title: "From question to care.",
      body:
        "Dentazon's core value is not simply generating an AI response. It connects intelligence to an actionable care journey.",
      steps: [
        {
          title: "ASK",
          body: "The patient describes a dental concern naturally."
        },
        {
          title: "UNDERSTAND",
          body: "The system progressively gathers relevant symptoms, context and history."
        },
        {
          title: "GUIDE",
          body: "AI-assisted logic provides preliminary guidance within appropriate clinical boundaries."
        },
        {
          title: "CONNECT",
          body: "The patient is guided towards an appropriate dental professional or care pathway."
        },
        {
          title: "BOOK",
          body: "The journey moves directly into appointment scheduling."
        },
        {
          title: "CARE",
          body: "Relevant information can support the professional consultation and ongoing patient record."
        }
      ],
      note:
        "The AI experience supports guidance and routing. It should not be presented as a definitive clinical diagnosis or a replacement for dental judgement."
    },
    visualStory: [
      {
        title: "THE CONCERN",
        body: "Start with a real patient question and a conversational AI assistant designed around a healthcare journey.",
        image: "https://storage.tentwenty.com/small_03_01_1_1_e912deeb08.jpg"
      },
      {
        title: "THE INTELLIGENCE",
        body: "Turn conversation into structured symptom context, patient history and next-step guidance.",
        image: "https://storage.tentwenty.com/small_Artificial_Intelligence_Consultancy_and_Implementation_v3_412198b2cc.webp"
      },
      {
        title: "THE CONNECTION",
        body: "Move from guidance to dentist discovery, profiles and appropriate care pathways.",
        image: "https://storage.tentwenty.com/large_G42_Website_Mobile_Screens_Banner_fc657376ae.webp"
      },
      {
        title: "THE ACTION",
        body: "Book care without leaving the journey, with appointment availability and confirmation connected to the patient record.",
        image: "https://storage.tentwenty.com/medium_Vip_booking_platform_Saudi_Pavilion_d2a25f002b.webp"
      },
      {
        title: "THE CONTINUITY",
        body: "Give the dentist useful context through patient summaries, history and consultation records.",
        image: "https://storage.tentwenty.com/large_G42_Website_Desktop_Screens_1_f4055a5008.jpg"
      }
    ],
    ecosystemEyebrow: "connected care ecosystem",
    ecosystem: {
      title: "From AI answer to real-world action.",
      body:
        "The key product idea is continuity: information collected at the beginning of the journey should contribute to what happens next rather than disappearing after the AI interaction.",
      steps: [
        "PATIENT CONCERN",
        "AI ASSISTANCE",
        "STRUCTURED HISTORY",
        "CARE GUIDANCE",
        "DENTIST MATCHING",
        "APPOINTMENT",
        "CONSULTATION",
        "HEALTH RECORD"
      ],
      markets: ["PATIENT", "AI ASSISTS", "DENTIST", "CLINICAL ASSESSMENT", "CARE RECORD"]
    },
    capabilities: [
      "AI Assistant",
      "Patient Experience",
      "Healthcare Platform",
      "Dentist Discovery",
      "Appointment System",
      "Patient Records",
      "Dentist Workspace",
      "Connected Care"
    ],
    impact: [
      {
        title: "ASSISTED FIRST STEP",
        body: "Give patients a structured way to begin when they are unsure what to do."
      },
      {
        title: "CONNECTED JOURNEY",
        body: "Bring guidance, dentist discovery and appointments into one experience."
      },
      {
        title: "STRUCTURED CONTEXT",
        body: "Turn patient conversation into information that can support the next stage of care."
      },
      {
        title: "HUMAN HANDOFF",
        body: "Connect digital intelligence to professional dental assessment rather than stopping at an AI answer."
      }
    ],
    relatedWork: [
      { title: "du Retail Intelligence Platform", body: "Enterprise Transformation · Computer Vision · BI", href: "/cases/du-retail-intelligence-platform" },
      { title: "Nolte - Digital Experience & Transformation", body: "Digital Experience", href: "/cases/nolte-digital-transformation" },
      { title: "M&M's - Moments of Magic", body: "Consumer Experience", href: "/cases/moments-of-magic" },
      { title: "ShelfVision AI", body: "Innovation Lab · Computer Vision", href: "/innovation-lab" }
    ],
    cta: {
      eyebrow: "have a customer journey AI could make easier?",
      title: "Build intelligence into the experience.",
      body:
        "MomentumX combines AI, product design and technology to create digital experiences that move beyond answers and towards useful action.",
      href: "/enquiry",
      label: "start a conversation"
    }
  },
  "nolte-digital-transformation": {
    eyebrow: "NOLTE · DIGITAL TRANSFORMATION",
    metadata: [
      { label: "Client", value: "Nolte" },
      { label: "Engagement", value: "Digital Experience & Platform" },
      {
        label: "Capabilities",
        value:
          "Digital Strategy · UX/UI · Website Development · CMS · Lead Generation · AI Knowledge Assistant · Multi-Market Platform"
      },
      { label: "Platform", value: "Web" },
      { label: "Markets", value: "UAE · India · South Africa · Qatar" }
    ],
    story: [
      {
        title: "THE AMBITION",
        body:
          "Nolte needed a digital experience capable of reflecting the quality of the brand while making it easier for customers to explore products, find inspiration and move naturally towards an enquiry or consultation."
      },
      {
        title: "THE THINKING",
        body:
          "Rather than treating the UAE site as a standalone build, the experience was structured around reusable components, flexible content management and a foundation that could be adapted for additional regional markets."
      },
      {
        title: "THE CUSTOMER JOURNEY",
        body:
          "The platform connects product discovery, project inspiration and brand content with clear lead-generation journeys - including quote and consultation enquiries, brochure-led engagement, WhatsApp and appointment pathways."
      },
      {
        title: "THE EVOLUTION",
        body:
          "The digital foundation was designed to support regional adaptation, allowing the core experience to extend beyond the UAE while maintaining a consistent brand and technology base."
      }
    ],
    built: [
      {
        title: "Premium Brand Website",
        body: "A visual-first digital experience designed around Nolte kitchens, wardrobes, projects and brand storytelling."
      },
      {
        title: "Product & Range Experience",
        body: "Structured product exploration with colour, feature and range information designed to support customer consideration."
      },
      {
        title: "Projects & Inspiration",
        body: "A content-rich environment for showcasing completed projects and helping customers move from inspiration towards enquiry."
      },
      {
        title: "Lead Generation Flows",
        body:
          "Dedicated journeys for requesting a quote, booking a consultation, downloading a brochure and starting a conversation through WhatsApp."
      },
      {
        title: "AI Knowledge Assistant",
        body:
          "A controlled AI assistant designed to answer customer questions using approved Nolte knowledge and help guide visitors towards relevant information and enquiry pathways."
      },
      {
        title: "CMS & Content Management",
        body: "A flexible content-management foundation enabling teams to update products, projects, news and market-specific content."
      },
      {
        title: "Multi-Market Architecture",
        body:
          "A reusable digital foundation designed to be adapted across regional Nolte markets without rebuilding the experience from scratch."
      },
      {
        title: "Analytics & Conversion Tracking",
        body: "Measurement of customer journeys and lead-generation touchpoints to support ongoing optimisation."
      }
    ],
    leadJourney: {
      title: "The Lead Generation Journey",
      body:
        "The website was designed not simply to display products, but to progressively move high-intent visitors towards the right next action.",
      steps: [
        { title: "DISCOVER", body: "Enter through products, projects, inspiration or search." },
        { title: "EXPLORE", body: "Browse ranges, features, colours and relevant project content." },
        {
          title: "GET GUIDANCE",
          body: "Use contextual content and the AI knowledge assistant to answer product and service questions."
        },
        {
          title: "BUILD INTENT",
          body: "Move towards brochure, quote or consultation pathways as interest develops."
        },
        {
          title: "ENQUIRE",
          body: "Capture structured customer requirements through lead-generation forms and direct channels."
        },
        {
          title: "CONSULT",
          body: "Route qualified interest towards the appropriate sales or consultation team."
        }
      ],
      note:
        "The AI component is positioned as an assistive layer within the lead journey, not as autonomous lead scoring or qualification."
    },
    visualStory: [
      {
        title: "THE EXPERIENCE",
        body: "A restrained, visual-first interface gives kitchens, wardrobes, materials and projects room to lead the experience.",
        image: "https://storage.tentwenty.com/large_G42_Website_Mobile_Screens_Banner_fc657376ae.webp"
      },
      {
        title: "THE DETAIL",
        body:
          "Products, ranges, projects and supporting content are structured around how customers explore and evaluate premium interiors.",
        image: "https://storage.tentwenty.com/G42_Project_Brief_f04fb77727.jpg"
      },
      {
        title: "THE CONVERSION",
        body:
          "Quote, consultation, brochure, WhatsApp and assisted enquiry journeys create multiple paths from inspiration to conversation.",
        image: "https://storage.tentwenty.com/medium_Vip_booking_platform_Saudi_Pavilion_d2a25f002b.webp"
      },
      {
        title: "THE PLATFORM",
        body:
          "A flexible content and technology foundation supports regional adaptation while maintaining a consistent digital identity.",
        image: "https://storage.tentwenty.com/large_G42_Website_Desktop_Screens_1_f4055a5008.jpg"
      }
    ],
    ecosystem: {
      title: "One experience. Multiple connected layers.",
      body:
        "The digital ecosystem connects brand, product content, AI guidance, lead generation, CMS and regional markets into one scalable foundation.",
      steps: [
        "BRAND",
        "EXPERIENCE",
        "PRODUCT CONTENT",
        "AI GUIDANCE",
        "LEAD GENERATION",
        "CMS",
        "REGIONAL MARKETS",
        "CUSTOMER ENQUIRY"
      ],
      markets: ["UAE", "INDIA", "SOUTH AFRICA", "QATAR"]
    },
    capabilities: [
      "Digital Strategy",
      "UX & UI Design",
      "Website Development",
      "Product & Content Architecture",
      "CMS Development",
      "Lead Generation",
      "AI Knowledge Assistant",
      "CRM / Lead Flow Integration",
      "Multi-Market Architecture",
      "Analytics & Optimisation"
    ],
    impact: [
      {
        title: "MULTI-MARKET FOUNDATION",
        body: "A shared digital architecture designed for adaptation across multiple regional markets."
      },
      {
        title: "CONNECTED LEAD JOURNEYS",
        body: "Multiple conversion pathways connect product interest with quotes, consultations, brochures and direct conversations."
      },
      {
        title: "ASSISTED DISCOVERY",
        body:
          "AI-supported knowledge access helps visitors find relevant information without replacing the human consultation journey."
      },
      {
        title: "LOCAL FLEXIBILITY",
        body: "Market teams can manage relevant content while retaining a consistent core experience."
      }
    ],
    relatedWork: [
      { title: "Enterprise CRM", body: "Enterprise Transformation", href: "/cases" },
      { title: "ShelfVision AI", body: "AI / Lab Prototype", href: "/innovation-lab" },
      { title: "M&M's - Moments of Magic", body: "Consumer Experience", href: "/cases/moments-of-magic" },
      { title: "Meta Studio", body: "Digital Product", href: "/cases" }
    ],
    cta: {
      eyebrow: "have a digital experience ready to evolve?",
      title: "Let's build what's next.",
      body:
        "From customer journeys and enterprise platforms to intelligent experiences, let's explore what technology can unlock for your business.",
      href: "/enquiry",
      label: "start a conversation"
    }
  },
  "du-retail-intelligence-platform": {
    eyebrow: "DU · RETAIL INTELLIGENCE",
    metadata: [
      { label: "Client", value: "du" },
      { label: "Engagement", value: "Retail Intelligence Platform" },
      {
        label: "Capabilities",
        value:
          "Enterprise Platform · Field Operations · Computer Vision · Data & BI · Geospatial Intelligence · Dashboards"
      },
      { label: "Environment", value: "Field Application + Central Intelligence Platform" },
      { label: "Market", value: "UAE" }
    ],
    story: [
      {
        title: "THE FIELD",
        body:
          "Market intelligence starts at the outlet. du representatives visit retail locations across the market, capturing structured commercial observations together with photographs and video."
      },
      {
        title: "THE VISION",
        body:
          "Computer vision analyses visual evidence captured in the field, turning relevant information from images and video into additional structured retail data."
      },
      {
        title: "THE PLATFORM",
        body:
          "Field observations, visual intelligence, outlet information and geographic data are consolidated into a central platform, creating a continuously evolving view of du and competitor activity across the retail network."
      },
      {
        title: "THE INTELLIGENCE",
        body:
          "Business intelligence dashboards, stakeholder views and intelligent maps transform outlet-level data into commercial and competitive insight that can be explored by location, product, channel and other relevant dimensions."
      }
    ],
    builtIntro:
      "A connected field and intelligence environment designed to turn outlet visits into structured market visibility.",
    built: [
      {
        title: "Field Survey / Retail Audit Application",
        body: "A field-facing application for capturing outlet visits, retail observations, photographs, video and location information."
      },
      {
        title: "Outlet & Visit Management",
        body: "Structured outlet records and visit workflows give teams a more consistent way to collect, organise and review field activity."
      },
      {
        title: "Photo & Video Capture",
        body: "Visual evidence from the field adds richer context beyond manually entered survey information."
      },
      {
        title: "Computer Vision Processing",
        body: "Computer vision transforms relevant visual evidence into structured information that can be combined with field and outlet data."
      },
      {
        title: "Product / Brand Visual Recognition",
        body: "Visual recognition supports analysis of relevant product presence, brand visibility, merchandising and competitor activity."
      },
      {
        title: "Central Retail Intelligence Platform",
        body: "Field observations, visual intelligence, outlet data and commercial context are consolidated into one connected platform."
      },
      {
        title: "Geospatial / Map Intelligence",
        body: "Outlet-level information can be explored geographically across areas, territories and regions."
      },
      {
        title: "Business Intelligence Dashboards",
        body: "Stakeholder dashboards translate detailed field information into relevant commercial, operational and competitive views."
      },
      {
        title: "Role-Based Access & Reporting",
        body: "Different stakeholders can access views shaped around leadership, sales, marketing, field management and product needs."
      }
    ],
    journeyEyebrow: "the intelligence flow",
    leadJourney: {
      title: "From field visit to action.",
      body:
        "The platform connects field capture, computer vision, data consolidation, geographic intelligence and BI so retail activity can be understood as a live market view.",
      steps: [
        { title: "FIELD VISIT", body: "A representative visits the retail outlet." },
        {
          title: "CAPTURE",
          body: "Structured survey data, photographs, video and location information are collected."
        },
        {
          title: "COMPUTER VISION",
          body: "Visual content is analysed to identify and structure relevant retail information."
        },
        {
          title: "DATA PLATFORM",
          body: "Field and visual intelligence are consolidated into outlet-level records."
        },
        {
          title: "GEO INTELLIGENCE",
          body: "Information is mapped across outlets, territories and regions."
        },
        {
          title: "BI & ANALYTICS",
          body: "Commercial, product and competitor data is transformed into stakeholder views."
        },
        {
          title: "ACTION",
          body: "Teams use the intelligence to understand patterns, gaps, competitive activity and opportunities."
        }
      ],
      note:
        "Any figures shown in future interface mockups should be treated as illustrative UI data, not project performance claims."
    },
    visualStory: [
      {
        title: "THE FIELD",
        body: "Capture what is happening at the outlet through a structured field application and visit workflow.",
        image: "https://storage.tentwenty.com/medium_Vip_booking_platform_Saudi_Pavilion_d2a25f002b.webp"
      },
      {
        title: "THE VISION",
        body: "Photos and video become a second intelligence layer through practical computer-vision analysis.",
        image: "https://storage.tentwenty.com/small_Artificial_Intelligence_Consultancy_and_Implementation_v3_412198b2cc.webp"
      },
      {
        title: "THE MARKET",
        body: "Outlet intelligence can be explored geographically through map views, filters and clustered market activity.",
        image: "https://storage.tentwenty.com/large_G42_Website_Mobile_Screens_Banner_fc657376ae.webp"
      },
      {
        title: "THE INTELLIGENCE",
        body: "BI dashboards turn field data into stakeholder views across product, competitor, territory and management needs.",
        image: "https://storage.tentwenty.com/large_G42_Website_Desktop_Screens_1_f4055a5008.jpg"
      }
    ],
    ecosystemEyebrow: "intelligent map and BI",
    ecosystem: {
      title: "Intelligence with a location.",
      body:
        "Outlet and field intelligence becomes significantly more useful when it can be understood geographically. The platform brings retail observations onto an interactive market view so stakeholders can explore patterns across locations and territories.",
      steps: [
        "FIELD DATA",
        "VISUAL EVIDENCE",
        "COMPUTER VISION",
        "OUTLET PROFILE",
        "MAP VIEW",
        "FILTERS",
        "DASHBOARDS",
        "STAKEHOLDER ACTION"
      ],
      markets: ["EMIRATE", "AREA", "OUTLET TYPE", "PRODUCT", "DU / COMPETITOR", "VISIT STATUS"]
    },
    capabilities: [
      "Enterprise Platform",
      "Field Operations",
      "Computer Vision",
      "Data & BI",
      "Geospatial Intelligence",
      "Dashboards",
      "Competitor Intelligence",
      "Role-Based Access"
    ],
    impact: [
      {
        title: "CONNECTED FIELD DATA",
        body: "Retail observations, images, video and location are brought into one intelligence environment."
      },
      {
        title: "VISUAL INTELLIGENCE",
        body: "Computer vision extends field reporting by extracting structured information from visual evidence."
      },
      {
        title: "GEOGRAPHIC VISIBILITY",
        body: "Outlet-level intelligence can be explored spatially across the market."
      },
      {
        title: "STAKEHOLDER ACCESS",
        body: "BI views translate detailed field information into relevant management and operational perspectives."
      }
    ],
    relatedWork: [
      { title: "Nolte - Digital Experience & Transformation", body: "Digital Experience", href: "/cases/nolte-digital-transformation" },
      { title: "M&M's - Moments of Magic", body: "Consumer Experience", href: "/cases/moments-of-magic" },
      { title: "ShelfVision AI", body: "AI / Innovation Lab", href: "/innovation-lab" },
      { title: "Meta Studio", body: "Digital Product", href: "/cases" }
    ],
    cta: {
      eyebrow: "have a complex operation worth understanding better?",
      title: "Turn data into intelligence.",
      body:
        "From field operations and enterprise platforms to computer vision and business intelligence, MomentumX builds technology around real operational challenges.",
      href: "/enquiry",
      label: "start a conversation"
    }
  }
};

export const posts = [
  {
    slug: "building-digital-growth-platforms-in-mena",
    title: "building digital growth platforms in MENA",
    date: "2026",
    summary:
      "How regional insight, brand understanding, and digital execution shape stronger customer experiences.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "momentumx-digital-showreel",
    title: "MomentumX digital showreel",
    date: "2025",
    summary: "A moving snapshot of selected digital work, brand moments, and regional growth thinking.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "why-digital-experience-still-matters",
    title: "why digital experience still matters",
    date: "2024",
    summary: "Why useful interfaces, fast platforms, and clear content still shape customer trust.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "turning-brand-ideas-into-digital-products",
    title: "turning brand ideas into digital products",
    date: "2024",
    summary: "The strategic and technical choices behind digital experiences people use and remember.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "designing-interaction-for-digital-experiences",
    title: "designing interaction for digital experiences",
    date: "2026",
    summary: "How interface, content, and motion help customers move from attention to action.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "what-global-brands-need-from-regional-digital-teams",
    title: "what global brands need from regional digital teams",
    date: "2025",
    summary: "Balancing brand consistency with market nuance, platform quality, and local user behavior.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "digital-growth-opportunities-in-the-middle-east",
    title: "digital growth opportunities in the middle east",
    date: "2023",
    summary: "A look at regional opportunity, user behavior, and digital brand growth across the Middle East.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
  },
  {
    slug: "inside-a-digital-delivery-mindset",
    title: "inside a digital delivery mindset",
    date: "2020",
    summary: "A studio note on speed, clarity, craft, and practical rollout for digital platforms.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80"
  }
];

export const blogDetailBlocks = [
  {
    title: "A note from MomentumX",
    body:
      "Strong digital work starts with a clear user moment: what people need, where they arrive, and what they should do next."
  },
  {
    title: "Big ideas need practical delivery",
    body:
      "Strategy becomes valuable when it moves into interfaces, systems, content workflows, integrations, and measurable user journeys."
  },
  {
    title: "Regional nuance still matters",
    body:
      "Digital platforms in the GCC and wider MENA region need cultural intelligence as much as they need technical polish."
  },
  {
    title: "Interaction creates trust",
    body:
      "Useful flows, responsive interfaces, clear content, and reliable platforms give audiences a reason to engage."
  },
  {
    title: "Impact is the measure",
    body:
      "The goal is not only visibility. It is stronger customer connection, measurable digital value, and long-term platform usefulness."
  }
];

export const blogDetailMedia = [
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80"
];

export const aboutPage = {
  title: "momentum heritage. digital & AI future.",
  summary:
    "MomentumX builds on Momentum's established regional experience, combining deep market understanding with capabilities across AI, technology, data and digital transformation.",
  intro:
    "We bring business context and technical execution together to create solutions designed for the realities of organisations across the Middle East.",
  statement:
    "built on years of regional experience, MomentumX brings together business understanding, technology and AI to help organisations transform, innovate and build what's next.",
  stats: [
    ["HERITAGE", "built on Momentum"],
    ["TECHNOLOGY", "digital & AI capability"],
    ["REGION", "Middle East understanding"],
    ["INNOVATION", "built for what's next"]
  ],
  gallery: [
    "https://storage.tentwenty.com/small_Group_427320014_abd389ec22.jpg",
    "https://storage.tentwenty.com/small_27b81d5d_2a44_4257_a5da_27d766d143e4_751b43b1a9.jpg",
    "https://storage.tentwenty.com/small_IMG_1901_28651f9ba9.JPG",
    "https://storage.tentwenty.com/small_IMG_1071_8e8e9703e0.jpg",
    "https://storage.tentwenty.com/small_bbec111e_51f6_4e31_80e8_63f39d3ad194_04de558ccb.jpg",
    "https://storage.tentwenty.com/small_S_DSC_0652_f509d9ddbd.jpg"
  ],
  people: [
    ["STRATEGY", "Business & transformation"],
    ["EXPERIENCE", "UX & digital design"],
    ["TECHNOLOGY", "Software & platforms"],
    ["AI", "AI & intelligent systems"],
    ["DATA", "Analytics & intelligence"],
    ["DELIVERY", "Implementation & operations"]
  ],
  evolution: [
    "BRAND & CONSUMER EXPERIENCE",
    "DIGITAL EXPERIENCES",
    "ENTERPRISE TECHNOLOGY",
    "DATA & AUTOMATION",
    "ARTIFICIAL INTELLIGENCE",
    "INTELLIGENT TRANSFORMATION"
  ],
  strengths: [
    {
      title: "MOMENTUM HERITAGE",
      body: "Established regional relationships, market knowledge and experience."
    },
    {
      title: "BUSINESS UNDERSTANDING",
      body: "Experience across brands, consumers, operations and industries."
    },
    {
      title: "DIGITAL & AI CAPABILITY",
      body: "Strategy, engineering, data, automation and intelligent technology."
    },
    {
      title: "REGIONAL REACH",
      body: "Understanding of the UAE, Saudi Arabia and wider Middle East."
    },
    {
      title: "END-TO-END EXECUTION",
      body: "From identifying an opportunity to building, deploying and evolving the solution."
    }
  ],
  heritageClients: ["Mars", "M&M's", "Unilever", "BRF", "Skittles", "Snickers"]
};

export const contactPage = {
  offices: [
    {
      city: "dubai",
      address: "605, Tower A, Empire Heights, Business Bay, Dubai",
      map: "https://maps.app.goo.gl/8HZbZaRxBduMsqHx8"
    },
    {
      city: "abu dhabi",
      address: "M202, Gift Tower, Hamdan Street, Abu Dhabi",
      map: "https://goo.gl/maps/ZK4v68d5vXK2nWHQ7"
    },
    {
      city: "riyadh",
      address: "2801, Kingdom Tower, King Fahd Road, Al Olaya",
      map: "https://goo.gl/maps/mhhGpzJjS9LjuqNZ8"
    }
  ],
  portfolios: [
    ["behance", "https://storage.tentwenty.com/behance_new_755396d1db.svg"],
    ["dribbble", "https://storage.tentwenty.com/dribbble_new_ee89e64a10.svg"],
    ["awwwards", "https://storage.tentwenty.com/awwwards_ccfdedb82a.svg"]
  ]
};

export const innovationLabPage = {
  hero: {
    eyebrow: "momentumX innovation lab",
    title: ["Ideas are easy.", "We build them far enough", "to prove them."],
    summary:
      "The MomentumX Innovation Lab explores emerging technologies against real business and industry challenges - turning promising ideas into prototypes, proof-of-concepts and potential products.",
    fragments: [
      "PRODUCT DETECTED",
      "SKU 94%",
      "ZONE OCCUPANCY",
      "RISK SIGNAL",
      "DOCUMENT ANALYSED",
      "VENDOR MATCH",
      "DWELL 04:32"
    ]
  },
  purpose: {
    eyebrow: "01 / THE LAB",
    title: "Where business problems meet emerging technology.",
    body:
      "Not every opportunity starts with a client brief. The Innovation Lab gives our teams space to identify recurring challenges across industries, explore new technologies and rapidly build working concepts to understand what is possible - and what is worth taking further.",
    steps: ["IDENTIFY", "EXPLORE", "PROTOTYPE", "VALIDATE", "PRODUCTISE"]
  },
  projects: [
    {
      title: "ShelfVision AI",
      category: "Retail Intelligence / Computer Vision",
      headline: "See the shelf. Understand what's happening.",
      body:
        "Turn a mobile camera into a retail intelligence tool capable of recognising products and translating shelf conditions into structured information.",
      exploring:
        "Product recognition · Shelf availability · Facings · Share of shelf · Competitor presence · Planogram compliance",
      status: "PROTOTYPE",
      metrics: ["COCA-COLA 500ML · 98%", "FACINGS · 6", "AVAILABILITY · LOW", "COMPETITOR SHARE · 41%"],
      visual: "shelf"
    },
    {
      title: "SmartSpace",
      category: "Physical Intelligence / IoT / Wi-Fi",
      headline: "Understand spaces through the signals they create.",
      body:
        "Explore how Wi-Fi, sensors and connected devices can help organisations understand movement, dwell, occupancy and utilisation within physical environments.",
      exploring: "Footfall · Movement patterns · Dwell time · Zone utilisation · Occupancy · Congestion",
      status: "PROTOTYPE / EXPLORATION",
      metrics: ["ZONE A", "124 VISITS", "AVG DWELL 06:14", "PEAK 14:30"],
      visual: "space"
    },
    {
      title: "AML Copilot",
      category: "Banking / Financial Crime / AI",
      headline: "More intelligence behind every investigation.",
      body:
        "An AI-assisted investigation environment exploring how compliance teams could analyse cases, documents, transactions and risk signals more efficiently.",
      exploring:
        "AML investigations · Case summarisation · Transaction intelligence · Document analysis · Risk signals · Investigator assistance",
      status: "CONCEPT",
      metrics: ["CASE #AML-2841", "3 unusual transaction clusters identified", "2 connected counterparties", "Supporting documents analysed: 14"],
      visual: "aml"
    },
    {
      title: "ProcureAI",
      category: "Procurement / Enterprise AI",
      headline: "From procurement data to procurement intelligence.",
      body:
        "Explore how AI can support teams analysing vendors, tenders, quotations, contracts and procurement information.",
      exploring:
        "Tender analysis · Quotation comparison · Vendor intelligence · Contract analysis · Supplier risk · Procurement recommendations",
      status: "CONCEPT",
      metrics: ["Best commercial value - Supplier B", "Fastest delivery - Supplier A", "Compliance issue detected - Supplier C"],
      visual: "procure"
    },
    {
      title: "Enterprise Knowledge Copilot",
      category: "Enterprise AI / Knowledge",
      headline: "Ask the organisation.",
      body:
        "A secure AI assistant exploring how employees can access approved organisational knowledge through natural conversation.",
      exploring: "Enterprise search · Policies · Procedures · Documents · Knowledge retrieval · Employee assistance",
      status: "PROTOTYPE",
      metrics: ["What's our approval process for purchases above AED 100,000?", "Procurement Policy", "Approval Matrix", "Finance Procedures"],
      visual: "knowledge"
    },
    {
      title: "Flow Intelligence",
      category: "Aviation / Retail / Smart Environments",
      headline: "Turn movement into operational intelligence.",
      body:
        "Explore how spatial and behavioural signals can help organisations understand congestion, movement patterns and utilisation across complex physical environments.",
      exploring: "Passenger flow · Queue intelligence · Congestion · Dwell · Zone performance · Operational planning",
      status: "CONCEPT",
      metrics: ["SECURITY - WAIT 08:42", "GATE ZONE - HIGH DENSITY", "RETAIL ZONE - AVG DWELL 11:08", "CORRIDOR C - CONGESTION UP"],
      visual: "flow"
    }
  ],
  industries: [
    ["RETAIL & FMCG", "Shelf intelligence · Shopper behaviour · Demand intelligence"],
    ["BANKING & FINANCIAL SERVICES", "AML · KYC · Risk · Document intelligence"],
    ["AVIATION & AIRPORTS", "Passenger flow · Procurement · Operations"],
    ["ENTERPRISE", "Knowledge · Productivity · Automation"],
    ["PROCUREMENT", "Vendor intelligence · Tender analysis · Contracts"],
    ["SMART SPACES", "Movement · Occupancy · Asset intelligence"],
    ["MARKETING", "Audience intelligence · Personalisation · Campaign technology"],
    ["HOSPITALITY & REAL ESTATE", "Space intelligence · Customer experience · Operations"]
  ],
  reality: {
    title: "Some experiments stay experiments. The right ones become something bigger.",
    body:
      "The Lab allows us to explore quickly without pretending every idea should become a product. The strongest opportunities move forward based on technical feasibility, business value and real-world validation.",
    path: ["LAB CONCEPT", "PROTOTYPE", "PILOT"],
    branches: ["CLIENT SOLUTION", "MOMENTUMX PRODUCT"]
  },
  statuses: [
    ["EXPLORATION", "Early-stage investigation."],
    ["CONCEPT", "Defined solution idea."],
    ["PROTOTYPE", "Working demonstration."],
    ["PILOT", "Being validated in a real environment."],
    ["PRODUCT", "Reusable MomentumX solution."]
  ],
  cta: {
    eyebrow: "build with us",
    title: "Bring us a problem.",
    body:
      "You don't need to arrive with an AI use case. Bring us an operational challenge, customer problem or business opportunity. We'll explore whether technology can create a better way of solving it."
  }
};

export const industriesPage = {
  hero: {
    eyebrow: "INDUSTRIES",
    title: "Technology shaped around how industries actually work.",
    summary:
      "MomentumX combines digital, AI and enterprise technology to solve challenges specific to different industries - from customer experience and operations to intelligence, automation and connected systems."
  },
  intro: {
    eyebrow: "WHERE WE WORK",
    title: "Different industries. Different challenges.",
    body:
      "Technology only creates value when it understands the environment around it. We combine industry context with technology, data and experience design to build solutions around real operational and customer challenges."
  },
  industries: [
    {
      name: "Banking & Financial Services",
      index: "01",
      headline: "Build intelligence without compromising control.",
      body: "AI, data and enterprise technology for highly regulated financial environments.",
      capabilities: ["AML & Compliance", "API Management & Integration", "Document Intelligence", "Workflow Automation", "Data & BI", "Enterprise AI"],
      work: [{ label: "Bank Muscat - IBM API Connect", href: "/cases/bank-muscat-ibm-api-connect" }],
      lab: [{ label: "AML Copilot", href: "/innovation-lab" }]
    },
    {
      name: "Retail & FMCG",
      index: "02",
      headline: "See what's happening from shelf to consumer.",
      body: "Connect field operations, retail environments and consumer engagement with data and intelligent technology.",
      capabilities: ["Retail Intelligence", "Computer Vision", "Shelf Intelligence", "Field Operations", "Consumer Campaigns", "Loyalty & Gamification"],
      work: [
        { label: "du Retail Intelligence", href: "/cases/du-retail-intelligence-platform" },
        { label: "Ferrero Group", href: "/cases/ferrero-back-to-school-campaign" },
        { label: "Whiskas", href: "/cases/whiskas-interactive-cat-game" }
      ],
      lab: [{ label: "ShelfVision AI", href: "/innovation-lab" }]
    },
    {
      name: "Government & Public Sector",
      index: "03",
      headline: "Make complex services simpler to access and operate.",
      body: "Digital platforms and intelligent systems designed around citizens, employees and government operations.",
      capabilities: ["Digital Services", "Enterprise Platforms", "Workflow Automation", "AI Assistants", "Document Intelligence", "Data & Analytics"],
      work: [],
      lab: []
    },
    {
      name: "Aviation & Airports",
      index: "04",
      headline: "Connect operations, people and intelligence.",
      body: "Technology for complex environments where procurement, movement, operations and real-time information intersect.",
      capabilities: ["Procurement Platforms", "Passenger Flow Intelligence", "Operational Dashboards", "Workflow Automation", "Vendor Management", "Data & BI"],
      work: [],
      lab: [
        { label: "ProcureAI", href: "/innovation-lab" },
        { label: "Flow Intelligence", href: "/innovation-lab" }
      ]
    },
    {
      name: "Healthcare",
      index: "05",
      headline: "Build technology around the care journey.",
      body: "AI-assisted and digital platforms that connect patients, professionals, information and services.",
      capabilities: ["AI-Assisted Experiences", "Patient Platforms", "Appointment Systems", "Healthcare CRM", "Knowledge Systems", "Workflow Automation"],
      work: [{ label: "Dentazon - AI-Powered Dental Care Platform", href: "/cases/dentazon-ai-dental-care-platform" }],
      lab: []
    },
    {
      name: "Real Estate & Hospitality",
      index: "06",
      headline: "Understand spaces. Improve experiences.",
      body: "Connect physical environments with digital services, customer intelligence and operational technology.",
      capabilities: ["Smart Spaces", "Occupancy & Movement Intelligence", "Customer Experience", "CRM", "Booking & Service Platforms", "Data & Analytics"],
      work: [],
      lab: [{ label: "SmartSpace", href: "/innovation-lab" }]
    },
    {
      name: "Enterprise & Professional Services",
      index: "07",
      headline: "Turn disconnected operations into connected systems.",
      body: "Build technology around how organisations actually work - across customers, employees, documents, workflows and decisions.",
      capabilities: ["CRM", "ERP & Enterprise Platforms", "Workflow Automation", "Enterprise AI", "Knowledge Assistants", "Document Intelligence", "BI & Reporting"],
      work: [],
      lab: [{ label: "Enterprise Knowledge Copilot", href: "/innovation-lab" }]
    },
    {
      name: "Marketing, Media & Consumer",
      index: "08",
      headline: "Turn audiences into participants.",
      body: "Technology that connects campaigns, physical experiences and digital interaction.",
      capabilities: ["MarTech", "Conversational Campaigns", "Gamification", "Interactive Experiences", "Loyalty Platforms", "Personalisation", "Campaign Automation"],
      work: [
        { label: "Ferrero Group", href: "/cases/ferrero-back-to-school-campaign" },
        { label: "Whiskas", href: "/cases/whiskas-interactive-cat-game" }
      ],
      lab: [{ label: "Campaign and experience prototypes", href: "/innovation-lab" }]
    }
  ],
  crossIndustry: {
    eyebrow: "BEYOND VERTICALS",
    title: "Some problems cross every industry.",
    flow: ["CUSTOMER EXPERIENCE", "OPERATIONS", "AUTOMATION", "DATA", "INTELLIGENCE", "INTEGRATION"],
    body:
      "Our industry experience gives us context. Our technology capabilities allow us to connect ideas across sectors - applying what works in one environment to solve problems differently in another."
  },
  lab: {
    eyebrow: "MOMENTUMX INNOVATION LAB",
    title: "Exploring what's next across industries.",
    body:
      "From computer vision in retail and spatial intelligence in airports to AI-assisted AML and procurement, the MomentumX Innovation Lab explores how emerging technology can address real industry problems.",
    projects: [
      ["SHELFVISION AI", "Retail"],
      ["AML COPILOT", "Banking"],
      ["PROCUREAI", "Enterprise / Procurement"],
      ["SMARTSPACE", "Physical Environments"]
    ]
  },
  cta: {
    eyebrow: "your industry isn't the starting point",
    title: "Your challenge is.",
    body:
      "You don't need to know which technology you need. Bring us the business problem, operational challenge or customer opportunity - we'll help determine what should be built around it.",
    label: "talk to us"
  }
};

export const utilityPages: Record<string, { title: string; summary: string; body: string }> = {
  industries: {
    title: "industries",
    summary: "Technology shaped around how industries actually work.",
    body:
      "MomentumX combines industry context with digital, AI and enterprise technology to solve real operational and customer challenges."
  },
  "about-us": {
    title: "about momentumX",
    summary: "The digital & AI transformation arm of Momentum, built for what comes next.",
    body:
      "MomentumX builds on Momentum's regional experience, combining business understanding, technology and AI to help organisations transform, innovate and build what's next."
  },
  "contact-us": {
    title: "contact us",
    summary: "Reach out to the Dubai office.",
    body:
      "605, Tower A, Empire Heights, Business Bay, Dubai. Call +971 04 569 3033."
  },
  enquiry: {
    title: "enquiry",
    summary: "Start a project conversation.",
    body:
      "Share the website, app, AI workflow, commerce experience, platform, or digital change you are planning, and the team can help shape the next move."
  },
  careers: {
    title: "careers",
    summary: "Open roles across strategy, design, technology, content, AI, and digital delivery.",
    body:
      "MomentumX brings together strategists, designers, technologists, content specialists, and delivery leads for digital growth work across the region."
  },
  "book-meeting": {
    title: "book a meeting",
    summary: "Book a 30 minute digital consultation.",
    body:
      "Use this page as the future home for digital discovery, website and app planning, AI opportunities, platform strategy, and meeting booking integrations."
  },
  solutions: {
    title: "solutions",
    summary: "AI, automation, data, platforms, and connected technology for business transformation.",
    body:
      "MomentumX develops intelligent systems, enterprise platforms, data-led experiences, automation workflows, and connected technology shaped around practical business challenges."
  },
  "innovation-lab": {
    title: "innovation lab",
    summary: "A space for prototypes, proof-of-concepts, and new product ideas.",
    body:
      "The lab explores emerging technologies and recurring business challenges, turning them into concepts such as ShelfVision AI, SmartSpace, and AML Copilot."
  },
  "ai-lab": {
    title: "innovation lab",
    summary: "A space for prototypes, proof-of-concepts, and new product ideas.",
    body:
      "The lab explores emerging technologies and recurring business challenges, turning them into concepts such as ShelfVision AI, SmartSpace, and AML Copilot."
  },
  "film-showreel": {
    title: "film showreel",
    summary: "A dedicated showreel landing page for motion and film work.",
    body: "Video-led storytelling, production, and digital brand assets can live here."
  },
  showreel: {
    title: "showreel",
    summary: "Selected digital and brand-led work in motion.",
    body: "A full-screen showreel experience for MomentumX digital work, product storytelling, and brand moments."
  },
  profile: {
    title: "profile",
    summary: "Company profile and credentials.",
    body: "Use this route for credentials, awards, regional capabilities, digital service work, and downloadable profile content."
  },
  initiatives: {
    title: "initiatives",
    summary: "MomentumX initiatives and experimental projects.",
    body: "A landing page for internal initiatives, digital experiments, and community projects."
  },
  "privacy-policy": {
    title: "privacy policy",
    summary: "Privacy and data handling information.",
    body: "Replica placeholder for privacy policy content."
  },
  "terms-and-conditions": {
    title: "terms and conditions",
    summary: "Terms and conditions.",
    body: "Replica placeholder for legal terms."
  }
};

export const navItems = [
  { label: "services", href: "/services" },
  { label: "innovation lab", href: "/innovation-lab" },
  { label: "work", href: "/cases" },
  { label: "about", href: "/about-us" },
  { label: "insights", href: "/blog" },
  { label: "enquiry", href: "/enquiry" }
];
