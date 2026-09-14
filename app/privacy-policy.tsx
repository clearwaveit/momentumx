const UPDATED = "14 September 2026";
const CONTACT_EMAIL = "hello@momentumxme.com";

type Block = { heading: string; paragraphs?: string[]; items?: string[]; after?: string[] };

const SECTIONS: Block[] = [
  {
    heading: "Who we are",
    paragraphs: [
      "This policy explains how MomentumX (“MomentumX”, “we”, “us”) collects and uses personal data when you visit momentumxme.com or contact us through it. MomentumX is based at 605, Tower A, Empire Heights, Business Bay, Dubai, United Arab Emirates, and works through Momentum’s offices across the UAE, Saudi Arabia, Qatar, Bahrain, Kuwait and Jordan.",
      "We handle personal data in line with the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data and, where it applies to people in Saudi Arabia, the Saudi Personal Data Protection Law."
    ]
  },
  {
    heading: "What we collect",
    items: [
      "Information you give us through the enquiry form: your name, email address, company (optional), the details of your project or question, and your confirmation that we may contact you about it.",
      "Information you send us directly, for example by email or phone.",
      "Basic technical information that web servers record automatically, such as your IP address, browser type and the pages requested. We use this to keep the site running, secure and protected from abuse, including limiting repeated form submissions."
    ],
    after: [
      "We do not use advertising or analytics cookies on this website, and we do not ask for special categories of data such as health or financial information. Please do not include such information in the enquiry form."
    ]
  },
  {
    heading: "How we use your information",
    items: [
      "To reply to your enquiry and discuss how we might work together.",
      "To send you an automatic confirmation that we received your message.",
      "To keep records of our business conversations.",
      "To protect the website against spam, fraud and misuse.",
      "To meet legal, regulatory or accounting obligations."
    ],
    after: [
      "We rely on your consent when you submit the form, on our legitimate interest in responding to business enquiries and running a secure website, and on legal obligations where they apply. We do not sell your personal data or use it for automated decisions that affect you."
    ]
  },
  {
    heading: "Who we share it with",
    paragraphs: [
      "We only share personal data with service providers who help us operate the website and respond to you, and only for those purposes:"
    ],
    items: [
      "Brevo (Sendinblue SAS), which delivers the enquiry and confirmation emails on our behalf.",
      "Our website hosting provider, which stores and serves the site and its server logs.",
      "Content providers that serve some images and videos on our pages, such as Unsplash and video hosting services. Your browser connects to them directly when a page loads, which shares your IP address with them."
    ]
  },
  {
    heading: "International transfers",
    paragraphs: [
      "Some of these providers process data outside the UAE or Saudi Arabia, including in the European Union and the United States. Where that happens, we take reasonable steps to make sure your data remains protected, for example through contractual safeguards with the provider."
    ]
  },
  {
    heading: "How long we keep it",
    paragraphs: [
      "We keep enquiry details for as long as needed to respond and to maintain a record of our discussions, and generally no longer than 24 months after our last contact unless we go on to work together or the law requires us to keep it longer. Server logs are kept for a short period for security purposes."
    ]
  },
  {
    heading: "Your rights",
    paragraphs: ["Subject to applicable law, you can ask us to:"],
    items: [
      "Tell you what personal data we hold about you and provide a copy.",
      "Correct information that is inaccurate or incomplete.",
      "Delete your information, or restrict how we use it.",
      "Stop using your information where we rely on consent or legitimate interest.",
      "Transfer your information to another organisation where technically feasible."
    ]
  },
  {
    heading: "Security",
    paragraphs: [
      "We use reasonable technical and organisational measures to protect personal data, including encrypted connections to the website and access controls on the systems that hold enquiries. No online service can be guaranteed fully secure, so please contact us straight away if you believe your information has been put at risk."
    ]
  },
  {
    heading: "Links to other websites",
    paragraphs: [
      "Our pages link to other websites, such as clients’ sites, photographers’ profiles and map services. Their privacy practices are their own, and we recommend reading their policies."
    ]
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this policy as our website or the law changes. The latest version will always be on this page, with the date it was last updated."
    ]
  }
];

export function PrivacyPolicy() {
  return (
    <>
      <section className="legalHero">
        <p className="legalEyebrow">legal</p>
        <h1>privacy policy</h1>
        <p className="legalUpdated">Last updated {UPDATED}</p>
      </section>
      <article className="legalBody">
        {SECTIONS.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.items ? (
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {section.after?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        <section>
          <h2>Contact us</h2>
          <p>
            To exercise your rights or ask a question about this policy, email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or call +971 4 569 3033. We aim to respond within
            30 days. If you are not satisfied with our response, you may contact the relevant data protection authority,
            such as the UAE Data Office or, in Saudi Arabia, the Saudi Data &amp; AI Authority (SDAIA).
          </p>
        </section>
      </article>
    </>
  );
}
