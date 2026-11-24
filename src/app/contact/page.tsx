"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { BRAND_CONFIG } from "@/lib/config";
import { Mail, Phone, MapPin, Check, ShieldCheck, Sparkles } from "@/components/Icons";

function ContactFormContent({
  querySubject,
  queryCategory,
}: {
  querySubject: string;
  queryCategory: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    discipline: queryCategory || "general",
    subject: querySubject,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please provide your full name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email format.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Please enter an inquiry subject.";
    if (!formData.message.trim() || formData.message.length < 15) {
      newErrors.message = "Please include details regarding your commission (minimum 15 characters).";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate brief processing for fluid UI feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121216] border border-[#c5a880]/30 text-[10px] tracking-[0.25em] uppercase text-[#dfcaa9]">
          <Sparkles size={12} className="text-[#c5a880]" />
          <span>Private Concierge & Commissions</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#faf7f2] tracking-wide">
          Initiate a Consultation
        </h1>
        <p className="text-xs sm:text-sm text-[#99948c] font-light leading-relaxed">
          Our master artisans and private client concierge welcome inquiries for bespoke creations, private salon visits, and international commissions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 bg-[#101013] border border-[#1e1e24] p-8 sm:p-10">
          {submitted ? (
            <div className="py-12 text-center space-y-6 animate-fadeIn">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#1b261b] border border-emerald-500/40 text-emerald-400">
                <Check size={28} />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-[#faf7f2]">
                  Consultation Request Registered
                </h3>
                <p className="text-xs text-[#a6a29a] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#f4efe6]">{formData.name}</strong>. Your inquiry regarding &ldquo;{formData.subject}&rdquo; has been logged.
                </p>
              </div>

              {/* Explicit Setup Notice */}
              <div className="p-4 bg-[#141418] border border-[#2a2a34] text-left text-xs text-[#99948c] space-y-2 mt-6">
                <div className="flex items-center gap-2 text-[#dfcaa9] font-medium text-[11px] uppercase tracking-wider">
                  <ShieldCheck size={14} className="text-[#c5a880]" />
                  <span>Production Configuration Note</span>
                </div>
                <p className="text-[11px] text-[#858178] leading-relaxed">
                  This form is currently running in demonstration mode. In a live production deployment, connect this form to your preferred email dispatch API (such as <strong>Formspree</strong>, <strong>Resend</strong>, or <strong>SendGrid</strong>) by setting the endpoint in <code className="text-[#dfcaa9] bg-[#09090b] px-1 py-0.5 rounded">src/lib/config.ts</code>.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    discipline: "general",
                    subject: "",
                    message: "",
                  });
                }}
                className="mt-4 px-6 py-2.5 border border-[#c5a880]/40 text-[#dfcaa9] text-xs uppercase tracking-[0.2em] hover:bg-[#c5a880]/10"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <h3 className="font-serif text-xl text-[#faf7f2] border-b border-[#1b1b22] pb-4">
                Bespoke Dossier Request
              </h3>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.2em] text-[#a6a29a]">
                    Full Name <span className="text-[#c5a880]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="e.g. Arthur Pendelton"
                    className={`w-full bg-[#08080a] border ${
                      errors.name ? "border-rose-500/70" : "border-[#22222a]"
                    } text-[#faf7f2] px-4 py-3 text-xs placeholder:text-[#5e5b54] focus:outline-none focus:border-[#c5a880]`}
                  />
                  {errors.name && <p className="text-[10px] text-rose-400 mt-1">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] text-[#a6a29a]">
                    Email Address <span className="text-[#c5a880]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="e.g. arthur@domain.com"
                    className={`w-full bg-[#08080a] border ${
                      errors.email ? "border-rose-500/70" : "border-[#22222a]"
                    } text-[#faf7f2] px-4 py-3 text-xs placeholder:text-[#5e5b54] focus:outline-none focus:border-[#c5a880]`}
                  />
                  {errors.email && <p className="text-[10px] text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Product Category Interest */}
              <div className="space-y-1.5">
                <label htmlFor="discipline" className="block text-[10px] uppercase tracking-[0.2em] text-[#a6a29a]">
                  Area of Interest
                </label>
                <select
                  id="discipline"
                  value={formData.discipline}
                  onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                  className="w-full bg-[#08080a] border border-[#22222a] text-[#faf7f2] px-4 py-3 text-xs focus:outline-none focus:border-[#c5a880]"
                >
                  <option value="general">General Studio Inquiry</option>
                  <option value="rings">High Jewelry Rings</option>
                  <option value="watches">Bespoke Horology / Watches</option>
                  <option value="straps">Bespoke Leather Watch Straps</option>
                  <option value="salon">Private Suite Appointment (Geneva / Paris)</option>
                </select>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-[10px] uppercase tracking-[0.2em] text-[#a6a29a]">
                  Subject <span className="text-[#c5a880]">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: "" });
                  }}
                  placeholder="e.g. Custom Tourbillon Consultation"
                  className={`w-full bg-[#08080a] border ${
                    errors.subject ? "border-rose-500/70" : "border-[#22222a]"
                  } text-[#faf7f2] px-4 py-3 text-xs placeholder:text-[#5e5b54] focus:outline-none focus:border-[#c5a880]`}
                />
                {errors.subject && <p className="text-[10px] text-rose-400 mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.2em] text-[#a6a29a]">
                  Commission Details & Requirements <span className="text-[#c5a880]">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  placeholder="Please describe your desired piece, preferred metals/gemstones or leather type, wrist dimensions, or target completion timeline..."
                  className={`w-full bg-[#08080a] border ${
                    errors.message ? "border-rose-500/70" : "border-[#22222a]"
                  } text-[#faf7f2] px-4 py-3 text-xs placeholder:text-[#5e5b54] focus:outline-none focus:border-[#c5a880]`}
                />
                {errors.message && <p className="text-[10px] text-rose-400 mt-1">{errors.message}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-[#c5a880] text-[#09090b] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#dfcaa9] transition-all duration-200 disabled:opacity-50 active:scale-[0.98]"
                >
                  {submitting ? "Transmitting..." : "Submit Bespoke Inquiry"}
                </button>
              </div>

              <p className="text-[10px] text-[#6e6b63] text-center">
                Discretion guaranteed. Client details are protected by studio confidentiality protocols.
              </p>
            </form>
          )}
        </div>

        {/* Right Column: Studio Addresses & Direct Concierge */}
        <div className="lg:col-span-5 space-y-10">
          {/* Direct Channels */}
          <div className="p-8 bg-[#101013] border border-[#1e1e24] space-y-6">
            <h3 className="font-serif text-lg text-[#faf7f2] border-b border-[#1b1b22] pb-3">
              Direct Concierge
            </h3>
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#8c887f]">
                    Electronic Correspondence
                  </span>
                  <a
                    href={`mailto:${BRAND_CONFIG.concierge.email}`}
                    className="text-[#f4efe6] hover:text-[#c5a880] transition-colors font-mono"
                  >
                    {BRAND_CONFIG.concierge.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#8c887f]">
                    Geneva Concierge Desk
                  </span>
                  <span className="text-[#f4efe6] font-mono">
                    {BRAND_CONFIG.concierge.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Salons & Locations */}
          <div className="p-8 bg-[#101013] border border-[#1e1e24] space-y-6">
            <h3 className="font-serif text-lg text-[#faf7f2] border-b border-[#1b1b22] pb-3">
              Studio Suites
            </h3>
            <div className="space-y-5 text-xs">
              {BRAND_CONFIG.concierge.addresses.map((loc) => (
                <div key={loc.city} className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#dfcaa9] font-medium">{loc.city} · {loc.label}</span>
                    <p className="text-[#99948c] mt-0.5 text-[11px]">{loc.address}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[#737069] tracking-wider uppercase pt-2 border-t border-[#18181e]">
              *All visits strictly by prior appointment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactWithParams() {
  const searchParams = useSearchParams();
  const querySubject = searchParams.get("subject") || "";
  const queryCategory = searchParams.get("category") || "";

  return (
    <ContactFormContent
      key={`${querySubject}:${queryCategory}`}
      querySubject={querySubject}
      queryCategory={queryCategory}
    />
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-32 text-center text-xs tracking-widest uppercase text-[#c5a880]">
          Loading Concierge Desk...
        </div>
      }
    >
      <ContactWithParams />
    </Suspense>
  );
}
