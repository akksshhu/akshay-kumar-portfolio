"use client";

import { useRef, useState } from "react";
import Heading from "./Heading";
import { CircleUser, Paperclip } from "lucide-react";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const fileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_b72uxul",     // 🔴 replace
        "template_qvvsuhf",    // 🔴 replace
        formRef.current!,
        "5orIRZIdfZevmq3Jc"      // 🔴 replace
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current?.reset();
          setFileName("");
        },
        () => {
          alert("❌ Failed to send message");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 md:px-12">
        {/* Header */}
        <div className="mb-12">
          <button className="flex items-center gap-2 text-xs border border-white/20 rounded-full px-4 py-2 mb-6">
            <CircleUser className="text-(--primary)" size={20} /> CONTACT
          </button>

          <Heading
            as="h2"
            className="text-4xl md:text-6xl font-semibold lg:leading-17 leading-10 pb-10"
          >
            Let’s Work
            <span className="text-(--primary) font-normal"> Together!</span>
          </Heading>

          <p className="mt-4 text-lg text-white">
            hello@SunilKumar.design
          </p>
        </div>

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Left */}
          <div className="space-y-6">
            <Input name="name" label="FULL NAME *" />
            <Input name="phone" label="PHONE (OPTIONAL)" />
            <Input name="budget" label="YOUR BUDGET (OPTIONAL)" />
            <Textarea name="message" label="MESSAGE" />
          </div>

          {/* Right */}
          <div className="space-y-6">
            <Input name="email" label="EMAIL *" />
            <Input name="subject" label="SUBJECT *" />

            <div className="space-y-2">
              <div
                onClick={handleClick}
                className="flex items-center gap-3 text-sm cursor-pointer hover:text-(--primary)"
              >
                <Paperclip className="text-(--primary)" size={20} />
                ADD AN ATTACHMENT
              </div>

              {fileName && (
                <p className="text-xs text-green-400">
                  Selected: {fileName}
                </p>
              )}

              <input
                ref={fileRef}
                type="file"
                name="attachment"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-10 bg-(--primary) text-black font-semibold px-10 py-4 rounded-full hover:scale-105 transition disabled:opacity-50"
            >
              {loading ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* Reusable Inputs */
function Input({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  return (
    <div>
      <label className="text-xs text-(--primary)">{label}</label>
      <input
        name={name}
        required={label.includes("*")}
        className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-(--primary)"
      />
    </div>
  );
}

function Textarea({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  return (
    <div>
      <label className="text-xs text-(--primary)">{label}</label>
      <textarea
        name={name}
        rows={4}
        required
        className="w-full bg-transparent border-b border-white/20 py-3 text-sm resize-none focus:outline-none focus:border-(--primary)"
      />
    </div>
  );
}
