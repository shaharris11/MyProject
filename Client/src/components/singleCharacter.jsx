import { useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Comments from './comments';


const apiUrl = "http://localhost:8080/api"

export default function SingleCharacters() {
    const [character, setCharacter] = useState({})
    const {characterId} = useParams();
    // const {details} = useParams();
    

    useEffect(() => {
        // console.log(details);
        console.log(characterId);
        async function getCharacter() {
            try {
                const res = await fetch(`${apiUrl}/characters/${characterId}`);
                const data = await res.json()
                console.log(data);
                setCharacter(data)
            } catch (error) {
                console.error(error);
            }
        }
        getCharacter();
    }, [])
    return (
        <>
        <div className='singleCharacter'>
            <img src={character.imgUrl} alt={character.name}/> 
            <h1>{character.name}</h1>
            <h1>{character.title}</h1>
            <h1>Age:{character.age}</h1>
            <p>{character.monsterId}</p>
            <p>{character.placeId}</p>
            <p>{character.description}</p>
            
            <br />
            {<Comments />}

        </div>
        </>
    )
}