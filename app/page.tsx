import HeroCarousel from "@/components/HeroCarousel";
import InquiryForm from "@/components/InquiryForm";
import Image from "next/image";
const stats = [
  ["2024", "Founded"],
  ["300K pcs", "Monthly capacity"],
  ["50 pcs", "MOQ"],
  ["Within 2 days", "Sample lead time"],
  ["10K pcs/day", "Bulk production"]
];

const products = [
  {
    title: "Custom T-Shirts",
    text: "Basic, oversized, fitted, cropped, drop-shoulder, kids and plus-size cuts for private label apparel brands.",
    image: "/images/products/tshirt.jpg"
  },
  {
    title: "Custom Sweatshirts",
    text: "Midweight and heavyweight sweatshirt programs with custom fabric, rib, labels, prints and packaging.",
    image: "/images/products/sweatshirt.jpg"
  },
  {
    title: "Custom Hoodies",
    text: "Pullover and zip hoodie manufacturing with drawcord, pocket, trim, embroidery and wash customization.",
    image: "/images/products/hoodie.jpg"
  }
];

const customization = [
  "Pure cotton, combed cotton, washed cotton, slub cotton, organic cotton",
  "Quick-dry sports fabric, brushed fabric, light fleece, ice silk, polyester cotton",
  "160g, 180g, 200g, 220g and 240g custom fabric weights",
  "Oversize, slim, cropped, drop shoulder, couples, kids and plus-size fits",
  "Screen printing, DTG, heat transfer, sublimation, embroidery and special prints",
  "Tie-dye, garment dye, vintage wash, stone wash and Pantone color matching"
];

const privateLabel = [
  "Custom neck label",
  "Printed neck label",
  "Blank tee programs",
  "Care label in multiple languages",
  "Custom hang tag",
  "Custom polybag",
  "Neutral white-label packaging",
  "Custom carton printing"
];

const process = [
  "Inquiry",
  "Tech Pack Review",
  "Quotation",
  "Sample",
  "Bulk Production",
  "Quality Control",
  "Packing & Shipping"
];

const markets = [
  "United States",
  "Canada",
  "Europe",
  "Middle East",
  "Asia-Pacific",
  "Latin America",
  "Africa",
  "Australia & New Zealand"
];

