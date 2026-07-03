const requiredFields = ["name", "email", "country", "quantity", "message"];

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export async function onRequestPost(context) {
  let payload;

  try {
    payload = await context.request.json();
  } catch {
    return jsonResponse({ ok: false, error: "Invalid JSON" }, 400);
  }

  const missing = requiredFields.filter((field) => {
    const value = payload[field];
    return !value || String(value).trim() === "";
  });

  if (missing.length > 0) {
    return jsonResponse(
      { ok: false, error: "Missing fields", missing },
      400
    );
  }

  // ✅ 暂时只做记录（确保系统稳定）
  console.log("INQUIRY RECEIVED:", payload);

  return jsonResponse({
    ok: true,
    message: "received"
  });
}

export async function onRequestGet() {
  return jsonResponse(
    { ok: false, error: "Use POST" },
    405
  );
}