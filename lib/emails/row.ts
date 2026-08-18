import { escapeHtml } from "../escape-html";

export function row(label: string, value: string) {
  return `<tr>
    <td style="width:140px;padding:14px 16px 14px 0;vertical-align:top;border-bottom:1px solid #e6e6e6;color:#737373;font-size:13px;line-height:1.4;font-family:Arial,Helvetica,sans-serif;">${escapeHtml(label)}</td>
    <td style="padding:14px 0;vertical-align:top;border-bottom:1px solid #e6e6e6;color:#050505;font-size:16px;line-height:1.5;font-family:Arial,Helvetica,sans-serif;word-break:break-word;">${value}</td>
  </tr>`;
}
