import { useEffect, useState } from "react";
import api from "../../services/api";
import { ICharacter } from '../../interfaces/character.interface';

export function Home() {

    const [characters, setCharacters] = useState <ICharacter[]>([]);

    useEffect(() => {
        getCharacters();
    }, [])

    async function getCharacters() {
        const response = await api.get('characters');
        const data = response.data.data;
        setCharacters(data);    
    }

    return (
        <>
        <div className="container">
            {characters.map((character, index) => (
                <div className="card" key={index}>
                    <img src={character.image} alt="" />
                    <p>Nome: {character.name}</p>
                </div>
            ))}
        </div>
        </>  
    )
}