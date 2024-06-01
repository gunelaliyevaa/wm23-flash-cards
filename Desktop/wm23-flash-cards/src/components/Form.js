import "./style/Form.css"
import React, {useState} from 'react';
import axios from "axios";

export default function Form() {
    //create  a  state - formData
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        text: '',
    });


    //When a user types something in an input field the onChange event is triggered
    //and this function is called
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    //Event handler for the form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Send a POST request to the JSON server
            const response = await axios.post('http://localhost:3000/messages', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Log the server response
            console.log('Server Response:', response.data);

            setFormData({
                name: '',
                email: '',
                subject: '',
                text: '',
            });

        } catch (error) {
            console.error('Error sending message:', error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange}/>

                <label htmlFor="text">Message</label>
                <textarea
                    rows="7"
                    id="text"
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    placeholder="Type Your Message Here"
                ></textarea>
                <button type="submit" className="btn">
                    Send
                </button>
            </form>
        </div>
    );
}