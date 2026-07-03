const requiredFields = ["name", "email", "country", "quantity", "message"];

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

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

  const missing = requiredFields.filter((field) => !payload[field]?.trim());

  if (missing.length > 0) {
    return jsonResponse({ ok: false, error: "Missing required fields.", missing }, 400);
  }

  if (!isEmail(payload.email || "")) {
    return jsonResponse({ ok: false, error: "Invalid email address." }, 400);
  }

  const inquiry = {
    receivedAt: new Date().toISOString(),
    toEmail: context.env.INQUIRY_TO_EMAIL || "etersto@outlook.com",
    ...payload
  };

  // Production hooks:
  // 1. Verify Turnstile token.
  // 2. Send email through the selected provider.
  // 3. Store the inquiry in Google Sheets or Airtable.
  console.log("New Etersto Apparel inquiry", inquiry);

  return jsonResponse({ ok: true });
}

export async function onRequestGet() {
  return jsonResponse({ ok: false, error: "Use POST to submit an inquiry." }, 405);
}
