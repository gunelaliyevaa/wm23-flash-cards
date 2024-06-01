import React from 'react';
import FlashCard from "./FlashCard";

//destructuring props, so we will use flashcards instead of props.flashcards
export default function FlashCardList({flashcards, onDeleteCard, onEditCard, editCardId, onSaveEdit, onCancelEdit}) {
    return (
        //loop through flash cards and return a FlashCard component for each of them
        //key is defined to avoid unnecessary re-renders
        <div className="card-grid">
            {flashcards.map(flashcard => {
                return <FlashCard flashcard={flashcard}
                                  key={flashcard.id}
                                  onDeleteCard={onDeleteCard}
                                  onEditCard={onEditCard}
                                  isEditing={flashcard.id === editCardId}
                                  onSaveEdit={onSaveEdit}
                                  onCancelEdit={onCancelEdit}/>
            })}
        </div>
    );
}