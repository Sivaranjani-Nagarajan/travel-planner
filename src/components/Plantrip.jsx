import React,{useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Plantrip = ({setTrip}) => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [travellers, setTravellers] = useState(1)
    const [budget, setBudget] = useState("")

    const destinations = [
        {
            id:1,
            name: "Goa",
            budget: 10000
        },
        {
            id:2,
            name: "Hawa Mahal,Jaipur",
            budget: 25000
        },
        {
            id:3,
            name: "Manali",
            budget: 25000
        },
        {
            id:4,
             name: "Munnar,Kerala",
            budget: 25000
        },
        {
            id:5,
            name: "Amber Palace,Jaipur",
            budget: 25000
        },
        {
            id:6,
            name: "Mysuru Palace,Karnataka",
            budget: 25000
        },
        {
            id:7,
             name: "Ooty,Tamil Nadu",
            budget: 25000
        },
        {
            id:8,
             name: "Yercaud,Tamil Nadu",
            budget: 25000
        },
    ]

const destination = destinations.find((place) => {
        return place.id === Number(id)
    })
    const handleCreateTrip = () => {

    const newTrip = {
        destinationId: id,  
        name: destination.name,       
        startDate,
        endDate,
        travellers,
        budget: totalBudget
    }

    setTrip(newTrip)

    alert("Successfully created your Trip")

    navigate("/mytrip")
}

 const totalBudget = destination.budget * travellers

  return (
<section className='main'>
    <Navbar />

    <div className='about'>
        <h2 className='about-heading'>Plan Your Trip ✈️</h2>      

<div className='plan-content'>

     <h3>{destination.name}</h3>

      <p>
                        Estimated Budget: ₹{destination.budget}
                    </p>

                        <div className='planinput'>
                    <label>Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>

                <div className='planinput'>
                    <label>End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>

                <div className='planinput'>
                    <label>Number of Travellers</label>
                    <input
                        type="number"
                        min="1"
                        value={travellers}
                        onChange={(e) => setTravellers(e.target.value)}
                    />
                </div>
                
<div>
                    <label>Total Budget</label>

                    <p>₹{totalBudget}</p>
                </div>

                <button className='btn' onClick={handleCreateTrip}>
                    Create Trip ✈️
                </button>
</div>

    </div>
    <Footer />
</section>
  )
}

export default Plantrip
