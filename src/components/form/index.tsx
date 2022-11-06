import React, { useRef, useState } from "react";
import { useAddParticipant } from "../../state/hooks/useAddParticipant";
import { useErrorMessage } from "../../state/hooks/useErrorMessage";
import "./styles.scss";

const Form = () => {
    const [name, setName] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const addToList = useAddParticipant();

    const errorMessage = useErrorMessage();

    const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addToList(name);
        setName("");
        inputRef.current?.focus();
    };

    return (<form onSubmit={addParticipant}>
        <div className="group-input-btn">
            <input
                ref={inputRef}
                value={name}
                onChange={event => setName(event.target.value)}
                type="text"
                placeholder="Insira os nomes dos participantes" />
            <button disabled={!name}>Add</button>
        </div>
        {errorMessage && <p className="alert erro" role="alert">{errorMessage}</p>}
    </form>)
}

export default Form;