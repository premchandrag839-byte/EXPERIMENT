import Footer from "../components/Footer";
import Section from "../components/Section";
import SEO from "../components/SEO";

export default function PrimaryPage() {
  return (
    <div className="font-inter">
      <SEO title="Primary (I - V)" description="Primary section overview" />
      <Section title="Primary (I - V)" subtitle="Strong foundations, joyful learning">
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <p className="text-gray-700 leading-relaxed">
            In the Primary Section, we focus on building strong academic foundations while nurturing creativity, critical thinking, and curiosity. Through interactive lessons, hands-on activities, and value-based learning, students develop essential literacy and numeracy skills along with the confidence to explore the world around them.
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


