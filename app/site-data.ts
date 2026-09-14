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
    image: "/assets/imgs/services-1.png"
  },
  {
    slug: "ai-solutions-and-intelligent-systems",
    title: "AI solutions & intelligent systems",
    summary:
      "AI agents, copilots, generative AI, computer vision, machine learning and intelligent applications built for real-world use.",
    body:
      "We design and build intelligent systems for real operational contexts, including AI agents, copilots, generative AI tools, computer vision, machine learning and applied AI products.",
    image: "/assets/imgs/services-2.png"
  },
  {
    slug: "automation-and-enterprise-solutions",
    title: "automation & enterprise solutions",
    summary:
      "Intelligent workflows, document AI, CRM, ERP and custom enterprise systems that transform how work gets done.",
    body:
      "Automation and enterprise work connects business processes with practical systems, from intelligent workflows and document AI to CRM, ERP and custom operational platforms.",
    image: "/assets/imgs/services-3.png"
  },
  {
    slug: "digital-experience-and-platforms",
    title: "digital experience & platforms",
    summary:
      "High-performance websites, portals, commerce and digital platforms designed around customers and business objectives.",
    body:
      "Digital experience and platform work brings together customer journeys, content, performance, commerce and technology into platforms that support business outcomes.",
    image: "/assets/imgs/services-4.png"
  },
  {
    slug: "web-and-mobile-applications",
    title: "web & mobile applications",
    summary:
      "Custom web and mobile applications engineered for complex customer, operational and enterprise requirements.",
    body:
      "MomentumX engineers custom web and mobile applications around complex user journeys, operational requirements, integrations and enterprise-grade product needs.",
    image: "/assets/imgs/services-5.png"
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
    image: "/assets/imgs/services-7.png"
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
    engagements: { title: string; body: string; tag?: string }[];
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
        body: "Turning store visits, imagery and video into structured market intelligence.",
        tag: "AI / Computer Vision"
      },
      {
        title: "Enterprise CRM",
        body: "Connecting customer data, workflow and operations into a single managed platform.",
        tag: "Digital Transformation"
      },
      {
        title: "Consumer Engagement Platform",
        body: "Campaign, personalisation and engagement journeys built on connected data.",
        tag: "Digital Experience"
      }
    ],
    lab: {
      title: "From opportunities to prototypes.",
      body:
        "Explore how our AI Innovation Lab turns emerging technologies and business challenges into working concepts.",
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
    summary: "An interactive cat game on mall tablets that turns playful moments into campaign entries — with Play Pulse AI helping ops review authenticity and heat on submissions.",
    name: "Whiskas Interactive Cat Game",
    abstract: "A game designed for cats, not humans.",
    expertise: [
      "digital experience & platforms",
      "web & mobile applications",
      "AI solutions & intelligent systems"
    ],
    industry: ["Pet Care"],
    image: "/assets/cases/whiskas/hero.jpg",
    logo: "Whiskas",
    logoImage: "/assets/logos/whiskas.png",
    services: [
      "gamification",
      "interactive experience",
      "ugc",
      "computer vision",
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
    name: "Bank Muscat API Connect",
    abstract: "Building the API layer for connected corporate banking.",
    expertise: ["automation & enterprise solutions"],
    industry: ["Banking & Financial Services"],
    image: "",
    logo: "Bank Muscat",
    logoImage: "/assets/logos/bank-muscat.png",
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
    title: "A WhatsApp draw that stays warm when the queue gets loud.",
    client: "Ferrero Group",
    summary: "A bilingual Nutella Instant Draw on WhatsApp that turns a receipt into a weekly-draw entry — with Campaign Admin OCR and AI assist helping ops review submissions at volume.",
    name: "Nutella Instant Draw",
    abstract: "A WhatsApp draw that stays warm when the queue gets loud.",
    expertise: ["AI solutions & intelligent systems", "automation & enterprise solutions"],
    industry: ["Food & Beverage"],
    image: "/assets/cases/ferrero/hero.jpg",
    logo: "Ferrero Group",
    logoImage: "/assets/logos/ferrero.svg",
    services: [
      "conversational experience",
      "whatsapp",
      "ocr",
      "campaign technology",
      "prize ops",
      "digital engagement"
    ]
  },
  {
    slug: "dentazon-ai-dental-care-platform",
    title: "A calm bridge from “something hurts” to the right next step.",
    client: "Dentazon",
    summary: "An AI Care Concierge on Dentazon’s live site assistant — bilingual triage, treatment explainers and booking assist, with soft clinical limits always visible.",
    name: "Dentazon Care Concierge",
    abstract: "A calm bridge from “something hurts” to the right next step.",
    expertise: ["AI solutions & intelligent systems", "web & mobile applications"],
    industry: ["Healthcare"],
    image: "/assets/cases/dentazon/hero.jpg",
    logo: "Dentazon",
    logoImage: "/assets/logos/dentazon.png",
    services: [
      "conversational ai",
      "digital health",
      "patient experience",
      "triage assist",
      "booking",
      "care ops"
    ]
  },
  {
    slug: "nolte-digital-transformation",
    title: "One digital foundation. Built to grow across markets.",
    client: "Nolte",
    summary:
      "Creating a premium digital platform for Nolte UAE designed around product discovery, lead generation and regional expansion.",
    name: "Nolte Digital Platform",
    abstract: "One digital foundation. Built to grow across markets.",
    expertise: ["digital experience & platforms", "web & mobile applications", "AI solutions & intelligent systems"],
    industry: ["Home & Interiors"],
    image: "",
    logo: "Nolte",
    logoImage: "/assets/logos/nolte.svg",
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
    name: "du Retail Intelligence",
    abstract: "Turning every retail visit into market intelligence.",
    expertise: ["data & intelligence", "AI solutions & intelligent systems"],
    industry: ["Telecommunications"],
    image: "",
    logo: "du",
    logoImage: "/assets/logos/du.svg",
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
    slug: "lays-match-radar",
    title: "From scan to “where to watch tonight” without losing Game ON truth.",
    client: "Lay's",
    summary: "A dual-surface Match Radar pilot for No Lay's, No Game — fan finder energy plus an AI ops console that flags dark venues and low stock before peak.",
    name: "Lay's Match Radar",
    abstract: "From scan to “where to watch tonight” without losing Game ON truth.",
    expertise: [
      "digital experience & platforms",
      "AI solutions & intelligent systems",
      "data & intelligence"
    ],
    industry: ["Food & Beverage"],
    image: "/assets/cases/lays/hero.jpg",
    logo: "Lay's",
    logoImage: "/assets/logos/lays.svg",
    services: [
      "fan experience",
      "sports entertainment",
      "venue retail",
      "campaign ops",
      "partner portal",
      "practical ai"
    ]
  },
  {
    slug: "moussy-cap-pulse",
    title: "Cap codes that stay simple for fans and legible for ops.",
    client: "Moussy",
    summary: "A bilingual Cap Pulse web entry for Win Gold with Moussy — drink, enter codes, boost chances — with AI normalize assist and an anomaly ops desk behind the Grand Draw.",
    name: "Moussy Cap Pulse",
    abstract: "Cap codes that stay simple for fans and legible for ops.",
    expertise: [
      "digital experience & platforms",
      "web & mobile applications",
      "AI solutions & intelligent systems"
    ],
    industry: ["Food & Beverage"],
    image: "/assets/cases/moussy/hero.jpg",
    logo: "Moussy",
    logoImage: "/assets/logos/moussy.png",
    services: [
      "consumer web",
      "cap code entry",
      "campaign ops",
      "anomaly assist",
      "bilingual experience",
      "digital engagement"
    ]
  },
  {
    slug: "rff-circular-control",
    title: "An operating layer for recycled polymers, not a brochure site.",
    client: "Recycle For Future",
    summary: "A dual-surface pilot for Recycle For Future — materials, logistics and compliance with a chat-first AI ops assistant grounded on the lot-level ledger.",
    name: "RFF Circular Control",
    abstract: "An operating layer for recycled polymers, not a brochure site.",
    expertise: [
      "AI solutions & intelligent systems",
      "automation & enterprise solutions",
      "data & intelligence"
    ],
    industry: ["Recycling & Manufacturing"],
    image: "/assets/cases/rff/hero.jpg",
    logo: "Recycle For Future",
    logoImage: "/assets/logos/rff.png",
    services: [
      "industrial ops",
      "materials traceability",
      "compliance assist",
      "ai copilot",
      "customer portal",
      "circular economy"
    ]
  },
  {
    slug: "da-vinci-talent-pulse",
    title: "A trading house for game changers — careers, culture, and counsel.",
    client: "Da Vinci Trading",
    summary: "A MomentumX talent engagement for Da Vinci Trading — employer-brand intelligence grounded in the live careers story on davincitrading.com, with hard rails that keep Ask Recruiting at candidate altitude (no trade signals, no strategy advice, no returns promises).",
    name: "Da Vinci Talent Pulse",
    abstract: "A trading house for game changers — careers, culture, and counsel.",
    expertise: ["digital experience & platforms", "AI solutions & intelligent systems"],
    industry: ["Financial Services"],
    image: "/assets/cases/da-vinci/hero.jpg",
    logo: "Da Vinci Trading",
    logoImage: "/assets/logos/da-vinci.svg",
    services: [
      "employer brand",
      "talent orientation",
      "conversational assist",
      "careers content craft",
      "culture systems",
      "digital experience"
    ]
  },
  {
    slug: "luxe-port-lookbook",
    title: "The house book, staged for the screen.",
    client: "Luxe Port",
    summary: "An immersive lookbook for Luxe Port Trading — full-bleed fragrance moments and editorial brand plates, with quiet content craft behind captions and crops.",
    name: "Luxe Port Lookbook",
    abstract: "The house book, staged for the screen.",
    expertise: ["digital experience & platforms"],
    industry: ["Luxury & Fragrance"],
    image: "/assets/cases/luxe-port/hero.jpg",
    logo: "Luxe Port",
    logoImage: "/assets/logos/luxe-port.png",
    services: [
      "luxury experience",
      "editorial lookbook",
      "brand systems",
      "retail theatre",
      "content craft",
      "digital engagement"
    ]
  },
  {
    slug: "rise-partner-pulse",
    title: "A partner brochure that makes a multi-vertical portfolio feel browsable.",
    client: "Rise",
    summary: "An immersive Partner Pulse lookbook for Rise — magazine opening, vertical mosaic proof, and quiet partner intelligence without an ops-ledger hero.",
    name: "Rise Partner Pulse",
    abstract: "A partner brochure that makes a multi-vertical portfolio feel browsable.",
    expertise: ["digital experience & platforms"],
    industry: ["Holding & Investment"],
    image: "/assets/cases/rise/hero.jpg",
    logo: "Rise",
    logoImage: "/assets/logos/rise.svg",
    services: [
      "partner experience",
      "editorial design",
      "multi-vertical brochure",
      "content craft",
      "inquiry pulse",
      "digital engagement"
    ]
  },
  {
    slug: "moments-of-magic",
    title: "Moments of Magic",
    client: "M&M's",
    summary:
      "A digital-ready brand story shaped around memorable moments, content, and audience attention.",
    name: "Moments of Magic",
    abstract: "A digital-ready brand story shaped around memorable moments, content, and audience attention.",
    expertise: ["digital experience & platforms"],
    industry: ["Food & Beverage"],
    image: "https://storage.tentwenty.com/98/G42_1cd52cacb0.webp",
    logo: "Whiskas",
    services: ["digital strategy", "content experience", "customer engagement"]
  },
  {
    slug: "pawtopia",
    title: "Pawtopia",
    client: "Pedigree & IAMS",
    summary:
      "A pet-focused digital engagement concept designed to bring community and product storytelling together.",
    name: "Pawtopia",
    abstract: "A pet-focused digital engagement concept designed to bring community and product storytelling together.",
    expertise: ["digital experience & platforms"],
    industry: ["Pet Care"],
    image: "https://storage.tentwenty.com/98/G42_1_e21d5eb296.webp",
    logo: "Pedigree & IAMS",
    services: ["digital engagement", "community experience", "content planning"]
  },
  {
    slug: "a-michelin-affair",
    title: "A Michelin Affair",
    client: "Tazal",
    summary:
      "A premium digital storytelling direction built around hospitality, attention, and crafted experience.",
    name: "A Michelin Affair",
    abstract: "A premium digital storytelling direction built around hospitality, attention, and crafted experience.",
    expertise: ["digital experience & platforms"],
    industry: ["Hospitality"],
    image: "https://storage.tentwenty.com/medium_UAE_Pavilion_Expo_2025_63f64b6389.webp",
    logo: "Tazal",
    services: ["digital storytelling", "experience design", "content direction"]
  },
  {
    slug: "taste-of-abu-dhabi",
    title: "Taste of Abu Dhabi",
    client: "BRF",
    summary:
      "A consumer-facing digital experience shaped for regional audience engagement and content visibility.",
    name: "Taste of Abu Dhabi",
    abstract: "A consumer-facing digital experience shaped for regional audience engagement and content visibility.",
    expertise: ["digital experience & platforms"],
    industry: ["Food & Beverage"],
    image: "https://storage.tentwenty.com/medium_Vip_booking_platform_Saudi_Pavilion_d2a25f002b.webp",
    logo: "BRF",
    services: ["customer experience", "regional content", "digital engagement"]
  },
  {
    slug: "ride-back-in-style",
    title: "Ride back in Style",
    client: "Unilever",
    summary: "A lifestyle-led digital engagement connecting brand recall, useful content, and customer touchpoints.",
    name: "Ride back in Style",
    abstract: "A lifestyle-led digital engagement connecting brand recall, useful content, and customer touchpoints.",
    expertise: ["digital experience & platforms"],
    industry: ["Consumer Goods"],
    image: "https://storage.tentwenty.com/98/Pinza_Thumbnail_3e5ae1a237.webp",
    logo: "Unilever",
    services: ["digital experience", "content systems", "customer touchpoints"]
  }
];

// Cases shown on the site; hidden ones keep their data but get no page or links.
export const visibleCases = cases.filter((item) => !("hidden" in item && item.hidden));
export const isVisibleCaseHref = (href: string) =>
  !href.startsWith("/cases/") || visibleCases.some((item) => `/cases/${item.slug}` === href);

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
      cards?: { title: string; body: string }[];
      closing?: string;
    };
    ecosystemEyebrow?: string;
    capabilities: string[];
    impact: { title: string; body: string }[];
    testimonial?: { quote: string; attribution: string };
    relatedWork: { title: string; body: string; href: string }[];
    cta: { eyebrow: string; title: string; body: string; href: string; label: string };
    media?: { hero: string; play: string; moment: string; flow: string };
    moments?: { title: string; body: string }[];
  }
