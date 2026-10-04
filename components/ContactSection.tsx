"use client";

export default function ContactSection() {
  const phone1 = "+91 9769651185";
  const phone2 = "+91 8308899222";
  const phone1Raw = "+919769651185";
  const phone2Raw = "+918308899222";
  const email = "hridayaconsultancy@gmail.com";
  const address =
    "C-251, 2nd floor, Golden Park Society, Opp. Parvati Talkies, Sai Nagar, Vasai West, Dist Palghar - 401202, Maharashtra";
  const mapsQuery = encodeURIComponent(
    "Hridaya Consultancy, Golden Park Society, Vasai West, Palghar, Maharashtra"
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{
        backgroundColor: "var(--bg-light)",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label">Reach Us</span>
          <div className="section-divider" style={{ margin: "0.75rem auto 1.5rem" }} />
          <h2
            id="contact-heading"
            style={{
              fontFamily: "'Merriweather', Georgia, serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "var(--navy-primary)",
              marginBottom: "0.75rem",
            }}
          >
            Contact Information
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "var(--text-muted)",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            You can reach Hridaya Consultancy via phone, WhatsApp or email.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
          className="contact-grid"
        >
          {/* LEFT: Contact cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* Phone 1 */}
            <a
              href={`tel:${phone1Raw}`}
              style={{ textDecoration: "none" }}
              aria-label={`Call ${phone1}`}
            >
              <div
                className="card-base"
                style={{
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--navy-primary)";
                  el.style.boxShadow = "0 4px 16px rgba(23, 36, 95, 0.1)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border-light)";
                  el.style.boxShadow = "0 1px 4px rgba(23, 36, 95, 0.04)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(23, 36, 95, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "var(--navy-primary)",
                  }}
                  aria-hidden="true"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "2px" }}>
                    Phone
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 600, color: "var(--navy-primary)" }}>
                    {phone1}
                  </div>
                </div>
                <div style={{ marginLeft: "auto", color: "var(--red-accent)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Phone 2 */}
            <a
              href={`tel:${phone2Raw}`}
              style={{ textDecoration: "none" }}
              aria-label={`Call ${phone2}`}
            >
              <div
                className="card-base"
                style={{
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--navy-primary)";
                  el.style.boxShadow = "0 4px 16px rgba(23, 36, 95, 0.1)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border-light)";
                  el.style.boxShadow = "0 1px 4px rgba(23, 36, 95, 0.04)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(23, 36, 95, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "var(--navy-primary)",
                  }}
                  aria-hidden="true"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "2px" }}>
                    Alternate Phone
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 600, color: "var(--navy-primary)" }}>
                    {phone2}
                  </div>
                </div>
                <div style={{ marginLeft: "auto", color: "var(--red-accent)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/919769651185?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20consultancy%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              aria-label="Chat on WhatsApp"
            >
              <div
                className="card-base"
                style={{
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#25D366";
                  el.style.boxShadow = "0 4px 16px rgba(37, 211, 102, 0.15)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border-light)";
                  el.style.boxShadow = "0 1px 4px rgba(23, 36, 95, 0.04)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(37, 211, 102, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "#25D366",
                  }}
                  aria-hidden="true"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "2px" }}>
                    WhatsApp
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 600, color: "var(--navy-primary)" }}>
                    Chat on WhatsApp
                  </div>
                </div>
                <div style={{ marginLeft: "auto", color: "#25D366" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              style={{ textDecoration: "none" }}
              aria-label={`Email ${email}`}
            >
              <div
                className="card-base"
                style={{
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--red-accent)";
                  el.style.boxShadow = "0 4px 16px rgba(201, 54, 62, 0.1)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border-light)";
                  el.style.boxShadow = "0 1px 4px rgba(23, 36, 95, 0.04)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(201, 54, 62, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "var(--red-accent)",
                  }}
                  aria-hidden="true"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "2px" }}>
                    Email
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "var(--navy-primary)", wordBreak: "break-all" }}>
                    {email}
                  </div>
                </div>
                <div style={{ marginLeft: "auto", flexShrink: 0, color: "var(--red-accent)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Address */}
            <div
              className="card-base"
              style={{
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(23, 36, 95, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "var(--navy-primary)",
                  marginTop: "2px",
                }}
                aria-hidden="true"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>
                  Office Address
                </div>
                <address
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--navy-primary)",
                    lineHeight: 1.65,
                    fontStyle: "normal",
                  }}
                >
                  C-251, 2nd floor, Golden Park Society,<br />
                  Opp. Parvati Talkies, Sai Nagar,<br />
                  Vasai West, Dist Palghar - 401202,<br />
                  Maharashtra
                </address>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    marginTop: "0.625rem",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "var(--red-accent)",
                    textDecoration: "none",
                  }}
                  aria-label="Get directions to Hridaya Consultancy office"
                >
                  Get Directions
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Map */}
          <div>
            <div
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid var(--border-light)",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(23, 36, 95, 0.06)",
                height: "100%",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Map header */}
              <div
                style={{
                  padding: "1rem 1.25rem",
                  borderBottom: "1px solid var(--border-light)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{ fontFamily: "'Merriweather', serif", fontSize: "0.9rem", fontWeight: 700, color: "var(--navy-primary)" }}>
                  Visit Our Office
                </span>
              </div>

              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.2!2d72.8!3d19.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIyJzEyLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin&q=Hridaya+Consultancy+Golden+Park+Society+Vasai+West+Palghar+Maharashtra"
                width="100%"
                style={{ flex: 1, border: "none", minHeight: "320px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hridaya Consultancy Office Location - Vasai West, Palghar"
                aria-label="Map showing Hridaya Consultancy office in Vasai West, Maharashtra"
              />

              {/* Map footer */}
              <div style={{ padding: "0.875rem 1.25rem", borderTop: "1px solid var(--border-light)", textAlign: "center" }}>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--navy-primary)",
                    textDecoration: "none",
                  }}
                  aria-label="Open location in Google Maps"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  View in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
