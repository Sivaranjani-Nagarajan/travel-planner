import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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

const DestinationDetails = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const destinations = [
        {
            id: 1,
            img: goa,
            name: "Goa",
            rating: 4.8,
            type: "Beach",
            price: 10000,
            description: "Goa is famous for its beautiful beaches, nightlife, food and relaxing atmosphere.",
            bestTime: "November to February",
            places: [
                "Baga Beach",
                "Calangute Beach",
                "Fort Aguada",
                "Dudhsagar Falls"
            ],
            activities: [
                "Beach activities",
                "Water sports",
                "Sightseeing",
                "Explore local food"
            ]
        },
        {
            id: 2,
            img: hawamahal,
            name: "Hawa Mahal,Jaipur",
            rating: 4.2,
            type: "Mountains",
            price: 5000,
             description: "Goa is famous for its beautiful beaches, nightlife, food and relaxing atmosphere.",
            bestTime: "November to February",
            places: [
                "Baga Beach",
                "Calangute Beach",
                "Fort Aguada",
                "Dudhsagar Falls"
            ],
            activities: [
                "Beach activities",
                "Water sports",
                "Sightseeing",
                "Explore local food"
            ]
        },
        {
            id: 3,
            img: manali,
            name: "Manali",
            rating: 4.7,
            type: "Historical",
            price: 30000,
             description: "Goa is famous for its beautiful beaches, nightlife, food and relaxing atmosphere.",
            bestTime: "November to February",
            places: [
                "Baga Beach",
                "Calangute Beach",
                "Fort Aguada",
                "Dudhsagar Falls"
            ],
            activities: [
                "Beach activities",
                "Water sports",
                "Sightseeing",
                "Explore local food"
            ]
        },
        {
            id: 4,
            img: munnar,
            name: "Munnar,Kerala",
            rating: 4.8,
            type: "Adventure",
            price: 50000,
             description: "Goa is famous for its beautiful beaches, nightlife, food and relaxing atmosphere.",
            bestTime: "November to February",
            places: [
                "Baga Beach",
                "Calangute Beach",
                "Fort Aguada",
                "Dudhsagar Falls"
            ],
            activities: [
                "Beach activities",
                "Water sports",
                "Sightseeing",
                "Explore local food"
            ]
        },
        {
            id: 5,
            img: amberpalace,
            name: "Amber Palace,Jaipur",
            rating: 4.2,
            type: "Historical",
            price: 25000,
             description: "Goa is famous for its beautiful beaches, nightlife, food and relaxing atmosphere.",
            bestTime: "November to February",
            places: [
                "Baga Beach",
                "Calangute Beach",
                "Fort Aguada",
                "Dudhsagar Falls"
            ],
            activities: [
                "Beach activities",
                "Water sports",
                "Sightseeing",
                "Explore local food"
            ]
        },
        {
            id: 6,
            img: mysurupalace,
            name: "Mysuru Palace,Karnatka",
            rating: 4.2,
            type: "Historical",
            price: 25000,
             description: "Goa is famous for its beautiful beaches, nightlife, food and relaxing atmosphere.",
            bestTime: "November to February",
            places: [
                "Baga Beach",
                "Calangute Beach",
                "Fort Aguada",
                "Dudhsagar Falls"
            ],
            activities: [
                "Beach activities",
                "Water sports",
                "Sightseeing",
                "Explore local food"
            ]
        },
        {
            id: 7,
            img: ooty,
            name: "Ooty,Tamil Nadu",
            rating: 4.2,
            type: "Mountains",
            price: 25000,
             description: "Goa is famous for its beautiful beaches, nightlife, food and relaxing atmosphere.",
            bestTime: "November to February",
            places: [
                "Baga Beach",
                "Calangute Beach",
                "Fort Aguada",
                "Dudhsagar Falls"
            ],
            activities: [
                "Beach activities",
                "Water sports",
                "Sightseeing",
                "Explore local food"
            ]
        },
        {
            id: 8,
            img: yercaud,
            name: "Yercaud,Tamil Nadu",
            rating: 4.2,
            type: "Mountains",
            price: 25000,
             description: "Goa is famous for its beautiful beaches, nightlife, food and relaxing atmosphere.",
            bestTime: "November to February",
            places: [
                "Baga Beach",
                "Calangute Beach",
                "Fort Aguada",
                "Dudhsagar Falls"
            ],
            activities: [
                "Beach activities",
                "Water sports",
                "Sightseeing",
                "Explore local food"
            ]
        },
    ]

    const destination = destinations.find((place) => {
       return place.id === Number(id)
    })

    if(!destination){
        return <h2>Destination not found!!!</h2>
    }

    return (
        <section className='main'>
            <Navbar />

            <div className='details'>

<img src={destination.img} alt={destination.name} />
<div className='details-content'>
<h2 className='details-heading'>{destination.name} </h2>
<p>⭐ {destination.rating} </p>
<p>🏷️ {destination.type} </p>
<p>💰 {destination.price} </p>
<p>About {destination.name} </p>
<p>{destination.description} </p>

<div className='detailsec'>
<h3>📅 Best Time to Visit</h3>
<p>{destination.bestTime} </p>
</div>

<div className='detailsec'>
<h3>📍 Popular Places</h3>
<ul>
    {destination.places.map((place, index) => (
        <li key={index}>{place} </li>
    ))}
</ul>
</div>

<div>
<h3>🎯 Things to Do</h3>

      <ul>
        {destination.activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
      </div>

<button onClick={() => navigate(`/plantrip/${destination.id}`)}>Plan This Trip ✈️</button>
</div>
</div>
<Footer />
</section>
    )
}

export default DestinationDetails
