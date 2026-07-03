import { Resend } from "resend";

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}

const requiredFields = ["name", "email", "country", "quantity", "message"];

export async function onRequestPost(context) {
  let payload;

  try {
    payload = await context.request.json();
  } catch {
    return jsonResponse({ ok: false, error: "Invalid JSON" }, 400);
  }

  const missing = requiredFields.filter((f) => {
    const v = payload[f];
    return !v || String(v).trim() === "";
  });

  if (missing.length) {
    return jsonResponse({ ok: false, error: "Missing fields", missing }, 400);
  }

  // ✅ 读取 Cloudflare env
  const resend = new Resend(context.env.RESEND_API_KEY);

  try {
    const result = await resend.emails.send({
      from: "Etersto Inquiry <onboarding@resend.dev>",
      to: "etersto@outlook.com",   // 👈 改成你的邮箱
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

    return jsonResponse({ ok: true, result });
  } catch (err) {
    return jsonResponse({
      ok: false,
      error: "Email failed",
      detail: err.message
    }, 500);
  }
}

export async function onRequestGet() {
  return jsonResponse({ ok: false, error: "Use POST" }, 405);
}