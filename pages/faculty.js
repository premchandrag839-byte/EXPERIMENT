import Head from 'next/head';
import { useState } from 'react';
import InteractiveModal from '../components/InteractiveModal';

export default function Faculty() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const facultyMembers = [
    { name: "Mr. Vineet Mishra Sir", photo: "/assets/images/faculty1.jpg" },
    { name: "Mr. Ashutosh Dwivedi Sir", photo: "/assets/images/faculty2.jpg" },
    { name: "Mr. Rajesh Kashyap Sir", photo: "/assets/images/faculty3.jpg" },
    { name: "Mr. Jitendra Sharma Sir", photo: "/assets/images/faculty4.jpg" },
    { name: "Mr. Ramashankar Gupta Sir", photo: "/assets/images/faculty5.jpg" },
    { name: "Mrs. Renu Verma Mam", photo: "/assets/images/faculty6.jpg" },
    { name: "Mr. Neeraj Sir", photo: "/assets/images/faculty7.jpg" },
    { name: "Mr. Sonu Pandey Sir", photo: "/assets/images/faculty8.jpg" },
    { name: "Mr. Dwarika Tiwari Sir", photo: "/assets/images/faculty9.jpg" },
    { name: "Mr. Vivek Sir", photo: "/assets/images/faculty10.jpg" },
    { name: "Mr. Ravishanand Sir", photo: "/assets/images/faculty11.jpg" },
    { name: "Mr.Anubhav Sir", photo: "/assets/images/faculty12.jpg" },
    { name: "Mr. C.L. Sir", photo: "/assets/images/faculty13.jpg" },
  ];

  function openMember(member) {
    setActiveFeature({ title: member.name, image: member.photo });
    setModalOpen(true);
  }

  return (
    <>
      <Head>
        <title>Akash Inter College - Faculty</title>
      </Head>
      <div className="min-h-screen bg-white-100 pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-2">Our Faculty</h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">At Akash Inter College, 30+ expert and passionate teachers guide our students towards success. Meet some of our outstanding faculty members below.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyMembers.map((member, index) => (
              <button
                key={index}
                onClick={() => openMember(member)}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <img src={member.photo} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                <h2 className="text-xl font-semibold">{member.name}</h2>
              </button>
            ))}
          </div>
        </div>
        <InteractiveModal open={modalOpen} onClose={() => setModalOpen(false)} feature={activeFeature} />
      </div>
    </>
  );
}