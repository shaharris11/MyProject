import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const apiUrl = "http://localhost:8080/api"

export default function Characters() {
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();

    const [input, setInput] = useState("");
    const [submitted, setSubmitted] = useState(0)
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        async function getCharacters() {
            try {
                const res = await fetch(`${apiUrl}/characters`);
                const data = await res.json();
                setCharacters(data)
            } catch (error) {
                console.error(error);
            }
        }
        getCharacters()
    }, [])
    console.log(characters);
    function search(event) {
        event.preventDefault();
        setSubmitted(submitted + 1)
        const filter = characters.filter((character) =>
            character.name.toLowerCase().includes(input.toLowerCase())
        )
        setFiltered(filter)
    }
    if (!submitted) {
        return (
            <>
                <form id="search">
                    <input 
                        type="search"
                        value={input}
                        placeholder="Type to search"
                        onChange={(event) => setInput(event.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
                <div className="charactersContainer">
                {characters.map((character) => {
                    return (
                        <div key={character.id} className="character">
                            <h2>{character.name}</h2>
                            <img src={character.imgUrl} alt={character.name} />
                            <br />
                            {/* <button onClick={() => { navigate(`/characters/:characterId/${character.details}`) }}>See Detail</button> */}
                            <button onClick={() => { navigate(`/characters/${character.characterId}`) }}>See Details</button>
                        </div>
                    )
                })}
            </div>
            </>
        )
    }
    if (submitted > 0 && filtered.length < 1) {
        return (
            <>
                <form id="searchBar">
                   <label>Search for character:</label>
                   <input 
                        type="search"
                        value={input}
                        placeholder="Type tp search"
                        onChange={(event) => setInput(event.target.value)}
                   /> 
                   <button type="submit">Search</button>
                </form>

            <div className="charactersContainer">
                {characters.map((character) => {
                    return (
                        <div key={character.id} className="character">
                            <h2>{character.name}</h2>
                            <img src={character.imgUrl} alt={character.name} />
                            <br />
                            {/* <button onClick={() => { navigate(`/characters/:characterId/${character.details}`) }}>See Detail</button> */}
                            <button onClick={() => { navigate(`/characters/${character.characterId}`) }}>See Details</button>
                        </div>
                    )
                })}
            </div>
            </>
        )
    }
    search();
}