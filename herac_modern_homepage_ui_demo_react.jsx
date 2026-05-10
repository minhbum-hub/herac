export default function HERACHomepageDemo() {
  const coreAreas = [
    {
      title: "Health Economics & HTA",
      desc: "Generating robust evidence for health technology assessment and resource allocation.",
    },
    {
      title: "AI & Digital Health",
      desc: "Applying artificial intelligence and data science to advance healthcare decision-making.",
    },
    {
      title: "Policy & Strategy",
      desc: "Supporting evidence-informed policy and health system strengthening.",
    },
    {
      title: "Education & Capacity Building",
      desc: "Developing professional competencies in HTA, HEOR, and health economics.",
    },
    {
      title: "Research & Publications",
      desc: "Producing high-quality research and knowledge resources for global impact.",
    },
    {
      title: "Partnerships & Collaboration",
      desc: "Working with global partners to drive sustainable healthcare solutions.",
    },
  ];

  const partners = [
    { name: "Novo Nordisk", logo: "/partners/novo-nordisk.png" },
    { name: "AstraZeneca", logo: "/partners/astrazeneca.png" },
    { name: "Novartis", logo: "/partners/novartis.png" },
    { name: "Aguettant", logo: "/partners/aguettant.png" },
    { name: "Viatris", logo: "/partners/viatris.png" },
    { name: "Takeda", logo: "/partners/takeda.png" },
    { name: "URGO", logo: "/partners/urgo.png" },
    { name: "WHO", logo: "/partners/who.png" },
    { name: "ISPOR", logo: "/partners/ispor.png" },
    { name: "HTAi", logo: "/partners/htai.png" },
  ];

  const publications = [
    {
      title: "AI Applications in Health Technology Assessment",
      type: "Research Article",
    },
    {
      title: "Improving Value-Based Healthcare in Emerging Economies",
      type: "Policy Brief",
    },
    {
      title: "Cost-of-Illness of Non-Communicable Diseases in Vietnam 2024",
      type: "Technical Report",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f7f7] text-[#0d1f1c] font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-5">
              <img
                src="/HERAC-logo.png"
                alt="HERAC Logo"
                className="h-20 w-auto object-contain"
              />
            </div>

            <div className="flex flex-col items-end gap-5">
              <div className="flex items-center gap-5 text-sm text-gray-600">
                <a href="#" className="hover:text-green-700">Contact</a>
                
                <a href="#" className="hover:text-green-700">News</a>

                <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-sm">
                  🌐 EN
                </div>
              </div>

              <nav className="flex items-center gap-8 text-sm font-semibold tracking-wide">
                <a href="#" className="hover:text-green-700">ABOUT US</a>
                <a href="#" className="hover:text-green-700">RESEARCH</a>
                <a href="#" className="hover:text-green-700">AI & INNOVATION</a>
                <a href="#" className="hover:text-green-700">EDUCATION</a>
                <a href="#" className="hover:text-green-700">PUBLICATIONS</a>
                <a href="#" className="hover:text-green-700">PARTNERSHIPS</a>
                <a href="#" className="hover:text-green-700">INSIGHTS</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#eef6f8] via-[#f4fbfc] to-[#e9f4f7]">
        {/* Animated Network Background */}
        <div className="absolute inset-0 overflow-hidden opacity-70">
          <div className="absolute left-[10%] top-[15%] h-3 w-3 animate-pulse rounded-full bg-cyan-400" />
          <div className="absolute left-[25%] top-[35%] h-2 w-2 animate-pulse rounded-full bg-sky-400" />
          <div className="absolute left-[42%] top-[18%] h-4 w-4 animate-pulse rounded-full bg-cyan-300" />
          <div className="absolute left-[58%] top-[42%] h-3 w-3 animate-pulse rounded-full bg-emerald-300" />
          <div className="absolute left-[72%] top-[22%] h-2 w-2 animate-pulse rounded-full bg-sky-300" />
          <div className="absolute left-[84%] top-[48%] h-4 w-4 animate-pulse rounded-full bg-cyan-400" />

          <svg
            className="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="10%" y1="15%" x2="25%" y2="35%" stroke="#9ed8ea" strokeWidth="1" opacity="0.5" />
            <line x1="25%" y1="35%" x2="42%" y2="18%" stroke="#9ed8ea" strokeWidth="1" opacity="0.5" />
            <line x1="42%" y1="18%" x2="58%" y2="42%" stroke="#9ed8ea" strokeWidth="1" opacity="0.5" />
            <line x1="58%" y1="42%" x2="72%" y2="22%" stroke="#9ed8ea" strokeWidth="1" opacity="0.5" />
            <line x1="72%" y1="22%" x2="84%" y2="48%" stroke="#9ed8ea" strokeWidth="1" opacity="0.5" />
          </svg>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent_70%)]" />
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),rgba(230,240,240,0.3))]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="max-w-2xl text-6xl font-bold leading-[1.08] tracking-tight text-[#10352d]">
              Advancing Health Economics, HTA and AI-driven Healthcare Innovation
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-gray-700">
              HERAC is a science-driven organization specializing in Health Economics, Health Technology Assessment (HTA), AI-driven healthcare innovation, policy research and real-world evidence for sustainable healthcare systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="rounded-md bg-green-700 px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-green-800 hover:shadow-xl">
                EXPLORE OUR RESEARCH
              </button>

              <button className="rounded-md border border-gray-300 bg-white px-8 py-4 text-sm font-semibold tracking-wide text-[#0d1f1c] transition-all duration-300 hover:border-green-700 hover:text-green-700">
                PARTNER WITH US
              </button>
            </div>
          </div>

          <div className="relative flex justify-end">
            <div className="absolute right-10 top-10 h-72 w-72 animate-pulse rounded-full bg-cyan-100/60 blur-3xl" />
            <div className="absolute inset-0 rounded-full bg-cyan-100/40 blur-3xl" />

            <div className="relative flex h-[520px] w-[520px] items-center justify-center rounded-full border border-white/50 bg-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-3xl">
              <div className="relative h-[430px] w-[430px] overflow-hidden rounded-full bg-[radial-gradient(circle_at_center,#dff7ff,#c6e7f2,#8cb6c5)] opacity-95 shadow-[0_0_120px_rgba(180,220,230,0.9)]">
                <div className="absolute inset-0 animate-[pulse_8s_ease-in-out_infinite] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),transparent_50%)]" />
                <div className="absolute left-[20%] top-[20%] h-3 w-3 rounded-full bg-white/80" />
                <div className="absolute left-[50%] top-[30%] h-2 w-2 rounded-full bg-cyan-200" />
                <div className="absolute left-[70%] top-[55%] h-3 w-3 rounded-full bg-sky-200" />
                <div className="absolute left-[40%] top-[70%] h-2 w-2 rounded-full bg-white/70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted */}
      <section className="bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6 text-gray-500">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-700">
            PARTNERS AND SPONSORS
          </div>

          <div className="relative overflow-hidden">
            <div className="flex w-max animate-[scroll_30s_linear_infinite] items-center gap-6">
              {[...partners, ...partners].map((partner, idx) => (
                <div
                  key={idx}
                  className="flex h-24 min-w-[180px] items-center justify-center rounded-2xl border border-gray-100 bg-white px-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>

            <style jsx>{`
              @keyframes scroll {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Core Areas */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              HERAC ECOSYSTEM
            </div>

            <h2 className="mt-4 text-5xl font-bold tracking-tight text-[#10352d]">
              Core Research, Policy and Innovation Areas
            </h2>
          </div>

          <button className="text-sm font-semibold tracking-wide text-green-700 transition hover:translate-x-1">
            VIEW ALL AREAS →
          </button>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {coreAreas.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-8 h-16 w-16 rounded-2xl border border-green-100 bg-green-50" />

              <h3 className="text-2xl font-bold leading-tight text-[#10352d] group-hover:text-green-700">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                {item.desc}
              </p>

              <div className="mt-8 text-lg text-gray-400 transition-all duration-300 group-hover:translate-x-2 group-hover:text-green-700">
                →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="bg-gradient-to-r from-[#042d24] via-[#063b30] to-[#042d24] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-4">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
                RESEARCH HIGHLIGHTS
              </div>

              <h2 className="mt-5 text-5xl font-bold leading-tight">
                Latest Publications
              </h2>

              <p className="mt-6 text-lg leading-8 text-green-50/80">
                Discover our recent studies, reports, and white papers shaping the future of healthcare.
              </p>

              <button className="mt-10 rounded-md border border-green-400 px-6 py-4 text-sm font-semibold tracking-wide transition hover:bg-green-600">
                BROWSE ALL PUBLICATIONS
              </button>
            </div>

            <div className="lg:col-span-3 grid gap-6 md:grid-cols-3">
              {publications.map((item, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/15"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-200/20 to-emerald-300/20" />

                  <div className="p-6">
                    <div className="mb-3 inline-flex rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold tracking-wide text-green-200">
                      NEW
                    </div>

                    <div className="text-xs uppercase tracking-wide text-green-200/70">
                      {item.type}
                    </div>

                    <h3 className="mt-4 text-2xl font-semibold leading-tight">
                      {item.title}
                    </h3>

                    <div className="mt-6 text-sm text-green-100/70">
                      May 2024 · HERAC Publication
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="bg-[#f5f7f7] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                AI & INNOVATION
              </div>

              <h2 className="mt-5 text-5xl font-bold leading-tight text-[#10352d]">
                Shaping the Future with Data and Intelligence
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                We harness the power of AI and real-world data to generate actionable insights, improve decision-making, and predict health outcomes.
              </p>

              <button className="mt-10 rounded-md border border-gray-300 bg-white px-6 py-4 text-sm font-semibold tracking-wide transition hover:border-green-700 hover:text-green-700">
                EXPLORE AI LAB
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:col-span-3 xl:grid-cols-4">
              {[
                "AI for HTA",
                "Real-World Evidence",
                "Predictive Analytics",
                "Data Governance",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-8 h-16 w-16 rounded-2xl border border-green-100 bg-green-50" />

                  <h3 className="text-2xl font-semibold leading-tight text-[#10352d]">
                    {item}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    Building next-generation healthcare intelligence systems through AI and advanced analytics.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#042d24] via-[#05281f] to-[#031d18] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            <div>
              <img
                src="/HERAC-logo.png"
                alt="HERAC Logo"
                className="h-20 w-auto object-contain brightness-200"
              />

              <p className="mt-6 leading-8 text-green-50/80">
                Advancing health economics, HTA and AI-driven innovation for sustainable healthcare systems.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-green-300">
                EXPLORE
              </div>

              <div className="mt-5 space-y-4 text-green-50/80">
                <div>About Us</div>
                <div>Research</div>
                <div>AI & Innovation</div>
                <div>Education</div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-green-300">
                RESOURCES
              </div>

              <div className="mt-5 space-y-4 text-green-50/80">
                <div>HTA Resources</div>
                <div>Training Programs</div>
                <div>Guidelines & Tools</div>
                <div>Events</div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-green-300">
                CONNECT
              </div>

              <div className="mt-5 space-y-4 text-green-50/80">
                <div>Partner With Us</div>
                <div>News & Media</div>
                <div>Contact Us</div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-green-300">
                STAY UPDATED
              </div>

              <p className="mt-5 leading-7 text-green-50/80">
                Subscribe to our newsletter for the latest insights.
              </p>

              <div className="mt-6 flex overflow-hidden rounded-md border border-green-700 bg-white/10 backdrop-blur">
                <input
                  type="text"
                  placeholder="Email address"
                  className="w-full bg-transparent px-4 py-4 text-white placeholder:text-green-100/50 focus:outline-none"
                />

                <button className="bg-green-600 px-5 text-white transition hover:bg-green-500">
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8 text-sm text-green-50/60">
            © 2026 HERAC – Health Economics Research and Assessment Center. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
