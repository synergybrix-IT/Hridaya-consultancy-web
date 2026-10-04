"use client";

interface WhyChooseItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const whyChooseItems: WhyChooseItem[] = [
  {
    title: "Labour Law Focus",
    description:
      "Dedicated consultancy focusing specifically on labour law compliance, ensuring your business meets its statutory obligations.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Compliance Support",
    description:
      "Systematic assistance with ESI, Provident Fund, MLWF, Factories Act and Professional Tax compliance matters.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Licensing Assistance",
    description:
      "Professional support for Gumasta License, FSSAI Licence and Udyog Aadhaar registrations required for your business.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="12" y2="17" />
      </svg>
    ),
  },
  {
    title: "Payroll Support",
    description:
      "Professional payroll management services to ensure accurate salary processing and timely statutory deductions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    title: "Convenient Communication",
    description:
      "Easy to reach via phone, WhatsApp or email. Client communication is straightforward and responsive.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Business-Focused Approach",
    description:
      "Practical, business-oriented consultancy that helps you manage compliance without distracting from your core operations.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      aria-labelledby="why-heading"
      style={{
        backgroundColor: "var(--white)",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label">Why Hridaya</span>
          <div className="section-divider" style={{ margin: "0.75rem auto 1.5rem" }} />
          <h2
            id="why-heading"
            style={{
              fontFamily: "'Merriweather', Georgia, serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "var(--navy-primary)",
              marginBottom: "1rem",
            }}
          >
            Why Choose Hridaya Consultancy
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "var(--text-muted)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Here is why businesses in Vasai trust Hridaya Consultancy for their
            labour law and licensing requirements.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
          }}
          className="why-grid"
        >
          {whyChooseItems.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "1.75rem 1.5rem",
                backgroundColor: "var(--bg-light)",
                border: "1px solid var(--border-light)",
                borderRadius: "8px",
                transition: "all 0.25s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "var(--navy-primary)";
                el.style.borderColor = "var(--navy-primary)";
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 8px 24px rgba(23, 36, 95, 0.15)";
                // change text colors
                const h3 = el.querySelector("h3") as HTMLElement;
                const p = el.querySelector("p") as HTMLElement;
                const iconWrapper = el.querySelector(".why-icon") as HTMLElement;
                if (h3) h3.style.color = "var(--white)";
                if (p) p.style.color = "rgba(255,255,255,0.7)";
                if (iconWrapper) {
                  iconWrapper.style.backgroundColor = "rgba(255,255,255,0.12)";
                  iconWrapper.style.color = "var(--white)";
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "var(--bg-light)";
                el.style.borderColor = "var(--border-light)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                const h3 = el.querySelector("h3") as HTMLElement;
                const p = el.querySelector("p") as HTMLElement;
                const iconWrapper = el.querySelector(".why-icon") as HTMLElement;
                if (h3) h3.style.color = "var(--navy-primary)";
                if (p) p.style.color = "var(--text-muted)";
                if (iconWrapper) {
                  iconWrapper.style.backgroundColor = "rgba(201, 54, 62, 0.08)";
                  iconWrapper.style.color = "var(--red-accent)";
                }
              }}
            >
              {/* Icon */}
              <div
                className="why-icon"
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(201, 54, 62, 0.08)",
                  color: "var(--red-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.125rem",
                  transition: "all 0.25s ease",
                }}
                aria-hidden="true"
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Merriweather', Georgia, serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--navy-primary)",
                  marginBottom: "0.625rem",
                  lineHeight: 1.3,
                  transition: "color 0.25s ease",
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.65,
                  transition: "color 0.25s ease",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
