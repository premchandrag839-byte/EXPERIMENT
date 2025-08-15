import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    // Add shadow on scroll
    useEffect(() => {
    const handler = () => {
      const nav = document.querySelector('nav');
      if (!nav) return;
      if (window.scrollY > 8) nav.classList.add('scrolled-nav');
      else nav.classList.remove('scrolled-nav');
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

    // Close mobile menu on route change
    useEffect(() => {
        const close = () => setIsOpen(false);
        router.events.on('routeChangeComplete', close);
        router.events.on('hashChangeComplete', close);
        return () => {
            router.events.off('routeChangeComplete', close);
            router.events.off('hashChangeComplete', close);
        };
    }, [router.events]);

	return (
		<nav className="fixed inset-x-0 top-0 z-30 bg-white/90 backdrop-blur border-b border-gray-200 transition-shadow">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* Brand */}
					<div className="flex items-center gap-3">
						<a href="/" className="flex items-center gap-2">
							<img src="/assets/images/logo.png" alt="Akash Inter College Logo" className="h-8 w-auto" />
							<span className="text-sm font-semibold leading-none text-gray-900">
								AKASH INTER
								<span className="block text-[10px] text-gray-600">COLLEGE</span>
							</span>
						</a>
					</div>

					{/* Desktop nav */}
					<div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
						<Link href="/" className="hover:text-gray-900 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Home</Link>
						<Link href="/about" className="hover:text-gray-900 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">About</Link>
						<Link href="/academics" className="hover:text-gray-900 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Academics</Link>
						<Link href="/admissions" className="hover:text-gray-900 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Admissions</Link>
						<Link href="/faculty" className="hover:text-gray-900 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Faculty</Link>
						<Link href="/achievements" className="hover:text-gray-900 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Achievements</Link>
						<Link href="/gallery" className="hover:text-gray-900 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Gallery</Link>
						<Link href="/contact" className="hover:text-gray-900 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Contact</Link>
					</div>

					{/* CTA */}
					<div className="hidden md:block">
						<Link href="/admissions" className="px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark transition-colors">
							Admission Open
						</Link>
					</div>

					{/* Mobile button */}
                    <div className="md:hidden">
						<button
							aria-label="Toggle Menu"
                            aria-expanded={isOpen}
							className="inline-flex items-center justify-center rounded p-2 text-gray-700 hover:bg-gray-100"
							onClick={() => setIsOpen((v) => !v)}
						>
							<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
            {isOpen && (
				<div className="md:hidden border-t border-gray-200 bg-white">
					<div className="space-y-1 px-4 py-3">
                        <Link href="/" onClick={() => setIsOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-50 text-gray-700">Home</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-50 text-gray-700">About</Link>
                        <Link href="/academics" onClick={() => setIsOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-50 text-gray-700">Academics</Link>
                        <Link href="/admissions" onClick={() => setIsOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-50 text-gray-700">Admissions</Link>
                        <Link href="/faculty" onClick={() => setIsOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-50 text-gray-700">Faculty</Link>
                        <Link href="/achievements" onClick={() => setIsOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-50 text-gray-700">Achievements</Link>
                        <Link href="/gallery" onClick={() => setIsOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-50 text-gray-700">Gallery</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-50 text-gray-700">Contact</Link>
						<div className="pt-2">
                            <Link href="/admissions" onClick={() => setIsOpen(false)} className="block text-center px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark transition-colors">
								Admission Open
							</Link>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
