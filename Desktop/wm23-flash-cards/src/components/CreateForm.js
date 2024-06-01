import React, {useState} from 'react';
import "./style/FlashCards.css"
import axios from "axios";

export default function CreateForm({onCreateCard}) {

    const [newFront, setNewFront] = useState('');
    const [newBack, setNewBack] = useState('');
    const [newStatus, setNewStatus] = useState('');

    const handleCreateCard = () => {
        const newCard = {
            front: newFront,
            back: newBack,
            status: newStatus,
            lastModified: new Date().toISOString(),
        };

        axios
            .post('http://localhost:3000/cards', newCard)
            .then(() => {
                // Notify the parent component that a card has been created
                onCreateCard(newCard);
                // Clear the form inputs
                setNewFront('');
                setNewBack('');
                setNewStatus('')
            })
            .catch((error) => {
                console.error('Error creating card:', error);
            });
    };
    return (
        <div className="add-card-form">
            <h2>Add New Flashcard</h2>
            <label>Front:</label>
            <input type="text" value={newFront} onChange={(e) => setNewFront(e.target.value)}/>
            <label>Back:</label>
            <input type="text" value={newBack} onChange={(e) => setNewBack(e.target.value)}/>
            <label>Status:</label>
            <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                <option value="">Choose the state</option>
                <option value="Learned">Learned</option>
                <option value="Want To Learn">Want To Learn</option>
                <option value="Noted">Noted</option>
            </select>
            <button className="action-btn" onClick={handleCreateCard}>
                Add Flashcard
            </button>
        </div>
    );
}