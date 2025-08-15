import Head from 'next/head';
import HeroVanta from '../components/HeroVanta';
import SEO from "../components/SEO";
import Slider from "../components/Slider";
import Section from "../components/Section";
import Footer from "../components/Footer";
import { useState } from 'react';
import InteractiveModal from '../components/InteractiveModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      key: 'modern-classrooms',
      title: 'Modern Classrooms',
      description: 'More Than 30 classrooms designed for interactive learning, fostering creativity, collaboration, and active student engagement',
      image: 'https://gmiu.edu.in/gmiu/website/campus/images/1.webp',
    },
    {
      key: 'qualified-faculty',
      title: 'Qualified Faculty',
      description: 'Our school is proud to have over 30 highly qualified and experienced teachers, dedicated to nurturing each student’s potential. Their expertise and guidance ensure quality education, personal growth, and academic excellence',
      image: 'https://www.shutterstock.com/image-photo/young-businessman-business-conference-room-260nw-1251225550.jpg',
    },
    {
      key: 'sports-arts',
      title: 'Sports & Arts',
      description: 'We offer diverse sports and arts programs that promote physical fitness, creativity, and teamwork. From playground to stage, students develop discipline, confidence, and a well-rounded personality.',
      image: 'https://www.2classnotes.com/wp-content/uploads/2021/07/importance-of-games-and-sports.jpg',
    },
    {
      key: 'nextgen-labs',
      title: 'NextGen Labs',
      description: 'Equipped with modern technology and advanced tools, our NextGen Labs provide hands-on learning in science, technology, and innovation. They inspire curiosity, critical thinking, and practical skills for the future.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WWzH-dJQPMrDD29AHfbXovdLavKCNgH-Ww&s',
    },
    {
      key: 'playground',
      title: 'Playground',
      description: 'Our large and well-maintained playground encourages physical fitness, teamwork, and sportsmanship. It offers students the space to play, practice, and develop a healthy, active lifestyle.',
      image: 'https://www.playlsi.com/globalassets/products/product-lines/ourproductlines_2024_01_1440x.jpg',
    },
    {
      key: 'transport',
      title: 'Transport',
      description: 'With 20+ well-maintained vehicles, our school provides safe, reliable, and comfortable transport facilities. We ensure timely pick-up and drop-off, making education and activities accessible for every studets.',
      image: 'https://motorfloor.com/blog/wp-content/uploads/2024/03/group-min.jpg',
    },
  ];

  const events = [
    {
      key: 'republic-day',
      title: 'Republic Day Celebration',
      description:
        'A grand celebration on 26th January featuring flag hoisting, cultural performances, and patriotic activities to honor our nation’s pride and unity.',
      image: 'https://static.vecteezy.com/system/resources/previews/035/474/898/non_2x/75th-indian-republic-day-26-january-celebration-social-media-post-web-benner-status-wishes-free-vector.jpg',
    },
    {
      key: 'independence-day',
      title: 'Independence Day Celebration',
      description:
        'On 15th August, we celebrate India’s freedom with flag hoisting, cultural programs, and patriotic performances, fostering unity and national pride.',
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/independence-day-fes-hero?qlt=82&ts=1726639288095',
    },
    {
      key: 'childrens-day',
      title: 'Children’s Day Celebration',
      description:
        'Celebrated on 14th November with fun games, cultural performances, and special activities, honoring the joy, talent, and spirit of our students.',
      image: 'https://www.shutterstock.com/shutterstock/photos/2060707511/display_1500/stock-vector-vector-horizontal-banners-world-children-s-day-with-happy-kids-on-the-cloud-2060707511.jpg',
    },
  ];

  function openFeature(feature) {
    setActiveFeature(feature);
    setModalOpen(true);
  }

  return (
    <div className="font-inter">
      <Head>
        <title>AKASH INTER COLLEGE</title>
        <meta name="description" content="Inspiring excellence in academics, leadership, and character." />
      </Head>
      <HeroVanta /> {/* This adds the animated hero */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6">
        <Slider />
      </div>

      {/* Notice Board */}
      <Section title="Notice Board">
        <HomeNotices />
      </Section>

      <Section title="Why Choose Us" subtitle="Holistic development through academics, sports, and arts.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <button
              key={f.key}
              onClick={() => openFeature(f)}
              className="text-left rounded-lg border border-blue-100 p-6 hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <div className="h-12 w-12 rounded bg-primary/10 text-primary flex items-center justify-center mb-3">★</div>
              <h3 className="font-semibold text-gray-800">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{f.description.length > 120 ? f.description.slice(0, 117) + '…' : f.description}</p>
            </button>
          ))}
        </div>
      </Section>

      <Section title="Upcoming Events" subtitle="Stay updated with school activities and announcements.">
        <div className="grid gap-6 md:grid-cols-3">
          {events.map((ev) => (
            <button
              key={ev.key}
              onClick={() => openFeature(ev)}
              className="text-left rounded-xl border border-blue-100 p-5 hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <div className="h-40 w-full rounded-lg placeholder-bg" />
              <h4 className="mt-3 font-semibold text-gray-800">{ev.title}</h4>
              <p className="text-sm text-gray-600">{ev.description.length > 120 ? ev.description.slice(0, 117) + '…' : ev.description}</p>
              <span className="mt-3 inline-block text-primary hover:underline">Learn more</span>
            </button>
          ))}
        </div>
      </Section>

      <Footer />
      <InteractiveModal open={modalOpen} onClose={() => setModalOpen(false)} feature={activeFeature} />
    </div>
  );
}

import { useEffect } from 'react';
function HomeNotices() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function load() {
      const res = await fetch('/api/notices?page=1&limit=5');
      const json = await res.json();
      setItems(json.items || []);
    }
    load();
  }, []);
  function formatDisplayDate(ymd) {
    if (!ymd) return '';
    const parts = String(ymd).slice(0, 10).split('-');
    if (parts.length === 3) {
      const [yyyy, mm, dd] = parts;
      return `Date: ${dd.padStart(2,'0')}/${mm.padStart(2,'0')}/${yyyy}`;
    }
    return String(ymd);
  }
  return (
    <div className="rounded-xl border border-blue-100 p-4 bg-white/80">
      <div className="space-y-3">
        {items.length === 0 && <p className="text-gray-600">No notices yet.</p>}
        {items.map(n => (
          <div key={n.id} className="border-b last:border-0 border-blue-100 pb-3">
            <h4 className="font-semibold text-gray-800">{n.title}</h4>
            <p className="text-xs text-gray-500 mt-1">{formatDisplayDate(n.date)}</p>
            {n.description && <p className="text-sm text-gray-700 mt-1">{n.description}</p>}
          </div>
        ))}
      </div>
      <div className="pt-4">
        <a href="/notices" className="inline-block px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark">View All Notices</a>
      </div>
    </div>
  );
}
