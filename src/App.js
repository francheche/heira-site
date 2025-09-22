"use client";

import { useState } from "react";

export default function HeiraHomepage() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ state: "loading", message: "Sending…" });

    try {
      const res = await fetch("https://formspree.io/f/mvgwpkgq", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus({ state: "success", message: "✅ Thank you! We will get back to you soon." });
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        const msg = data?.errors?.[0]?.message || "Something went wrong. Please try again later.";
        setStatus({ state: "error", message: `❌ ${msg}` });
      }
    } catch (err) {
      setStatus({ state: "error", message: "❌ Network error. Please check your connection and try again." });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <img
              src="/top-logo.png"
              alt="Heira Services logo"
              className="h-12 w-auto object-contain"
            />
            <span className="font-semibold text-xl text-gray-900 hidden sm:inline"></span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#why" className="hover:text-emerald-700">Why Us</a>
            <a href="#services" className="hover:text-emerald-700">Services</a>
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#certs" className="hover:text-emerald-700">Certifications</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="ml-4 inline-flex items-center rounded-2xl bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 transition"
          >
            Book a Free Consultation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Your Trusted <span className="text-emerald-700">Virtual Assistant</span> Team
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Philippines-based, certificate-backed VAs helping owners, startups, and agencies save time and scale.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#how"
                className="inline-flex items-center rounded-2xl bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700 transition"
              >
                Start in 3 Steps
              </a>
              <a
                href="#how"
                className="inline-flex items-center rounded-2xl border px-5 py-3 font-medium hover:bg-gray-50 transition"
              >
                How it Works
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              Average response time: <span className="font-medium text-gray-700">under 24 hours</span>
            </div>
          </div>
         <div className="aspect-video w-full rounded-2xl border shadow-sm bg-black overflow-hidden">
  <video
    src="/intro.mp4"
    poster="/intro-poster.jpg"
    className="h-full w-full object-cover"
    controls
    playsInline
    preload="metadata"
  >
    {/* Optional: provide multiple sources for wider browser support */}
    {/* <source src="/intro.webm" type="video/webm" /> */}
    {/* <source src="/intro.mp4" type="video/mp4" /> */}
    {/* Optional captions for accessibility */}
    {/* <track kind="captions" src="/intro-captions.vtt" srcLang="en" label="English" default /> */}
  </video>
</div>

      </section>

      {/* Why Choose Us */}
      <section id="why" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Why choose Heira</h2>
        <p className="mt-2 text-gray-600">Clear communication, certified skills, and flexible pricing designed for growing teams.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Feature icon={ShieldIcon} title="Reliable Support" desc="Always on time, always responsive."/>
          <Feature icon={RibbonIcon} title="Certified Professionals" desc="Udemy, Coursera, Google & HubSpot coursework."/>
          <Feature icon={ChartIcon} title="Affordable Growth" desc="Scale without the overhead of full-time hires."/>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
              <p className="mt-2 text-gray-600">Pick a package or mix-and-match based on your needs.</p>
            </div>
            <a href="#contact" className="hidden md:inline-flex rounded-2xl border px-4 py-2 hover:bg-white">Get a Quote</a>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard icon={ChecklistIcon} title="Admin Support" items={["Scheduling & inbox", "Data entry & research", "Docs & spreadsheets"]}/>
            <ServiceCard icon={HashtagIcon} title="Social Media" items={["Content posting", "Community replies", "Simple graphics"]}/>
            <ServiceCard icon={HeadsetIcon} title="Customer Support" items={["Email / chat", "Helpdesk triage", "CSAT tracking"]}/>
            <ServiceCard icon={CartIcon} title="E‑commerce" items={["Listings & tags", "Order tracking", "Basic store ops"]}/>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">About Heira</h2>
            <p className="mt-3 text-gray-600">Heira stands for <span className="font-semibold">Helper in Reliable Assistance</span>. We treat your business like our own—owning outcomes, not just tasks.</p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><Check /> Dedicated account manager</li>
              <li className="flex items-start gap-2"><Check /> Clear SOPs and weekly reporting</li>
              <li className="flex items-start gap-2"><Check /> Data privacy and NDA on request</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-6 bg-white shadow-sm">
            <div className="aspect-video rounded-xl bg-gray-100 grid place-items-center text-gray-400">Team photo / collage placeholder</div>
            <p className="mt-3 text-sm text-gray-500">Show smiling faces with first names to build trust.</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Training & Certifications</h2>
          <p className="mt-2 text-gray-600">Our VAs complete courses from globally recognized platforms and pass internal skills checks.</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["Udemy","Coursera","Google","HubSpot"].map((brand) => (
              <div key={brand} className="rounded-xl border bg-white p-6 grid place-items-center text-sm font-medium text-gray-700">
                {brand}
              </div>
            ))}
          </div>
          <ul className="mt-6 list-disc pl-6 text-gray-700 space-y-1 text-sm">
            <li>Customer Service Fundamentals · Excel/Sheets Essentials · Social Media Marketing</li>
            <li>Google Workspace productivity · Canva basics · Helpdesk (Zendesk/Freshdesk) onboarding</li>
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Step n={1} title="Discovery call" desc="Understand goals, tools, and tasks to delegate."/>
            <Step n={2} title="Pilot week" desc="Start small, validate quality and communication."/>
            <Step n={3} title="Scale & report" desc="Expand scope with weekly metrics and updates."/>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">What clients say</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Testimonial quote="My VA from Heira saves me 10+ hours weekly and keeps our inbox at zero." name="A. Rivera" role="E‑commerce owner"/>
          <Testimonial quote="Professional, friendly, and fast. We scaled support without hiring full-time." name="J. Bennett" role="Agency founder"/>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-600 to-emerald-700" />
        <div className="mx-auto max-w-6xl px-4 py-14 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Ready to reclaim your time?</h3>
              <p className="mt-2 text-emerald-50">Tell us what you need. We'll match you with a certified VA in days, not weeks.</p>
            </div>
            <div className="md:text-right">
              <a href="#contact" className="inline-flex rounded-2xl bg-white text-emerald-700 px-5 py-3 font-medium hover:bg-emerald-50">Book a Free Consultation</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Contact us</h2>
          <p className="mt-2 text-gray-600">We reply within 24 hours. Or message us on WhatsApp/Facebook.</p>

          {/* IMPORTANT: onSubmit + name attributes + submit button */}
          <form className="mt-8 grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            {/* Helpful for Formspree inbox routing */}
            <input type="hidden" name="_subject" value="New inquiry from Heira homepage" />

            <Input label="Full name" placeholder="Jane Doe" name="name" required />
            <Input label="Email" placeholder="you@company.com" type="email" name="email" required />
            <Input label="Company" placeholder="Company or brand" name="company" />
            <Input label="Phone / WhatsApp" placeholder="(+63) 900 000 0000" name="phone" />
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">What do you need help with?</label>
              <textarea
                className="w-full rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 min-h-[120px]"
                placeholder="E.g., inbox management, customer support, social media, e‑commerce ops"
                name="message"
                required
              />
            </div>
            <div className="md:col-span-2 flex items-center gap-4">
              <button
                type="submit"
                disabled={status.state === "loading"}
                className="inline-flex items-center rounded-2xl bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700 disabled:opacity-60"
              >
                {status.state === "loading" ? "Sending…" : "Send inquiry"}
              </button>
              {status.message && (
                <span
                  role="status"
                  aria-live="polite"
                  className={
                    status.state === "success"
                      ? "text-emerald-700 text-sm"
                      : status.state === "error"
                      ? "text-red-600 text-sm"
                      : "text-gray-600 text-sm"
                  }
                >
                  {status.message}
                </span>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600 grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-semibold text-gray-800">Heira Services</div>
            <p className="mt-2">Helper in Reliable Assistance.</p>
          </div>
          <div>
            <div className="font-semibold text-gray-800">Quick links</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#services" className="hover:text-emerald-700">Services</a></li>
              <li><a href="#certs" className="hover:text-emerald-700">Certifications</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-700">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-800">Contact</div>
            <p className="mt-2">heiraservices.com · hello@heiraservices.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ===== Reusable Components & Icons ===== */
function Input({ label, type = "text", placeholder, name, required }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
      />
    </div>
  );
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, items }) {
  return (
    <div className="rounded-2xl border bg-white p-6 hover:shadow-md transition">
      <div className="h-10 w-10 rounded-xl bg-gray-100 text-gray-700 grid place-items-center">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <ul className="mt-3 space-y-1 text-sm text-gray-600">
        {items.map((item) => (
          <li key={item} className="flex gap-2 items-start"><Dot /> {item}</li>
        ))}
      </ul>
    </div>
  );
}

