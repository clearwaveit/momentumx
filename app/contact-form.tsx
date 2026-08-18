"use client";

import { FormEvent, useState } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormFields = {
  name: string;
  email: string;
  company: string;
  projectDetails: string;
  consent: boolean;
  website: string;
};

type FieldErrors = Partial<Record<keyof FormFields, string>>;
type Status = "idle" | "loading" | "error" | "success";

const emptyForm: FormFields = {
  name: "",
  email: "",
  company: "",
  projectDetails: "",
  consent: false,
  website: ""
};

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const updateField = <K extends keyof FormFields>(key: K, value: FormFields[K]) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) {
        return current;
      }
      const next = { ...current };
      delete next[key];
      return next;
    });
  };

  const validate = () => {
    const nextErrors: FieldErrors = {};

    if (!fields.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!fields.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!EMAIL_PATTERN.test(fields.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!fields.projectDetails.trim()) {
      nextErrors.projectDetails = "Please tell us about your project.";
    }
    if (!fields.consent) {
      nextErrors.consent = "Please confirm we can contact you about this enquiry.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") {
      return;
    }

    if (!validate()) {
      setStatus("error");
      setStatusMessage("Please check the highlighted fields.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          company: fields.company.trim(),
          projectDetails: fields.projectDetails.trim(),
          consent: fields.consent,
          website: fields.website
        })
      });
      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        setStatus("error");
        setStatusMessage(data?.message || "Unable to send your message right now. Please try again.");
        return;
      }

      setStatus("success");
      setStatusMessage(data.message || "Thanks — your message has been sent.");
      setErrors({});
      setFields(emptyForm);
    } catch {
      setStatus("error");
      setStatusMessage("Unable to send your message right now. Please try again.");
    }
  };

  return (
    <section className="contactForm sectionPad">
      <h2>send us a message</h2>
      <form noValidate onSubmit={onSubmit}>
        <div className="contactHoneypot" aria-hidden="true">
          <label htmlFor="contact-website">website</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={fields.website}
            onChange={(event) => updateField("website", event.target.value)}
          />
        </div>
        <div className="contactFields">
          <div className="contactField">
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="name"
              maxLength={120}
              autoComplete="name"
              value={fields.name}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              className={errors.name ? "isInvalid" : undefined}
              onChange={(event) => updateField("name", event.target.value)}
            />
            {errors.name ? (
              <p id="contact-name-error" role="alert">
                {errors.name}
              </p>
            ) : null}
          </div>
          <div className="contactField">
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="email"
              maxLength={254}
              autoComplete="email"
              value={fields.email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              className={errors.email ? "isInvalid" : undefined}
              onChange={(event) => updateField("email", event.target.value)}
            />
            {errors.email ? (
              <p id="contact-email-error" role="alert">
                {errors.email}
              </p>
            ) : null}
          </div>
          <div className="contactField">
            <input
              id="contact-company"
              name="company"
              type="text"
              placeholder="company"
              maxLength={160}
              autoComplete="organization"
              value={fields.company}
              onChange={(event) => updateField("company", event.target.value)}
            />
          </div>
          <div className="contactField contactFieldWide">
            <textarea
              id="contact-project"
              name="projectDetails"
              placeholder="tell us about your project!"
              maxLength={5000}
              value={fields.projectDetails}
              aria-invalid={Boolean(errors.projectDetails)}
              aria-describedby={errors.projectDetails ? "contact-project-error" : undefined}
              className={errors.projectDetails ? "isInvalid" : undefined}
              onChange={(event) => updateField("projectDetails", event.target.value)}
            />
            {errors.projectDetails ? (
              <p id="contact-project-error" role="alert">
                {errors.projectDetails}
              </p>
            ) : null}
          </div>
        </div>
        <label className="contactConsent">
          <input
            id="contact-consent"
            name="consent"
            type="checkbox"
            checked={fields.consent}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "contact-consent-error" : undefined}
            onChange={(event) => updateField("consent", event.target.checked)}
          />
          <span>I consent to MomentumX contacting me about this enquiry.</span>
        </label>
        {errors.consent ? (
          <p id="contact-consent-error" role="alert">
            {errors.consent}
          </p>
        ) : null}
        <button type="submit" className="buttonLink" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "submit enquiry"}
        </button>
        {statusMessage ? (
          <p
            className={status === "success" ? "contactStatus isSuccess" : "contactStatus isError"}
            role="status"
          >
            {statusMessage}
          </p>
        ) : null}
      </form>
    </section>
  );
}
