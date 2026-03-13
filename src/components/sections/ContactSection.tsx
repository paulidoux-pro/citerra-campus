"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import FadeInUp from "@/components/animations/FadeInUp";
import { CONTACT_INFO } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title="Parlons de votre projet"
        subtitle="Prenez contact avec notre équipe pour discuter de vos besoins en développement de campus"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        <FadeInUp className="lg:col-span-3">
          <div className="rounded-2xl bg-white p-8 md:p-10 shadow-sm border border-slate-100">
            <ContactForm />
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2} className="lg:col-span-2">
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy-50 text-navy-600 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 mb-1">
                    Email
                  </h3>
                  <p className="text-sm text-slate-600">
                    {CONTACT_INFO.email}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy-50 text-navy-600 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 mb-1">
                    Téléphone
                  </h3>
                  <p className="text-sm text-slate-600">
                    {CONTACT_INFO.phone}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy-50 text-navy-600 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 mb-1">
                    Localisation
                  </h3>
                  <p className="text-sm text-slate-600">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 p-6 text-white">
              <h3 className="text-lg font-bold mb-2">
                Vous êtes un établissement ?
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Citerra Campus vous accompagne dans votre projet
                d&apos;implantation ou de développement de campus. Contactez-nous
                pour une étude personnalisée.
              </p>
            </div>
          </div>
        </FadeInUp>
      </div>
    </SectionWrapper>
  );
}
