export const metadata = {
  title: "Thank You | Etersto Apparel",
  description: "Your apparel manufacturing inquiry has been received by Etersto Apparel."
};

export default function ThankYouPage() {
  return (
    <main className="simple-page">
      <p className="eyebrow">Inquiry received</p>
      <h1>Thank you for contacting Etersto Apparel.</h1>
      <p>
        Your inquiry has been submitted. Our team will review your product type, quantity,
        customization details and target market, then reply by email or WhatsApp.
      </p>
      <p>
        For urgent requests, email us directly at{" "}
        <a href="mailto:etersto@outlook.com">etersto@outlook.com</a> or message us on WhatsApp at{" "}
        <a href="https://wa.me/8615103222220">+86 15103222220</a>.
      </p>
      <div className="simple-actions">
        <a className="primary-button" href="/">
          Back to Home
        </a>
      </div>
    </main>
  );
}
