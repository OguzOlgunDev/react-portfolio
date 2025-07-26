"use client";
import { useForm, ValidationError } from "@formspree/react";
import { section } from "framer-motion/client";

function ContactForm() {
  const [state, handleSubmit] = useForm("movldyvn");

  return (
    <section className="max-w-7xl   mx-auto pb-24" id="contact">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-6xl   px-8  space-y-6"
      >
        {state.succeeded && (
          <p className="text-green-600 text-center font-semibold border border-green-300 rounded-md p-3 bg-green-50">
            ✅ Mesajınız başarıyla gönderildi. Teşekkür ederim!
          </p>
        )}

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Adresi
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:border-emerald-500 focus:ring focus:ring-emerald-300 focus:ring-opacity-50"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Mesajınız
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:border-emerald-500 focus:ring focus:ring-emerald-300 focus:ring-opacity-50"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Gönder
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
