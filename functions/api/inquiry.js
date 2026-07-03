import { Resend } from "resend";

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

const requiredFields = ["name", "email", "country", "quantity", "message"];

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function onRequestPost(context) {
  let payload;

  try {
    payload = await context.request.json();
  } catch {
    return jsonResponse({ ok: false, error: "Invalid JSON payload." }, 400);
  }

  const missing = requiredFields.filter((field) => {
    const value = payload[field];
    return !value || String(value).trim() === "";
  });

  if (missing.length > 0) {
    return jsonResponse({ ok: false, error: "Missing required fields", missing }, 400);
  }

  if (!isEmail(payload.email)) {
    return jsonResponse({ ok: false, error: "Invalid email" }, 400);
  }

  // ✅ 正确读取 Cloudflare env
  const resend = new Resend(context.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Etersto Inquiry <onboarding@resend.dev>",
      to: "etersto@outlook.com",
      subject: `New Inquiry from ${payload.name}`,
      html: `
        <h2>New Inquiry</h2>
        <p><b>Name:</b> ${payload.name}</p>
        <p><b>Email:</b> ${payload.email}</p>
        <p><b>Country:</b> ${payload.country}</p>
        <p><b>Quantity:</b> ${payload.quantity}</p>
        <p><b>Message:</b> ${payload.message}</p>
      `
    });

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({
      ok: false,
      error: "Email send failed",
      detail: err.message
    }, 500);
  }
}

export async function onRequestGet() {
  return jsonResponse({ ok: false, error: "Use POST" }, 405);
}