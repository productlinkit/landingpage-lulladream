import BlobDefs from '@/components/ui/BlobDefs'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import VoiceFeature from '@/components/sections/VoiceFeature'
import SocialProof from '@/components/sections/SocialProof'
import Safety from '@/components/sections/Safety'
import Faq from '@/components/sections/Faq'
import FinalCta from '@/components/sections/FinalCta'
import Footer from '@/components/sections/Footer'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="skip-link rounded-full bg-action-primary px-s6 py-s3 text-sm font-semibold text-white shadow-3"
      >
        Skip to main content
      </a>

      <BlobDefs />
      <Navbar />

      <main id="main">
        <Hero />
        <HowItWorks />
        <VoiceFeature />
        <SocialProof />
        <Safety />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
