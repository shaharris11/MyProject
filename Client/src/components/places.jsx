import { useState, useEffect } from "react";


const apiUrl = "http://localhost:8080/api"

export default function Places () {
    const [places, setPlaces] = useState([]);
    
    useEffect(() => {
        async function getPlaces() {
            try {
                const res = await fetch(`${apiUrl}/places`);
                const data = await res.json();
                setPlaces(data)
            } catch (error) {
                console.error(error);
            }
        }
        getPlaces()
    }, [])
    console.log(places);
    return (
        <>
           
            <div className="charactersContainer">
               {places.map((place) => {
                return (
                    <div key={place.id} className="place">
                        <h2>{place.name}</h2>
                        <h3>{place.owner}</h3>
                        <br />
                    </div>
                )
               })}
            </div>
        </>
    );
}