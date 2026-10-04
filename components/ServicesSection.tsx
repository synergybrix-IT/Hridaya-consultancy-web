"use client";

interface ServiceCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  services: string[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Labour Law & Compliance",
    description:
      "Assistance with statutory labour law compliance requirements applicable to your business under various central and state labour legislation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    services: [
      "ESI Act",
      "Provident Fund Act",
      "MLWF Act",
      "Factories Act",
      "Professional Tax",
    ],
  },
  {
    title: "Payroll Services",
    description:
      "Professional payroll management support to ensure accurate computation of employee salaries and statutory deductions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="6" y1="15" x2="10" y2="15" />
        <line x1="14" y1="15" x2="18" y2="15" />
      </svg>
    ),
    services: ["Payroll Management"],
  },
  {
    title: "Business Registration & Licensing",
    description:
      "Guidance and assistance for business registrations and licences required by law for operating your business in Maharashtra and across India.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
        <polyline points="9 9 10 9 11 9" />
      </svg>
    ),
    services: [
      "Gumasta License",
      "Udyog Aadhaar Registration",
      "FSSAI Licence",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{
        backgroundColor: "var(--bg-light)",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label">Service Areas</span>
          <div className="section-divider" style={{ margin: "0.75rem auto 1.5rem" }} />
          <h2
            id="services-heading"
            style={{
              fontFamily: "'Merriweather', Georgia, serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "var(--navy-primary)",
              marginBottom: "1rem",
            }}
          >
            Our Services
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
            Our consultancy services are structured across three focused areas to
            serve your business compliance and registration needs.
          </p>
        </div>

        {/* Service category cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="services-grid"
        >
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid var(--border-light)",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(23, 36, 95, 0.04)",
                transition: "all 0.25s ease",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.boxShadow = "0 8px 28px rgba(23, 36, 95, 0.1)";
                el.style.transform = "translateY(-3px)";
                el.style.borderColor = "var(--navy-primary)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.boxShadow = "0 2px 8px rgba(23, 36, 95, 0.04)";
                el.style.transform = "translateY(0)";
                el.style.borderColor = "var(--border-light)";
              }}
            >
              {/* Card header */}
              <div
                style={{
                  backgroundColor: "var(--navy-primary)",
                  padding: "1.75rem 1.5rem",
                  color: "var(--white)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Decorative shape */}
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.05)",
                  }}
                  aria-hidden="true"
                />

                <div style={{ color: "rgba(255,255,255,0.9)", marginBottom: "0.875rem" }}>
                  {category.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Merriweather', Georgia, serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--white)",
                    lineHeight: 1.3,
                  }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Card body */}
              <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    marginBottom: "1.25rem",
                  }}
                >
                  {category.description}
                </p>

                {/* Service list */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    marginTop: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                  aria-label={`${category.title} services`}
                >
                  {category.services.map((service, sIdx) => (
                    <li
                      key={sIdx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.625rem",
                        padding: "0.5rem 0.75rem",
                        backgroundColor: "var(--bg-light)",
                        borderRadius: "5px",
                        borderLeft: "3px solid var(--red-accent)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.85rem",
                          fontWeight: 500,
                          color: "var(--navy-primary)",
                        }}
                      >
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
