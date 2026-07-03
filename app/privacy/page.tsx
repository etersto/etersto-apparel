export const metadata = {
  title: "Privacy Policy | Etersto Apparel",
  description: "Privacy policy for Etersto Apparel inquiry and manufacturing website."
};

export default function PrivacyPage() {
  return (
    <main className="simple-page">
      <p className="eyebrow">Privacy policy</p>
      <h1>Privacy Policy</h1>
      <p>
        Etersto Apparel collects inquiry information so we can review manufacturing requirements,
        prepare quotations and communicate with potential customers.
      </p>

      <h2>Information we collect</h2>
      <p>
        We may collect your name, email, WhatsApp number, company, country, product type, estimated
        quantity, customization needs and message details submitted through the inquiry form.
      </p>

      <h2>How we use information</h2>
      <p>
        We use submitted information to respond to inquiries, prepare quotes, discuss samples,
        support order communication and improve our website. We do not sell personal information.
      </p>

      <h2>Third-party services</h2>
      <p>
        The website may use Cloudflare Pages, email delivery providers, analytics tools and
        spreadsheet or CRM services to process inquiries and maintain site reliability.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, contact us at{" "}
        <a href="mailto:etersto@outlook.com">etersto@outlook.com</a>.
      </p>

      <div className="simple-actions">
        <a className="primary-button" href="/">
          Back to Home
        </a>
      </div>
    </main>
  );
}