> = {
  "whiskas-interactive-cat-game": {
    eyebrow: "WHISKAS · GAMIFIED CONSUMER EXPERIENCE",
    metadata: [
      {
        label: "Engagement",
        value: "Interactive Cat Game / AI Campaign Intelligence"
      },
      {
        label: "Client",
        value: "Whiskas"
      },
      {
        label: "Experience",
        value: "Tablet game + video participation + Play Pulse review"
      },
      {
        label: "Capabilities",
        value: "Gamification · Interactive Experience · UGC · Computer Vision · Campaign Technology · Digital Engagement"
      }
    ],
    story: [
      {
        title: "THE IDEA",
        body: "Instead of another game for pet owners, the experience follows cats’ natural behaviour — curiosity, chasing and play — with an intelligence layer for ops on top."
      },
      {
        title: "THE INTERACTION",
        body: "An iPad on the floor becomes the play surface. Animated elements move across the display, inviting the cat to follow, chase and tap."
      },
      {
        title: "THE CONTENT",
        body: "While the cat plays, the owner records the moment. Gameplay becomes authentic UGC around the brand — ready for campaign entry."
      },
      {
        title: "THE CAMPAIGN",
        body: "Owners upload videos as submissions; Play Pulse gives the prize and heat desk a clearer view so teams can review and reward real play."
      }
    ],
    builtIntro: "A playful campaign experience that turns screen interaction into physical play, owner-created video and digital participation — with Play Pulse for ops.",
    built: [
      {
        title: "Interactive Cat Game",
        body: "A tablet-based game experience designed specifically around feline interaction."
      },
      {
        title: "Motion-Based Game Mechanics",
        body: "Animated elements travel across the screen to encourage chasing and tapping."
      },
      {
        title: "Touch Interaction",
        body: "On-screen reactions are designed around physical interaction with the tablet."
      },
      {
        title: "UGC Participation Flow",
        body: "Owners record and submit their cat’s gameplay as campaign participation."
      },
      {
        title: "Video Submission Journey",
        body: "Owner-recorded content becomes a structured participation asset."
      },
      {
        title: "Play Pulse Heat Studio",
        body: "Computer vision maps paw-tap density so ops can see engagement heat on real play frames."
      },
      {
        title: "Authenticity & Prize Desk",
        body: "AI-assisted review flags weak entries and keeps a fair prize queue under human control."
      },
      {
        title: "Campaign Experience",
        body: "A digital journey connects the floor game to the wider Whiskas activation."
      }
    ],
    journeyEyebrow: "the campaign journey",
    leadJourney: {
      title: "Play. Capture. Upload. Enter.",
      body: "The campaign turns a tablet game into a fluid participation journey, with the pet as the player and the owner as the content creator.",
      steps: [
        {
          title: "Discover",
          body: "The owner discovers the Whiskas campaign and interactive cat game."
        },
        {
          title: "Open",
          body: "The game is opened on a tablet or iPad."
        },
        {
          title: "Place",
          body: "The device is placed on the floor within reach of the cat."
        },
        {
          title: "Play",
          body: "Moving interactive elements encourage the cat to chase and tap the screen."
        },
        {
          title: "Record",
          body: "The owner captures the cat’s reaction and gameplay on video."
        },
        {
          title: "Upload",
          body: "The video is submitted through the campaign participation flow."
        },
        {
          title: "Enter",
          body: "Content becomes a valid campaign entry according to campaign rules."
        },
        {
          title: "Win",
          body: "Selected participants have the opportunity to receive campaign rewards."
        }
      ],
      note: ""
    },
    visualStory: [
      {
        title: "THE PLAY",
        body: "Moving elements trigger curiosity, chasing, tapping and physical interaction with the screen.",
        image: "/assets/cases/whiskas/the-play.jpg"
      },
      {
        title: "THE MOMENT",
        body: "The owner captures the interaction as video; Play Pulse helps ops review authenticity and heat on submissions.",
        image: "/assets/cases/whiskas/the-moment.jpg"
      }
    ],
    ecosystemEyebrow: "the experience architecture",
    ecosystem: {
      title: "A Simple Experience. A Connected Campaign Journey.",
      body: "The strength of the campaign is its simplicity at the front end: the technology creates a playful trigger, while the participation journey converts that moment into campaign engagement.",
      steps: [
        "WHISKAS CAMPAIGN",
        "INTERACTIVE TABLET GAME",
        "CAT INTERACTION",
        "OWNER VIDEO",
        "PLAY PULSE REVIEW",
        "CAMPAIGN ENTRY"
      ],
      markets: ["THE PET", "THE OWNER", "THE BRAND"],
      cards: [
        {
          title: "Whiskas Campaign",
          body: "The owner discovers the Whiskas campaign and interactive cat game."
        },
        {
          title: "Interactive Tablet Game",
          body: "The game opens on a tablet placed where the cat can reach."
        },
        {
          title: "Cat Interaction",
          body: "Moving elements invite chase, tap and physical play on the screen."
        },
        {
          title: "Owner Video",
          body: "The owner records the gameplay as shareable campaign content."
        },
        {
          title: "Play Pulse Review",
          body: "Upload submissions land in Heat Studio and authenticity assist for ops."
        },
        {
          title: "Campaign Entry",
          body: "Qualified clips reach the prize desk; humans decide awards."
        }
      ],
      closing: "Midnight Paws remains the experience. Whiskas Play Pulse is how CWIT adds the intelligence."
    },
    capabilities: [
      "Gamification",
      "Interactive Experience",
      "UGC",
      "Computer Vision",
      "Campaign Technology",
      "Digital Engagement"
    ],
    impact: [],
    relatedWork: [
      {
        title: "Moussy Cap Pulse",
        body: "Cap Pulse / AI Anomaly Ops",
        href: "/cases/moussy-cap-pulse"
      },
      {
        title: "Lay's Match Radar",
        body: "Match Radar / AI Campaign Ops",
        href: "/cases/lays-match-radar"
      },
      {
        title: "Nutella Instant Draw",
        body: "WhatsApp Instant Draw / AI Campaign Admin",
        href: "/cases/ferrero-back-to-school-campaign"
      }
    ],
    cta: {
      eyebrow: "have an idea people should interact with?",
      title: "Turn creative ideas into digital experiences.",
      body: "MomentumX combines creative thinking, interaction design and technology to build campaign experiences people - and sometimes their pets - actually want to engage with.",
      href: "/enquiry",
      label: "start a conversation"
    },
    media: {
      hero: "/assets/cases/whiskas/hero.jpg",
      play: "/assets/cases/whiskas/the-play.jpg",
      moment: "/assets/cases/whiskas/the-moment.jpg",
      flow: "/assets/cases/whiskas/campaign-flow.jpg"
    },
    moments: [
      {
        title: "The Play",
        body: "Moving elements trigger curiosity, chasing, tapping and physical interaction with the screen."
      },
      {
        title: "The Moment",
        body: "The owner captures the interaction as video; Play Pulse helps ops review authenticity and heat on submissions."
      }
    ]
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
        image: ""
      },
      {
        title: "THE BRIDGE",
        body: "IBM API Connect acts as the managed bridge between banking systems and authorised corporate consumers.",
        image: ""
      },
      {
        title: "THE REQUEST",
        body: "Authentication, policy handling, routing, banking service processing and response form one controlled flow.",
        image: ""
      },
      {
        title: "THE CONTROL",
        body: "Management, security, policies and monitoring give the API environment operational governance.",
        image: ""
      },
      {
        title: "THE CONNECTION",
        body: "Banking capabilities can sit closer to corporate applications and workflows through authorised API consumption.",
        image: ""
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
    eyebrow: "FERRERO · CONVERSATIONAL CAMPAIGN",
    metadata: [
      {
        label: "Engagement",
        value: "WhatsApp Instant Draw / AI Campaign Admin"
      },
      {
        label: "Client",
        value: "Ferrero Group (Nutella / Kinder)"
      },
      {
        label: "Experience",
        value: "Bilingual chat journey + receipt upload + OCR review desk"
      },
      {
        label: "Capabilities",
        value: "Conversational Experience · WhatsApp · OCR · Campaign Technology · Prize Ops · Digital Engagement"
      }
    ],
    story: [
      {
        title: "THE IDEA",
        body: "Back to School needs a bridge from shelf to draw that feels like Ferrero — warm, bilingual, and fair — with an intelligence layer for receipt ops."
      },
      {
        title: "THE INTERACTION",
        body: "WhatsApp carries language choice, T&Cs before PII, registration, sticker warmth, receipt upload and honest reject paths."
      },
      {
        title: "THE CONTENT",
        body: "Receipt photos become structured submissions; OCR assist extracts totals and SKUs so the weekly draw ledger stays operable."
      },
      {
        title: "THE CAMPAIGN",
        body: "Validated entries feed prize inventory and a grounded AI ops assistant — assistive answers on confidence and remaining vouchers, never autonomous compliance."
      }
    ],
    builtIntro: "A conversational campaign experience that turns a WhatsApp chat into registration, receipt proof and weekly-draw participation.",
    built: [
      {
        title: "Bilingual WhatsApp Journey",
        body: "English / العربية welcome before any personal data."
      },
      {
        title: "T&Cs-First Consent",
        body: "Terms preview on winwithnutella.com before PII capture."
      },
      {
        title: "Registration & Confirm",
        body: "Name, mobile, email with a clear YES confirm step."
      },
      {
        title: "Sticker & Mission CTA",
        body: "Brand warmth, then the SAR 50+ Nutella or Kinder receipt ask."
      },
      {
        title: "Receipt Upload Path",
        body: "Photo intake, store capture and under-review acknowledgement."
      },
      {
        title: "OCR Qualify Assist",
        body: "AI extracts store, total and SKU lines with confidence for ops."
      },
      {
        title: "Authenticity & Prize Desk",
        body: "Approve / reject / clearer-photo queue plus voucher and iPad inventory."
      },
      {
        title: "AI Ops Copilot",
        body: "Grounded answers on reject reasons, OCR confidence and prizes remaining."
      }
    ],
    journeyEyebrow: "the campaign journey",
    leadJourney: {
      title: "Chat. Upload. Review. Draw.",
      body: "The campaign turns a WhatsApp conversation into a fluid participation journey, with the fan in chat and ops on a shared receipt ledger.",
      steps: [
        {
          title: "Discover",
          body: "Fan finds the Ferrero Back to School / Nutella Instant Draw invite."
        },
        {
          title: "Open",
          body: "Opens WhatsApp and chooses English or العربية."
        },
        {
          title: "Place",
          body: "Accepts T&Cs before sharing personal details."
        },
        {
          title: "Play",
          body: "Registers and confirms details with YES."
        },
        {
          title: "Record",
          body: "Photographs a qualifying Nutella or Kinder receipt."
        },
        {
          title: "Upload",
          body: "Submits the receipt photo into the chat journey."
        },
        {
          title: "Enter",
          body: "Ops review with OCR assist; validated entries join the weekly draw pool."
        },
        {
          title: "Win",
          body: "Weekly draw awards from a clean inventory of vouchers and Grand Prize stock."
        }
      ],
      note: ""
    },
    visualStory: [
      {
        title: "THE PLAY",
        body: "Fans choose a language, accept T&Cs, register, and upload a Nutella or Kinder receipt worth SAR 50+ — all inside WhatsApp.",
        image: "/assets/cases/ferrero/the-play.jpg"
      },
      {
        title: "THE MOMENT",
        body: "Campaign Admin surfaces store, total, SKU lines and OCR confidence so ops can approve, reject or request a clearer photo — humans still decide.",
        image: "/assets/cases/ferrero/the-moment.jpg"
      }
    ],
    ecosystemEyebrow: "the experience architecture",
    ecosystem: {
      title: "A Simple Experience. A Connected Campaign Journey.",
      body: "The strength of the campaign is its simplicity at the front end: WhatsApp creates a warm trigger, while Campaign Admin converts that moment into operable draw engagement.",
      steps: [
        "FERRERO CAMPAIGN",
        "CONVERSATIONAL ENTRY",
        "RECEIPT PROOF",
        "REVIEW QUEUE",
        "OCR + AI ASSIST",
        "WEEKLY DRAW OPS"
      ],
      markets: ["THE FAN", "THE RECEIPT", "THE BRAND"],
      cards: [
        {
          title: "Ferrero Campaign",
          body: "Fan discovers the Back to School Instant Draw on WhatsApp."
        },
        {
          title: "Conversational Entry",
          body: "Language, T&Cs and registration live where the audience already is."
        },
        {
          title: "Receipt Proof",
          body: "A SAR 50+ Nutella or Kinder receipt becomes the participation asset."
        },
        {
          title: "Review Queue",
          body: "Submissions land pending / validated / rejected on one ledger."
        },
        {
          title: "OCR + AI Assist",
          body: "Campaign Admin confidence and a grounded ops copilot speed triage."
        },
        {
          title: "Weekly Draw Ops",
          body: "Prize inventory and fulfilment states keep the Grand Prize path honest."
        }
      ],
      closing: "WhatsApp remains the experience. Nutella Instant Draw Campaign Admin is how CWIT adds the intelligence."
    },
    capabilities: [
      "Conversational Experience",
      "WhatsApp",
      "OCR",
      "Campaign Technology",
      "Prize Ops",
      "Digital Engagement"
    ],
    impact: [],
    relatedWork: [
      {
        title: "Moussy Cap Pulse",
        body: "Cap Pulse / AI Anomaly Ops",
        href: "/cases/moussy-cap-pulse"
      },
      {
        title: "Lay's Match Radar",
        body: "Match Radar / AI Campaign Ops",
        href: "/cases/lays-match-radar"
      },
      {
        title: "Whiskas Interactive Cat Game",
        body: "Interactive Cat Game / AI Campaign Intelligence",
        href: "/cases/whiskas-interactive-cat-game"
      }
    ],
    cta: {
      eyebrow: "have a campaign journey worth making smarter?",
      title: "Turn participation into an experience.",
      body: "MomentumX combines conversational technology, automation, data and digital experience to build campaign platforms around real consumer behaviour.",
      href: "/enquiry",
      label: "start a conversation"
    },
    media: {
      hero: "/assets/cases/ferrero/hero.jpg",
      play: "/assets/cases/ferrero/the-play.jpg",
      moment: "/assets/cases/ferrero/the-moment.jpg",
      flow: "/assets/cases/ferrero/campaign-flow.jpg"
    },
    moments: [
      {
        title: "The Play",
        body: "Fans choose a language, accept T&Cs, register, and upload a Nutella or Kinder receipt worth SAR 50+ — all inside WhatsApp."
      },
      {
        title: "The Moment",
        body: "Campaign Admin surfaces store, total, SKU lines and OCR confidence so ops can approve, reject or request a clearer photo — humans still decide."
      }
    ]
  },
  "dentazon-ai-dental-care-platform": {
    eyebrow: "DENTAZON · AI HEALTHCARE PRODUCT",
    metadata: [
      {
        label: "Engagement",
        value: "AI Care Concierge / Patient Engagement"
      },
      {
        label: "Client",
        value: "Dentazon"
      },
      {
        label: "Experience",
        value: "Live chat widget + triage + booking + Care Ops"
      },
      {
        label: "Capabilities",
        value: "Conversational AI · Digital Health · Patient Experience · Triage Assist · Booking · Care Ops"
      }
    ],
    story: [
      {
        title: "THE IDEA",
        body: "Dentazon already feels AI-aware; Care Concierge makes that intelligence purposeful — clarify, explain, escalate or book — without claiming diagnosis."
      },
      {
        title: "THE INTERACTION",
        body: "A dark-glass widget on the live site gathers language, who-for and age, then clarification chips and voice transcript before advice."
      },
      {
        title: "THE CONTENT",
        body: "Treatment explainers carry soft limitation disclaimers; urgency patterns close scheduling and surface a clinic call instead."
      },
      {
        title: "THE CAMPAIGN",
        body: "Confirmed bookings and session feedback land in Care Ops — a light console with an AI assistant grounded on session signals, not clinical magic."
      }
    ],
    builtIntro: "An AI healthcare product experience that turns a site chat into triage, explanation, emergency gating and booking assist.",
    built: [
      {
        title: "Live Assistant Widget",
        body: "Chat launcher on the Dentazon site patients already open."
      },
      {
        title: "Bilingual Onboarding",
        body: "English / Roman Urdu / اردو before advice begins."
      },
      {
        title: "Who & Age Context",
        body: "Context that keeps guidance appropriate for the patient."
      },
      {
        title: "Clarification Triage",
        body: "Chips and voice transcript gather what the assistant needs first."
      },
      {
        title: "Treatment Explainers",
        body: "Assistive FAQ with visible AI limits — not a dentist, no X-ray reading."
      },
      {
        title: "Emergency Gate",
        body: "Hard stop that closes scheduling when urgency patterns appear."
      },
      {
        title: "Booking Confirmation",
        body: "Slot, clinic and phone as scheduling assist only."
      },
      {
        title: "Care Ops + AI Notes",
        body: "Sessions ledger, conversation detail and grounded ops Q&A."
      }
    ],
    journeyEyebrow: "the campaign journey",
    leadJourney: {
      title: "Ask. Clarify. Guide. Book.",
      body: "The product turns a site chat into a calm care journey, with the patient in the widget and the clinic on a shared ops desk.",
      steps: [
        {
          title: "Discover",
          body: "Patient finds Dentazon and opens Chat with us."
        },
        {
          title: "Open",
          body: "Chooses English, Roman Urdu or اردو."
        },
        {
          title: "Place",
          body: "Shares who the visit is for and age context."
        },
        {
          title: "Play",
          body: "Describes the concern; clarification chips and voice refine the ask."
        },
        {
          title: "Record",
          body: "Assistant offers an assistive explainer with soft clinical limits."
        },
        {
          title: "Upload",
          body: "If urgent patterns appear, emergency gate closes chat scheduling."
        },
        {
          title: "Enter",
          body: "Otherwise a booking confirmation card captures the preferred slot."
        },
        {
          title: "Win",
          body: "Care Ops sees the session, feedback and booking queue for follow-through."
        }
      ],
      note: ""
    },
    visualStory: [
      {
        title: "THE PLAY",
        body: "Patients open the live assistant, choose a language, share who-and-age context, then clarify symptoms before any advice begins.",
        image: "/assets/cases/dentazon/the-play.jpg"
      },
      {
        title: "THE MOMENT",
        body: "Assistive explainers and an emergency gate guide the next step — book F-8 Markaz or call the clinic — while Care Ops reviews sessions with grounded AI notes.",
        image: "/assets/cases/dentazon/the-moment.jpg"
      }
    ],
    ecosystemEyebrow: "the experience architecture",
    ecosystem: {
      title: "A Simple Experience. A Connected Campaign Journey.",
      body: "The strength of the product is its simplicity at the front end: the live assistant creates a calm trigger, while Care Ops converts that moment into clinic-ready engagement.",
      steps: [
        "DENTAZON SITE",
        "LANGUAGE & CONTEXT",
        "TRIAGE CONVERSATION",
        "EXPLAINER OR GATE",
        "AI CARE CONCIERGE",
        "CARE OPS DESK"
      ],
      markets: ["THE PATIENT", "THE CLINIC", "THE BRAND"],
      cards: [
        {
          title: "Dentazon Site",
          body: "Patient discovers care and opens the live AI assistant."
        },
        {
          title: "Language & Context",
          body: "Bilingual onboarding and who/age before advice."
        },
        {
          title: "Triage Conversation",
          body: "Clarification and voice gather enough to guide safely."
        },
        {
          title: "Explainer or Gate",
          body: "Assistive FAQ — or an emergency stop to clinic call."
        },
        {
          title: "AI Care Concierge",
          body: "The product intelligence layer patients actually meet."
        },
        {
          title: "Care Ops Desk",
          body: "Sessions, bookings and grounded AI notes for the team."
        }
      ],
      closing: "The live assistant remains the experience. Dentazon Care Concierge is how CWIT adds the intelligence."
    },
    capabilities: [
      "Conversational AI",
      "Digital Health",
      "Patient Experience",
      "Triage Assist",
      "Booking",
      "Care Ops"
    ],
    impact: [],
    relatedWork: [
      {
        title: "RFF Circular Control",
        body: "Circular Control / AI Ops Assistant",
        href: "/cases/rff-circular-control"
      },
      {
        title: "Nutella Instant Draw",
        body: "WhatsApp Instant Draw / AI Campaign Admin",
        href: "/cases/ferrero-back-to-school-campaign"
      },
      {
        title: "Da Vinci Talent Pulse",
        body: "Talent Pulse / Employer Brand Counsel",
        href: "/cases/da-vinci-talent-pulse"
      }
    ],
    cta: {
      eyebrow: "have a patient journey worth making smarter?",
      title: "Turn conversations into the right care.",
      body: "MomentumX combines conversational AI, product design and operations tooling to build patient experiences that stay safe, clear and human.",
      href: "/enquiry",
      label: "start a conversation"
    },
    media: {
      hero: "/assets/cases/dentazon/hero.jpg",
      play: "/assets/cases/dentazon/the-play.jpg",
      moment: "/assets/cases/dentazon/the-moment.jpg",
      flow: "/assets/cases/dentazon/campaign-flow.jpg"
    },
    moments: [
      {
        title: "The Play",
        body: "Patients open the live assistant, choose a language, share who-and-age context, then clarify symptoms before any advice begins."
      },
      {
        title: "The Moment",
        body: "Assistive explainers and an emergency gate guide the next step — book F-8 Markaz or call the clinic — while Care Ops reviews sessions with grounded AI notes."
      }
    ]
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
        image: ""
      },
      {
        title: "THE DETAIL",
        body:
          "Products, ranges, projects and supporting content are structured around how customers explore and evaluate premium interiors.",
        image: ""
      },
      {
        title: "THE CONVERSION",
        body:
          "Quote, consultation, brochure, WhatsApp and assisted enquiry journeys create multiple paths from inspiration to conversation.",
        image: ""
      },
      {
        title: "THE PLATFORM",
        body:
          "A flexible content and technology foundation supports regional adaptation while maintaining a consistent digital identity.",
        image: ""
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
        image: ""
      },
      {
        title: "THE VISION",
        body: "Photos and video become a second intelligence layer through practical computer-vision analysis.",
        image: ""
      },
      {
        title: "THE MARKET",
        body: "Outlet intelligence can be explored geographically through map views, filters and clustered market activity.",
        image: ""
      },
      {
        title: "THE INTELLIGENCE",
        body: "BI dashboards turn field data into stakeholder views across product, competitor, territory and management needs.",
        image: ""
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
      { title: "ShelfVision AI", body: "AI Innovation Lab", href: "/innovation-lab" },
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
  },
  "lays-match-radar": {
    eyebrow: "LAY'S · MATCHDAY VENUE EXPERIENCE",
    metadata: [
      {
        label: "Engagement",
        value: "Match Radar / AI Campaign Ops"
      },
      {
        label: "Client",
        value: "PepsiCo / Lay's UAE"
      },
      {
        label: "Experience",
        value: "Fan Match Map + timings + ops & partner console"
      },
      {
        label: "Capabilities",
        value: "Fan Experience · Sports Entertainment · Venue Retail · Campaign Ops · Partner Portal · Practical AI"
      }
    ],
    story: [
      {
        title: "THE IDEA",
        body: "No Lay's, No Game already carries cultural heat; Match Radar adds the digital venue bridge fans and operators share on match night."
      },
      {
        title: "THE INTERACTION",
        body: "Fan UI routes from scan to where to watch, with EN | AR paths and an assist that recommends venues with stock and kickoff context."
      },
      {
        title: "THE CONTENT",
        body: "Ops pulse and venue ledger across DXB / AUH partners keep lit / dark / stock truth in one place."
      },
      {
        title: "THE CAMPAIGN",
        body: "Partners confirm stock, upload promo proof and see their match board — practical AI only, no autonomous logistics claims."
      }
    ],
    builtIntro: "A matchday experience that turns a campaign scan into fan routing and shared venue truth.",
    built: [
      {
        title: "Fan Hero",
        body: "Campaign energy with clear paths into Where to watch and Ask Match Radar."
      },
      {
        title: "Match Map",
        body: "Game ON venues, stock signals and tonight’s window."
      },
      {
        title: "Match Timings",
        body: "Venue-level fixtures and actions for the night."
      },
      {
        title: "Fan AI Assist",
        body: "“Where should I watch?” answered with grounded recommendations."
      },
      {
        title: "Campaign Pulse",
        body: "Scans, check-ins, Game ON count and alerts on one board."
      },
      {
        title: "AI Ops Copilot",
        body: "Dark-venue and low-stock flags with draftable prompts."
      },
      {
        title: "Venue Ledger",
        body: "DXB / AUH partner truth behind the fan map."
      },
      {
        title: "Partner Portal",
        body: "Confirm stock, upload promo, see the match board."
      }
    ],
    journeyEyebrow: "the campaign journey",
    leadJourney: {
      title: "Scan. Find. Watch. Confirm.",
      body: "The campaign turns a pack or screen cue into a fluid match-night journey, with the fan on the map and partners on a shared board.",
      steps: [
        {
          title: "Discover",
          body: "Fan meets No Lay's, No Game and the Match Radar invite."
        },
        {
          title: "Open",
          body: "Opens the fan surface in EN or AR."
        },
        {
          title: "Place",
          body: "Lands on Match Map for tonight’s Game ON venues."
        },
        {
          title: "Play",
          body: "Checks timings, stock signals and watch recommendations."
        },
        {
          title: "Record",
          body: "Ops pulse sees scans, check-ins and lit-venue count."
        },
        {
          title: "Upload",
          body: "Partners confirm stock and upload promo proof."
        },
        {
          title: "Enter",
          body: "AI ops flags dark venues and low stock before peak."
        },
        {
          title: "Win",
          body: "Fans arrive where the game is on and the shelf is ready."
        }
      ],
      note: ""
    },
    visualStory: [
      {
        title: "THE PLAY",
        body: "Fans move from campaign hero into Match Map and match timings — Game ON venues, stock signals and tonight’s window in one flow.",
        image: "/assets/cases/lays/the-play.jpg"
      },
      {
        title: "THE MOMENT",
        body: "Campaign ops AI flags lit venues, stock alerts and draftable partner nudges so the map stays honest after kickoff.",
        image: "/assets/cases/lays/the-moment.jpg"
      }
    ],
    ecosystemEyebrow: "the experience architecture",
    ecosystem: {
      title: "A Simple Experience. A Connected Campaign Journey.",
      body: "The strength of the campaign is its simplicity at the front end: the fan finder creates a playful trigger, while ops and partners convert that moment into match-night engagement.",
      steps: [
        "LAY'S CAMPAIGN",
        "MATCH MAP",
        "TIMINGS ASSIST",
        "PARTNER LOOP",
        "AI OPS SCREEN",
        "CAMPAIGN PULSE"
      ],
      markets: ["THE FAN", "THE PARTNER", "THE BRAND"],
      cards: [
        {
          title: "Lay's Campaign",
          body: "Fan discovers Match Radar from the No Lay's, No Game moment."
        },
        {
          title: "Match Map",
          body: "Venues and stock signals become the scan destination."
        },
        {
          title: "Timings Assist",
          body: "Fixtures and recommendations guide where to watch."
        },
        {
          title: "Partner Loop",
          body: "Stock confirm and promo proof keep the map honest."
        },
        {
          title: "AI Ops Screen",
          body: "Copilot flags anomalies and drafts prompts from context."
        },
        {
          title: "Campaign Pulse",
          body: "Night board for scans, Game ON count and alerts."
        }
      ],
      closing: "The fan map remains the experience. Lay's Match Radar ops is how CWIT adds the intelligence."
    },
    capabilities: [
      "Fan Experience",
      "Sports Entertainment",
      "Venue Retail",
      "Campaign Ops",
      "Partner Portal",
      "Practical AI"
    ],
    impact: [],
    relatedWork: [
      {
        title: "Moussy Cap Pulse",
        body: "Cap Pulse / AI Anomaly Ops",
        href: "/cases/moussy-cap-pulse"
      },
      {
        title: "Nutella Instant Draw",
        body: "WhatsApp Instant Draw / AI Campaign Admin",
        href: "/cases/ferrero-back-to-school-campaign"
      },
      {
        title: "Whiskas Interactive Cat Game",
        body: "Interactive Cat Game / AI Campaign Intelligence",
        href: "/cases/whiskas-interactive-cat-game"
      }
    ],
    cta: {
      eyebrow: "have a matchday moment to own?",
      title: "Turn fan energy into shared venue truth.",
      body: "MomentumX combines fan experience, partner tooling and practical AI to connect campaigns with the places people gather.",
      href: "/enquiry",
      label: "start a conversation"
    },
    media: {
      hero: "/assets/cases/lays/hero.jpg",
      play: "/assets/cases/lays/the-play.jpg",
      moment: "/assets/cases/lays/the-moment.jpg",
      flow: "/assets/cases/lays/campaign-flow.jpg"
    },
    moments: [
      {
        title: "The Play",
        body: "Fans move from campaign hero into Match Map and match timings — Game ON venues, stock signals and tonight’s window in one flow."
      },
      {
        title: "The Moment",
        body: "Campaign ops AI flags lit venues, stock alerts and draftable partner nudges so the map stays honest after kickoff."
      }
    ]
  },
  "moussy-cap-pulse": {
    eyebrow: "MOUSSY · CAP CODE CAMPAIGN",
    metadata: [
      {
        label: "Engagement",
        value: "Cap Pulse / AI Anomaly Ops"
      },
      {
        label: "Client",
        value: "Moussy"
      },
      {
        label: "Experience",
        value: "Consumer web entry + code validation + draw pulse desk"
      },
      {
        label: "Capabilities",
        value: "Consumer Web · Cap Code Entry · Campaign Ops · Anomaly Assist · Bilingual Experience · Digital Engagement"
      }
    ],
    story: [
      {
        title: "THE IDEA",
        body: "Win Gold with Moussy already owns the pack moment; Cap Pulse adds the intelligence layer around codes without pretending AI guarantees a fair draw."
      },
      {
        title: "THE INTERACTION",
        body: "A web-first bilingual promo surface — hero, how it works, enter code, success — matching the live Grand Draw mechanic."
      },
      {
        title: "THE CONTENT",
        body: "Assistive validation strips noise, uppercases segments and surfaces format oddities before a human decides."
      },
      {
        title: "THE CAMPAIGN",
        body: "Entries connect to Campaign Ops — ledger, anomaly queue, draw pulse — review and export stay human-owned."
      }
    ],
    builtIntro: "A consumer campaign experience that turns a cap code into Grand Draw participation with an honest ops desk.",
    built: [
      {
        title: "Grand Draw Hero",
        body: "Fan entry energy aligned to Win Gold with Moussy."
      },
      {
        title: "How It Works",
        body: "Drink, find code, boost chances in three clear steps."
      },
      {
        title: "Cap Code Entry",
        body: "Cap-code intake with normalize / validate assist and visible rails."
      },
      {
        title: "Success Tally",
        body: "Code logged and entries counted so fans keep collecting."
      },
      {
        title: "Arabic Surface",
        body: "First-class عربي toggle matching the live promo."
      },
      {
        title: "AI Code Assist",
        body: "Normalize and format flags before ops review."
      },
      {
        title: "Anomaly & AI Notes",
        body: "Velocity / reuse / pattern flags with hard rails."
      },
      {
        title: "Draw Pulse Desk",
        body: "Pool size, codes per fan and ledger export readiness."
      }
    ],
    journeyEyebrow: "the campaign journey",
    leadJourney: {
      title: "Drink. Enter. Boost. Draw.",
      body: "The campaign turns a bottle cap into a fluid participation journey, with the fan on the web and ops on a shared code ledger.",
      steps: [
        {
          title: "Discover",
          body: "Fan meets Win Gold with Moussy and Cap Pulse."
        },
        {
          title: "Open",
          body: "Opens the bilingual Grand Draw web experience."
        },
        {
          title: "Place",
          body: "Reads how it works and promo terms."
        },
        {
          title: "Play",
          body: "Enters a cap code with normalize assist."
        },
        {
          title: "Record",
          body: "Success tally shows entries logged."
        },
        {
          title: "Upload",
          body: "Codes land on the ops ledger with status."
        },
        {
          title: "Enter",
          body: "Anomaly assist flags suspicious patterns for review."
        },
        {
          title: "Win",
          body: "Draw pulse informs a human-owned Grand Draw."
        }
      ],
      note: ""
    },
    visualStory: [
      {
        title: "THE PLAY",
        body: "Fans follow a Grand Draw web path — how it works, cap-code entry, success tally and first-class Arabic toggle.",
        image: "/assets/cases/moussy/the-play.jpg"
      },
      {
        title: "THE MOMENT",
        body: "Ops see entry ledger, draw-pulse KPIs and assistive anomaly flags with thin AI notes — humans still own the draw.",
        image: "/assets/cases/moussy/the-moment.jpg"
      }
    ],
    ecosystemEyebrow: "the experience architecture",
    ecosystem: {
      title: "A Simple Experience. A Connected Campaign Journey.",
      body: "The strength of the campaign is its simplicity at the front end: the web entry creates a playful trigger, while Cap Pulse ops converts that moment into draw-ready engagement.",
      steps: [
        "MOUSSY CAMPAIGN",
        "WEB ENTRY",
        "CODE CAPTURE",
        "SUCCESS LOOP",
        "AI ANOMALY DESK",
        "DRAW PULSE"
      ],
      markets: ["THE FAN", "THE CODE", "THE BRAND"],
      cards: [
        {
          title: "Moussy Campaign",
          body: "Fan discovers Win Gold with Moussy Cap Pulse."
        },
        {
          title: "Web Entry",
          body: "Bilingual Grand Draw path for code intake."
        },
        {
          title: "Code Capture",
          body: "Cap codes normalize before they argue."
        },
        {
          title: "Success Loop",
          body: "Tally encourages fans to keep collecting."
        },
        {
          title: "AI Anomaly Desk",
          body: "Assistive flags and notes with hard rails."
        },
        {
          title: "Draw Pulse",
          body: "KPIs and export keep the Grand Draw operable."
        }
      ],
      closing: "The promo web remains the experience. Moussy Cap Pulse is how CWIT adds the intelligence."
    },
    capabilities: [
      "Consumer Web",
      "Cap Code Entry",
      "Campaign Ops",
      "Anomaly Assist",
      "Bilingual Experience",
      "Digital Engagement"
    ],
    impact: [],
    relatedWork: [
      {
        title: "Nutella Instant Draw",
        body: "WhatsApp Instant Draw / AI Campaign Admin",
        href: "/cases/ferrero-back-to-school-campaign"
      },
      {
        title: "Lay's Match Radar",
        body: "Match Radar / AI Campaign Ops",
        href: "/cases/lays-match-radar"
      },
      {
        title: "Whiskas Interactive Cat Game",
        body: "Interactive Cat Game / AI Campaign Intelligence",
        href: "/cases/whiskas-interactive-cat-game"
      }
    ],
    cta: {
      eyebrow: "running a promotion at scale?",
      title: "Turn every code into clean participation.",
      body: "MomentumX combines consumer web, campaign operations and assistive AI to run promotions fans enjoy and teams can trust.",
      href: "/enquiry",
      label: "start a conversation"
    },
    media: {
      hero: "/assets/cases/moussy/hero.jpg",
      play: "/assets/cases/moussy/the-play.jpg",
      moment: "/assets/cases/moussy/the-moment.jpg",
      flow: "/assets/cases/moussy/campaign-flow.jpg"
    },
    moments: [
      {
        title: "The Play",
        body: "Fans follow a Grand Draw web path — how it works, cap-code entry, success tally and first-class Arabic toggle."
      },
      {
        title: "The Moment",
        body: "Ops see entry ledger, draw-pulse KPIs and assistive anomaly flags with thin AI notes — humans still own the draw."
      }
    ]
  },
  "rff-circular-control": {
    eyebrow: "RFF · CIRCULAR MATERIALS INTELLIGENCE",
    metadata: [
      {
        label: "Engagement",
        value: "Circular Control / AI Ops Assistant"
      },
      {
        label: "Client",
        value: "Recycle For Future Ltd"
      },
      {
        label: "Experience",
        value: "Plant ops console + materials ledger + customer portal"
      },
      {
        label: "Capabilities",
        value: "Industrial Ops · Materials Traceability · Compliance Assist · AI Copilot · Customer Portal · Circular Economy"
      }
    ],
    story: [
      {
        title: "THE IDEA",
        body: "Traceability and carbon advantage were already part of the brand; Circular Control adds the operating layer that holds stock, paperwork and customer proof together."
      },
      {
        title: "THE INTERACTION",
        body: "Plant teams chat with live context beside the ledger — weighbridge tickets and waste transfer notes structure into lots without leaving the conversation."
      },
      {
        title: "THE CONTENT",
        body: "Compliance and carbon views score completeness, queue copilot actions and keep an evidence register tied to movements."
      },
      {
        title: "THE CAMPAIGN",
        body: "Customers act in a sandboxed portal — ask about recycled content, approve docs, download COA and carbon packs, request collections."
      }
    ],
    builtIntro: "An industrial ops experience that turns yard reality into a connected materials, logistics and compliance journey.",
    built: [
      {
        title: "Operations Overview",
        body: "Confidence board for throughput, stock truth and movements."
      },
      {
        title: "Materials Ledger",
        body: "Lot-level stock, grades, bays and mass-balance streams."
      },
      {
        title: "Logistics Register",
        body: "Collections and shipments with document completeness."
      },
      {
        title: "Compliance & Carbon",
        body: "Completeness scoring and evidence register for teams."
      },
      {
        title: "Client Portal",
        body: "Ask, approve, download and request in one customer surface."
      },
      {
        title: "Circular Control AI",
        body: "Chat-first ops assistant grounded on the live ledger."
      },
      {
        title: "Intake Structuring",
        body: "Tickets and WTNs posted into lots without spreadsheet chaos."
      },
      {
        title: "Missing-Doc Flags",
        body: "Gaps surfaced before dispatch close-out."
      }
    ],
    journeyEyebrow: "the campaign journey",
    leadJourney: {
      title: "Intake. Trace. Prove. Ship.",
      body: "The product turns yard paperwork into a fluid operating journey, with the plant on the ledger and the customer on a proof portal.",
      steps: [
        {
          title: "Discover",
          body: "Team opens Circular Control for the shift."
        },
        {
          title: "Open",
          body: "AI ops surface loads with live stock and doc context."
        },
        {
          title: "Place",
          body: "Weighbridge tickets and WTNs are ingested into lots."
        },
        {
          title: "Play",
          body: "Materials and logistics views show bay truth and mass balance."
        },
        {
          title: "Record",
          body: "Compliance scores completeness and queues copilot actions."
        },
        {
          title: "Upload",
          body: "Evidence packs and carbon summaries are prepared from tonnage."
        },
        {
          title: "Enter",
          body: "Customer portal asks, approves and downloads shipment docs."
        },
        {
          title: "Win",
          body: "Ship-ready lots leave with cleaner paperwork and clearer trust."
        }
      ],
      note: ""
    },
    visualStory: [
      {
        title: "THE PLAY",
        body: "Overview, materials and logistics screens hold throughput, stock truth, mass balance and shipment registers dense enough for a shift handover.",
        image: "/assets/cases/rff/the-play.jpg"
      },
      {
        title: "THE MOMENT",
        body: "A ChatGPT-style operations assistant ingests tickets and WTNs, answers stock questions and surfaces missing-doc gaps — assistive intelligence, not certification.",
        image: "/assets/cases/rff/the-moment.jpg"
      }
    ],
    ecosystemEyebrow: "the experience architecture",
    ecosystem: {
      title: "A Simple Experience. A Connected Campaign Journey.",
      body: "The strength of the product is its simplicity at the front end: chat and overview create a practical trigger, while the ledger converts that moment into auditable plant engagement.",
      steps: [
        "RFF OPERATION",
        "MATERIALS TRUTH",
        "LOGISTICS FLOW",
        "COMPLIANCE VIEW",
        "AI OPS ASSISTANT",
        "CUSTOMER PORTAL"
      ],
      markets: ["THE PLANT", "THE CUSTOMER", "THE BRAND"],
      cards: [
        {
          title: "RFF Operation",
          body: "Plant team opens Circular Control for the day."
        },
        {
          title: "Materials Truth",
          body: "Lot-level ledger holds grades, bays and mass balance."
        },
        {
          title: "Logistics Flow",
          body: "Collections and shipments track with document status."
        },
        {
          title: "Compliance View",
          body: "Completeness and evidence stay tied to movements."
        },
        {
          title: "AI Ops Assistant",
          body: "Grounded chat answers stock, docs and carbon questions."
        },
        {
          title: "Customer Portal",
          body: "Proof and action for recycled-content buyers."
        }
      ],
      closing: "The plant remains the experience. RFF Circular Control is how CWIT adds the intelligence."
    },
    capabilities: [
      "Industrial Ops",
      "Materials Traceability",
      "Compliance Assist",
      "AI Copilot",
      "Customer Portal",
      "Circular Economy"
    ],
    impact: [],
    relatedWork: [
      {
        title: "Dentazon Care Concierge",
        body: "AI Care Concierge / Patient Engagement",
        href: "/cases/dentazon-ai-dental-care-platform"
      },
      {
        title: "Rise Partner Pulse",
        body: "Partner Brochure / Mosaic Experience",
        href: "/cases/rise-partner-pulse"
      },
      {
        title: "Lay's Match Radar",
        body: "Match Radar / AI Campaign Ops",
        href: "/cases/lays-match-radar"
      }
    ],
    cta: {
      eyebrow: "have operations worth connecting?",
      title: "Turn yard reality into an operating layer.",
      body: "MomentumX combines enterprise platforms, data and grounded AI assistants to give industrial teams one trusted view of their operations.",
      href: "/enquiry",
      label: "start a conversation"
    },
    media: {
      hero: "/assets/cases/rff/hero.jpg",
      play: "/assets/cases/rff/the-play.jpg",
      moment: "/assets/cases/rff/the-moment.jpg",
      flow: "/assets/cases/rff/campaign-flow.jpg"
    },
    moments: [
      {
        title: "The Play",
        body: "Overview, materials and logistics screens hold throughput, stock truth, mass balance and shipment registers dense enough for a shift handover."
      },
      {
        title: "The Moment",
        body: "A ChatGPT-style operations assistant ingests tickets and WTNs, answers stock questions and surfaces missing-doc gaps — assistive intelligence, not certification."
      }
    ]
  },
  "da-vinci-talent-pulse": {
    eyebrow: "DA VINCI · TALENT PULSE / ASK RECRUITING",
    metadata: [
      {
        label: "Engagement",
        value: "Talent Pulse / Employer Brand Counsel"
      },
      {
        label: "Client",
        value: "Da Vinci Trading"
      },
      {
        label: "Experience",
        value: "Live careers orientation + Ask Recruiting assist"
      },
      {
        label: "Capabilities",
        value: "Employer Brand · Talent Orientation · Conversational Assist · Careers Content Craft · Culture Systems · Digital Experience"
      }
    ],
    story: [
      {
        title: "THE IDEA",
        body: "High-calibre candidates meet Da Vinci across site, events and recruiter threads; Talent Pulse sharpens one coherent employer-brand question without claiming the trading stack."
      },
      {
        title: "THE INTERACTION",
        body: "Culture and careers lead — Amsterdam HQ, Miami, Mumbai, Hong Kong — so orientation feels like the house, not a SaaS tour."
      },
      {
        title: "THE CONTENT",
        body: "Public careers language only: teams from Trading through Risk/Legal/Compliance, benefits, and a fast, fair application process."
      },
      {
        title: "THE CAMPAIGN",
        body: "Ask Recruiting assists at careers altitude; refusals stay product guardrails — no signals, no strategy coaching, no guaranteed returns."
      }
    ],
    builtIntro: "An employer-brand experience that turns Da Vinci’s public careers story into a clear Talent Pulse journey — counsel first, assist second, trading stack untouched.",
    built: [
      {
        title: "House Open",
        body: "“The Art of Trading” hero and game-changer positioning from the live site."
      },
      {
        title: "Culture Pillars",
        body: "Collaborate · Innovate · Challenge · Achieve as the shared language."
      },
      {
        title: "Teams Spine",
        body: "Trading, Quantitative Research, Development and supporting houses."
      },
      {
        title: "Global Offices",
        body: "Amsterdam HQ · Miami · Mumbai · Hong Kong."
      },
      {
        title: "Careers Surface",
        body: "Live roles grid with department and office filters."
      },
      {
        title: "Ask Recruiting",
        body: "Candidate assist for roles, culture, offices and process."
      },
      {
        title: "Hard Rails",
        body: "No trade signals · no strategy advice · no guaranteed returns."
      },
      {
        title: "MomentumX Line",
        body: "Experience from counsel; intelligence only on employer brand."
      }
    ],
    journeyEyebrow: "the campaign journey",
    leadJourney: {
      title: "Meet the house. Orient. Ask. Apply.",
      body: "The journey mirrors davincitrading.com/careers — from “Let’s change the game together” through filters, roles and process — with Ask Recruiting as a quiet assist.",
      steps: [
        {
          title: "Arrive",
          body: "Open the Da Vinci house story on davincitrading.com."
        },
        {
          title: "Feel",
          body: "Read “A Trading House for Game Changers.”"
        },
        {
          title: "Align",
          body: "Absorb Collaborate · Innovate · Challenge · Achieve."
        },
        {
          title: "Place",
          body: "Filter by department and office (Amsterdam · Miami · Mumbai · Hong Kong)."
        },
        {
          title: "Browse",
          body: "Scan live roles across Trading, Quant, Engineering and support."
        },
        {
          title: "Ask",
          body: "Use Ask Recruiting for safe orientation on culture, tracks and process."
        },
        {
          title: "Guard",
          body: "Assist stops before books, signals, strategies or returns."
        },
        {
          title: "Continue",
          body: "Move to application channels with a clearer brief of the house."
        }
      ],
      note: ""
    },
    visualStory: [
      {
        title: "THE PLAY",
        body: "Collaborate · Innovate · Challenge · Achieve — the house culture pillars, staged the way candidates meet them on davincitrading.com.",
        image: "/assets/cases/da-vinci/the-play.jpg"
      },
      {
        title: "THE MOMENT",
        body: "Ask Recruiting orients extraordinary talent on roles, offices and process language from the live careers surface — then stops before the book.",
        image: "/assets/cases/da-vinci/the-moment.jpg"
      }
    ],
    ecosystemEyebrow: "the experience architecture",
    ecosystem: {
      title: "A Clear Careers Story. A Connected Talent Journey.",
      body: "Strength at the front end is simplicity: live site craft creates the honest trigger, while Ask Recruiting adds employer-brand intelligence without becoming a trading tutor.",
      steps: [
        "TALENT PULSE",
        "LIVE SITE CRAFT",
        "CULTURE ALTITUDE",
        "CAREERS SURFACE",
        "ASK RECRUITING",
        "HARD RAILS"
      ],
      markets: ["THE CANDIDATE", "THE HOUSE", "THE COUNSEL"],
      cards: [
        {
          title: "Talent Pulse",
          body: "Employer-brand counsel opens the engagement."
        },
        {
          title: "Live Site Craft",
          body: "Real davincitrading.com moments carry the visual proof."
        },
        {
          title: "Culture Altitude",
          body: "Pillars and motto without crossing into the book."
        },
        {
          title: "Careers Surface",
          body: "Roles, offices, benefits and process language."
        },
        {
          title: "Ask Recruiting",
          body: "AI assist for orientation answers only."
        },
        {
          title: "Hard Rails",
          body: "Product guardrails; trading stack attribution untouched."
        }
      ],
      closing: "The careers story remains the experience. Ask Recruiting is how CWIT adds honest intelligence on employer brand — never on the book. Momentum gives us the experience. CWIT adds the intelligence. Becomes MomentumX."
    },
    capabilities: [
      "Employer Brand",
      "Talent Orientation",
      "Conversational Assist",
      "Careers Content Craft",
      "Culture Systems",
      "Digital Experience"
    ],
    impact: [],
    relatedWork: [
      {
        title: "Rise Partner Pulse",
        body: "Partner Brochure / Mosaic Experience",
        href: "/cases/rise-partner-pulse"
      },
      {
        title: "Luxe Port Lookbook",
        body: "Luxury Lookbook / Content Craft",
        href: "/cases/luxe-port-lookbook"
      },
      {
        title: "Dentazon Care Concierge",
        body: "AI Care Concierge / Patient Engagement",
        href: "/cases/dentazon-ai-dental-care-platform"
      }
    ],
    cta: {
      eyebrow: "hiring for extraordinary talent?",
      title: "Turn your careers story into a clearer journey.",
      body: "MomentumX combines employer-brand counsel, content craft and careful AI assist to help the right candidates understand your house.",
      href: "/enquiry",
      label: "start a conversation"
    },
    media: {
      hero: "/assets/cases/da-vinci/hero.jpg",
      play: "/assets/cases/da-vinci/the-play.jpg",
      moment: "/assets/cases/da-vinci/the-moment.jpg",
      flow: "/assets/cases/da-vinci/campaign-flow.jpg"
    },
    moments: [
      {
        title: "The Play",
        body: "Collaborate · Innovate · Challenge · Achieve — the house culture pillars, staged the way candidates meet them on davincitrading.com."
      },
      {
        title: "The Moment",
        body: "Ask Recruiting orients extraordinary talent on roles, offices and process language from the live careers surface — then stops before the book."
      }
    ]
  },
  "luxe-port-lookbook": {
    eyebrow: "LUXE PORT · LUXURY LOOKBOOK EXPERIENCE",
    metadata: [
      {
        label: "Engagement",
        value: "Luxury Lookbook / Content Craft"
      },
      {
        label: "Client",
        value: "Luxe Port Trading LLC"
      },
      {
        label: "Experience",
        value: "Brand plates + product stories + podium theatre"
      },
      {
        label: "Capabilities",
        value: "Luxury Experience · Editorial Lookbook · Brand Systems · Retail Theatre · Content Craft · Digital Engagement"
      }
    ],
    story: [
      {
        title: "THE IDEA",
        body: "A master distributor’s site can look beautiful and still feel bolted to spreadsheets; the lookbook gives houses a magazine stage instead."
      },
      {
        title: "THE INTERACTION",
        body: "Black / cream / gold immersion — home, brand plate, product story, podium — reads like retail theatre on screen."
      },
      {
        title: "THE CONTENT",
        body: "Crystal Emerald, Atkinsons heritage and Michael Kors twin icons become craft spreads, not CRM card grids."
      },
      {
        title: "THE CAMPAIGN",
        body: "Content craft stays quiet and human-gated; no brands-ledger hero, no publish-queue SaaS twin, no autonomous brand voice."
      }
    ],
    builtIntro: "A luxury lookbook experience that turns distributor houses into editorial moments on screen.",
    built: [
      {
        title: "Lookbook Home",
        body: "Editorial entry for the house book."
      },
      {
        title: "Brand Plates",
        body: "Six houses as magazine cards."
      },
      {
        title: "Product Stories",
        body: "Crystal Emerald and fragrance narratives as craft spreads."
      },
      {
        title: "Podium Moments",
        body: "Mega podium retail theatre beats."
      },
      {
        title: "Heritage Spreads",
        body: "Atkinsons London cream-on-black storytelling."
      },
      {
        title: "Twin Icons",
        body: "Michael Kors dual fragrance spreads."
      },
      {
        title: "Content Craft Assist",
        body: "Caption and crop drafts with human publish control."
      },
      {
        title: "Portfolio Close",
        body: "Six houses, one digital stage."
      }
    ],
    journeyEyebrow: "the campaign journey",
    leadJourney: {
      title: "Enter. Plate. Story. Stage.",
      body: "The lookbook turns a distributor portfolio into a fluid editorial journey, with fragrance moments up front and craft kept quiet.",
      steps: [
        {
          title: "Discover",
          body: "Visitor meets Luxe Port Lookbook."
        },
        {
          title: "Open",
          body: "Enters the black / cream / gold home."
        },
        {
          title: "Place",
          body: "Browses house brand plates."
        },
        {
          title: "Play",
          body: "Opens a product story spread."
        },
        {
          title: "Record",
          body: "Views podium and heritage theatre beats."
        },
        {
          title: "Upload",
          body: "Craft assist drafts a caption or crop flag."
        },
        {
          title: "Enter",
          body: "Human reviews and gates publish."
        },
        {
          title: "Win",
          body: "Houses feel staged — ready for retail conversation."
        }
      ],
      note: ""
    },
    visualStory: [
      {
        title: "THE PLAY",
        body: "Houses from Versace through Dsquared2 sit as magazine brand plates, then open into product stories and podium theatre.",
        image: "/assets/cases/luxe-port/the-play.jpg"
      },
      {
        title: "THE MOMENT",
        body: "A demoted craft still drafts captions and crop flags before the podium — assistive only; humans keep publish.",
        image: "/assets/cases/luxe-port/the-moment.jpg"
      }
    ],
    ecosystemEyebrow: "the experience architecture",
    ecosystem: {
      title: "A Simple Experience. A Connected Campaign Journey.",
      body: "The strength of the lookbook is its simplicity at the front end: editorial craft creates a luxury trigger, while brand plates convert that moment into house-book engagement.",
      steps: [
        "LUXE PORT LOOKBOOK",
        "BRAND PLATES",
        "PRODUCT STORIES",
        "PODIUM THEATRE",
        "CONTENT CRAFT",
        "PORTFOLIO STAGE"
      ],
      markets: ["THE HOUSE", "THE RETAILER", "THE BRAND"],
      cards: [
        {
          title: "Luxe Port Lookbook",
          body: "Visitor discovers the house book."
        },
        {
          title: "Brand Plates",
          body: "Houses arranged as magazine cards."
        },
        {
          title: "Product Stories",
          body: "Fragrance narratives as craft spreads."
        },
        {
          title: "Podium Theatre",
          body: "Retail moments staged for screen."
        },
        {
          title: "Content Craft",
          body: "Assistive captions and crops, human-gated."
        },
        {
          title: "Portfolio Stage",
          body: "One digital stage for the distributor set."
        }
      ],
      closing: "The lookbook remains the experience. Luxe Port content craft is how CWIT adds quiet intelligence."
    },
    capabilities: [
      "Luxury Experience",
      "Editorial Lookbook",
      "Brand Systems",
      "Retail Theatre",
      "Content Craft",
      "Digital Engagement"
    ],
    impact: [],
    relatedWork: [
      {
        title: "Rise Partner Pulse",
        body: "Partner Brochure / Mosaic Experience",
        href: "/cases/rise-partner-pulse"
      },
      {
        title: "Da Vinci Talent Pulse",
        body: "Talent Pulse / Employer Brand Counsel",
        href: "/cases/da-vinci-talent-pulse"
      },
      {
        title: "Lay's Match Radar",
        body: "Match Radar / AI Campaign Ops",
        href: "/cases/lays-match-radar"
      }
    ],
    cta: {
      eyebrow: "have a portfolio worth staging?",
      title: "Turn brand houses into editorial moments.",
      body: "MomentumX combines luxury design, content craft and digital experience to present portfolios with the gravity they deserve.",
      href: "/enquiry",
      label: "start a conversation"
    },
    media: {
      hero: "/assets/cases/luxe-port/hero.jpg",
      play: "/assets/cases/luxe-port/the-play.jpg",
      moment: "/assets/cases/luxe-port/the-moment.jpg",
      flow: "/assets/cases/luxe-port/campaign-flow.jpg"
    },
    moments: [
      {
        title: "The Play",
        body: "Houses from Versace through Dsquared2 sit as magazine brand plates, then open into product stories and podium theatre."
      },
      {
        title: "The Moment",
        body: "A demoted craft still drafts captions and crop flags before the podium — assistive only; humans keep publish."
      }
    ]
  },
  "rise-partner-pulse": {
    eyebrow: "RISE · PARTNER BROCHURE EXPERIENCE",
    metadata: [
      {
        label: "Engagement",
        value: "Partner Brochure / Mosaic Experience"
      },
      {
        label: "Client",
        value: "Rise (National Holding Group)"
      },
      {
        label: "Experience",
        value: "Editorial booklet + vertical mosaic + inquiry pulse"
      },
      {
        label: "Capabilities",
        value: "Partner Experience · Editorial Design · Multi-Vertical Brochure · Content Craft · Inquiry Pulse · Digital Engagement"
      }
    ],
    story: [
      {
        title: "THE IDEA",
        body: "Rise’s breadth was fragmented across site stories; Partner Pulse frames one immersive booklet so partners feel the portfolio before they file anything."
      },
      {
        title: "THE INTERACTION",
        body: "Editorial opening leads into a staggered mosaic wall — five tall vertical cards as visual proof, not a SaaS navigator grid."
      },
      {
        title: "THE CONTENT",
        body: "Each chapter reads as a brochure beat — Cyber through IoT — so orientation happens by browsing, not hunting a form farm."
      },
      {
        title: "THE CAMPAIGN",
        body: "Inquiry stays light: one pulse strip for partner, lane and urgency — assistive notes with hard rails, never autonomous trading or device control."
      }
    ],
    builtIntro: "A partner brochure experience that turns multi-vertical breadth into a browsable mosaic journey.",
    built: [
      {
        title: "Brochure Open",
        body: "Magazine split with editorial gravity and issue chips."
      },
      {
        title: "Mosaic Wall",
        body: "Five staggered vertical cards as the visual spine."
      },
      {
        title: "Cyber Chapter",
        body: "Shield lane staged as a tall brochure beat."
      },
      {
        title: "Fintech Chapter",
        body: "Rails partners can read without a console."
      },
      {
        title: "Energy Chapter",
        body: "Solar, desalination and EV as brochure columns."
      },
      {
        title: "Healthcare Chapter",
        body: "Calm care spread with proof cards."
      },
      {
        title: "IoT + Inquiry Pulse",
        body: "Chapter close with one subtle intelligence strip."
      },
      {
        title: "Partner Orientation",
        body: "Browse-first path; no RFQ farm as hero."
      }
    ],
    journeyEyebrow: "the campaign journey",
    leadJourney: {
      title: "Open. Browse. Orient. Inquire.",
      body: "The brochure turns a multi-vertical portfolio into a fluid partner journey, with mosaic proof up front and inquiry kept light.",
      steps: [
        {
          title: "Discover",
          body: "Partner meets Rise Partner Pulse."
        },
        {
          title: "Open",
          body: "Opens the magazine-grade brochure surface."
        },
        {
          title: "Place",
          body: "Reads the editorial thesis and vertical chips."
        },
        {
          title: "Play",
          body: "Browses the mosaic wall of five chapters."
        },
        {
          title: "Record",
          body: "Dwells on Cyber, Fintech, Energy, Healthcare or IoT."
        },
        {
          title: "Upload",
          body: "Notes a lane of interest on the inquiry-pulse strip."
        },
        {
          title: "Enter",
          body: "Assistive partner intelligence drafts a light next-step note."
        },
        {
          title: "Win",
          body: "Partner leaves oriented — ready for a human conversation."
        }
      ],
      note: ""
    },
    visualStory: [
      {
        title: "THE PLAY",
        body: "Partners open a magazine-grade brochure — navy editorial meeting white issue pages with vertical chapter chips.",
        image: "/assets/cases/rise/the-play.jpg"
      },
      {
        title: "THE MOMENT",
        body: "A mosaic of Cyber, Fintech, Energy, Healthcare and IoT chapters orients partners; a subtle inquiry-pulse strip notes interest without becoming a console.",
        image: "/assets/cases/rise/the-moment.jpg"
      }
    ],
    ecosystemEyebrow: "the experience architecture",
    ecosystem: {
      title: "A Simple Experience. A Connected Campaign Journey.",
      body: "The strength of the brochure is its simplicity at the front end: editorial craft creates a calm trigger, while mosaic chapters convert that moment into partner engagement.",
      steps: [
        "RISE BROCHURE",
        "EDITORIAL OPEN",
        "MOSAIC WALL",
        "CHAPTER DEPTH",
        "INQUIRY PULSE",
        "HUMAN HANDOFF"
      ],
      markets: ["THE PARTNER", "THE PORTFOLIO", "THE BRAND"],
      cards: [
        {
          title: "Rise Brochure",
          body: "Partner discovers Partner Pulse."
        },
        {
          title: "Editorial Open",
          body: "Magazine framing sets gravity."
        },
        {
          title: "Mosaic Wall",
          body: "Five vertical chapters as proof."
        },
        {
          title: "Chapter Depth",
          body: "Cyber through IoT as browsable beats."
        },
        {
          title: "Inquiry Pulse",
          body: "Light partner intelligence, not an ops hero."
        },
        {
          title: "Human Handoff",
          body: "Notes assist; conversations stay human-owned."
        }
      ],
      closing: "The brochure remains the experience. Rise Partner Pulse is how CWIT adds quiet intelligence."
    },
    capabilities: [
      "Partner Experience",
      "Editorial Design",
      "Multi-Vertical Brochure",
      "Content Craft",
      "Inquiry Pulse",
      "Digital Engagement"
    ],
    impact: [],
    relatedWork: [
      {
        title: "Luxe Port Lookbook",
        body: "Luxury Lookbook / Content Craft",
        href: "/cases/luxe-port-lookbook"
      },
      {
        title: "Da Vinci Talent Pulse",
        body: "Talent Pulse / Employer Brand Counsel",
        href: "/cases/da-vinci-talent-pulse"
      },
      {
        title: "RFF Circular Control",
        body: "Circular Control / AI Ops Assistant",
        href: "/cases/rff-circular-control"
      }
    ],
    cta: {
      eyebrow: "have a portfolio partners should explore?",
      title: "Turn breadth into a browsable story.",
      body: "MomentumX combines editorial design, digital experience and light partner intelligence to help partners understand what you do.",
      href: "/enquiry",
      label: "start a conversation"
    },
    media: {
      hero: "/assets/cases/rise/hero.jpg",
      play: "/assets/cases/rise/the-play.jpg",
      moment: "/assets/cases/rise/the-moment.jpg",
      flow: "/assets/cases/rise/campaign-flow.jpg"
    },
    moments: [
      {
        title: "The Play",
        body: "Partners open a magazine-grade brochure — navy editorial meeting white issue pages with vertical chapter chips."
      },
      {
        title: "The Moment",
        body: "A mosaic of Cyber, Fintech, Energy, Healthcare and IoT chapters orients partners; a subtle inquiry-pulse strip notes interest without becoming a console."
      }
    ]
  },
  "moments-of-magic": {
    eyebrow: "M&M'S · CONSUMER EXPERIENCE",
    metadata: [
      { label: "Engagement", value: "Moments of Magic Brand Experience" },
      { label: "Client", value: "M&M's" },
      {
        label: "Experience",
        value: "Digital brand storytelling shaped around memorable moments and audience attention"
      },
      {
        label: "Capabilities",
        value: "Digital Strategy · Content Experience · Customer Engagement"
      }
    ],
    story: [
      {
        title: "THE INSIGHT",
        body:
          "Memorable brand moments are not only about product visibility. They are about creating emotional recall that people want to revisit, share and remember."
      },
      {
        title: "THE DIRECTION",
        body:
          "The experience was shaped around playful brand energy, clear storytelling and digital content designed to hold attention across key consumer touchpoints."
      },
      {
        title: "THE EXPERIENCE",
        body:
          "Content, interaction and brand expression work together so the audience can move from curiosity into a richer brand moment without losing the lightness of the M&M's world."
      },
      {
        title: "THE IMPACT",
        body:
          "The result is a digital-ready brand story that supports engagement, content visibility and stronger recall for a global consumer brand."
      }
    ],
    builtIntro:
      "A consumer experience shaped around brand energy, content clarity and memorable digital moments.",
    built: [
      {
        title: "Brand Story Framing",
        body: "A clear narrative direction that turns product personality into a memorable digital experience."
      },
      {
        title: "Content Experience",
        body: "Visual and editorial content designed to hold attention and support shareable brand moments."
      },
      {
        title: "Customer Engagement",
        body: "Touchpoints designed to invite interaction, exploration and emotional connection with the brand."
      },
      {
        title: "Digital Strategy",
        body: "A structured approach to where the brand meets the audience and what each moment should achieve."
      },
      {
        title: "Campaign-Ready Assets",
        body: "Experience assets prepared for rollout across relevant digital and content channels."
      },
      {
        title: "Audience Journey Design",
        body: "A flow that moves people from first attention into deeper brand immersion."
      },
      {
        title: "Experience Consistency",
        body: "Tone, visuals and interaction stay aligned with the brand while remaining useful for consumers."
      },
      {
        title: "Regional Delivery Fit",
        body: "Execution shaped for practical rollout across market-facing digital environments."
      }
    ],
    journeyEyebrow: "the brand journey",
    leadJourney: {
      title: "Discover. Feel. Share. Remember.",
      body:
        "The experience turns brand personality into a simple journey: catch attention, create an emotional moment, invite participation and leave a lasting impression.",
      steps: [
        { title: "Discover", body: "The audience encounters the brand moment through digital or campaign channels." },
        { title: "Explore", body: "Content and interaction invite people into the playful world of the brand." },
        { title: "Engage", body: "The experience encourages attention, curiosity and emotional response." },
        { title: "Participate", body: "Consumers interact with the content or campaign touchpoints." },
        { title: "Share", body: "Memorable moments become easy to talk about and pass on." },
        { title: "Recall", body: "The brand stays present through distinctive storytelling and visual energy." },
        { title: "Return", body: "Future campaigns can reconnect with the same emotional territory." },
        { title: "Grow", body: "Each moment strengthens long-term brand affinity and digital presence." }
      ],
      note:
        "The public case study focuses on experience direction and does not expose confidential campaign mechanics, media plans or performance data."
    },
    visualStory: [
      {
        title: "THE MOMENT",
        body: "A brand moment designed to feel spontaneous, playful and memorable.",
        image: "https://storage.tentwenty.com/98/G42_1cd52cacb0.webp"
      },
      {
        title: "THE STORY",
        body: "Narrative and visuals work together to hold attention beyond a single impression.",
        image: "https://storage.tentwenty.com/large_G42_Website_Mobile_Screens_Banner_fc657376ae.webp"
      },
      {
        title: "THE CONTENT",
        body: "Digital content supports emotional recall and shareable brand expression.",
        image: "https://storage.tentwenty.com/G42_Project_Brief_f04fb77727.jpg"
      },
      {
        title: "THE ENGAGEMENT",
        body: "Audience touchpoints convert attention into interaction and brand connection.",
        image: "https://storage.tentwenty.com/large_G42_Website_Desktop_Screens_1_f4055a5008.jpg"
      },
      {
        title: "THE PRESENCE",
        body: "The experience strengthens digital visibility for a globally recognised consumer brand.",
        image: "https://storage.tentwenty.com/98/G42_1_e21d5eb296.webp"
      }
    ],
    ecosystemEyebrow: "the experience architecture",
    ecosystem: {
      title: "A light brand world. A clear digital journey.",
      body:
        "The strength of the engagement is simplicity: distinctive brand energy at the front, supported by a clear content and interaction structure behind it.",
      steps: [
        "BRAND MOMENT",
        "CONTENT EXPERIENCE",
        "AUDIENCE ATTENTION",
        "INTERACTION",
        "SHAREABLE MEMORY",
        "BRAND RECALL"
      ],
      markets: ["THE BRAND", "THE AUDIENCE", "THE CONTENT"]
    },
    capabilities: [
      "Digital Strategy",
      "Content Experience",
      "Customer Engagement",
      "Brand Storytelling",
      "Campaign Experience",
      "Audience Journey",
      "Experience Design",
      "Digital Rollout"
    ],
    impact: [
      {
        title: "MEMORABLE BRAND MOMENTS",
        body: "The experience is built around emotional recall, not only product messaging."
      },
      {
        title: "CONTENT THAT HOLDS ATTENTION",
        body: "Story and visuals are designed to keep people engaged beyond the first glance."
      },
      {
        title: "CLEAR DIGITAL DIRECTION",
        body: "Brand personality is translated into a practical digital experience structure."
      },
      {
        title: "READY FOR ROLLOUT",
        body: "Assets and journeys are shaped for useful delivery across digital touchpoints."
      }
    ],
    relatedWork: [
      { title: "Pawtopia", body: "Digital Engagement", href: "/cases/pawtopia" },
      { title: "Whiskas - Interactive Cat Game", body: "Gamified Experience", href: "/cases/whiskas-interactive-cat-game" },
      { title: "Ferrero - Back to School", body: "Campaign Platform", href: "/cases/ferrero-back-to-school-campaign" }
    ],
    cta: {
      eyebrow: "have a brand moment worth making digital?",
      title: "Turn attention into experience.",
      body:
        "MomentumX helps brands shape memorable digital moments around story, content and real audience behaviour.",
      href: "/enquiry",
      label: "start a conversation"
    }
  },
  "pawtopia": {
    eyebrow: "PEDIGREE & IAMS · DIGITAL ENGAGEMENT",
    metadata: [
      { label: "Engagement", value: "Pawtopia Pet Community Experience" },
      { label: "Client", value: "Pedigree & IAMS" },
      {
        label: "Experience",
        value: "Pet-focused digital engagement connecting community and product storytelling"
      },
      {
        label: "Capabilities",
        value: "Digital Engagement · Community Experience · Content Planning"
      }
    ],
    story: [
      {
        title: "THE NEED",
        body:
          "Pet owners look for more than product information. They look for guidance, belonging and stories that feel close to the way they care for their animals."
      },
      {
        title: "THE IDEA",
        body:
          "Pawtopia was shaped as a digital engagement concept where community, content and product storytelling can live in one pet-focused experience."
      },
      {
        title: "THE CONNECTION",
        body:
          "Instead of separating brand content from owner community, the experience brings useful storytelling and shared interest into the same digital space."
      },
      {
        title: "THE EXPERIENCE",
        body:
          "Owners can explore stories, discover brand value and feel part of a wider pet-care world without losing practical clarity."
      }
    ],
    builtIntro:
      "A pet-focused digital engagement concept designed to connect community energy with clear product storytelling.",
    built: [
      {
        title: "Community Experience",
        body: "A digital space designed around shared pet-owner interest and brand connection."
      },
      {
        title: "Product Storytelling",
        body: "Brand narratives presented in a way that feels useful, warm and relevant to owners."
      },
      {
        title: "Content Planning",
        body: "Editorial structure that supports ongoing stories, tips and engagement moments."
      },
      {
        title: "Digital Engagement Flow",
        body: "Touchpoints that invite owners to explore, return and stay connected."
      },
      {
        title: "Brand Presence",
        body: "Pedigree and IAMS storytelling brought into a coherent digital experience."
      },
      {
        title: "Audience Pathways",
        body: "Clear routes from curiosity into deeper brand and community content."
      },
      {
        title: "Experience Tone",
        body: "A friendly, trustworthy voice aligned with pet-care decision making."
      },
      {
        title: "Rollout Structure",
        body: "A practical framework for launching and extending the engagement over time."
      }
    ],
    journeyEyebrow: "the owner journey",
    leadJourney: {
      title: "Meet. Explore. Connect. Care.",
      body:
        "The experience helps pet owners move from first discovery into useful content, community connection and stronger brand affinity.",
      steps: [
        { title: "Arrive", body: "The owner discovers Pawtopia through brand or digital channels." },
        { title: "Explore", body: "Stories, tips and product narratives invite browsing and curiosity." },
        { title: "Connect", body: "Community-led content creates a sense of shared pet-care interest." },
        { title: "Learn", body: "Useful information helps owners make more confident day-to-day decisions." },
        { title: "Engage", body: "Interactive moments encourage return visits and ongoing participation." },
        { title: "Relate", body: "Brand storytelling becomes part of the owner's care journey." },
        { title: "Return", body: "Fresh content and community presence support habit and loyalty." },
        { title: "Belong", body: "The experience grows into a familiar digital home for pet owners." }
      ],
      note:
        "The public case study remains conceptual and does not expose confidential community moderation, CRM or campaign performance details."
    },
    visualStory: [
      {
        title: "THE COMMUNITY",
        body: "A digital space built around pet owners, shared care and everyday brand relevance.",
        image: "https://storage.tentwenty.com/98/G42_1_e21d5eb296.webp"
      },
      {
        title: "THE STORY",
        body: "Product storytelling sits naturally inside content that feels useful and warm.",
        image: "https://storage.tentwenty.com/large_G42_Website_Mobile_Screens_Banner_fc657376ae.webp"
      },
      {
        title: "THE CONTENT",
        body: "Editorial planning supports ongoing engagement rather than one-off campaign spikes.",
        image: "https://storage.tentwenty.com/G42_Project_Brief_f04fb77727.jpg"
      },
      {
        title: "THE JOURNEY",
        body: "Owners move from discovery into deeper brand and community connection.",
        image: "https://storage.tentwenty.com/large_G42_Website_Desktop_Screens_1_f4055a5008.jpg"
      },
      {
        title: "THE BOND",
        body: "The experience strengthens affinity by respecting how people care for their pets.",
        image: "https://storage.tentwenty.com/98/G42_1cd52cacb0.webp"
      }
    ],
    ecosystemEyebrow: "the engagement architecture",
    ecosystem: {
      title: "Community first. Brand storytelling close behind.",
      body:
        "Pawtopia works when owners feel welcome first. Product storytelling then sits inside that relationship instead of interrupting it.",
      steps: [
        "OWNER ARRIVAL",
        "CONTENT DISCOVERY",
        "COMMUNITY CONNECTION",
        "PRODUCT STORY",
        "ONGOING ENGAGEMENT",
        "BRAND AFFINITY"
      ],
      markets: ["THE OWNER", "THE PET", "THE BRAND"]
    },
    capabilities: [
      "Digital Engagement",
      "Community Experience",
      "Content Planning",
      "Brand Storytelling",
      "Audience Journey",
      "Experience Design",
      "Campaign Support",
      "Digital Rollout"
    ],
    impact: [
      {
        title: "OWNER-CENTRED ENGAGEMENT",
        body: "The experience starts with care, community and usefulness rather than hard sell."
      },
      {
        title: "STORY AND PRODUCT TOGETHER",
        body: "Brand messaging sits inside content that feels relevant to everyday pet ownership."
      },
      {
        title: "REASONS TO RETURN",
        body: "Content and community structure support ongoing digital presence."
      },
      {
        title: "CLEAR BRAND HOME",
        body: "Pedigree and IAMS gain a coherent digital engagement concept around pet care."
      }
    ],
    relatedWork: [
      { title: "Whiskas - Interactive Cat Game", body: "Gamified Experience", href: "/cases/whiskas-interactive-cat-game" },
      { title: "M&M's - Moments of Magic", body: "Consumer Experience", href: "/cases/moments-of-magic" },
      { title: "Ride Back in Style", body: "Lifestyle Engagement", href: "/cases/ride-back-in-style" }
    ],
    cta: {
      eyebrow: "have a community worth building around?",
      title: "Bring people closer to the brand.",
      body:
        "MomentumX designs digital engagements that connect community, content and product storytelling in one clear experience.",
      href: "/enquiry",
      label: "start a conversation"
    }
  },
  "a-michelin-affair": {
    eyebrow: "TAZAL · PREMIUM HOSPITALITY EXPERIENCE",
    metadata: [
      { label: "Engagement", value: "A Michelin Affair Digital Storytelling" },
      { label: "Client", value: "Tazal" },
      {
        label: "Experience",
        value: "Premium digital storytelling around hospitality, attention and crafted experience"
      },
      {
        label: "Capabilities",
        value: "Digital Storytelling · Experience Design · Content Direction"
      }
    ],
    story: [
      {
        title: "THE AMBITION",
        body:
          "Premium hospitality is experienced through detail. The digital expression needed the same sense of craft, restraint and attention that guests expect in person."
      },
      {
        title: "THE DIRECTION",
        body:
          "A Michelin Affair was shaped as a storytelling experience where atmosphere, culinary prestige and carefully paced content create desire before a single booking moment."
      },
      {
        title: "THE CRAFT",
        body:
          "Visual language, narrative rhythm and experience design work together to feel elevated without becoming cold or inaccessible."
      },
      {
        title: "THE RESULT",
        body:
          "The brand gains a digital presence that protects premium perception while still guiding people towards meaningful engagement."
      }
    ],
    builtIntro:
      "A premium digital storytelling direction built around hospitality, attention and crafted experience.",
    built: [
      {
        title: "Premium Story Framing",
        body: "A narrative structure that communicates hospitality prestige with clarity and restraint."
      },
      {
        title: "Experience Design",
        body: "Interaction and pacing designed to feel considered, calm and high-end."
      },
      {
        title: "Content Direction",
        body: "Editorial and visual guidance that keeps every asset aligned with premium hospitality tone."
      },
      {
        title: "Atmosphere-Led Visuals",
        body: "Imagery and layout choices that evoke dining, detail and occasion."
      },
      {
        title: "Guest Journey Thinking",
        body: "Digital flow shaped around curiosity, desire and confident next steps."
      },
      {
        title: "Brand Elevation",
        body: "Digital expression that protects and extends the prestige of the hospitality offer."
      },
      {
        title: "Touchpoint Consistency",
        body: "Story, tone and presentation stay coherent across key digital moments."
      },
      {
        title: "Launch-Ready Direction",
        body: "A practical creative system ready for campaign and experience rollout."
      }
    ],
    journeyEyebrow: "the hospitality journey",
    leadJourney: {
      title: "Notice. Desire. Explore. Arrive.",
      body:
        "The experience guides people from first impression into a premium sense of occasion, then towards deeper exploration of the hospitality story.",
      steps: [
        { title: "Notice", body: "A refined first impression signals prestige and culinary occasion." },
        { title: "Feel", body: "Atmosphere and storytelling create desire before practical detail." },
        { title: "Explore", body: "Guests move through curated content about dining and experience." },
        { title: "Understand", body: "The offer becomes clear without breaking the premium tone." },
        { title: "Imagine", body: "The digital journey helps people picture the occasion itself." },
        { title: "Decide", body: "Confidence builds around whether this is the right experience." },
        { title: "Engage", body: "Clear next steps invite enquiry or deeper brand interaction." },
        { title: "Remember", body: "The story leaves a lasting sense of craft and hospitality." }
      ],
      note:
        "The public case study focuses on experience direction and does not expose confidential commercial, booking or partner details."
    },
    visualStory: [
      {
        title: "THE OCCASION",
        body: "A digital first impression shaped around prestige dining and hospitality atmosphere.",
        image: "https://storage.tentwenty.com/medium_UAE_Pavilion_Expo_2025_63f64b6389.webp"
      },
      {
        title: "THE DETAIL",
        body: "Crafted storytelling that treats every visual and editorial choice as part of the experience.",
        image: "https://storage.tentwenty.com/large_G42_Website_Desktop_Screens_1_f4055a5008.jpg"
      },
      {
        title: "THE PACE",
        body: "A calm journey that lets desire build before practical information takes over.",
        image: "https://storage.tentwenty.com/G42_Project_Brief_f04fb77727.jpg"
      },
      {
        title: "THE PRESENCE",
        body: "Premium brand expression that feels elevated without becoming distant.",
        image: "https://storage.tentwenty.com/large_G42_Website_Mobile_Screens_Banner_fc657376ae.webp"
      },
      {
        title: "THE INVITATION",
        body: "Clear pathways from story into meaningful guest engagement.",
        image: "https://storage.tentwenty.com/medium_Vip_booking_platform_Saudi_Pavilion_d2a25f002b.webp"
      }
    ],
    ecosystemEyebrow: "the experience architecture",
    ecosystem: {
      title: "Atmosphere first. Clarity when it matters.",
      body:
        "The journey protects premium perception at the front, then introduces practical clarity once desire and understanding are already established.",
      steps: [
        "FIRST IMPRESSION",
        "ATMOSPHERE",
        "STORYTELLING",
        "OFFER CLARITY",
        "GUEST CONFIDENCE",
        "ENGAGEMENT"
      ],
      markets: ["THE GUEST", "THE OCCASION", "THE BRAND"]
    },
    capabilities: [
      "Digital Storytelling",
      "Experience Design",
      "Content Direction",
      "Brand Elevation",
      "Hospitality Journey",
      "Visual Direction",
      "Campaign Experience",
      "Digital Rollout"
    ],
    impact: [
      {
        title: "PREMIUM DIGITAL PRESENCE",
        body: "The experience protects hospitality prestige across digital touchpoints."
      },
      {
        title: "STORY BEFORE HARD SELL",
        body: "Desire and atmosphere lead, with practical clarity arriving at the right moment."
      },
      {
        title: "CRAFTED CONSISTENCY",
        body: "Tone, visuals and pacing stay aligned with a high-end hospitality brand."
      },
      {
        title: "CLEAR NEXT STEPS",
        body: "Guests can move from inspiration into engagement without friction."
      }
    ],
    relatedWork: [
      { title: "Taste of Abu Dhabi", body: "Consumer Experience", href: "/cases/taste-of-abu-dhabi" },
      { title: "Nolte - Digital Transformation", body: "Digital Experience", href: "/cases/nolte-digital-transformation" },
      { title: "M&M's - Moments of Magic", body: "Consumer Experience", href: "/cases/moments-of-magic" }
    ],
    cta: {
      eyebrow: "have a premium experience worth elevating?",
      title: "Make the digital story feel crafted.",
      body:
        "MomentumX shapes hospitality and lifestyle brands with digital storytelling that protects prestige and guides people with clarity.",
      href: "/enquiry",
      label: "start a conversation"
    }
  },
  "taste-of-abu-dhabi": {
    eyebrow: "BRF · REGIONAL CONSUMER EXPERIENCE",
    metadata: [
      { label: "Engagement", value: "Taste of Abu Dhabi Consumer Experience" },
      { label: "Client", value: "BRF" },
      {
        label: "Experience",
        value: "Consumer-facing digital experience for regional engagement and content visibility"
      },
      {
        label: "Capabilities",
        value: "Customer Experience · Regional Content · Digital Engagement"
      }
    ],
    story: [
      {
        title: "THE MARKET",
        body:
          "Regional consumer brands need digital experiences that feel local enough to matter, while still remaining clear, useful and easy to engage with."
      },
      {
        title: "THE OPPORTUNITY",
        body:
          "Taste of Abu Dhabi was shaped as a consumer-facing experience that connects brand presence, content visibility and audience engagement in one regional moment."
      },
      {
        title: "THE EXPERIENCE",
        body:
          "Content, discovery and interaction are designed to help people explore the brand world quickly without losing cultural relevance or campaign energy."
      },
      {
        title: "THE OUTCOME",
        body:
          "The brand gains a digital experience built for attention, participation and stronger regional visibility."
      }
    ],
    builtIntro:
      "A consumer-facing digital experience shaped for regional audience engagement and content visibility.",
    built: [
      {
        title: "Customer Experience Design",
        body: "A journey built around how regional audiences discover, browse and engage."
      },
      {
        title: "Regional Content Direction",
        body: "Content shaped for local relevance while staying clear and brand-consistent."
      },
      {
        title: "Digital Engagement",
        body: "Touchpoints designed to turn attention into interaction and campaign participation."
      },
      {
        title: "Brand Visibility",
        body: "Experience structure that helps the brand stay present across key digital moments."
      },
      {
        title: "Discovery Flow",
        body: "Simple pathways that help people find stories, offers or content quickly."
      },
      {
        title: "Campaign Support",
        body: "A flexible experience layer ready to support consumer activations and content bursts."
      },
      {
        title: "Audience Clarity",
        body: "Messaging and interaction remain easy to understand across devices and contexts."
      },
      {
        title: "Practical Delivery",
        body: "Execution shaped for regional rollout without overcomplicating the consumer journey."
      }
    ],
    journeyEyebrow: "the consumer journey",
    leadJourney: {
      title: "See. Explore. Taste. Engage.",
      body:
        "The experience helps consumers move from first brand contact into content discovery, deeper interest and meaningful engagement.",
      steps: [
        { title: "See", body: "The audience encounters the brand through regional digital or campaign channels." },
        { title: "Explore", body: "Content invites browsing across stories, products or experience themes." },
        { title: "Discover", body: "People find relevant information quickly without friction." },
        { title: "Connect", body: "Brand storytelling becomes more personal and locally resonant." },
        { title: "Engage", body: "Interactive moments encourage participation and continued attention." },
        { title: "Share", body: "Visible content moments support conversation and social presence." },
        { title: "Return", body: "Fresh content and clear structure create reasons to come back." },
        { title: "Prefer", body: "Repeated useful engagement strengthens brand preference over time." }
      ],
      note:
        "The public case study remains conceptual and does not expose confidential media plans, retailer mechanics or performance metrics."
    },
    visualStory: [
      {
        title: "THE MARKET",
        body: "A consumer experience designed for regional attention and cultural relevance.",
        image: "https://storage.tentwenty.com/medium_Vip_booking_platform_Saudi_Pavilion_d2a25f002b.webp"
      },
      {
        title: "THE CONTENT",
        body: "Visible storytelling that helps the brand stay present across digital channels.",
        image: "https://storage.tentwenty.com/large_G42_Website_Mobile_Screens_Banner_fc657376ae.webp"
      },
      {
        title: "THE FLOW",
        body: "Simple discovery paths that keep engagement light and useful.",
        image: "https://storage.tentwenty.com/G42_Project_Brief_f04fb77727.jpg"
      },
      {
        title: "THE INTERACTION",
        body: "Touchpoints designed to convert attention into participation.",
        image: "https://storage.tentwenty.com/large_G42_Website_Desktop_Screens_1_f4055a5008.jpg"
      },
      {
        title: "THE PRESENCE",
        body: "A digital experience that supports ongoing regional brand visibility.",
        image: "https://storage.tentwenty.com/98/Pinza_Thumbnail_3e5ae1a237.webp"
      }
    ],
    ecosystemEyebrow: "the engagement architecture",
    ecosystem: {
      title: "Regional relevance. Simple digital movement.",
      body:
        "The experience works when local relevance catches attention and a clear journey keeps people moving into content and engagement.",
      steps: [
        "BRAND ARRIVAL",
        "CONTENT VISIBILITY",
        "DISCOVERY",
        "INTERACTION",
        "PARTICIPATION",
        "PREFERENCE"
      ],
      markets: ["THE CONSUMER", "THE CONTENT", "THE BRAND"]
    },
    capabilities: [
      "Customer Experience",
      "Regional Content",
      "Digital Engagement",
      "Brand Visibility",
      "Discovery Design",
      "Campaign Support",
      "Audience Journey",
      "Digital Rollout"
    ],
    impact: [
      {
        title: "REGIONAL RELEVANCE",
        body: "The experience is shaped around local audience attention and cultural context."
      },
      {
        title: "CONTENT VISIBILITY",
        body: "Brand storytelling stays present across useful digital touchpoints."
      },
      {
        title: "SIMPLE ENGAGEMENT",
        body: "Consumers can move from interest into interaction without friction."
      },
      {
        title: "CAMPAIGN FLEXIBILITY",
        body: "The structure can support ongoing content and activation needs."
      }
    ],
    relatedWork: [
      { title: "A Michelin Affair", body: "Hospitality Experience", href: "/cases/a-michelin-affair" },
      { title: "Ferrero - Back to School", body: "Campaign Platform", href: "/cases/ferrero-back-to-school-campaign" },
      { title: "Ride Back in Style", body: "Lifestyle Engagement", href: "/cases/ride-back-in-style" }
    ],
    cta: {
      eyebrow: "have a regional audience worth engaging better?",
      title: "Make the consumer journey feel local.",
      body:
        "MomentumX builds consumer experiences that combine regional relevance, clear content and practical digital engagement.",
      href: "/enquiry",
      label: "start a conversation"
    }
  },
  "ride-back-in-style": {
    eyebrow: "UNILEVER · LIFESTYLE DIGITAL ENGAGEMENT",
    metadata: [
      { label: "Engagement", value: "Ride Back in Style Lifestyle Experience" },
      { label: "Client", value: "Unilever" },
      {
        label: "Experience",
        value: "Lifestyle-led digital engagement connecting brand recall, content and customer touchpoints"
      },
      {
        label: "Capabilities",
        value: "Digital Experience · Content Systems · Customer Touchpoints"
      }
    ],
    story: [
      {
        title: "THE INSIGHT",
        body:
          "Lifestyle brands win when people feel the category as part of everyday identity. Digital engagement needs to feel useful and aspirational at the same time."
      },
      {
        title: "THE IDEA",
        body:
          "Ride Back in Style was shaped as a lifestyle-led digital engagement that reconnects brand recall with useful content and clear customer touchpoints."
      },
      {
        title: "THE SYSTEM",
        body:
          "Instead of one isolated campaign burst, the experience supports a content system that can carry brand energy across multiple moments and channels."
      },
      {
        title: "THE EXPERIENCE",
        body:
          "People can discover, browse and engage through a journey that feels contemporary, practical and connected to real lifestyle behaviour."
      }
    ],
    builtIntro:
      "A lifestyle-led digital engagement connecting brand recall, useful content and customer touchpoints.",
    built: [
      {
        title: "Digital Experience Design",
        body: "A lifestyle-led journey that feels contemporary while remaining easy to use."
      },
      {
        title: "Content Systems",
        body: "A structure for brand stories, useful content and campaign messages to live together."
      },
      {
        title: "Customer Touchpoints",
        body: "Clear routes from attention into deeper engagement across digital channels."
      },
      {
        title: "Brand Recall Support",
        body: "Experience moments designed to reconnect people with familiar brand energy."
      },
      {
        title: "Lifestyle Storytelling",
        body: "Narrative and visuals shaped around everyday aspiration and practical value."
      },
      {
        title: "Engagement Pathways",
        body: "Simple flows that help people move from browsing into meaningful interaction."
      },
      {
        title: "Multi-Moment Flexibility",
        body: "A system ready to support more than a single campaign spike."
      },
      {
        title: "Practical Rollout",
        body: "Delivery designed for real market execution across relevant touchpoints."
      }
    ],
    journeyEyebrow: "the lifestyle journey",
    leadJourney: {
      title: "Recall. Browse. Use. Return.",
      body:
        "The experience reconnects brand memory with useful content, then guides people through clear digital touchpoints that encourage return engagement.",
      steps: [
        { title: "Recall", body: "Brand energy reappears in a lifestyle context people already recognise." },
        { title: "Browse", body: "Content invites exploration across stories, tips or product moments." },
        { title: "Find", body: "Useful information is easy to locate without breaking the experience." },
        { title: "Engage", body: "Touchpoints encourage interaction beyond passive viewing." },
        { title: "Use", body: "Content becomes part of a practical lifestyle decision or habit." },
        { title: "Connect", body: "The brand relationship deepens through repeated useful contact." },
        { title: "Share", body: "Lifestyle moments become easy to talk about and pass on." },
        { title: "Return", body: "The system supports ongoing presence rather than one-off attention." }
      ],
      note:
        "The public case study remains conceptual and does not expose confidential media, retail or performance details."
    },
    visualStory: [
      {
        title: "THE LIFESTYLE",
        body: "A digital engagement shaped around everyday aspiration and brand familiarity.",
        image: "https://storage.tentwenty.com/98/Pinza_Thumbnail_3e5ae1a237.webp"
      },
      {
        title: "THE CONTENT",
        body: "Useful stories and brand moments live inside one coherent content system.",
        image: "https://storage.tentwenty.com/large_G42_Website_Mobile_Screens_Banner_fc657376ae.webp"
      },
      {
        title: "THE TOUCHPOINTS",
        body: "Clear digital routes help people move from interest into engagement.",
        image: "https://storage.tentwenty.com/G42_Project_Brief_f04fb77727.jpg"
      },
      {
        title: "THE FLOW",
        body: "Browsing stays light while still supporting meaningful brand connection.",
        image: "https://storage.tentwenty.com/large_G42_Website_Desktop_Screens_1_f4055a5008.jpg"
      },
      {
        title: "THE RETURN",
        body: "The experience is designed for repeated contact, not only a single campaign burst.",
        image: "https://storage.tentwenty.com/medium_Vip_booking_platform_Saudi_Pavilion_d2a25f002b.webp"
      }
    ],
    ecosystemEyebrow: "the engagement architecture",
    ecosystem: {
      title: "Brand memory up front. Useful content underneath.",
      body:
        "The journey reconnects lifestyle brand recall with practical content systems and clear customer touchpoints.",
      steps: [
        "BRAND RECALL",
        "LIFESTYLE CONTENT",
        "DISCOVERY",
        "ENGAGEMENT",
        "USEFUL ACTION",
        "RETURN HABIT"
      ],
      markets: ["THE CONSUMER", "THE LIFESTYLE", "THE BRAND"]
    },
    capabilities: [
      "Digital Experience",
      "Content Systems",
      "Customer Touchpoints",
      "Lifestyle Storytelling",
      "Brand Recall",
      "Audience Journey",
      "Campaign Support",
      "Digital Rollout"
    ],
    impact: [
      {
        title: "LIFESTYLE BRAND RECALL",
        body: "The experience reconnects people with familiar brand energy in a contemporary way."
      },
      {
        title: "USEFUL CONTENT SYSTEMS",
        body: "Stories and practical content sit together instead of competing for attention."
      },
      {
        title: "CLEAR TOUCHPOINTS",
        body: "Customers can move from interest into engagement through simple digital routes."
      },
      {
        title: "ONGOING PRESENCE",
        body: "The structure supports more than a single campaign moment."
      }
    ],
    relatedWork: [
      { title: "Taste of Abu Dhabi", body: "Consumer Experience", href: "/cases/taste-of-abu-dhabi" },
      { title: "M&M's - Moments of Magic", body: "Consumer Experience", href: "/cases/moments-of-magic" },
      { title: "Pawtopia", body: "Digital Engagement", href: "/cases/pawtopia" }
    ],
    cta: {
      eyebrow: "have a lifestyle brand worth engaging better?",
      title: "Connect recall with useful experience.",
      body:
        "MomentumX builds digital engagements that bring brand energy, content systems and customer touchpoints into one clear journey.",
      href: "/enquiry",
      label: "start a conversation"
    }
  }
};

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
  equation: [
    { name: "Momentum", line: "gives us the experience." },
    { name: "CWIT", line: "adds the intelligence." },
    { name: "Becomes", line: "MomentumX" }
  ],
  images: {
    region: {
      src: "https://images.unsplash.com/photo-1652707228067-25672fa0b082",
      alt: "Downtown Dubai at dusk, with traffic light trails running between the towers",
      name: "PhotoHound",
      url: "https://unsplash.com/@photohoundco"
    },
    pattern: {
      src: "https://images.unsplash.com/photo-1719194981461-fa0ec450999e",
      alt: "White wall carved with an interlocking Islamic geometric pattern",
      name: "KC Shum",
      url: "https://unsplash.com/@kcshum"
    }
  },
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
  // Momentum offices (from mmc-ae.com), grouped by region on the contact page.
  offices: [
    {
      region: "UAE",
      city: "dubai",
      address: "605, Tower A, Empire Heights, Business Bay, Dubai",
      map: "https://www.google.com/maps/search/?api=1&query=Momentum+Marketing+and+Events%2C+Empire+Heights%2C+Business+Bay%2C+Dubai"
    },
    {
      region: "UAE",
      city: "abu dhabi",
      address: "M202, Gift Tower, Hamdan Street, Abu Dhabi",
      map: "https://www.google.com/maps/search/?api=1&query=Gift+Tower%2C+Hamdan+Street%2C+Abu+Dhabi"
    },
    {
      region: "Saudi Arabia",
      city: "riyadh",
      address: "2801, Kingdom Tower, King Fahd Road, Al Olaya, Riyadh",
      map: "https://www.google.com/maps/search/?api=1&query=Kingdom+Tower%2C+King+Fahd+Road%2C+Al+Olaya%2C+Riyadh"
    },
    {
      region: "Saudi Arabia",
      city: "jeddah",
      address: "409, Quartz Building, Kurnaysh Road, Shati, Jeddah",
      map: "https://www.google.com/maps/search/?api=1&query=Quartz+Building%2C+Kurnaysh+Road%2C+Ash+Shati%2C+Jeddah"
    },
    {
      region: "Saudi Arabia",
      city: "dammam",
      address: "206, Al Rashed Towers, Dhahran Heights Road, Al Khobar",
      map: "https://www.google.com/maps/search/?api=1&query=Al+Rashed+Tower%2C+Al+Khobar"
    },
    {
      region: "Regional",
      city: "doha",
      address: "1503, Al Fardan Tower, Al Funduq Street, Doha, Qatar",
      map: "https://www.google.com/maps/search/?api=1&query=Al+Fardan+Tower%2C+Al+Funduq+Street%2C+Doha"
    },
    {
      region: "Regional",
      city: "bahrain",
      address: "2202, West Tower, Bahrain Financial Harbour, King Faisal Highway, Manama",
      map: "https://www.google.com/maps/search/?api=1&query=Bahrain+Financial+Harbour+West+Tower%2C+Manama"
    },
    {
      region: "Regional",
      city: "kuwait",
      address: "1805, Sahab Tower, Mohammad Thunayan Street, Kuwait City",
      map: "https://www.google.com/maps/search/?api=1&query=Sahab+Tower%2C+Mohammad+Thunayan+Street%2C+Kuwait"
    },
    {
      region: "Regional",
      city: "amman",
      address: "309, Armada Tower, Arar Street, Amman, Jordan",
      map: "https://www.google.com/maps/search/?api=1&query=Armada+Tower%2C+Arar+Street%2C+Amman"
    }
  ],
  // Add each profile URL to make the icon a link on the contact and enquiry pages.
  socials: [
    { network: "facebook", label: "Facebook", href: "" },
    { network: "x", label: "X", href: "" },
    { network: "instagram", label: "Instagram", href: "" },
    { network: "linkedin", label: "LinkedIn", href: "" }
  ]
};

