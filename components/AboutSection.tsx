"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{
        backgroundColor: "var(--bg-light)",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3.5rem",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* LEFT: About Content */}
        <div>
          <span className="section-label">About Us</span>
          <div className="section-divider" />

          <h2
            id="about-heading"
            style={{
              fontFamily: "'Merriweather', Georgia, serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "var(--navy-primary)",
              lineHeight: 1.25,
              marginBottom: "1.5rem",
            }}
          >
            About Hridaya Consultancy
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "var(--text-muted)",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            <strong style={{ color: "var(--navy-primary)" }}>Hridaya Consultancy</strong> is a
            professional consultancy based in Vasai West, Maharashtra, specialising in labour
            law compliance, statutory registrations, business licensing and payroll-related
            services.
          </p>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "var(--text-muted)",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            The consultancy is led by <strong style={{ color: "var(--navy-primary)" }}>Nilesh Gawas</strong>,
            a qualified professional holding a B.Com degree along with a Diploma in Labour
            Laws &amp; Labour Welfare (DLL &amp; LW). Hridaya Consultancy assists businesses in
            navigating their statutory obligations under various labour laws and regulatory
            requirements.
          </p>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "var(--text-muted)",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            From ESI and Provident Fund compliance to Gumasta License, FSSAI and Udyog Aadhaar
            registrations, the consultancy provides focused, professional guidance to help
            businesses remain compliant and well-registered.
          </p>

          {/* Highlights */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {[
              { icon: "⚖️", label: "Labour Law Focus" },
              { icon: "📋", label: "Statutory Compliance" },
              { icon: "📄", label: "Business Licensing" },
              { icon: "💼", label: "Payroll Support" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  padding: "0.75rem",
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "6px",
                }}
              >
                <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--navy-primary)",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Consultant Card */}
        <div style={{ display: "flex", justifyContent: "center" }} className="about-card-col">
          <div
            style={{
              backgroundColor: "var(--white)",
              border: "1px solid var(--border-light)",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(23, 36, 95, 0.08)",
              width: "100%",
              maxWidth: "360px",
            }}
            role="complementary"
            aria-label="Consultant profile card"
          >
            {/* Card top bar */}
            <div
              style={{
                backgroundColor: "var(--navy-primary)",
                padding: "2rem 1.5rem 1.5rem",
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* Decorative circles */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.08)",
                }}
                aria-hidden="true"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "-20px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.06)",
                }}
                aria-hidden="true"
              />

              {/* Avatar circle */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.12)",
                  border: "2px solid rgba(255,255,255,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                }}
                aria-hidden="true"
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              <h3
                style={{
                  fontFamily: "'Merriweather', serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  marginBottom: "0.25rem",
                }}
              >
                Nilesh Gawas
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.65)",
                  letterSpacing: "0.04em",
                }}
              >
                B.Com, DLL &amp; LW
              </p>
            </div>

            {/* Card body */}
            <div style={{ padding: "1.5rem" }}>
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "1.5rem",
                  paddingBottom: "1.25rem",
                  borderBottom: "1px solid var(--border-light)",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    backgroundColor: "rgba(201, 54, 62, 0.08)",
                    border: "1px solid rgba(201, 54, 62, 0.2)",
                    borderRadius: "4px",
                    padding: "0.35rem 0.875rem",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--red-accent)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Labour Law &amp; License Consultant
                </div>
              </div>

              {/* Consultancy info */}
              <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                <div style={{ marginBottom: "0.35rem" }}>
                  <Image
                    src="/hc-logo.jpg"
                    alt="HC logo"
                    width={40}
                    height={40}
                    style={{ objectFit: "cover", objectPosition: "top", borderRadius: "4px", display: "inline-block" }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "'Merriweather', serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--navy-primary)",
                    letterSpacing: "0.04em",
                  }}
                >
                  HRIDAYA CONSULTANCY
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                    marginTop: "0.25rem",
                  }}
                >
                  Labour Law &amp; License Consultant
                </div>
              </div>

              {/* Contact quick links */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a
                  href="tel:+919769651185"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    padding: "0.625rem 0.75rem",
                    backgroundColor: "var(--bg-light)",
                    borderRadius: "6px",
                    textDecoration: "none",
                    color: "var(--text-dark)",
                    fontSize: "0.82rem",
                    fontFamily: "'Inter', sans-serif",
                    transition: "background-color 0.2s ease",
                  }}
                  aria-label="Call Hridaya Consultancy"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--navy-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +91 9769651185
                </a>
                <a
                  href="mailto:hridayaconsultancy@gmail.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    padding: "0.625rem 0.75rem",
                    backgroundColor: "var(--bg-light)",
                    borderRadius: "6px",
                    textDecoration: "none",
                    color: "var(--text-dark)",
                    fontSize: "0.82rem",
                    fontFamily: "'Inter', sans-serif",
                    transition: "background-color 0.2s ease",
                  }}
                  aria-label="Email Hridaya Consultancy"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--navy-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  hridayaconsultancy@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-card-col {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
