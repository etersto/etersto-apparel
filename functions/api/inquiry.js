import { Resend } from "resend";

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}

const requiredFields = ["name", "email", "country", "quantity", "message"];

export async function onRequestPost(context) {
  const payload = await context.request.json();

  // 1. 检查字段
  const missing = requiredFields.filter(
    (f) => !payload[f] || String(payload[f]).trim() === ""
  );

  if (missing.length) {
    return jsonResponse({ ok: false, missing }, 400);
  }

  // 2. 正确读取 Cloudflare 环境变量（重点）
  const apiKey = context.env.RESEND_API_KEY;

  if (!apiKey) {
    return jsonResponse({
      ok: false,
      error: "Missing RESEND_API_KEY in Cloudflare"
    }, 500);
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Etersto Inquiry <onboarding@resend.dev>",
      to: "smftr@gmail.com", // ← 改成你的真实邮箱
      subject: `New Inquiry - ${payload.name}`,
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
      error: err.message
    }, 500);
  }
}

export async function onRequestGet() {
  return jsonResponse({ ok: false, error: "Use POST" }, 405);
}