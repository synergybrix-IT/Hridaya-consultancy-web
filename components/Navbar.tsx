"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navbarHeight = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "var(--white)",
        borderBottom: "1px solid var(--border-light)",
        transition: "box-shadow 0.3s ease",
        boxShadow: isScrolled ? "0 2px 20px rgba(23, 36, 95, 0.08)" : "none",
      }}
      role="banner"
    >
      <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", flexShrink: 0 }}
          aria-label="Hridaya Consultancy - Go to home"
        >
          <div style={{ width: "44px", height: "44px", borderRadius: "4px", overflow: "hidden", flexShrink: 0 }}>
            <Image
              src="/hc-logo.jpg"
              alt="Hridaya Consultancy Logo"
              width={44}
              height={44}
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Merriweather', Georgia, serif",
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--navy-primary)",
                letterSpacing: "0.02em",
                lineHeight: 1.2,
              }}
            >
              HRIDAYA
            </div>
            <div
              style={{
                fontFamily: "'Merriweather', Georgia, serif",
                fontSize: "0.75rem",
                fontWeight: 400,
                color: "var(--text-muted)",
                letterSpacing: "0.06em",
                lineHeight: 1.2,
              }}
            >
              CONSULTANCY
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "0.25rem",
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--text-dark)",
                  textDecoration: "none",
                  padding: "0.5rem 0.875rem",
                  borderRadius: "4px",
                  display: "block",
                  transition: "color 0.2s ease, background-color 0.2s ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--navy-primary)";
                  (e.target as HTMLElement).style.backgroundColor = "var(--bg-light)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "var(--text-dark)";
                  (e.target as HTMLElement).style.backgroundColor = "transparent";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="btn-primary desktop-cta"
          style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}
          aria-label="Contact Hridaya Consultancy"
        >
          Contact Us
        </a>

        {/* Hamburger button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hamburger-btn"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          style={{
            display: "none",
            background: "none",
            border: "1px solid var(--border-medium)",
            borderRadius: "4px",
            padding: "0.375rem",
            cursor: "pointer",
            flexDirection: "column",
            gap: "5px",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "20px",
              height: "2px",
              backgroundColor: "var(--navy-primary)",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "20px",
              height: "2px",
              backgroundColor: "var(--navy-primary)",
              transition: "opacity 0.3s ease",
              opacity: isMenuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "20px",
              height: "2px",
              backgroundColor: "var(--navy-primary)",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation menu"
        style={{
          backgroundColor: "var(--white)",
          borderTop: "1px solid var(--border-light)",
          overflow: "hidden",
          maxHeight: isMenuOpen ? "400px" : "0",
          transition: "max-height 0.35s ease",
        }}
        className="mobile-menu"
      >
        <ul style={{ listStyle: "none", padding: "1rem 1.5rem", margin: 0, display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  display: "block",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "var(--navy-primary)",
                  textDecoration: "none",
                  padding: "0.625rem 0.75rem",
                  borderRadius: "4px",
                  borderLeft: "3px solid transparent",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.target as HTMLElement;
                  el.style.backgroundColor = "var(--bg-light)";
                  el.style.borderLeftColor = "var(--red-accent)";
                }}
                onMouseLeave={(e) => {
                  const el = e.target as HTMLElement;
                  el.style.backgroundColor = "transparent";
                  el.style.borderLeftColor = "transparent";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li style={{ paddingTop: "0.5rem", borderTop: "1px solid var(--border-light)", marginTop: "0.25rem" }}>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-primary"
              style={{ display: "block", textAlign: "center", marginTop: "0.25rem" }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
