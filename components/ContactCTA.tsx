"use client";

export default function ContactCTA() {
  const handleCall = () => {
    window.location.href = "tel:+919769651185";
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919769651185?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20consultancy%20services.",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <section
      id="cta"
      aria-label="Contact Hridaya Consultancy"
      style={{
        backgroundColor: "var(--navy-primary)",
        paddingTop: "4.5rem",
        paddingBottom: "4.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.05)",
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-30px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.04)",
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "20%",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "var(--red-accent)",
          opacity: 0.5,
        }}
        aria-hidden="true"
      />

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Label */}
        <span
          style={{
            display: "inline-block",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--red-accent)",
            backgroundColor: "rgba(201, 54, 62, 0.12)",
            padding: "4px 12px",
            borderRadius: "3px",
            marginBottom: "1.25rem",
          }}
        >
          Get in Touch
        </span>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Merriweather', Georgia, serif",
            fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
            fontWeight: 700,
            color: "var(--white)",
            lineHeight: 1.25,
            marginBottom: "1.125rem",
          }}
        >
          Need Assistance With Labour Law or Business Licences?
        </h2>

        {/* Supporting text */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
            marginBottom: "2.25rem",
            maxWidth: "520px",
            margin: "0 auto 2.25rem",
          }}
        >
          Get in touch with Hridaya Consultancy to discuss your requirements. We
          are available on call and WhatsApp for your convenience.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <button
            onClick={handleCall}
            id="cta-call-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "var(--white)",
              color: "var(--navy-primary)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              padding: "0.875rem 2rem",
              borderRadius: "4px",
              border: "2px solid var(--white)",
              cursor: "pointer",
              textDecoration: "none",
              transition: "all 0.2s ease",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "var(--bg-light)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "var(--white)";
            }}
            aria-label="Call Hridaya Consultancy"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Now
          </button>

          <button
            onClick={handleWhatsApp}
            id="cta-whatsapp-btn"
            className="btn-whatsapp"
            style={{ padding: "0.875rem 2rem", fontSize: "0.9rem", fontWeight: 700 }}
            aria-label="Chat with Hridaya Consultancy on WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </button>
        </div>
      </div>
    </section>
  );
}
