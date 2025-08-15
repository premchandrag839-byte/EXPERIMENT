import Image from "next/image";
import { useState } from "react";
import { site } from "../config/site";

export default function Footer() {
  // Editable creator info
  const creator = {
    photo: "/assets/images/creator.jpg", // replace with your downloaded image
    title: "Website Created By",
    names: ["Vansh Gupta  (A Student Of Akash Inter College)"],
    helpers: ["With The Help Of   Vasu , Saurabh"],
    phones: ["9369972785"],
    emails: ["guptavansh890@gmail.com"],
  };

  const [showCreator, setShowCreator] = useState(false);
  return (
    <footer className="border-t border-blue-100 bg-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/assets/logo.png" alt="AKASH INTER COLLEGE logo" width={32} height={32} className="h-8 w-8 rounded" />
            <span className="font-bold text-primary">{site.name}</span>
          </div>
          <p className="mt-3 text-sm text-gray-600">Nurturing minds, shaping futures. Excellence in education and character development.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Contact</h3>
          <p className="mt-2 text-sm text-gray-600">{site.address}</p>
          <p className="text-sm text-gray-600">PHONE.NO- {site.phone}</p>
          <p className="text-sm text-gray-600">Email: {site.email}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Quick Links</h3>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li><a className="hover:text-primary" href="/about">About</a></li>
            <li><a className="hover:text-primary" href="/academics">Academics</a></li>
            <li><a className="hover:text-primary" href="/admissions">Admissions</a></li>
            <li><a className="hover:text-primary" href="/gallery">Gallery</a></li>
            <li><a className="hover:text-primary" href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-blue-100 py-4">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left text-xs text-gray-500">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <button
            onClick={() => setShowCreator(true)}
            className="px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark text-sm"
          >
            Creator
          </button>
        </div>
      </div>

      {showCreator && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowCreator(false)} />
          <div className="relative z-[201] w-full max-w-sm [transform-style:preserve-3d] animate-card-flip">
            <div className="rounded-2xl bg-white shadow-xl border border-blue-100 overflow-hidden">
              <div className="relative h-56 w-full bg-blue-50">
                <Image src={creator.photo} alt="Creator" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{creator.title}</h3>
                {creator.names?.length > 0 && (
                  <p className="mt-1 text-gray-800 text-sm">
                    {creator.names.join(", ")}
                  </p>
                )}
                {creator.description && (
                  <p className="text-gray-600 text-xs">{creator.description}</p>
                )}
                {creator.helpers?.length > 0 && (
                  <p className="mt-1 text-gray-600 text-xs">{creator.helpers.join(", ")}</p>
                )}
                {creator.phones?.length > 0 && (
                  <p className="mt-3 text-sm text-gray-700"><span className="font-medium">Mobile:</span> {creator.phones.join(" / ")}</p>
                )}
                {creator.emails?.length > 0 && (
                  <p className="text-sm text-gray-700"><span className="font-medium">Email:</span> {creator.emails.join(", ")}</p>
                )}
                <div className="mt-4 flex justify-end">
                  <button onClick={() => setShowCreator(false)} className="px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
