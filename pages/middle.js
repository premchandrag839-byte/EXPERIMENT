import Footer from "../components/Footer";
import Section from "../components/Section";
import SEO from "../components/SEO";

export default function MiddlePage() {
  return (
    <div className="font-inter">
      <SEO title="Middle (VI - VIII)" description="Middle section overview" />
      <Section title="Middle (VI - VIII)" subtitle="Confidence through concepts and skills">
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <p className="text-gray-700 leading-relaxed">
            The Middle Section focuses on deepening subject knowledge while encouraging independent thinking and problem-solving skills. Through interdisciplinary projects, practical learning experiences, and skill-based activities, students gain the confidence and competence needed for future academic success.
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


