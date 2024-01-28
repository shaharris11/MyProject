import { useState, useEffect } from "react";


const apiUrl = "http://localhost:8080/api"

export default function Monsters() {
    const [monsters, setMonsters] = useState([]);
    
    useEffect(() => {
        async function getMonsters() {
            try {
                const res = await fetch(`${apiUrl}/monsters`);
                const data = await res.json();
                setMonsters(data)
            } catch (error) {
                console.error(error);
            }
        }
        getMonsters()
    }, [])
    console.log(monsters);
    return (
        <>
           
            <div className="charactersContainer">
               {monsters.map((monster) => {
                return (
                    <div key={monster.id} className="monster">
                        <h2>{monster.monster}</h2>
                        <br />
                    </div>
                )
               })}
            </div>
        </>
    );
}