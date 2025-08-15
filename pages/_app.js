import '../styles/globals.css'; // Adjust path if needed
import Script from 'next/script';
import Navbar from '../components/Navbar';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import SmoothScrollExperiment from '../components/SmoothScrollExperiment';
import IphoneUnlockObserver from '../components/IphoneUnlockObserver';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" 
        strategy="beforeInteractive" 
      />
      <Script 
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js" 
        strategy="beforeInteractive" 
      />
      <SmoothScrollExperiment>
        <div className="min-h-screen flex flex-col">
          <Navbar /> {/* Add navigation here */}
          <main className="flex-grow pt-16"> {/* Ensure spacing below the Navbar */}
            <IphoneUnlockObserver />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={router.asPath}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </SmoothScrollExperiment>
    </>
  );
}

export default MyApp;
