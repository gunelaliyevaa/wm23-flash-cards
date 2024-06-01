import LocalNews from "../assets/local-news.png"
import LightRide from "../assets/light-ride.png"
import Products from "../assets/products-website.png"

//We pass this data to Work.js file to dynamically create Project cards.

const ProjectCardData = [
    {
        image: LocalNews,
        title: "News Management System",
        text: "The 'News Management System' is a Spring-based application empowering seamless news content management. It offers an intuitive platform for creating, editing, and categorizing articles, ensuring efficient organization and streamlined dissemination of information.",
        link: "https://github.com/gunelaliyevaa/local-news.git"
    },
    {
        image: LightRide,
        title: "Ride-Sharing Platform",
        text: "The foundational codebase for a practical and user-centric ride-sharing platform. This repository includes key features like user authentication, efficient ride management, real-time navigation, and secure payment processing. Join us in reshaping transportation with LightRide.",
        link: "https://gunelaliyevaa.github.io/lightride-app/"
    },
    {
        image: Products,
        title: "Products Catalogue",
        text: "This products catalogue web application fetches product data from an external API, called DummyJSON, using endpoints, displays it on the home page, and provides additional features such as searching, filtering based on title, category, description, and pagination.",
        link: "https://gunelaliyevaa.github.io/wm23-assignment-2/"
    }
]

export default ProjectCardData;

