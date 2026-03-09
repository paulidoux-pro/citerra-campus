"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-navy-50 p-8 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-semibold text-navy-800 mb-2">
          Message envoyé
        </h3>
        <p className="text-slate-600">
          Nous vous recontacterons dans les meilleurs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20 transition-all"
            placeholder="Jean Dupont"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20 transition-all"
            placeholder="jean@example.com"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="organization"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Organisation
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20 transition-all"
          placeholder="Nom de votre établissement ou structure"
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Objet
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20 transition-all"
        >
          <option value="">Sélectionnez un objet</option>
          <option value="campus">Projet de campus</option>
          <option value="residence">Résidence étudiante</option>
          <option value="conseil">Conseil stratégique</option>
          <option value="partenariat">Partenariat</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20 transition-all resize-none"
          placeholder="Décrivez votre projet..."
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-8 py-3.5 text-sm font-semibold text-white hover:bg-navy-700 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2"
      >
        Envoyer le message
        <Send size={16} />
      </button>
    </form>
  );
}
