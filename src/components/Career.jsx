import './Career.css'

// 🔧 TODO: Replace these entries with your real career history.
// Add or remove items freely — the timeline will adjust automatically.
const TIMELINE = [
  {
    period: '2025 – Present',
    role: 'Game Developer',
    org: 'Freelance',
    icon: '',
    color: 'var(--color-primary)',
    current: true,
    description:
      'Designing, developing, and coordinating the SAP Preferred Success Service Recommendation AI system, including data architecture, AI agent design, and platform development. Supporting more than 25 SAP solutions in adopting the system for diverse audiences and helping customers navigate SAP’s cloud adoption landscape.',
    highlights: ['C#', 'Unity', 'Game Development', '2D Art'], 
  },
  {
    period: '2024 – Present',
    role: 'Senior AI Developer & Product Manager',
    org: 'SAP',
    icon: '',
    color: '#cd6fbc',
    current: true,
    description:
      'Designing, developing, and coordinating the SAP Preferred Success Service Recommendation AI system, including data architecture, AI agent design, and platform development. Supporting more than 25 SAP solutions in adopting the system for diverse audiences and helping customers navigate SAP’s cloud adoption landscape.',
    highlights: ['Python', 'React & Typescript', 'AI Agent Development', 'Product Strategy', 'Cross-functional Enablement'], 
  },
  {
    period: '2021 – 2024',
    role: 'Software Engineer & Product Manager',
    org: 'SAP',
    icon: '',
    color: '#cd6fbc',
    current: false,
    description:
      'Led initiatives across security automation, data engineering, and product management. Built integrated solutions to unify and secure data across products and business lines. Previously managed the Global Security Business Intelligence program, aligning analytics and risk tooling with SAP’s cloud strategy. Oversaw product lifecycles, stakeholder alignment, and investment planning for a broad portfolio of security and compliance tools.',
    highlights: ['Full‑Stack Development', 'System Design', 'Python', 'Data Engineering'],
  },
  {
    period: '2021 – 2022',
    role: 'Project Coordinator',
    org: 'SAP',
    icon: '',
    color: '#cd6fbc',
    current: false,
    description:
      'Scrum Master responsible for removing blockers, improving delivery flow, and supporting prioritization. Produced performance insights, reporting, and strategic recommendations. Contributed to data warehousing and migration efforts using SQL and Power BI, ensuring high standards of data quality and visualization.',
    highlights: ['Agile/Scrum', 'Java', 'Data Analtics', 'SAP Analytics Cloud'],
  },
  {
    period: '2020 – 2021',
    role: 'Software Engineer',
    org: 'Douglas College',
    icon: '',
    color: '#6f7fcd',
    current: false,
    description:
      'Developed and maintained software systems that supported student enrollment and institutional analytics. Contributed to the rapid transition to fully digital operations during COVID‑19, implementing system upgrades and cloud migration efforts to ensure stability, accessibility, and large‑scale usage under increased demand. Strengthened platform performance and helped modernize internal workflows as the college adapted to remote learning.',
    highlights: ['Java', 'Azure', 'Data Analytics'],
  },
  {
    period: '2016 – 2019',
    role: 'Project Manager',
    org: 'Maptrade',
    icon: '',
    color: 'rgb(175, 111, 205)',
    current: false,
    description:
      'Managed large‑scale projects across 15 countries, overseeing planning, production, and distribution. Combined strategic planning, financial analysis, and client communication to deliver high‑impact campaigns. Represented the voice of major clients including Coca‑Cola, MasterChef, General Electric, and Rock in Rio, identifying market opportunities and ensuring successful execution.',
    highlights: [' Project Leadership', ' Strategic Planning', 'Stakeholder Management', 'Client Relations'],
  },
  {
    period: '2015 – 2016',
    role: 'Finance Analyst',
    org: 'Ativa Investimentos',
    icon: '',
    color: '#cd6f6f',
    current: false,
    description:
      'Analyzed equity performance using fundamental and technical analysis, evaluating price trends, volatility patterns, and key financial ratios such as P/E, EPS, ROE, and EBITDA. Built financial models and scenario analyses to support portfolio construction and asset allocation decisions. Developed personalized financial plans aligned with client risk profiles, liquidity needs, and long‑term objectives. Collaborated directly with clients to interpret market movements, assess investment strategies, and provide data‑driven recommendations that strengthened portfolio performance and customer confidence.',
    highlights: ['Equity Analysis', 'Portfolio support', 'Financial Modelling', 'Client Advisory'],
  },
]

export default function Career() {
  return (
    <section className="section career" id="career">
      <div className="container">
        <h2 className="section-title">My <span>Journey</span></h2>
        <div className="divider" />
        <p className="section-subtitle">
          From shipping products to building worlds
        </p>

        {/* Framing paragraph */}
        <p className="career__intro">
          Years in product management and software engineering taught me how to understand users deeply, 
          think in systems, and deliver work that’s reliable and meaningful. 
          I’m now bringing that foundation into game development, focusing on creating 
          experiences that blend thoughtful design, strong mechanics, and a sense of discovery.
        </p>

        {/* Timeline */}
        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div
              key={i}
              className={`timeline__item fade-up ${item.current ? 'timeline__item--current' : ''}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Left: dot + line */}
              <div className="timeline__track">
                <div
                  className="timeline__dot"
                  style={{ background: item.color, boxShadow: `0 0 0 4px ${item.color}22` }}
                >
                  {item.icon}
                </div>
                {i < TIMELINE.length - 1 && <div className="timeline__line" />}
              </div>

              {/* Right: card */}
              <div className="card timeline__card">
                <div className="timeline__card-header">
                  <div>
                    <span className="timeline__period">{item.period}</span>
                    {item.current && (
                      <span className="timeline__badge">Current</span>
                    )}
                    <h3 className="timeline__role">{item.role}</h3>
                    <p className="timeline__org">{item.org}</p>
                  </div>
                </div>

                <p className="timeline__desc">{item.description}</p>

                <div className="timeline__highlights">
                  {item.highlights.map(tag => (
                    <span
                      key={tag}
                      className="timeline__tag"
                      style={{ borderColor: item.color, color: item.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