function Step({ n, title, desc }) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-emerald-600 text-white grid place-items-center font-semibold">{n}</div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function Testimonial({ quote, name, role }) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-emerald-600"><path fill="currentColor" d="M7.17 6.17A5.5 5.5 0 0 1 12 4v4a2 2 0 0 0-2 2v2H6V9a3 3 0 0 1 1.17-2.83Zm9 0A5.5 5.5 0 0 1 21 4v4a2 2 0 0 0-2 2v2h-4V9a3 3 0 0 1 1.17-2.83Z"/></svg>
      <p className="mt-3">{quote}</p>
      <div className="mt-4 text-sm text-gray-600">{name} · {role}</div>
    </div>
  );
}

/* --- Tiny icon components (inline SVGs) --- */
function ShieldIcon(props){return(<svg viewBox="0 0 24 24" className={"h-5 w-5 "+(props.className||"")}> <path fill="currentColor" d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z"/></svg>)}
function RibbonIcon(props){return(<svg viewBox="0 0 24 24" className={"h-5 w-5 "+(props.className||"")}> <path fill="currentColor" d="M12 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 14-3.5 5 3.5-2 3.5 2L12 16Z"/></svg>)}
function ChartIcon(props){return(<svg viewBox="0 0 24 24" className={"h-5 w-5 "+(props.className||"")}> <path fill="currentColor" d="M3 3h2v18H3V3Zm16 7h2v11h-2V10ZM10 13h2v8h-2v-8Zm-4-4h2v12H6V9Zm8-6h2v18h-2V3Z"/></svg>)}
function ChecklistIcon(props){return(<svg viewBox="0 0 24 24" className={"h-5 w-5 "+(props.className||"")}> <path fill="currentColor" d="M3 5h11v2H3V5Zm0 6h11v2H3v-2Zm0 6h11v2H3v-2Zm14-8 4-4 1.5 1.5L17 12l-3-3 1.5-1.5 1.5 1.5Z"/></svg>)}
function HashtagIcon(props){return(<svg viewBox="0 0 24 24" className={"h-5 w-5 "+(props.className||"")}> <path fill="currentColor" d="M10 3h2l-.5 4H14l.5-4h2L16 7h3v2h-3l-1 6h3v2h-3l-.5 4h-2l.5-4h-2l-.5 4H9l.5-4H7v-2h2l1-6H7V7h3l.5-4Zm2.5 6H11l-1 6h1.5l1-6Z"/></svg>)}
function HeadsetIcon(props){return(<svg viewBox="0 0 24 24" className={"h-5 w-5 "+(props.className||"")}> <path fill="currentColor" d="M12 3a9 9 0 0 0-9 9v4a3 3 0 0 0 3 3h2v-6H6v-1a6 6 0 1 1 12 0v1h-2v6h2a3 3 0 0 0 3-3v-4a9 9 0 0 0-9-9Z"/></svg>)}
function CartIcon(props){return(<svg viewBox="0 0 24 24" className={"h-5 w-5 "+(props.className||"")}> <path fill="currentColor" d="M7 6h14l-2 9H9L7 6ZM3 4h2l3 12h10v2H7a2 2 0 0 1-2-1.5L2 4h1Zm5 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 .001 3.999A2 2 0 0 0 16 20Z"/></svg>)}
function Dot(){return(<span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-gray-400 inline-block"/>) }
function Check(){return(<svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 text-emerald-600"><path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4Z"/></svg>)}
