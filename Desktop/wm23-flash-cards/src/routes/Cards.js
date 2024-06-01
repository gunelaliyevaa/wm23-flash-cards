import React, {useState, useEffect} from 'react';
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Footer from "../components/Footer";
import FlashCardList from "../components/FlashCardList";
import axios from "axios";
import CreateForm from "../components/CreateForm";
import SearchAndFilterForm from "../components/SearchAndFilterForm";
import '../components/style/FlashCards.css';

export default function Cards() {
    // State to manage flashcards data
    const [flashcards, setFlashcards] = useState([]);

    // Fetch flashcards from the server
    const fetchFlashcards = () => {
        axios
            .get("http://localhost:3000/cards")
            .then(res => {
                // Map and sort flashcards based on lastModified
                setFlashcards(
                    res.data.map((questionItem) => ({
                        id: questionItem.id,
                        front: questionItem.front,
                        back: questionItem.back,
                        status: questionItem.status,
                        lastModified: questionItem.lastModified
                    })).sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified))
                );
            })
            .catch((error) => {
                console.error('Error fetching cards:', error.message);
            });
    };

    useEffect(() => {
        // Fetch flashcards when the component mounts
        fetchFlashcards();
    }, []);

    /** CREATE **/
        // Add a new flashcard
    const handleCreateCard = (newCard) => {
            setFlashcards((prevFlashcards) => {
                const updatedFlashcards = [...prevFlashcards, newCard];

                // Sort the updated flashcards based on lastModified
                return updatedFlashcards.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));
            });
        };

    /** DELETE **/
        // Delete a flashcard
    const handleDeleteCard = (id) => {
            axios
                .delete(`http://localhost:3000/cards/${id}`)
                .then(() => {
                    // If the deletion on the server is successful, update the state to remove the flashcard
                    setFlashcards((prevFlashcards) => prevFlashcards.filter(card => card.id !== id));
                })
                .catch((error) => {
                    console.error(`Error deleting card with ID ${id}:`, error.message);
                    // Add additional error handling here if needed
                });
        };

    /** EDIT **/
        // State to manage the editing of a flashcard
    const [editCardId, setEditCardId] = useState(null);

    // Start editing a flashcard
    const handleEditCard = (id) => {
        setEditCardId(id);
    };

    // Save the changes made to a flashcard
    const handleSaveEdit = (editedCard) => {
        setFlashcards(flashcards.map(card => (card.id === editedCard.id ? editedCard : card)));
        setEditCardId(null);
    };

    // Cancel the editing of a flashcard
    const handleCancelEdit = () => {
        setEditCardId(null);
    };

    /** SEARCH **/
        // State to manage search results
    const [searchResults, setSearchResults] = useState([]);

    // Handle search term input
    const handleSearch = (term) => {
        const matchingCards = flashcards.filter(
            (card) =>
                card.front.toLowerCase().includes(term.toLowerCase()) ||
                card.back.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(matchingCards);
    };

    /** FILTER **/
        // State to manage selected status filter
    const [selectedStatus, setSelectedStatus] = useState(null);

    // Handle changes in the filter status
    const handleFilterChange = async (status) => {
        try {
            if (status !== selectedStatus) {
                // If the selected status is different from the current one, apply the filter
                setSelectedStatus(status);

                const response = await axios.get("http://localhost:3000/cards");

                const filteredCards = status
                    ? response.data.filter((card) => card.status.toLowerCase() === status.toLowerCase())
                    : response.data;

                setFlashcards(filteredCards);
            } else {
                // If the same status button is clicked again, remove the filter
                setSelectedStatus(null);
                // Fetch flashcards again without any filter
                fetchFlashcards();
            }
        } catch (error) {
            console.error('Error fetching cards:', error.message);
        }
    };

    // Render the component
    return (
        <div>
            <Navbar/>
            <HeroImg2 header="Flashcards" text="..."/>
            <div className="controls">
                <CreateForm onCreateCard={handleCreateCard}/>
                <SearchAndFilterForm onSearch={handleSearch} selectedStatus={selectedStatus}
                                     onFilterChange={handleFilterChange}/>
            </div>
            <FlashCardList flashcards={searchResults.length > 0 ? searchResults : flashcards}
                           onDeleteCard={handleDeleteCard}
                           onEditCard={handleEditCard}
                           editCardId={editCardId}
                           onSaveEdit={handleSaveEdit}
                           onCancelEdit={handleCancelEdit}/>
            <Footer/>
        </div>
    );
}
