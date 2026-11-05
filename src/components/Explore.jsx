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
import { FaTimes } from 'react-icons/fa'



const Explore = () => {

    const navigate = useNavigate()

    const places = [
        {
            id:1,
            img: goa,
            name: "Goa",
            rating: 4.8,
            type: "Beach",
            price: 10000
        },
        {
            id:2,
            img: hawamahal,
            name: "Hawa Mahal,Jaipur",
            rating: 4.2,
            type: "Mountains",
            price: 5000
        },
        {
            id:3,
            img: manali,
            name: "Manali",
            rating: 4.7,
            type: "Historical",
            price: 30000
        },
        {
            id:4,
            img: munnar,
            name: "Munnar,Kerala",
            rating: 4.8,
            type: "Adventure",
            price: 50000
        },
        {
            id:5,
            img: amberpalace,
            name: "Amber Palace,Jaipur",
            rating: 4.2,
            type: "Historical",
            price: 25000
        },
        {
            id:6,
            img: mysurupalace,
            name: "Mysuru Palace,Karnataka",
             rating: 4.2,
            type: "Historical",
            price: 25000
        },
        {
            id:7,
            img: ooty,
            name: "Ooty,Tamil Nadu",
             rating: 4.2,
            type: "Mountains",
            price: 25000
        },
        {
            id:8,
            img: yercaud,
            name: "Yercaud,Tamil Nadu",
             rating: 4.2,
            type: "Mountains",
            price: 25000
        },
    ]

    const [search, setSearch] = useState("")
    const [selectType, setSelectType] = useState("")

    const filteredPlaces = places.filter((place) => {
        return (
            place.name.toLowerCase().includes(search.toLowerCase()) &&
            (selectType === "" || place.type === selectType)
        )

    })

    const [show, setShow] = useState(false)

    const handleSetShow = () => {
        setShow(!show)
    }

    const handleViewDetails = (id) => {
        navigate(`/destinationdetails/${id}`)
    }

    return (
        <section className='main'>
            <Navbar />
            <section className='explore'>
                <div className='explore-heading'>
                    <h2>Explore Destinations</h2>
                    <p>Discover beautiful places for your next trip</p>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search your favourite destination...' />

                </div>

                <section className='flex-container'>


                    <aside>
                        {/* <div className='filter-btn'>
                            <button onClick={handleSetShow}>Filters</button>
                        </div> */}

                        {show && <div className='filter-section'>

                            <FaTimes className='filcloseBtn' onClick={handleSetShow} />

                            <div className='filters'>

                                <div className='filter-content'>
                                    <h3>Region</h3>
                                    <div className='filter-option'>
                                        <input type="radio" />
                                        <p>India</p>
                                    </div>

                                    <div className='filter-option'>
                                        <input type="radio" />
                                        <p>International</p>
                                    </div>
                                </div>

                                <div className='filter-content'>
                                    <h2>Budget</h2>



                                    <div className='filter-option'>
                                        <input type="radio" />
                                        <p>Under 10000</p>
                                    </div>

                                    <div className='filter-option'>
                                        <input type="radio" />
                                        <p>10000 - 25000</p>
                                    </div>

                                    <div className='filter-option'>
                                        <input type="radio" />
                                        <p>25000 - 50000</p>
                                    </div>

                                    <div className='filter-option'>
                                        <input type="radio" />
                                        <p>Above 50000</p>
                                    </div>

                                </div>

                                <div className='filter-content'>
                                    <h2>Travel Type</h2>

                                    <select onChange={(e) => setSelectType(e.target.value)}>
                                        <option value="">All</option>
                                        <option value="Beach">Beach</option>
                                        <option value="Mountains">Mountains</option>
                                        <option value="Adventure">Adventure</option>
                                        <option value="Historical">Historical</option>
                                    </select>

                                </div>

                                <div className='filter-content'>
                                    <h2>Ratings</h2>

                                    <div className='filter-option'>
                                        <input type="radio" />
                                        <p>4 star</p>
                                    </div>

                                    <div className='filter-option'>
                                        <input type="radio" />
                                        <p>3 star</p>
                                    </div>

                                </div>
                            </div>
                        </div>}
                    </aside>

                    <section className='popdesmain'>
                        <div className='cards'>
                            {filteredPlaces.map((place) => (
                                <div key={place.id} className='popdes-content'>
                                    <img src={place.img} alt={place.name} />
                                    <p>{place.name}</p>
                                    <p>⭐{place.rating} </p>
                                    {/* <p>{place.type} </p> */}
                                    <p>INR {place.price} </p>
                                    <button className='btn' onClick={() => handleViewDetails(place.id)}>View Details</button>
                                </div>
                            ))}
                        </div>
                    </section>

                </section>
            </section>
            <Footer />
        </section>
    )
}

export default Explore
