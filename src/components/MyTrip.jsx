import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const MyTrip = ({trip}) => {
    const navigate = useNavigate()

    const handlebtn = () => {
        navigate('/explore')
    }
  return (
     <section className='main'>

            <Navbar />

            <div className='about'>

                <h1 className='about-heading'>My Trips ✈️</h1>

                {!trip ? (

                    <div className='notrip'>
                        <h2>No trip planned yet</h2>
                        <p>Start planning your next trip!</p>
                        <p>Click this <button onClick={handlebtn} className='btn'>Explore</button></p>
                    </div>

                ) : (

                    <div className="about-content">

                         <h2>{trip.name}</h2>
                        
                        <p>📅 Start Date: {trip.startDate}</p>

                        <p>📅 End Date: {trip.endDate}</p>

                        <p>👥 Travellers: {trip.travellers}</p>

                        <p>
                            💰 Total Budget: ₹{trip.budget}
                        </p>

                    </div>

                )}

            </div>
            <Footer />

        </section>
  )
}

export default MyTrip
