function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}

const requiredFields = ["name", "email", "country", "quantity", "message"];

export async function onRequestPost(context) {
  const payload = await context.request.json();

  const missing = requiredFields.filter(
    (f) => !payload[f] || String(payload[f]).trim() === ""
  );

  if (missing.length) {
    return jsonResponse({ ok: false, missing }, 400);
  }

  const apiKey = context.env.RESEND_API_KEY;

  if (!apiKey) {
    return jsonResponse({ ok: false, error: "Missing API key" }, 500);
  }

  // ✅ 直接调用 Resend HTTP API（不会 build fail）
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Etersto Inquiry <onboarding@resend.dev>",
      to: "etersto@outlook.com",
      subject: `New Inquiry - ${payload.name}`,
      html: `
        <h2>New Inquiry</h2>
        <p><b>Name:</b> ${payload.name}</p>
        <p><b>Email:</b> ${payload.email}</p>
        <p><b>Country:</b> ${payload.country}</p>
        <p><b>Quantity:</b> ${payload.quantity}</p>
        <p><b>Message:</b> ${payload.message}</p>
      `
    })
  });

  const data = await res.json();

  return jsonResponse({
    ok: true,
    result: data
  });
}

export async function onRequestGet() {
  return jsonResponse({ ok: false, error: "Use POST" }, 405);
}