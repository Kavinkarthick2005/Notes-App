import React, { useState, useEffect } from "react";

const App = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes"));
        if (savedNotes) setNotes(savedNotes);
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const addNote = () => {
        const text = prompt("Enter your note:");
        if (text) setNotes([...notes, text]);
    };

    return (
        <div>
            <h1>Notes App</h1>
            <button onClick={addNote}>Add Note</button>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>{note}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
