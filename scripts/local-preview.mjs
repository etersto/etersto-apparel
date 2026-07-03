import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "out");
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

const requiredFields = ["name", "email", "country", "quantity", "message"];

function sendJson(response, body, status = 200) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(body));
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function readRequestBody(request) {
  const chunks = [];
  for await (const chunk of request) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

async function handleInquiry(request, response) {
  if (request.method !== "POST") {
    sendJson(response, { ok: false, error: "Use POST to submit an inquiry." }, 405);
    return;
  }

  let payload;
  try {
    payload = JSON.parse(await readRequestBody(request));
  } catch {
    sendJson(response, { ok: false, error: "Invalid JSON payload." }, 400);
    return;
  }

  const missing = requiredFields.filter((field) => !payload[field]?.trim());
  if (missing.length > 0) {
    sendJson(response, { ok: false, error: "Missing required fields.", missing }, 400);
    return;
  }

  if (!isEmail(payload.email || "")) {
    sendJson(response, { ok: false, error: "Invalid email address." }, 400);
    return;
  }

  console.log("Local inquiry preview:", {
    receivedAt: new Date().toISOString(),
    toEmail: process.env.INQUIRY_TO_EMAIL || "etersto@outlook.com",
    ...payload
  });

  sendJson(response, { ok: true });
}

async function serveStatic(request, response) {
  const url = new URL(request.url || "/", `http://localhost:${port}`);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname.endsWith("/")) {
    pathname += "index.html";
  }

  const filePath = normalize(join(root, pathname));
  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const file = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream"
    });
    response.end(file);
  } catch {
    const notFound = await readFile(join(root, "404.html")).catch(() => null);
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    response.end(notFound || "Not found");
  }
}

const server = createServer(async (request, response) => {
  if (request.url?.startsWith("/api/inquiry")) {
    await handleInquiry(request, response);
    return;
  }

  await serveStatic(request, response);
});

server.listen(port, () => {
  console.log(`Etersto Apparel local preview running at http://localhost:${port}`);
  console.log("Use this preview when testing the inquiry form locally.");
});
