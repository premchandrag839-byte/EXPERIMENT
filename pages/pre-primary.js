import Footer from "../components/Footer";
import Section from "../components/Section";
import SEO from "../components/SEO";

export default function PrePrimaryPage() {
  return (
    <div className="font-inter">
      <SEO title="Pre-Primary Classes" description="Play Group, Nursery, LKG, and UKG at Akash Inter College." />

      <Section title="Pre-Primary Classes" subtitle="A joyful beginning for young learners!">
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <p className="text-gray-700 leading-relaxed">
            Our Play Group, Nursery, LKG, and UKG classes offer a caring space where curiosity grows, creativity thrives, and the foundation for lifelong learning is built. We focus on social skills, language development, early numeracy, and joyful exploration through stories, music, art, and hands-on activities.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="h-32 sm:h-40 w-full rounded-lg placeholder-bg" />
            ))}
          </div>
        </div>
      </Section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <button onClick={() => history.back()} className="px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark">Back</button>
      </div>

      <Footer />
    </div>
  );
}