const faqs = [
  {
    q: "What is your MOQ?",
    a: "Our starting MOQ is 50 pcs, depending on style, fabric, color and customization requirements."
  },
  {
    q: "How fast can you make samples?",
    a: "Sample development can be completed within 2 days after requirements, artwork and fabric direction are confirmed."
  },
  {
    q: "Do you support private labels?",
    a: "Yes. We support neck labels, care labels, hang tags, custom polybags, neutral packaging and carton marks."
  },
  {
    q: "What files do you need for quotation?",
    a: "A tech pack is ideal. If you do not have one, send product photos, size requirements, fabric preference, artwork and estimated quantity."
  },
  {
    q: "Can you handle OEM and ODM orders?",
    a: "Yes. We support OEM production from your designs and ODM development with factory-provided style and artwork support."
  },
  {
    q: "Where do you ship?",
    a: "We work with customers across North America, Europe, Asia-Pacific, the Middle East, Latin America, Africa and Oceania."
  }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Etersto Apparel home">
          <span className="brand-mark">EA</span>
          <span>Etersto Apparel</span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#products">Products</a>
          <a href="#customization">Customization</a>
          <a href="#process">Process</a>
          <a href="#quality">Quality</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-cta" href="#quote">
          Get Quote
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-content">
          <p className="eyebrow">OEM / ODM apparel manufacturing from China</p>
          <h1 className="hero-title-stack" aria-label="Custom T-Shirts, Sweatshirts and Hoodies Manufacturer">
            <span>
              <span className="product-icon product-icon-tshirt" aria-hidden="true" />
              Custom T-Shirts
            </span>
            <span>
              <span className="product-icon product-icon-sweatshirt" aria-hidden="true" />
              Custom Sweatshirts
            </span>
            <span>
              <span className="product-icon product-icon-hoodie" aria-hidden="true" />
              Custom Hoodies Manufacturer
            </span>
          </h1>
          <p className="hero-copy">
            Low MOQ, fast sampling, private labels and export-ready packaging for growing apparel
            brands.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#quote">
              Start an Inquiry
            </a>
            <a className="secondary-button" href="#customization">
              View Capabilities
            </a>
          </div>
        </div>
        <HeroCarousel />
      </section>

      <section className="stats-band" aria-label="Factory highlights">
        {stats.map(([value, label]) => (
          <div className="stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="products">
        <div className="section-heading">
          <p className="eyebrow">Products</p>
          <h2>Core apparel programs for private label brands</h2>
          <p>
            Start with T-shirts, sweatshirts and hoodies, then customize fabric, cut, print, labels
            and packaging around your brand requirements.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
<div className="product-image">
  <Image
    src={product.image}
    alt={product.title}
    width={600}
    height={450}
  />
</div>
              <div>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section" id="customization">
        <div className="split-copy">
          <p className="eyebrow">Customization</p>
          <h2>Fabric, fit, print and finishing options in one factory workflow</h2>
          <p>
            Build apparel around your market, not around stock limitations. Choose the fabric hand
            feel, weight, garment shape, print process, labels and packaging details that fit your
            brand.
          </p>
        </div>
        <div className="capability-list">
          {customization.map((item) => (
            <div className="capability-item" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="private-label-section">
        <div className="section-heading compact">
          <p className="eyebrow">Private label</p>
          <h2>Change labels, tags and packaging for a ready-to-sell brand experience</h2>
        </div>
        <div className="label-grid">
          {privateLabel.map((item) => (
            <div className="label-item" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="split-section media-left" id="quality">
<div className="factory-placeholder">
  <Image
    src="/images/factory/qc-packing.jpeg"
    alt="Quality inspection and packing"
    width={800}
    height={600}
  />
</div>
        <div className="split-copy">
          <p className="eyebrow">Quality control</p>
          <h2>Production built for export-ready consistency</h2>
          <p>
            From fabric checks to final packing, every order is managed around clear specifications,
            sample approval and practical inspection points before shipment.
          </p>
          <ul className="check-list">
            <li>Fabric and color confirmation before production</li>
            <li>Pre-production sample review for fit, print and trims</li>
            <li>In-line inspection during cutting, sewing and finishing</li>
            <li>Final inspection and carton marking before shipment</li>
          </ul>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-heading">
          <p className="eyebrow">Process</p>
          <h2>A clear manufacturing path from inquiry to shipment</h2>
        </div>
        <div className="process-grid">
          {process.map((step, index) => (
            <div className="process-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="markets-section">
        <div>
          <p className="eyebrow">Export markets</p>
          <h2>Serving buyers across major apparel markets</h2>
        </div>
        <div className="market-list">
          {markets.map((market) => (
            <span key={market}>{market}</span>
          ))}
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Answers before you send a tech pack</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((faq) => (
            <article className="faq-item" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-section" id="quote">
        <div className="quote-copy">
          <p className="eyebrow">Get quote</p>
          <h2>Tell us what you want to manufacture</h2>
          <p>
            Share your product type, quantity, fabric direction and customization needs. If you have
            a tech pack, mention it in the message and our team will review the requirements.
          </p>
          <div className="contact-panel">
            <strong>Contact</strong>
            <a href="mailto:etersto@outlook.com">etersto@outlook.com</a>
            <a href="https://wa.me/8615103222220">WhatsApp: +86 15103222220</a>
            <span>Suning County, Cangzhou City, Hebei Province, China</span>
          </div>
        </div>
        <InquiryForm />
      </section>

      <footer className="site-footer">
        <div>
          <strong>Etersto Apparel</strong>
          <p>Custom T-shirts, sweatshirts and hoodies for private label brands.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:etersto@outlook.com">etersto@outlook.com</a>
          <a href="/privacy/">Privacy</a>
        </div>
      </footer>
    </main>
  );
}
