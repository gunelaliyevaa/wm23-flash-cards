import "./style/WorkCard.css"
import React from 'react';
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"


//We get data from WorkCardData and create dynamic WorkCards using map()
//Work component renders a container for the WorkCard components, passing data to them through props
export default function Work() {
    return (
        <div className="work-container">
            <div className="project-container">
                {WorkCardData.map((data, index) => {
                    return (
                        <WorkCard
                            key={index}
                            image={data.image}
                            title={data.title}
                            text={data.text}
                            link={data.link}
                        />
                    )
                })}
            </div>
        </div>
    );
}
