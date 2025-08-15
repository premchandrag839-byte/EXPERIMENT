import { appendEnquiry } from "../../lib/server/enquiry";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { name, email, phone, message } = req.body || {};
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    const record = {
      name,
      email,
      phone,
      message,
      createdAt: new Date().toISOString(),
    };

    appendEnquiry(record);

    // Send email notification via Gmail SMTP (requires APP PASSWORD)
    try {
      const smtpUser = process.env.NOTIFY_EMAIL_USER;
      const rawPass = process.env.NOTIFY_EMAIL_PASS;
      const smtpPass = (rawPass || '').replace(/\s+/g, '');
      if (!smtpUser || !smtpPass) {
        // eslint-disable-next-line no-console
        console.warn('Email not sent: NOTIFY_EMAIL_USER/PASS not configured');
      } else {
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: { user: smtpUser, pass: smtpPass },
        });

        const toAddress = 'akashinterclg@gmail.com';
        const subject = 'New Online Enquiry';
        const text = `New enquiry submitted:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${message}\n\nSubmitted at: ${record.createdAt}`;
        const html = `
          <h2>New Online Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong><br/>${(message || '').replace(/\n/g,'<br/>')}</p>
          <p><em>Submitted at: ${record.createdAt}</em></p>
        `;

        await transporter.sendMail({
          from: smtpUser,
          to: toAddress,
          subject,
          text,
          html,
          replyTo: email || smtpUser,
        });
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Email notification failed:', e?.message || e);
    }

    // Optional: simple console log admins can watch in server logs
    // In production, integrate email/Slack later
    // eslint-disable-next-line no-console
    console.log("New enquiry:", { name, email, phone });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ ok: false, error: "Failed to store enquiry" });
  }
}


