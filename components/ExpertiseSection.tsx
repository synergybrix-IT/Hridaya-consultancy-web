"use client";

interface ExpertiseItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const expertiseItems: ExpertiseItem[] = [
  {
    title: "ESI Act",
    description:
      "Assistance related to applicable ESI (Employees' State Insurance) compliance requirements for your business.",
    category: "Labour Law",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Provident Fund Act",
    description:
      "Support related to applicable provident fund compliance and registration requirements for eligible businesses.",
    category: "Labour Law",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "MLWF Act",
    description:
      "Guidance on Maharashtra Labour Welfare Fund (MLWF) applicability, contributions and compliance procedures.",
    category: "Labour Law",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Factories Act",
    description:
      "Assistance related to compliance requirements under the Factories Act for applicable manufacturing establishments.",
    category: "Labour Law",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="16" y1="6" x2="16" y2="22" />
      </svg>
    ),
  },
  {
    title: "Professional Tax",
    description:
      "Assistance with professional tax registration, filing and related compliance for businesses and professionals.",
    category: "Taxation",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Payroll Management",
    description:
      "Professional payroll processing support including salary computation, statutory deductions and related services.",
    category: "Payroll",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    title: "Gumasta License",
    description:
      "Assistance with obtaining and renewing the Gumasta License (Shop &amp; Establishment Registration) for your business.",
    category: "Licensing",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
  {
    title: "Udyog Aadhaar Registration",
    description:
      "Guidance and support for Udyog Aadhaar / MSME registration for small and medium enterprises.",
    category: "Registration",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "FSSAI Licence",
    description:
      "Assistance with FSSAI (Food Safety and Standards Authority of India) licence registration for food businesses.",
    category: "Licensing",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const categoryColors: Record<string, string> = {
  "Labour Law": "rgba(23, 36, 95, 0.08)",
  Taxation: "rgba(201, 54, 62, 0.07)",
  Payroll: "rgba(38, 58, 120, 0.08)",
  Licensing: "rgba(201, 54, 62, 0.07)",
  Registration: "rgba(23, 36, 95, 0.08)",
};

export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      style={{
        backgroundColor: "var(--white)",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label">What We Do</span>
          <div className="section-divider" style={{ margin: "0.75rem auto 1.5rem" }} />
          <h2
            id="expertise-heading"
            style={{
              fontFamily: "'Merriweather', Georgia, serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "var(--navy-primary)",
              marginBottom: "1rem",
            }}
          >
            Our Expertise
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "var(--text-muted)",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Hridaya Consultancy provides specialised consultancy across the following
            areas of labour law compliance and business registration.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
          }}
          className="expertise-grid"
          role="list"
        >
          {expertiseItems.map((item, index) => (
            <article
              key={index}
              className="card-base"
              role="listitem"
              style={{
                padding: "1.5rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  backgroundColor: "transparent",
                  transition: "background-color 0.25s ease",
                }}
                className="card-top-line"
                aria-hidden="true"
              />

              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  backgroundColor: categoryColors[item.category] || "rgba(23, 36, 95, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                  color: "var(--red-accent)",
                }}
                aria-hidden="true"
              >
                {item.icon}
              </div>

              {/* Category badge */}
              <div
                style={{
                  display: "inline-block",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--red-accent)",
                  backgroundColor: "rgba(201, 54, 62, 0.07)",
                  padding: "2px 8px",
                  borderRadius: "3px",
                  marginBottom: "0.625rem",
                }}
              >
                {item.category}
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
                }}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .expertise-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1024px) {
          .expertise-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .expertise-grid {
            grid-template-columns: 1fr !important;
          }
        }
        article:hover .card-top-line {
          background-color: var(--red-accent) !important;
        }
      `}</style>
    </section>
  );
}
