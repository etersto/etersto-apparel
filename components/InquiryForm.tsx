"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "error";

const initialForm = {
  name: "",
  email: "",
  whatsapp: "",
  company: "",
  country: "",
  productType: "T-shirt",
  quantity: "",
  customization: "",
  hasTechPack: "No",
  message: "",
  sourcePage: "/"
};

export default function InquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("The inquiry could not be submitted.");
      }

      window.location.href = "/thank-you/";
    } catch {
      setStatus("error");
      setError("Please try again or email etersto@outlook.com directly.");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Name
          <input
            required
            name="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
          />
        </label>
        <label>
          Email
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="name@company.com"
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          WhatsApp
          <input
            name="whatsapp"
            value={form.whatsapp}
            onChange={(event) => updateField("whatsapp", event.target.value)}
            placeholder="+1 000 000 0000"
          />
        </label>
        <label>
          Company
          <input
            name="company"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="Brand or company"
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Country
          <input
            required
            name="country"
            value={form.country}
            onChange={(event) => updateField("country", event.target.value)}
            placeholder="United States"
          />
        </label>
        <label>
          Product type
          <select
            name="productType"
            value={form.productType}
            onChange={(event) => updateField("productType", event.target.value)}
          >
            <option>T-shirt</option>
            <option>Sweatshirt</option>
            <option>Hoodie</option>
            <option>Mixed apparel order</option>
          </select>
        </label>
      </div>
      <div className="form-row">
        <label>
          Estimated quantity
          <input
            required
            name="quantity"
            value={form.quantity}
            onChange={(event) => updateField("quantity", event.target.value)}
            placeholder="50 / 300 / 1000 pcs"
          />
        </label>
        <label>
          Do you have a tech pack?
          <select
            name="hasTechPack"
            value={form.hasTechPack}
            onChange={(event) => updateField("hasTechPack", event.target.value)}
          >
            <option>No</option>
            <option>Yes</option>
            <option>In progress</option>
          </select>
        </label>
      </div>
      <label>
        Customization needs
        <input
          name="customization"
          value={form.customization}
          onChange={(event) => updateField("customization", event.target.value)}
          placeholder="Fabric, weight, print, embroidery, labels, packaging"
        />
      </label>
      <label>
        Message
        <textarea
          required
          name="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us your target style, fabric, artwork and delivery needs."
          rows={5}
        />
      </label>
      {error ? <p className="form-error">{error}</p> : null}
      <button className="primary-button form-button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
      </button>
      <p className="form-note">
        First-version endpoint reserves email, spreadsheet and Turnstile integration hooks for
        Cloudflare Pages.
      </p>
    </form>
  );
}
