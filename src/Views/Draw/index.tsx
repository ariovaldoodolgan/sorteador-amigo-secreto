import React, { useState } from "react";
import Card from "../../components/Card";
import { useDrawResult } from "../../state/hooks/useDrawResult";
import { useListOfParticipants } from "../../state/hooks/useListOfParticipants";
import "./styles.scss"

const Draw = () => {

    const participants = useListOfParticipants();

    const [currentParticipant, setCurrentParticipant] = useState('');
    const [secretFriend, setSecretFriend] = useState('');

    const result = useDrawResult();

    const sort = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (result.has(currentParticipant)) {
            setSecretFriend(result.get(currentParticipant)!);
        }
    }

    return (
        <Card>
            <section className="draw">
                <h2>Come and sort a name!</h2>
                <form onSubmit={sort}>
                    <select
                        required
                        name="currentParticipant"
                        id="currentParticipant"
                        placeholder="Selecione o seu nome"
                        value={currentParticipant}
                        onChange={event => setCurrentParticipant(event.target.value)}
                    >
                        <option>Select your name</option>
                        {participants.map(item => <option key={item}>{item}</option>)}
                    </select>
                    <p>Click in Sort to see who is your secret friend!</p>
                    <button className="button-sort">Sort</button>

                    {secretFriend && <p className="result" role="alert">{secretFriend}</p>}
                    <footer className="draw">
                        <img src="/images/airplane.png" className="airplane" alt="A drawing of an airplane" />
                    </footer>
                </form>
            </section>
        </Card>
    )
};

export default Draw;