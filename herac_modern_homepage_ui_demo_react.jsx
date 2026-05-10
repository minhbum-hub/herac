export default function HERACHomepageDemo() {
  const sections = [
    {
      title: "Health Economics & HTA",
      desc: "Evidence-based policy research and health technology assessment for sustainable healthcare systems.",
    },
    {
      title: "AI & Digital Health",
      desc: "Artificial intelligence, real-world evidence and healthcare intelligence innovation.",
    },
    {
      title: "Research & Publications",
      desc: "Scientific papers, white papers and strategic healthcare reports.",
    },
    {
      title: "HERAC Academy",
      desc: "Professional training and international certification programs in HTA and AI healthcare.",
    },
    {
      title: "Policy & Strategy",
      desc: "Strategic consulting for healthcare systems, hospitals and public health organizations.",
    },
    {
      title: "International Partnerships",
      desc: "Collaborative networks with universities, ministries and global organizations.",
    },
  ];

  const insights = [
    "AI-driven HTA in Southeast Asia",
    "Real-world Evidence Analytics",
    "Health Economics for Sustainable Healthcare",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-2xl font-bold tracking-tight text-green-700">
              HERAC
            </div>
            <div className="text-xs text-gray-500">
              Health Economics Research and Assessment Center
            </div>
          </div>

          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#" className="hover:text-green-700">About</a>
            <a href="#" className="hover:text-green-700">Research</a>
            <a href="#" className="hover:text-green-700">AI & Digital Health</a>
            <a href="#" className="hover:text-green-700">Academy</a>
            <a href="#" className="hover:text-green-700">Publications</a>
            <a href="#" className="hover:text-green-700">Partnerships</a>
          </nav>

          <button className="rounded-2xl bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105">
            Contact HERAC
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
              Science-driven Healthcare Innovation
            </div>

            <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
              Advancing Health Economics, HTA and AI-driven Healthcare Innovation
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              HERAC connects science, policy, education and artificial intelligence to support evidence-based healthcare systems and sustainable health innovation in Vietnam and Southeast Asia.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-green-700 px-6 py-4 text-base font-semibold text-white shadow-xl transition hover:scale-105">
                Explore Research
              </button>

              <button className="rounded-2xl border border-gray-300 bg-white px-6 py-4 text-base font-semibold text-gray-800 transition hover:border-green-600 hover:text-green-700">
                Partner with HERAC
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
              <div>
                <div className="text-3xl font-bold text-green-700">120+</div>
                <div className="mt-2 text-sm text-gray-500">Research Projects</div>
              </div>

              <div>
                <div className="text-3xl font-bold text-green-700">30+</div>
                <div className="mt-2 text-sm text-gray-500">Global Partners</div>
              </div>

              <div>
                <div className="text-3xl font-bold text-green-700">5000+</div>
                <div className="mt-2 text-sm text-gray-500">Professionals Trained</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-96 w-96 rounded-full bg-green-200/40 blur-3xl" />

            <div className="relative w-full rounded-[32px] border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">HERAC Health Intelligence</div>
                  <div className="text-sm text-gray-500">
                    AI-driven evidence ecosystem
                  </div>
                </div>

                <div className="rounded-xl bg-green-100 px-3 py-2 text-sm font-semibold text-green-700">
                  Live Analytics
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <div className="text-sm text-gray-500">HTA Assessments</div>
                  <div className="mt-3 text-3xl font-bold">248</div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <div className="text-sm text-gray-500">AI Research Models</div>
                  <div className="mt-3 text-3xl font-bold">42</div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <div className="text-sm text-gray-500">Healthcare Datasets</div>
                  <div className="mt-3 text-3xl font-bold">126</div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <div className="text-sm text-gray-500">Policy Insights</div>
                  <div className="mt-3 text-3xl font-bold">89</div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-green-700 to-emerald-600 p-6 text-white shadow-xl">
                <div className="text-lg font-semibold">
                  AI & Health Intelligence Lab
                </div>
                <div className="mt-2 text-sm text-green-50">
                  Integrating AI, real-world evidence and health economics for next-generation healthcare systems.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            HERAC Ecosystem
          </div>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Science, Policy, Education and AI in One Integrated Platform
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-6 h-14 w-14 rounded-2xl bg-green-50" />

              <h3 className="text-2xl font-semibold tracking-tight group-hover:text-green-700">
                {item.title}
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Research */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Research & Publications
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Featured Scientific Insights
              </h2>
            </div>

            <button className="rounded-2xl border border-gray-300 bg-white px-5 py-3 font-semibold hover:border-green-700 hover:text-green-700">
              View All Publications
            </button>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {insights.map((title, idx) => (
              <div
                key={idx}
                className="rounded-[28px] bg-white p-8 shadow-sm transition hover:shadow-xl"
              >
                <div className="mb-6 text-sm font-semibold text-green-700">
                  Policy & Research
                </div>

                <h3 className="text-2xl font-semibold leading-tight">
                  {title}
                </h3>

                <p className="mt-5 text-gray-600 leading-7">
                  Evidence-based analysis and strategic healthcare insights supporting sustainable policy and innovation.
                </p>

                <div className="mt-8 text-sm font-semibold text-green-700">
                  Read Research →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              HERAC Academy
            </div>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Professional Education for the AI-era Healthcare Ecosystem
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              International-level programs in HTA, health economics, AI healthcare, policy analysis and healthcare innovation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-green-700 px-6 py-4 font-semibold text-white shadow-lg hover:scale-105 transition">
                Explore Programs
              </button>

              <button className="rounded-2xl border border-gray-300 px-6 py-4 font-semibold hover:border-green-700 hover:text-green-700">
                International Certification
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold text-green-700">Foundation</div>
              <div className="mt-3 text-2xl font-semibold">HTA & HEOR Basics</div>
            </div>

            <div className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold text-green-700">Professional</div>
              <div className="mt-3 text-2xl font-semibold">Advanced Health Economics</div>
            </div>

            <div className="rounded-[28px] border border-gray-100 bg-gradient-to-r from-green-700 to-emerald-600 p-8 text-white shadow-xl">
              <div className="text-sm font-semibold text-green-100">AI Programs</div>
              <div className="mt-3 text-2xl font-semibold">AI in Drug Development & Healthcare</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <div className="text-2xl font-bold text-green-700">HERAC</div>

            <p className="mt-5 leading-7 text-gray-600">
              HERAC is a science-driven platform advancing health economics, HTA, AI-driven healthcare innovation and evidence-based policy development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-4">
            <div>
              <div className="font-semibold">Research</div>
              <div className="mt-4 space-y-3 text-gray-600">
                <div>HTA</div>
                <div>HEOR</div>
                <div>Publications</div>
              </div>
            </div>

            <div>
              <div className="font-semibold">Academy</div>
              <div className="mt-4 space-y-3 text-gray-600">
                <div>Programs</div>
                <div>Certification</div>
                <div>Executive Training</div>
              </div>
            </div>

            <div>
              <div className="font-semibold">Innovation</div>
              <div className="mt-4 space-y-3 text-gray-600">
                <div>AI Lab</div>
                <div>Health Data</div>
                <div>Analytics</div>
              </div>
            </div>

            <div>
              <div className="font-semibold">Contact</div>
              <div className="mt-4 space-y-3 text-gray-600">
                <div>info@herac.org</div>
                <div>www.herac.org</div>
                <div>Hanoi, Vietnam</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-7xl border-t border-gray-100 px-6 pt-8 text-sm text-gray-500">
          💚 HERAC – Science | Integrity | Sustainability
        </div>
      </footer>
    </div>
  );
}
