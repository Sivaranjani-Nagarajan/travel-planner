import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <section className='main'>
      <Navbar />

      <div className='about'>
        <h2 className='about-heading'>About</h2>

<div className='about-content'>
        <div>
          <h3>We build the tools. You build the memories.</h3>
          <p>Planning a trip shouldn’t feel like a second job. At Travel Planner, we eliminate the chaos of scattered spreadsheets, endless open tabs, and forgotten booking confirmations. We give you a single, beautiful space to map out your perfect journey, budget intelligently, and focus on what truly matters—the adventure ahead.</p>
        </div>

        <div>
          <h3>About the Travel Planner</h3>
          <p>Travel Planner is designed to transform the way you explore the world.
          Instead of juggling disjointed apps and messy notes, this platform serves as your central command center for seamless travel coordination. From the initial spark of wanderlust to the final flight home, the planner streamlines every phase of your itinerary. 
          It bridges the gap between booking a trip and actually experiencing it, allowing you to visualize your daily schedules, manage logistics, and organize travel details without the stress.Whether you are a solo backpacker mapping out a multi-city adventure or a group coordinator arranging a family getaway, this tool adapts perfectly to your travel style.
          It is built to keep your plans flexible, organized, and effortlessly accessible wherever your journey takes you.</p>
        </div>

        </div>

      </div>
      <Footer />
    </section>
  )
}

export default About
