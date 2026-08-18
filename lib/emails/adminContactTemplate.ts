import { escapeHtml } from "../escape-html";
import { row } from "./row";

export function adminContactTemplate(data: {
  name: string;
  email: string;
  company?: string;
  projectDetails: string;
}) {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const company = escapeHtml(data.company || "—");
  const projectDetails = escapeHtml(data.projectDetails).replaceAll("\n", "<br />");

  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:32px 16px;background:#f6f6f6;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;">
      <tr>
        <td style="padding:28px 32px;background:#050505;color:#ffffff;">
          <p style="margin:0 0 8px;color:#f3ed48;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;">MomentumX</p>
          <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:300;line-height:1.2;">New enquiry</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:32px;">
          <p style="margin:0 0 24px;color:#050505;font-size:16px;line-height:1.5;">A new enquiry was submitted on MomentumX.</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row("Name", name)}
            ${row("Email", `<a href="mailto:${email}" style="color:#050505;text-decoration:underline;">${email}</a>`)}
            ${row("Company", company)}
            ${row("Project details", projectDetails)}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:18px 32px;background:#f0f0f0;color:#737373;font-size:13px;line-height:1.5;">
          Reply directly to this email to respond to the sender.
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
