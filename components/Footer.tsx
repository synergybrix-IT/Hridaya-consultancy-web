"use client";

import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: "var(--navy-primary)",
        color: "rgba(255,255,255,0.8)",
      }}
    >
      {/* Main footer */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "3.5rem 1.5rem 2.5rem",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr",
          gap: "2.5rem",
        }}
        className="footer-grid"
      >
        {/* COLUMN 1: Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "4px", overflow: "hidden", flexShrink: 0 }}>
              <Image
                src="/hc-logo.jpg"
                alt="Hridaya Consultancy Logo"
                width={42}
                height={42}
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Merriweather', Georgia, serif",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  letterSpacing: "0.04em",
                }}
              >
                HRIDAYA CONSULTANCY
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.55)",
                  marginTop: "1px",
                  letterSpacing: "0.03em",
                }}
              >
                Labour Law &amp; License Consultant
              </div>
            </div>
          </div>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
              marginBottom: "1.25rem",
              maxWidth: "280px",
            }}
          >
            Professional consultancy for labour law compliance, statutory registrations
            and business licensing in Vasai, Maharashtra.
          </p>

          {/* Consultant badge */}
          <div
            style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              backgroundColor: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "4px",
              borderLeft: "3px solid var(--red-accent)",
            }}
          >
            <div style={{ fontFamily: "'Merriweather', serif", fontSize: "0.875rem", fontWeight: 700, color: "var(--white)" }}>
              Nilesh Gawas
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.55)", marginTop: "1px" }}>
              B.Com, DLL &amp; LW
            </div>
          </div>
        </div>

        {/* COLUMN 2: Quick Links */}
        <div>
          <h3
            style={{
              fontFamily: "'Merriweather', Georgia, serif",
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "var(--white)",
              marginBottom: "1.25rem",
              paddingBottom: "0.625rem",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Quick Links
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "var(--white)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)";
                  }}
                >
                  <span style={{ color: "var(--red-accent)", fontSize: "0.7rem" }}>›</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3: Contact */}
        <div>
          <h3
            style={{
              fontFamily: "'Merriweather', Georgia, serif",
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "var(--white)",
              marginBottom: "1.25rem",
              paddingBottom: "0.625rem",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Contact
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {/* Phones */}
            <div>
              <a
                href="tel:+919769651185"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  marginBottom: "0.25rem",
                }}
                aria-label="Call +91 9769651185"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--red-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91 9769651185
              </a>
              <a
                href="tel:+918308899222"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                }}
                aria-label="Call +91 8308899222"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--red-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91 8308899222
              </a>
            </div>

            {/* Email */}
            <a
              href="mailto:hridayaconsultancy@gmail.com"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.5rem",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                wordBreak: "break-all",
              }}
              aria-label="Email hridayaconsultancy@gmail.com"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--red-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "2px", flexShrink: 0 }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              hridayaconsultancy@gmail.com
            </a>

            {/* Address */}
            <address
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.65,
                fontStyle: "normal",
                display: "flex",
                gap: "0.5rem",
                alignItems: "flex-start",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--red-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "2px", flexShrink: 0 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                C-251, 2nd floor, Golden Park Society,<br />
                Opp. Parvati Talkies, Sai Nagar,<br />
                Vasai West, Dist Palghar - 401202,<br />
                Maharashtra
              </span>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "1.25rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
          className="footer-bottom"
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            © 2026 Hridaya Consultancy. All Rights Reserved.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Website by{" "}
            <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>
              Synergy Brix
            </span>
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer-grid {
          grid-template-columns: 1.5fr 1fr 1fr;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
