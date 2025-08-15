import { useState } from "react";
import Footer from "../components/Footer";
import Section from "../components/Section";
import SEO from "../components/SEO";

export default function AdmissionsPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email.";
    if (!/^\+?[0-9\s-]{7,15}$/.test(form.phone)) return "Please enter a valid phone number.";
    if (form.message.trim().length < 10) return "Message should be at least 10 characters.";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) return setStatus({ type: "error", msg: err });
    setStatus({ type: "loading", msg: "Submitting..." });
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Request failed");
      setStatus({ type: "success", msg: "Enquiry submitted!" });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", msg: "Failed to submit. Please try again." });
    }
  }

  return (
    <div className="font-inter">
      <SEO title="Admissions" description="Admission process, fee structure, and enquiry form for Akash Inter College." />

      <Section title="Admission Process" subtitle="Simple steps to join our vibrant community.">
        <ol className="list-decimal pl-5 space-y-2 text-gray-700">
          <li>Submit online enquiry form</li>
          <li>School visit and interaction</li>
          <li>Document verification</li>
          <li>Fee payment and confirmation</li>
        </ol>
      </Section>

      <Section title="Fee Structure">
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full border border-blue-100 text-sm">
            <thead className="bg-blue-50">
              <tr>
                <th className="p-3 text-left">Class</th>
                <th className="p-3 text-left">Tuition (per term)</th>
                <th className="p-3 text-left">Transport (optional)</th>
                <th className="p-3 text-left">Exam Fees</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Pre-Primary", "₹300", "₹600", "₹200"],
                ["Primary", "₹400", "₹600", "₹200"],
                ["Middle", "₹500", "₹600", "₹200"],
                ["Secondary", "₹600", "₹600", "₹250"],
                ["Senior Secondary", "₹700", "₹600", "₹250"],
              ].map((row) => (
                <tr key={row[0]} className="odd:bg-white even:bg-blue-50/30">
                  {row.map((cell) => (
                    <td key={cell} className="p-3 border-t border-blue-100">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Online Enquiry Form">
        <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded border border-blue-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your full name" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded border border-blue-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded border border-blue-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="+1 234 567 890" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" rows="4" value={form.message} onChange={handleChange} className="mt-1 w-full rounded border border-blue-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tell us about the applicant"></textarea>
          </div>
          <button className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded bg-primary text-white hover:bg-primary-dark">Submit Enquiry</button>
          {status && (
            <p className={{
              loading: "text-gray-600",
              error: "text-red-600",
              success: "text-green-600"
            }[status.type]}>{status.msg}</p>
          )}
        </form>
      </Section>

      <Footer />
    </div>
  );
}
