import React, {useState} from 'react';
import "../components/style/FlashCards.css"
import EditForm from "./EditForm";

export default function FlashCard({flashcard, onDeleteCard, onEditCard, isEditing, onSaveEdit, onCancelEdit}) {

    const [flip, setFlip] = useState(false)

    const formatLastModified = (lastModified) => {
        const date = new Date(lastModified);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`;
    };

    const handleDelete = (event) => {
        event.stopPropagation();
        onDeleteCard(flashcard.id);
    };

    /** EDIT  **/
    const handleEdit = (event) => {
        event.stopPropagation();
        onEditCard(flashcard.id);
    };


    return (<div className={flip ? "card flip" : "card"}
                 onClick={() => setFlip(prevFlip => !prevFlip)}>
        <div className="front">
            {isEditing ? (
                <EditForm flashcard={flashcard} onSaveEdit={onSaveEdit} onCancelEdit={onCancelEdit}/>) : (<>
                {flashcard.front}
                <span>Status: {flashcard.status} <br/>Last Modified: {formatLastModified(flashcard.lastModified)}</span>
                <div className="edit-buttons">
                    <button className="hover-btn" onClick={handleEdit}>Edit</button>
                    <button className="hover-btn" onClick={handleDelete}>Delete</button>
                </div>
            </>)}
        </div>
        <div className="back">
            {flashcard.back}
        </div>
    </div>);
}