export const innovationLabPage = {
  hero: {
    eyebrow: "momentumX AI innovation lab",
    title: ["Ideas are easy. We build them far enough to prove them."],
    summary:
      "Helping organisations identify where AI can create real value - and build a practical roadmap from opportunity to implementation.",
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
      "Not every opportunity starts with a client brief. The AI Innovation Lab gives our teams space to identify recurring challenges across industries, explore new technologies and rapidly build working concepts to understand what is possible - and what is worth taking further.",
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
    title: "Some Experiments Stay Experiments. The Right Ones Become Something Bigger.",
    body:
      "The Lab allows us to explore quickly without pretending every idea should become a product. The strongest opportunities move forward based on technical feasibility, business value and real-world validation.",
    path: ["Lab Concept", "Prototype", "Pilot"],
    branches: ["Client Solution", "MomentumX Product"],
    // Card copy for "how ideas evolve". Bodies reuse the status system
    // definitions; the two meta lines marked below are new wording.
    outcomes: [
      {
        title: "Lab Concept",
        body: "Defined solution idea, explored quickly to understand what is possible.",
        meta: "Prototype · Pilot"
      },
      {
        title: "Client Solution",
        body: "Being validated in a real environment.",
        meta: "Shaped with a client" // new wording
      },
      {
        title: "MomentumX Product",
        body: "Reusable MomentumX solution.",
        meta: "Productised" // new wording
      }
    ]
  },
  statusesIntro:
    "Every experiment in the Lab has a clear status, so teams know what is being explored, what is working, and what is ready to take further.",
  statuses: [
    [
      "Exploration",
      "Early-stage investigation.",
      "We look into whether the problem is real and whether technology can meaningfully help."
    ],
    [
      "Concept",
      "Defined solution idea.",
      "The opportunity is framed into a clear concept that can be designed, built and tested."
    ],
    [
      "Prototype",
      "Working demonstration.",
      "A tangible build proves the idea in motion and shows what the experience could feel like."
    ],
    [
      "Pilot",
      "Being validated in a real environment.",
      "The concept is tested with real users, data or operations to understand practical value."
    ],
    [
      "Product",
      "Reusable MomentumX solution.",
      "The strongest experiments become productised capabilities that can scale across clients."
    ]
  ],
  cta: {
    eyebrow: "Build with us",
    title: "Bring Us A Problem.",
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
    eyebrow: "MOMENTUMX AI INNOVATION LAB",
    title: "Exploring what's next across industries.",
    body:
      "From computer vision in retail and spatial intelligence in airports to AI-assisted AML and procurement, the MomentumX AI Innovation Lab explores how emerging technology can address real industry problems.",
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
      "605, Tower A, Empire Heights, Business Bay, Dubai. Call +971 4 569 3033."
  },
  enquiry: {
    title: "enquiry",
    summary: "Start a project conversation.",
    body:
      "Share the website, app, AI workflow, commerce experience, platform, or digital change you are planning, and the team can help shape the next move."
  },
  "book-meeting": {
    title: "book a meeting",
    summary: "Book a 30 minute digital consultation.",
    body:
      "Use this page as the future home for digital discovery, website and app planning, AI opportunities, platform strategy, and meeting booking integrations."
  },
  "privacy-policy": {
    title: "privacy policy",
    summary: "How MomentumX collects, uses and protects personal data.",
    body: "How MomentumX collects, uses and protects personal data."
  },
  "terms-and-conditions": {
    title: "terms and conditions",
    summary: "Terms and conditions.",
    body: "Replica placeholder for legal terms."
  }
};

export const navItems = [
  { label: "services", href: "/services" },
  { label: "AI innovation lab", href: "/innovation-lab" },
  { label: "work", href: "/cases" },
  { label: "about", href: "/about-us" },
  { label: "insights", href: "/blog" },
  { label: "enquiry", href: "/enquiry" }
];
