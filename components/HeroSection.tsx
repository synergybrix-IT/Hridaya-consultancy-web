"use client";

import { useEffect, useRef } from "react";

// Compliance card SVG icon set
const ComplianceCard = () => (
  <div
    style={{
      background: "var(--white)",
      border: "2px solid var(--border-light)",
      borderRadius: "12px",
      padding: "2rem",
      boxShadow: "0 4px 32px rgba(23, 36, 95, 0.1)",
      position: "relative",
      overflow: "hidden",
      maxWidth: "380px",
      width: "100%",
    }}
    aria-hidden="true"
  >
    {/* Top accent bar */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: "linear-gradient(90deg, var(--navy-primary) 0%, var(--red-accent) 100%)",
      }}
    />

    {/* Header row */}
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", marginTop: "0.5rem" }}>
      <div
        style={{
          width: "48px",
          height: "48px",
          backgroundColor: "var(--navy-primary)",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10,9 9,9 8,9" />
        </svg>
      </div>
      <div>
        <div style={{ fontFamily: "'Merriweather', serif", fontSize: "0.95rem", fontWeight: 700, color: "var(--navy-primary)" }}>
          Compliance Checklist
        </div>
        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>Labour Law & Licensing</div>
      </div>
    </div>

    {/* Checklist items */}
    {[
      { label: "ESI Registration", done: true },
      { label: "Provident Fund Compliance", done: true },
      { label: "Professional Tax Filing", done: true },
      { label: "Gumasta License", done: true },
      { label: "FSSAI Licence", done: false },
      { label: "Udyog Aadhaar Registration", done: false },
    ].map((item, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "0.625rem 0.75rem",
          marginBottom: "0.375rem",
          backgroundColor: item.done ? "rgba(23, 36, 95, 0.03)" : "var(--bg-light)",
          borderRadius: "6px",
          border: "1px solid var(--border-light)",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: item.done ? "var(--navy-primary)" : "transparent",
            border: item.done ? "none" : "2px solid var(--border-medium)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {item.done && (
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="2,6 5,9 10,3" />
            </svg>
          )}
        </div>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8rem",
            fontWeight: 500,
            color: item.done ? "var(--text-dark)" : "var(--text-muted)",
          }}
        >
          {item.label}
        </span>
        {item.done && (
          <span
            style={{
              marginLeft: "auto",
              fontSize: "0.65rem",
              fontWeight: 600,
              color: "var(--navy-primary)",
              backgroundColor: "rgba(23, 36, 95, 0.08)",
              padding: "2px 8px",
              borderRadius: "3px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Active
          </span>
        )}
      </div>
    ))}

    {/* Bottom CTA in card */}
    <div
      style={{
        marginTop: "1.25rem",
        padding: "0.875rem",
        backgroundColor: "var(--navy-primary)",
        borderRadius: "6px",
        textAlign: "center",
      }}
    >
      <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>
        Managed by
      </div>
      <div style={{ color: "var(--white)", fontFamily: "'Merriweather', serif", fontSize: "0.9rem", fontWeight: 700, marginTop: "2px" }}>
        Hridaya Consultancy
      </div>
    </div>

    {/* Decorative element */}
    <div
      style={{
        position: "absolute",
        bottom: "-20px",
        right: "-20px",
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "var(--red-accent)",
        opacity: 0.06,
      }}
    />
  </div>
);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/919769651185?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20consultancy%20services.", "_blank", "noopener noreferrer");
  };

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      aria-label="Hridaya Consultancy - Labour Law & License Consultant"
      style={{
        paddingTop: "calc(72px + 4rem)",
        paddingBottom: "4rem",
        backgroundColor: "var(--white)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          backgroundImage:
            "radial-gradient(circle at 80% 30%, rgba(23, 36, 95, 0.03) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* LEFT COLUMN */}
        <div style={{ opacity: 0, animationFillMode: "forwards", animationDelay: "0.1s" }} data-animate className="animate-fade-in-up">
          {/* Label */}
          <div style={{ marginBottom: "1rem" }}>
            <span className="section-label" style={{ letterSpacing: "0.14em" }}>
              Labour Law &amp; License Consultant
            </span>
          </div>

          {/* Main heading */}
          <h1
            style={{
              fontFamily: "'Merriweather', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "var(--navy-primary)",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            Professional Labour Law &amp; Compliance Consultancy
          </h1>

          {/* Divider */}
          <div className="section-divider" />

          {/* Supporting text */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.05rem",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              marginBottom: "2rem",
              maxWidth: "520px",
            }}
          >
            Hridaya Consultancy provides professional assistance in labour law
            compliance, statutory registrations, licensing and payroll-related
            services for businesses in Vasai, Maharashtra.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginBottom: "2.5rem" }}>
            <button
              onClick={scrollToContact}
              className="btn-primary"
              id="hero-cta-contact"
              aria-label="Get in touch with Hridaya Consultancy"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Get in Touch
            </button>
            <button
              onClick={handleWhatsApp}
              className="btn-whatsapp"
              id="hero-cta-whatsapp"
              aria-label="Chat with Hridaya Consultancy on WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </button>
          </div>

          {/* Consultant card */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.875rem",
              padding: "0.75rem 1.25rem",
              backgroundColor: "var(--bg-light)",
              border: "1px solid var(--border-light)",
              borderRadius: "6px",
              borderLeft: "3px solid var(--red-accent)",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "var(--navy-primary)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Merriweather', serif",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "var(--navy-primary)",
                }}
              >
                Nilesh Gawas
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "1px" }}>
                B.Com, DLL &amp; LW · Labour Law Consultant
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="hero-card-col"
        >
          <ComplianceCard />
        </div>
      </div>

      <style jsx>{`
        .hero-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-card-col {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
