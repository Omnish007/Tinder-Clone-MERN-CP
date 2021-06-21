import React, { useEffect, useState } from 'react'
import "./TinderCard.css"
import Tindercard from "react-tinder-card"
import axios from "./axios"

function TinderCard() {

    const [people, setPeople] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards")

            setPeople(req.data)
        }

        fetchData()
    }, [])


    console.log(people);

    const outOfFrame = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete)
        // setLastDirection(direction)
    }

    const swiped = (name) => {
        console.log(name + "left the screen");
    }

    return (
        <div className="tindercards">
            <div className="tindercards_cardcontainer">
                {people.map(person => (

                    <Tindercard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div className="card" style={{ backgroundImage: `url(${person.imgUrl})` }}>
                            <h3>{person.name}</h3>
                        </div>

                    </Tindercard>

                ))}
            </div>

        </div>
    )
}

export default TinderCard
