import { escapeHtml } from "../escape-html";

export function userConfirmationTemplate(data: { name: string }) {
  const name = escapeHtml(data.name);

  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:32px 16px;background:#f6f6f6;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;">
      <tr>
        <td style="padding:28px 32px;background:#050505;color:#ffffff;">
          <p style="margin:0 0 8px;color:#f3ed48;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;">MomentumX</p>
          <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:300;line-height:1.2;">Thanks for reaching out</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:32px;color:#050505;font-size:16px;line-height:1.6;">
          <p style="margin:0 0 16px;">Hi ${name},</p>
          <p style="margin:0 0 16px;">We have received your message and someone from the MomentumX team will be in touch shortly.</p>
          <p style="margin:0;">Kind regards,<br />MomentumX</p>
        </td>
      </tr>
      <tr>
        <td style="padding:18px 32px;background:#f0f0f0;color:#737373;font-size:13px;line-height:1.5;">
          This is an automated confirmation. If you did not contact us, you can ignore this email.
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
