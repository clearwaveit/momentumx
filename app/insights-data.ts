// Generated from the insight article drafts; images are hotlinked from Unsplash with credit.
import type { InsightArticle } from "./insights";

export const articles: InsightArticle[] = [
  {
    "slug": "how-to-identify-high-value-ai-use-cases",
    "title": "How to identify high-value AI use cases",
    "category": "AI consulting & transformation",
    "serviceSlug": "ai-consulting-and-transformation",
    "date": "Sep 2026",
    "readTime": "4 min read",
    "summary": "A practical way to find, test and prioritise AI use cases that change real decisions, costs or customer experiences before committing budget and teams.",
    "intro": "Most organisations do not struggle to find ideas for AI. They struggle to choose between them. A long list of possibilities gathered from workshops and vendor demonstrations can quickly turn into scattered pilots that never reach the business. The more useful question is not where AI could be applied, but where it will change a decision, a cost or a customer experience in a way that matters. This article sets out a practical way to find, test and prioritise use cases before committing budget and teams.",
    "sections": [
      {
        "heading": "Start with business problems, not technology",
        "paragraphs": [
          "The strongest use cases begin with a problem the business already wants solved. Look at processes where people spend significant time reading, classifying, searching, reconciling or responding, and where delays or errors carry a visible cost. Ask department heads which decisions they make with incomplete information and which tasks their best people wish they could hand off. Framing ideas this way keeps the conversation grounded in outcomes rather than capabilities, and it brings the people who own the process into the discussion from the start.",
          "A common pitfall is starting from a tool, such as a chatbot or a large language model, and searching for somewhere to use it. This tends to produce solutions that impress in a demonstration but do not fit how work is actually done. Instead, write each idea as a short problem statement: who is affected, what happens today, what a better outcome looks like and how you would know it has improved. If a use case cannot be described in these terms, it is not ready to be assessed."
        ]
      },
      {
        "heading": "Assess value and feasibility together",
        "paragraphs": [
          "Once you have a shortlist, score each idea on two dimensions. Value covers the size of the opportunity: time saved, revenue protected, risk reduced, service improved, and how many people or transactions are affected. Feasibility covers whether the data exists and is accessible, how complex the integration will be, how tolerant the process is of occasional errors, and whether there is a clear owner. Keep the scoring simple enough that business and technology teams can complete it together in a single working session.",
          "Plotting ideas on a value and feasibility grid usually reveals a small group of candidates worth pursuing first. High-value but low-feasibility ideas are not discarded; they often point to foundational work, such as data consolidation, that should be planned separately. Be wary of ideas that score well only because their benefits are vague. A use case described as improving productivity across the organisation is harder to deliver and measure than one that reduces the time taken to process a specific type of request."
        ]
      },
      {
        "heading": "Check the data and the constraints early",
        "paragraphs": [
          "Many promising ideas stall when teams discover the data is incomplete, held in disconnected systems or unsuitable for the intended use. Before prioritising, confirm what data the use case needs, where it lives, who owns it and what condition it is in. For language-based use cases in the region, check whether content exists in both Arabic and English and whether the chosen models handle both with the quality your users expect, including regional dialects where they matter.",
          "Regulatory and policy constraints belong in the same conversation. Data residency requirements, sector regulations and internal classification policies can determine whether a use case can rely on public cloud services, needs in-country hosting or must stay on premises. Understanding this early prevents rework later. It also helps legal, risk and security teams feel involved in shaping the approach, rather than being presented with a finished design they are simply asked to approve."
        ]
      },
      {
        "heading": "Define success before you build",
        "paragraphs": [
          "Every prioritised use case should have a measurable baseline and a target agreed before development starts. If the aim is faster handling of customer enquiries, record how long it takes today and how that is measured. If the aim is better forecast accuracy, agree which forecasts and over what period. Without a baseline, even a successful pilot becomes a matter of opinion, and securing funding to scale it becomes much harder than it needs to be.",
          "It is also worth deciding what failure looks like. Set a time box and a small number of criteria that would lead you to stop or change direction. This is not pessimism; it protects budget and credibility. Stopping a weak use case early frees people and funding for stronger ones, and the lessons learned about data quality, user adoption or integration effort usually improve the next round of prioritisation."
        ]
      },
      {
        "heading": "Build a repeatable pipeline",
        "paragraphs": [
          "Identifying use cases should not be a one-off exercise. As teams gain experience, they will spot better opportunities, and the technology will continue to change what is practical. A light governance process, with a standard intake template, a regular review forum and clear criteria, turns scattered ideas into a managed portfolio. It also helps leadership see where investment is going and which business areas are ready for more ambitious work.",
          "Some organisations run this process entirely in-house. Others work with a partner such as MomentumX to facilitate discovery sessions, give an independent view on technical feasibility and bring patterns observed across different sectors. Either way, the priorities should remain owned by the business, with technology teams and any external advisers supporting the decisions rather than making them on the organisation’s behalf."
        ]
      }
    ],
    "takeaways": [
      "Describe every idea as a business problem with an owner, a current state and a measurable outcome.",
      "Score use cases on value and feasibility together, and treat low-feasibility ideas as signals for foundational work.",
      "Confirm data availability, Arabic and English coverage and residency requirements before prioritising.",
      "Agree baselines, targets and stop criteria before development begins."
    ],
    "image": {
      "src": "https://images.unsplash.com/photo-1598520106830-8c45c2035460",
      "alt": "person writing on glass whiteboard with diagrams",
      "credit": {
        "name": "Kvalifik",
        "url": "https://unsplash.com/@kvalifik"
      }
    }
  },
  {
    "slug": "from-dashboards-to-decision-intelligence",
    "title": "From dashboards to decision intelligence",
    "category": "data & intelligence",
    "serviceSlug": "data-and-intelligence",
    "date": "Sep 2026",
    "readTime": "3 min read",
    "summary": "Dashboards show what happened; leaders need help deciding what to do next. How to connect data, analytics and AI directly to the decisions that matter.",
    "intro": "Most organisations have invested in dashboards. Executives review monthly performance, operations teams track service levels and finance monitors budgets through business intelligence tools. Yet many leaders still find that dashboards describe what happened without helping them decide what to do next. Decision intelligence is a way of closing that gap. It connects data, analytics and business context to specific decisions, so that insight leads to action. This article explains what that shift involves and how to approach it pragmatically.",
    "sections": [
      {
        "heading": "Why dashboards reach their limits",
        "paragraphs": [
          "Dashboards are good at showing status and trends. They are less effective when the question is why a metric moved, what is likely to happen next or which action would produce the best outcome. Many organisations accumulate dozens of reports that overlap, use different definitions of the same measure and are rarely opened after launch. Users then export data to spreadsheets to do the analysis they actually need, which creates version control problems and hides the logic behind decisions.",
          "The root issue is often that dashboards were designed around available data rather than around decisions. A report may show every sales metric the system captures without being clear which decision it supports or who is responsible for acting. Recognising this is the first step. The aim is not to discard dashboards, which remain useful for monitoring, but to connect analytics more directly to the choices people make."
        ]
      },
      {
        "heading": "Start from the decisions that matter",
        "paragraphs": [
          "Decision intelligence begins by identifying a small number of high-value, recurring decisions. Examples include how much stock to hold at each location, which customers to prioritise for retention, how to allocate field teams, when to schedule maintenance or how to price a service. For each, document who makes the decision, how often, what information they use today, what constraints apply and how the outcome is judged.",
          "This framing clarifies what data and analysis are actually needed. It may reveal that a decision depends on data that is not currently captured, or that the real bottleneck is not insight but the approval process that follows. It also creates a shared language between business and technical teams, because the conversation centres on outcomes and trade-offs rather than on tables, tools and visualisations."
        ]
      },
      {
        "heading": "Layer analytics according to the decision",
        "paragraphs": [
          "Different decisions call for different levels of analytical support. Some need better descriptive reporting with consistent definitions. Others benefit from diagnostic analysis that explains drivers, predictive models that forecast demand or risk, or prescriptive tools that recommend actions and simulate scenarios. Generative AI can add a conversational layer, letting users ask questions of data in plain Arabic or English and receive explanations, though answers must be grounded in governed data to be trusted.",
          "Match the sophistication to the value and frequency of the decision. A daily operational decision made hundreds of times may justify automation, with human oversight for exceptions. A quarterly strategic decision may be better served by scenario models that support discussion. Keep people accountable for decisions, make the reasoning behind recommendations visible and record outcomes so that models and rules can be improved over time."
        ]
      },
      {
        "heading": "Build the data foundations",
        "paragraphs": [
          "None of this works without reliable data. Establish clear ownership of key data domains, agree common definitions for important measures and invest in data quality where it affects priority decisions. A modern data platform that brings together operational, financial and customer data, with a semantic layer that defines metrics once, reduces the time spent reconciling figures and makes analysis reusable across teams.",
          "Governance and regulation deserve early attention. Organisations in the UAE, Saudi Arabia and elsewhere in the GCC must consider national data protection laws, sector rules and data residency requirements when designing platforms and selecting cloud services. Access controls, audit trails and documentation of how models are built and used help satisfy regulators and build internal confidence. Decision intelligence depends on trust as much as on technology."
        ]
      },
      {
        "heading": "Moving forward in stages",
        "paragraphs": [
          "Start with one or two decisions where better support would make a visible difference, deliver a working solution and assess whether decisions and outcomes improve. Use that experience to refine data foundations, governance and ways of working before expanding. Invest in data literacy so that decision-makers understand what models can and cannot tell them, and review which existing dashboards can be retired.",
          "MomentumX can work with organisations to identify priority decisions, strengthen data foundations and build analytics and AI capabilities that fit existing systems and regional regulatory requirements. The emphasis should remain on decisions and the people who make them, with technology introduced only where it clearly improves the quality, consistency or speed of those choices, and where teams are ready to use it with confidence."
        ]
      }
    ],
    "takeaways": [
      "Design analytics around specific, recurring decisions rather than around available data.",
      "Match the level of analytics, from reporting to prescriptive models, to the value and frequency of each decision.",
      "Invest in shared metric definitions, data quality and governance before scaling.",
      "Keep people accountable, make recommendations explainable and track outcomes."
    ],
    "image": {
      "src": "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      "alt": "performance analytics graphs on a laptop screen",
      "credit": {
        "name": "Luke Chesser",
        "url": "https://unsplash.com/@lukechesser"
      }
    }
  },
  {
    "slug": "what-should-you-automate-first",
    "title": "What should you automate first?",
    "category": "automation & enterprise solutions",
    "serviceSlug": "automation-and-enterprise-solutions",
    "date": "Aug 2026",
    "readTime": "4 min read",
    "summary": "A practical way to choose a first automation project that is valuable, achievable and a sound foundation for the programme that follows.",
    "intro": "Most organisations have no shortage of candidates for automation. Finance teams re-key invoices, operations teams chase approvals by email, and customer service staff copy details between systems that were never designed to talk to each other. The harder question is where to start. Picking the wrong first project can consume budget, frustrate staff and make the next business case harder to win. This article sets out a practical way to choose a first automation that is valuable, achievable and a sound foundation for what follows.",
    "sections": [
      {
        "heading": "Start with the work, not the tool",
        "paragraphs": [
          "Automation programmes often begin with a platform decision: a robotic process automation licence, a workflow suite or an AI service. It is more useful to begin with a clear inventory of the work itself. Ask each function to list the tasks that are repetitive, rule-based and high in volume, and to describe how those tasks are triggered, what systems they touch and where they tend to go wrong. This exercise surfaces candidates that leadership may not see, and it grounds later tool choices in real requirements rather than vendor demonstrations.",
          "Pay attention to the hidden steps. A process described as ‘approve a purchase order’ may in practice involve checking a spreadsheet, messaging a manager and waiting for a reply before anything is entered in the ERP. These informal steps are where delays and errors accumulate, and they are also where automation can deliver the clearest improvement. Mapping them honestly, including the workarounds people rarely mention, gives you a realistic picture of effort and benefit."
        ]
      },
      {
        "heading": "Score candidates on value and feasibility",
        "paragraphs": [
          "Once you have a list, score each candidate against a small set of criteria. On the value side, consider volume, time spent per case, the cost of errors, customer impact and compliance exposure. On the feasibility side, consider how stable the rules are, whether the input data is structured, how many systems are involved and whether those systems offer reliable integration points. A simple view of value against feasibility is usually enough to separate the obvious first moves from ambitious ideas that need more groundwork.",
          "The best first project tends to sit in the high-value, high-feasibility group but is not necessarily the single highest-value item. A process that touches a core system of record, crosses several departments and depends on unstructured documents may offer large returns, yet it carries more delivery risk. Choosing something slightly smaller that can go live within a few months builds confidence, proves the operating model and creates reusable components such as integrations, logging and exception handling."
        ]
      },
      {
        "heading": "Look for stable, well-understood processes",
        "paragraphs": [
          "Automation amplifies whatever process it is applied to. If the process is inconsistent, poorly documented or under active redesign, automating it simply produces inconsistent outcomes faster. Before committing, confirm that the process owner can describe the rules clearly, that exceptions are known and reasonably rare, and that no major policy or system change is planned in the coming year. Where a process is still changing, it is often better to standardise it first and automate it later.",
          "Regional context matters here. Organisations operating across the UAE, Saudi Arabia and Oman may run the same process differently in each country because of local regulation, language requirements or legacy systems. A first automation that works in one entity but cannot be extended elsewhere limits its value. Where possible, choose a process that is already harmonised, or treat harmonisation as an explicit part of the project scope."
        ]
      },
      {
        "heading": "Avoid common first-project pitfalls",
        "paragraphs": [
          "Several pitfalls recur. The first is automating around a broken integration instead of fixing it, which creates fragile bots that fail whenever a screen changes. The second is neglecting exception handling, leaving staff to discover failed transactions days later. The third is measuring success only by hours saved, when the more important benefits may be accuracy, auditability or faster response to customers. Agree a small set of measures before you start, and capture a baseline so improvement can be demonstrated honestly.",
          "Another pitfall is leaving the people who do the work out of the design. They understand the edge cases, and they will be the ones supervising the automation once it is live. Involve them early, explain how their role will change and give them a clear route to flag problems. Automation that staff trust tends to be used and improved; automation imposed without explanation is often quietly bypassed."
        ]
      },
      {
        "heading": "Building from the first win",
        "paragraphs": [
          "A successful first project should leave behind more than a single working workflow. Document the governance model, the approach to testing and change control, the monitoring set-up and the criteria used to prioritise. These become the basis of a repeatable pipeline, so the second and third automations are faster and cheaper to deliver. Many organisations find it useful to establish a small centre of excellence at this point, even if it is only a few people, to own standards and the backlog.",
          "A partner such as MomentumX can help run the discovery and scoring exercise, design integrations that suit your existing systems and set up the operating model alongside your own teams. The aim is to keep knowledge and ownership in-house as the programme grows, so that each new automation builds on the foundations and lessons learned from the one before it."
        ]
      }
    ],
    "takeaways": [
      "Inventory the work and its informal steps before choosing an automation platform.",
      "Score candidates on value and feasibility, and favour a first project that can go live within months.",
      "Standardise unstable or inconsistent processes before automating them.",
      "Agree measures and a baseline up front, and involve the people who do the work."
    ],
    "image": {
      "src": "https://images.unsplash.com/photo-1531403009284-440f080d1e12",
      "alt": "person arranging planning notes on a board",
      "credit": {
        "name": "Alvaro Reyes",
        "url": "https://unsplash.com/@alvarordesign"
      }
    }
  },
  {
    "slug": "ai-agents-vs-copilots",
    "title": "AI agents vs copilots: choosing the right approach",
    "category": "AI solutions & intelligent systems",
    "serviceSlug": "ai-solutions-and-intelligent-systems",
    "date": "Aug 2026",
    "readTime": "4 min read",
    "summary": "Copilots assist people while agents act on their behalf. How to choose between them based on the work, the tolerance for error and the controls you can apply.",
    "intro": "As generative AI moves into everyday business tools, two approaches have become common. Copilots work alongside people, suggesting content, answers or actions that a human reviews and applies. Agents go further, planning and carrying out multi-step tasks with a degree of autonomy, often by using other systems on the user’s behalf. Both have a place, but they carry different risks, costs and design demands. Choosing well depends less on what the technology can do and more on the nature of the work, the tolerance for error and the controls you can put in place.",
    "sections": [
      {
        "heading": "Understanding the difference",
        "paragraphs": [
          "A copilot keeps a person in control of each step. It might draft an email reply, summarise a contract, suggest code or answer a question from internal documents. The user decides whether to accept, edit or ignore the output. Because a human reviews the result before anything happens, the consequences of an occasional error are usually contained, and responsibility for the final action remains clear.",
          "An agent is given a goal and the ability to act. It might gather information from several systems, decide on the next step, update records, trigger workflows or communicate with other services, with human involvement only at defined checkpoints. This can remove significant manual effort from repetitive, multi-step processes. It also means errors can propagate across systems before anyone notices, so the design must account for how the agent is constrained, monitored and stopped."
        ]
      },
      {
        "heading": "When a copilot is the better choice",
        "paragraphs": [
          "Copilots suit work where judgement, context and accountability matter, and where the output is one input into a human decision. Examples include drafting policy documents, preparing customer correspondence, analysing reports or supporting advisors who deal with complex queries. They are also a sensible starting point for organisations early in their AI journey, because they build familiarity and trust while keeping risk low and governance relatively straightforward.",
          "The trade-off is that copilots deliver value only when people use them, and the time saved depends on how much review each output needs. If users must check every sentence carefully, the benefit can be modest. Success depends on good integration into existing tools, outputs that are reliably useful and training that helps people know when to rely on the copilot and when to be cautious."
        ]
      },
      {
        "heading": "When an agent makes sense",
        "paragraphs": [
          "Agents are best suited to processes that are well defined, frequent and rule-bound, where the steps are known and the outcome can be checked. Examples include triaging and routing service requests, reconciling records across systems, preparing standard reports or handling routine updates in back-office operations. In these settings, removing manual hand-offs between systems can shorten processing times and free staff to focus on exceptions that genuinely need attention.",
          "Before deploying an agent, ask what the worst plausible error would be and how quickly it would be detected. If an agent could send incorrect information to customers, approve payments or change master data, the controls need to be strong: limited permissions, approval steps for high-impact actions, detailed logging and the ability to roll back. Where those controls are hard to implement, a copilot or a narrower automation may be the more responsible choice."
        ]
      },
      {
        "heading": "Designing the controls",
        "paragraphs": [
          "Whichever approach you choose, treat the AI as a participant in your systems with its own identity and permissions. Give it access only to the data and actions it needs, and apply the same security reviews you would to any integration. For agents, define explicit boundaries: which systems it can call, which actions require human approval and what happens when it is uncertain. Clear escalation paths matter as much as the model’s capabilities.",
          "Observability is essential. Record the inputs, intermediate steps, tool calls and outputs so that behaviour can be reviewed and audited. In regulated sectors across the GCC, the ability to explain why a system took an action, and to demonstrate that sensitive data stayed within approved environments, will often be required. Build evaluation into the design as well, testing the system against realistic scenarios, including Arabic and mixed-language inputs where your users rely on them."
        ]
      },
      {
        "heading": "A practical path forward",
        "paragraphs": [
          "Many organisations find that the choice is not either-or. A sensible progression is to start with a copilot that supports a process, learn where outputs are consistently reliable, then automate those specific steps with agent capabilities while keeping people involved in the rest. This builds evidence and trust gradually and gives governance teams time to develop controls that match the level of autonomy being introduced.",
          "When assessing options, involve process owners, security, risk and the people who will work with the system day to day. A partner such as MomentumX can help evaluate processes, design the controls and build the integrations, but the decision about how much autonomy to grant should rest with those accountable for the outcome, and it should be revisited as confidence and evidence grow."
        ]
      }
    ],
    "takeaways": [
      "Use copilots where human judgement and accountability are central, and agents for well-defined, repeatable processes.",
      "Assess the worst plausible error and how quickly it would be detected before granting autonomy.",
      "Give AI systems their own identity, least-privilege access and full logging.",
      "Start with assistance, then automate the steps that prove consistently reliable."
    ],
    "image": {
      "src": "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      "alt": "laptop screen showing programming code",
      "credit": {
        "name": "Arnold Francisca",
        "url": "https://unsplash.com/@clark_fransa"
      }
    }
  },
  {
    "slug": "computer-vision-in-retail-operations",
    "title": "Computer vision in retail operations",
    "category": "smart & connected technology",
    "serviceSlug": "smart-and-connected-technology",
    "date": "Jul 2026",
    "readTime": "3 min read",
    "summary": "Computer vision can show retailers what happens on the shop floor, from queues to empty shelves. Practical uses, deployment choices and the governance questions to address.",
    "intro": "Retailers have used CCTV for security for decades. Computer vision applies AI models to camera feeds to extract operational information: how many shoppers enter, where queues form, which shelves are empty and whether planograms are followed. Used well, it can give store and regional managers a clearer, more timely view of what happens on the shop floor. Used carelessly, it can create privacy concerns, unreliable alerts and costly infrastructure. This article looks at practical applications, deployment choices and the governance questions retail leaders should address.",
    "sections": [
      {
        "heading": "Practical applications",
        "paragraphs": [
          "Common use cases fall into a few groups. Footfall and occupancy counting shows traffic patterns by hour and entrance. Queue detection alerts staff when waiting lines exceed an agreed length, so additional tills can be opened. Shelf monitoring identifies gaps, misplaced items and pricing label issues. Heat maps of store zones show which displays attract attention and which areas are overlooked. Loss prevention applications flag unusual activity at self-checkouts or in restricted areas.",
          "The strongest business cases usually connect to an action that someone takes. An empty shelf alert only matters if replenishment staff receive it promptly and have stock available. Queue data only helps if managers can redeploy staff. Before selecting use cases, map the operational workflow that will respond to each insight, and confirm who is accountable for acting on it."
        ]
      },
      {
        "heading": "Choosing where processing happens",
        "paragraphs": [
          "Video can be analysed on devices near the camera, on a server in the store, or in the cloud. Edge processing reduces bandwidth, lowers latency for real-time alerts and means raw footage does not need to leave the site, which helps with privacy and data residency. Cloud processing offers easier model updates and central management, but requires reliable connectivity and careful handling of where footage is stored.",
          "Many retailers use a hybrid model: detection runs at the edge and only anonymised events or counts are sent to a central platform. When evaluating options, consider the existing camera estate, since older cameras may lack the resolution or angle needed for shelf analysis, as well as store network capacity, maintenance responsibilities across many locations and how models will be updated consistently."
        ]
      },
      {
        "heading": "Accuracy, testing and store conditions",
        "paragraphs": [
          "Models that perform well in a vendor demonstration may struggle in a specific store. Lighting changes, reflective packaging, seasonal displays, crowded aisles and camera angles all affect accuracy. Run a pilot in a representative set of stores, including busy and quiet locations, and measure false positives and missed detections against manual observation. Agree acceptable thresholds with operations teams before scaling.",
          "Alert fatigue is a common pitfall. If staff receive too many inaccurate notifications, they stop responding, and the system loses its value quickly. Start with conservative thresholds, review alert quality weekly during the early months and adjust them with input from store teams. Plan for ongoing retraining as store layouts, product ranges and fixtures change, rather than assuming a model will remain accurate indefinitely."
        ]
      },
      {
        "heading": "Privacy and trust",
        "paragraphs": [
          "Cameras in retail environments capture customers and employees, so governance must be considered from the start. Favour approaches that detect objects and count people without identifying them, blur faces where footage is retained, and keep retention periods short. Facial recognition raises significant legal and ethical questions and should not be introduced without a clear legal basis, a documented assessment and senior approval.",
          "Across the GCC, personal data protection laws in the UAE and Saudi Arabia, along with local rules on CCTV use, set expectations on notice, purpose limitation and storage. Clear signage in Arabic and English, consultation with staff about how data will and will not be used, and restricting access to raw footage all help maintain trust with shoppers and employees."
        ]
      },
      {
        "heading": "Scaling across a store network",
        "paragraphs": [
          "Moving from a pilot to dozens or hundreds of stores introduces operational questions. Who monitors camera health and model performance? How are incidents escalated? How does vision data combine with point-of-sale, inventory and staffing systems to give a complete picture? Standardised installation guides, central device management and a clear support model reduce the variation that often appears when each store is set up differently.",
          "A phased approach tends to work best: prove value with one or two use cases, build the integration and governance foundations, then extend to further stores and applications. A partner such as MomentumX can help retailers assess their camera estate, design edge and cloud architecture and put monitoring in place so that accuracy holds as store layouts and product ranges change."
        ]
      }
    ],
    "takeaways": [
      "Link every vision use case to a workflow and a person responsible for acting on it.",
      "Pilot in representative stores and measure accuracy against manual observation.",
      "Prefer edge processing and anonymised outputs where privacy or bandwidth is a concern.",
      "Avoid facial recognition unless there is a clear legal basis and documented approval."
    ],
    "image": {
      "src": "https://images.unsplash.com/photo-1534723452862-4c874018d66d",
      "alt": "grocery store aisle with stocked shelves",
      "credit": {
        "name": "Fikri Rasyid",
        "url": "https://unsplash.com/@fikrirasyid"
      }
    }
  },
  {
    "slug": "designing-enterprise-websites-around-user-journeys",
    "title": "Designing enterprise websites around user journeys",
    "category": "digital experience & platforms",
    "serviceSlug": "digital-experience-and-platforms",
    "date": "Jul 2026",
    "readTime": "3 min read",
    "summary": "Enterprise websites often mirror the organisation chart. Designing around user journeys starts from what people are trying to do and shapes content and systems to support it.",
    "intro": "Enterprise websites often grow around the organisation’s structure. Each department adds its own section, navigation mirrors the organisation chart and important tasks are buried several clicks deep. Users, however, arrive with specific goals: finding a service, comparing options, checking eligibility, contacting the right team or completing a transaction. Designing around user journeys means starting from those goals and shaping content, navigation and functionality to support them. This article sets out a practical approach for enterprise teams.",
    "sections": [
      {
        "heading": "Identify who uses the site and why",
        "paragraphs": [
          "Begin by defining the main audiences and their most important tasks. For a large organisation this may include prospective customers, existing customers, partners, investors, job seekers, media and regulators. For each, identify the handful of tasks that matter most. Draw on analytics, search logs, contact centre enquiries and conversations with front-line staff, as well as direct research with users. Internal assumptions about what people want are often incomplete.",
          "Be specific about context. A procurement manager in Riyadh researching suppliers on a desktop has different needs from a customer in Dubai checking a service on a phone between meetings. Language preference matters too: many users in the region switch between Arabic and English, and some tasks are more naturally completed in one language than the other. Capture these differences in simple task descriptions grounded in evidence."
        ]
      },
      {
        "heading": "Map journeys end to end",
        "paragraphs": [
          "A journey map describes the steps a user takes to achieve a goal, the questions they have at each stage, the channels they use and the points where they encounter friction. For enterprise websites, journeys rarely start and end on the site. A user may see a social post, search, visit the site, call the contact centre and then return to complete an application. Mapping the full sequence reveals where the website helps, where it hands off and where the handoffs break.",
          "Focus on a small number of priority journeys rather than attempting to map everything. For each, document the current experience honestly, including dead ends, duplicated content and forms that ask for information already provided. Then design the target journey, noting what content, features and integrations are needed. This becomes a practical brief for design and development, and a reference point for decisions later in the project."
        ]
      },
      {
        "heading": "Structure content and navigation around tasks",
        "paragraphs": [
          "Once journeys are clear, organise the information architecture around them. Group content by what users are trying to do, use labels they recognise rather than internal terminology and make the most common tasks reachable from the home page and search. Card sorting and tree testing with real users are inexpensive ways to check that a proposed structure makes sense before visual design begins.",
          "Arabic and English versions deserve equal attention. Mirrored layouts, typography that works well in both scripts and content written natively rather than translated literally all affect whether a journey feels coherent. Where content differs between languages or countries, make that explicit in the content model so it is managed deliberately. Search should handle both scripts and common spelling variations, since many users navigate primarily by searching."
        ]
      },
      {
        "heading": "Connect the website to the systems behind it",
        "paragraphs": [
          "Many journeys cannot be completed with content alone. Checking an order, booking an appointment, requesting a quote or updating account details depends on integration with CRM, ERP, booking or case management systems. Identify these dependencies early, because they often determine timelines and budget more than front-end design does. Where a full integration is not yet possible, design an interim path that is honest with users about what happens next.",
          "Pay particular attention to forms and handoffs. Pre-fill information when a user is signed in, validate inputs clearly, confirm submission with a reference number and send a follow-up message through the channel the user prefers. Make sure enquiries reach the right team and that someone is accountable for responding. A well-designed front end loses much of its value if the process behind it is slow or opaque."
        ]
      },
      {
        "heading": "Measure and improve over time",
        "paragraphs": [
          "Define success measures for each priority journey, such as task completion, time to complete, drop-off points and the number of related contact centre calls. Review them regularly and test changes with real users. Treat the website as a product with an owner and a backlog rather than a project that ends at launch, and revisit journeys as services, regulations and user expectations change.",
          "A partner such as MomentumX can help with user research, journey mapping and bilingual content design, and with connecting the website to the platforms that journeys depend on. The most durable results come when internal teams own the journeys and the measures, with outside support focused on building lasting internal capability rather than replacing it, and on handing over the tools and methods needed to keep improving."
        ]
      }
    ],
    "takeaways": [
      "Base design decisions on evidence about users’ most important tasks, not on the organisation chart.",
      "Map a small number of priority journeys end to end, including offline and contact centre steps.",
      "Design Arabic and English experiences with equal care, including search across both scripts.",
      "Identify system integrations early and measure journey completion after launch."
    ],
    "image": {
      "src": "https://images.unsplash.com/photo-1576153192396-180ecef2a715",
      "alt": "designer sketching interface layouts on paper",
      "credit": {
        "name": "Amélie Mourichon",
        "url": "https://unsplash.com/@amayli"
      }
    }
  },
  {
    "slug": "is-your-organisation-ready-for-ai",
    "title": "Is your organisation ready for AI?",
    "category": "AI consulting & transformation",
    "serviceSlug": "ai-consulting-and-transformation",
    "date": "Jun 2026",
    "readTime": "4 min read",
    "summary": "AI readiness is not a single score. A look at strategy, data, technology, people and governance, and how to prioritise the gaps that matter most.",
    "intro": "AI readiness is often discussed as if it were a single score. In practice it is a set of conditions that together determine whether an organisation can move from interest to sustained results. Some are technical, such as data quality and infrastructure. Others are organisational, such as leadership alignment, skills and the willingness to change how work is done. Few organisations are fully ready in every area, and that is normal. The aim of an honest assessment is to know where the gaps are and which ones matter for the initiatives you plan to pursue.",
    "sections": [
      {
        "heading": "Strategy and leadership alignment",
        "paragraphs": [
          "Readiness starts with clarity about why the organisation is investing in AI. Is the priority efficiency, customer experience, new revenue, risk management or a combination? When leaders hold different assumptions, projects are pulled in competing directions and funding decisions become inconsistent. A useful test is to ask several senior leaders separately to describe the top three outcomes they expect from AI over the next two years. If the answers differ significantly, alignment work should come before large commitments.",
          "Leadership readiness also means accepting that some initiatives will not succeed and that value often takes longer to appear than early demonstrations suggest. Organisations that treat every pilot as a test of the whole AI agenda tend to become cautious after the first setback. Those that plan for a portfolio, with a mix of quick wins and longer-term capability building, are better placed to learn and adjust without losing momentum or executive confidence."
        ]
      },
      {
        "heading": "Data foundations",
        "paragraphs": [
          "Most AI initiatives depend on data that is accurate, accessible and understood. Ask whether key datasets have clear owners, whether definitions are consistent across departments and whether teams can access the data they need without weeks of manual requests. Unstructured content matters too: policies, contracts, emails and reports often hold the knowledge that generative AI use cases rely on, yet they are frequently scattered across shared drives and legacy systems with inconsistent permissions.",
          "In the GCC, data readiness also includes understanding where data may be stored and processed. National data protection laws and sector regulators set expectations around residency, cross-border transfer and classification. Knowing which datasets are sensitive, and what that means for hosting and model choices, avoids delays once a project is underway. Bilingual content adds another dimension, since the quality of Arabic data and the way models handle it can differ from English."
        ]
      },
      {
        "heading": "Technology and infrastructure",
        "paragraphs": [
          "The technical question is less about having the latest platforms and more about whether existing systems can support AI in production. Can core applications expose data and accept outputs through APIs? Is there a cloud or hybrid environment approved for AI workloads? Are identity, logging and monitoring in place so that AI services can be secured and audited like any other enterprise system? Gaps here do not prevent experimentation, but they will slow the move to scale.",
          "A common pitfall is building pilots in isolated environments that bear little resemblance to production. The pilot succeeds, but moving it into the real estate requires significant re-engineering and fresh security reviews. Where possible, run early work on infrastructure that reflects your eventual target environment, even if at a smaller scale. This makes lessons more transferable and gives technology teams a realistic view of what operating AI will involve."
        ]
      },
      {
        "heading": "People, skills and ways of working",
        "paragraphs": [
          "AI changes how work is done, so readiness depends on people as much as systems. Consider whether business teams understand what AI can and cannot do, whether there are people who can translate business needs into technical requirements and whether technical teams have experience with model evaluation, prompt design and operating machine learning systems. Not all of these skills need to be hired. Many can be developed through training, practical project involvement and working alongside experienced partners.",
          "Equally important is how employees perceive the change. If staff see AI mainly as a threat to their roles, adoption will be slow regardless of technical quality. Clear communication about intent, early involvement of the people whose work will change and visible support from line managers all make a difference. Readiness assessments should include conversations with frontline teams, not only with senior stakeholders and IT."
        ]
      },
      {
        "heading": "Governance and next steps",
        "paragraphs": [
          "Governance determines whether AI can be used responsibly and consistently. Check whether there is an agreed policy on acceptable use, a process for assessing risk before deployment and clear accountability for AI outputs that affect customers or decisions. Governance does not need to be heavy at the start, but it should be proportionate to the risks involved and should evolve as use across the organisation grows.",
          "Once gaps are identified, prioritise them against your planned initiatives rather than trying to close all of them at once. An organisation can run a well-scoped pilot while data and governance work proceeds in parallel. A partner such as MomentumX can support a structured readiness assessment and roadmap, but the most valuable outcome is a shared internal understanding of where the organisation stands and what it will take to progress."
        ]
      }
    ],
    "takeaways": [
      "Test leadership alignment by asking senior leaders separately what outcomes they expect from AI.",
      "Review data ownership, access, residency and Arabic and English content quality before committing to use cases.",
      "Run pilots on infrastructure that resembles production to avoid costly re-engineering.",
      "Close readiness gaps in order of the initiatives they block, not all at once."
    ],
    "image": {
      "src": "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
      "alt": "man standing beside another sitting man using computer",
      "credit": {
        "name": "Proxyclick Visitor Management System",
        "url": "https://unsplash.com/@proxyclick"
      }
    }
  },
  {
    "slug": "why-ai-systems-need-ongoing-management",
    "title": "Why AI systems need ongoing management",
    "category": "managed services",
    "serviceSlug": "managed-services",
    "date": "Jun 2026",
    "readTime": "3 min read",
    "summary": "AI systems can lose accuracy, grow in cost and pick up new risks after launch, even when no code changes. What ongoing management involves and how to plan for it.",
    "intro": "Launching an AI system is often treated as the finish line. In practice, it marks the start of a different kind of work. Unlike conventional software, which behaves the same way until someone changes it, AI systems can become less accurate as the world around them changes, even when no code has been touched. Costs, risks and user expectations also shift over time. This article explains why AI requires ongoing management, what that management involves and how organisations can plan for it from the beginning.",
    "sections": [
      {
        "heading": "Models degrade as conditions change",
        "paragraphs": [
          "A model learns patterns from historical data. When customer behaviour, market conditions, products or processes change, those patterns may no longer hold. A demand forecast trained before a new competitor entered the market, or a document classifier built before a new form was introduced, can gradually produce worse results. This is often called drift, and it rarely announces itself with an obvious failure.",
          "Generative AI systems face similar issues in a different form. An assistant that answers staff questions from company documents will give outdated answers if policies change and the content is not refreshed. Underlying foundation models are also updated or retired by providers, which can change tone, accuracy or behaviour. Without monitoring, these changes may only come to light when a user complains."
        ]
      },
      {
        "heading": "What should be monitored",
        "paragraphs": [
          "Monitoring for AI goes beyond checking whether a service is running. Useful measures include prediction accuracy against actual outcomes, the distribution of input data compared with training data, the rate at which users override or reject recommendations and, for generative systems, the quality and relevance of responses based on sampled reviews. Operational measures such as response time, error rates and usage volumes remain important too.",
          "Cost is a distinct area. Usage-based pricing for cloud AI services means spending can grow quickly as adoption increases or prompts become longer. Track cost per transaction or per user alongside the value delivered, and set alerts for unusual spikes. Reviewing model choice periodically is worthwhile, as a smaller or more efficient model may perform adequately for some tasks at lower cost."
        ]
      },
      {
        "heading": "Managing risk, security and compliance",
        "paragraphs": [
          "AI systems introduce risks that change over time. New techniques for manipulating inputs, such as prompt injection, emerge regularly. Data used for retrieval may accidentally include sensitive documents. Outputs may show bias that was not apparent at launch. Ongoing management should include periodic security testing, access reviews, checks on what data the system can reach and a clear process for handling reported issues.",
          "Regulation is also evolving. Across the GCC, authorities have issued AI ethics principles and guidance, and personal data protection laws in the UAE and Saudi Arabia apply to data processed by AI systems. Keeping records of model versions, training data sources, approvals and incidents makes it much easier to respond to audits and to demonstrate responsible use as expectations develop."
        ]
      },
      {
        "heading": "Defining ownership and processes",
        "paragraphs": [
          "A frequent pitfall is unclear ownership after launch. The project team moves on, the vendor contract covers infrastructure only and the business team assumes someone else is watching performance. Assign a business owner accountable for outcomes and a technical owner responsible for model health. Agree service levels for accuracy, availability and response to incidents, and schedule regular reviews where both examine performance data together.",
          "Establish a clear process for updates. Retraining or changing a model should follow testing and approval steps, with the ability to roll back if results worsen. For systems used by bilingual Arabic and English audiences, evaluation should cover both languages, since quality can differ between them. Documenting these procedures helps the organisation manage change consistently rather than reacting to each issue as it arises."
        ]
      },
      {
        "heading": "Planning for the full lifecycle",
        "paragraphs": [
          "The effort and budget needed after launch are often underestimated. When approving an AI initiative, include the cost of monitoring tools, periodic retraining, content updates, security reviews and the people needed to run them. Consider when a system should be retired or replaced, and what criteria would trigger that decision. Planning this upfront avoids systems that quietly lose value while still consuming budget.",
          "Some organisations build an internal capability for AI operations, while others use a managed service from a partner such as MomentumX to handle monitoring, maintenance and improvement alongside their own teams, keeping business ownership internal. Either way, the underlying principle is the same: an AI system should be managed as a living service with clear accountability, not as a completed project."
        ]
      }
    ],
    "takeaways": [
      "Monitor accuracy, input changes, user feedback and cost, not only uptime.",
      "Assign both a business owner and a technical owner before launch.",
      "Test and approve model updates, with a clear way to roll back.",
      "Budget for ongoing monitoring, retraining and security reviews from the start."
    ],
    "image": {
      "src": "https://images.unsplash.com/photo-1780299511230-099abe21bf38",
      "alt": "operator working at video and audio control equipment",
      "credit": {
        "name": "Qeis Ismail",
        "url": "https://unsplash.com/@trileafu"
      }
    }
  }
];
