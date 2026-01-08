import RightMenu from '../components/RightMenu'
import LeftProfile from '../components/LeftProfile'
import Hero from '../components/Hero'
import About from '../components/About'
import Resume from '../components/Resume'
import Services from '../components/Services'
import Skills from '../components/Skills'
import ContactSection from '../components/ContactSection'
import Testimonial from '../components/Testimonial'
import Project from '../components/Project'
import TeamSection from '../components/TeamSection'

export default function Home() {
  return (
    <>

      <video className="body-overlay" muted autoPlay loop>
        <source src="https://wpriverthemes.com/drake/wp-content/themes/drake/assets/images/video4.mp4" type="video/mp4" />
      </video>
      <LeftProfile/>
      <Hero/>
      <RightMenu/>
      <About/>
      <Resume/>
      <Services/>
      {/* <Skills/> */}
      <Testimonial/>
      <Project/>
      <TeamSection/>
      <ContactSection/>
    </>
  )
}
