import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import NexaProject from './components/NexaProject'
import GueCyberProject from './components/GueCyberProject'
import StyleitPadiProject from './components/StyleitPadiProject'
import TeachingProject from './components/TeachingProject'
import JourneySection from './components/JourneySection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <NexaProject />
      <GueCyberProject />
      <StyleitPadiProject />
      <TeachingProject />
      <JourneySection />
      <Footer />
    </div>
  )
}

export default App
