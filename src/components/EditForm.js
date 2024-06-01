import React, {useState} from 'react';

export default function EditForm({flashcard, onSaveEdit, onCancelEdit}) {
    const [editedFront, setEditedFront] = useState(flashcard.front);
    const [editedBack, setEditedBack] = useState(flashcard.back);

    const handleSave = (event) => {
        event.stopPropagation();
        const editedCard = {
            id: flashcard.id,
            front: editedFront,
            back: editedBack,
            status: flashcard.status,
            lastModified: Date.now(),
        };
        onSaveEdit(editedCard);
    };

    const handleCancelEdit = (event) => {
        event.stopPropagation();
        onCancelEdit();
    };

    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    return (
        <>
            <div className="input-group">
                <label className="label" style={{color: 'black'}}>Front:</label>
                <input
                    className="input-field"
                    type="text"
                    value={editedFront}
                    onClick={stopPropagation}
                    onChange={(e) => setEditedFront(e.target.value)}
                />
                <label className="label" style={{color: 'black'}}>Back:</label>
                <input
                    className="input-field"
                    type="text"
                    value={editedBack}
                    onClick={stopPropagation}
                    onChange={(e) => setEditedBack(e.target.value)}
                />
            </div>
            <div className="edit-buttons">
                <button className="hover-btn" onClick={handleSave}>
                    Save
                </button>
                <button className="hover-btn" onClick={handleCancelEdit}>
                    Cancel
                </button>
            </div>
        </>
    );
}
