import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import goa from '../assets/goa.jpg'
import hawamahal from '../assets/hawamahal.jpg'
import manali from '../assets/manali.jpg'
import munnar from '../assets/munnar.jpg'
import amberpalace from '../assets/amberpalace.jpg'
import mysurupalace from '../assets/mysurupalace.jpg'
import ooty from '../assets/ooty.jpg'
import yercaud from '../assets/yercaud.jpg'
import heroimg from '../assets/heroimg.png'

const Home = () => {

    const navigate = useNavigate()

    const handleExplore = () => {
        navigate('/explore')
    }

    const handlePlan = () => {
        navigate('/plantrip')
    }

    const places = [
        {
            img: goa,
            name: "Goa",
            rating: "⭐⭐⭐⭐"
        },
        {
            img: hawamahal,
            name: "Hawa Mahal,Jaipur",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            img: manali,
            name: "Manali",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            img: munnar,
            name: "Munnar, Kerala",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            img: amberpalace,
            name: "Amber Palace,Jaipur",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            img: mysurupalace,
            name: "Mysuru Palace,Karnatka",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            img: ooty,
            name: "Ooty,Tamil Nadu",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            img: yercaud,
            name: "Yercaud,Tamil Nadu",
            rating: "⭐⭐⭐⭐⭐"
        },
    ]

    const [search, setSearch] = useState("")

    const filteredPlaces = places.filter((place) =>
        place.name.toLowerCase().includes(search.toLowerCase())
    )

    const whychooseus = [
        {
            title: "🗓️ Easy Planning",
            content: "Plan your entire trip in one place."
        },
        {
            title: "💰 Budget Friendly",
            content: "Keep track of your travel expenses."
        },
        {
            title: "❤️ Save Your Trips",
            content: "Save your favourite destinations and trips."
        }
    ]

    return (
        <section className='main'>
            <Navbar />
            {/* Hero Section */}
            <section className='herosection'>

                <div className='herosection-content'>
                    <img src={heroimg} alt="hero image" />
                    <div className='herosection-details'>
                        <h1>Plan your perfect trip</h1>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search your Destination...' />
                        <p>Discover amazing destinations and create a trip that fits your budget.</p>
                        <form className='trip-details'>
                           
                            <button className='btn' onClick={ handleExplore} >Explore →</button>                           
                        </form>
                    </div>


                </div>

            </section>

            <section className='popdesmain'>
                {/* Popular Destinations */}

                <h2>Popular Destinations</h2>
                <div className='cards'>
                    {filteredPlaces.map((place, index) => (
                        <div className='popdes-content'>
                            <img key={index} src={place.img} alt={place.name} />
                            <p>{place.name}</p>
                            <p>{place.rating} </p>
                        </div>
                    ))}
                </div>


            </section>

            <section className='featuredes-main'>
                {/* Featured Destinations */}

                <h2>Featured Destinations</h2>

                <div className='cards'>
                    {filteredPlaces.map((place, index) => (
                        <div className='featuredes-content'>
                            <img key={index} src={place.img} alt={place.name} />
                            <p>{place.name}</p>
                        </div>
                    ))}
                </div>

            </section>

            <section className='choose-section'>
                {/* Why use our Travel Planner */}

                <h2>Why use our Travel Planner</h2>

                <div className='choose-content'>
                    {whychooseus.map((chooseus, index) => (
                        <div className='choose-card'>
                            <h3 key={index}>{chooseus.title}</h3>
                            <p>{chooseus.content}</p>
                        </div>
                    ))}


                </div>

            </section>

<Footer />
        </section>
    )
}

export default Home
