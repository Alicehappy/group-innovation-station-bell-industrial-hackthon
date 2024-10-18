import React, { useState, useEffect } from "react";
import "./ExpertSection.scss";
import { getGroups } from "../../services/therapy-api";
import Emily from '../../assets/images/experts/expert-1.jpeg';
import John from '../../assets/images/experts/expert-2.jpeg';
import Sarah from '../../assets/images/experts/expert-3.jpeg';
import Rachel from '../../assets/images/experts/expert-4.jpeg';
import Michael from '../../assets/images/experts/expert-5.jpeg';

const ExpertSection = () => {
    const [experts, setExperts] = useState([]);

    const therapistImages = {
        "Dr. Emily Carter": Emily,
        "Dr. John Robinson": John,
        "Dr. Sarah Lee": Sarah,
        "Dr. Rachel Green": Rachel,
        "Dr. Michael Smith": Michael
    };

    const fetchGroups = async () => {
        const response = await getGroups();
        setExperts(response);
    };

    useEffect(() => {
        fetchGroups();
    }, []);

    return (
        <div className="expert-section">
            <h2>Meet Our Wellness Experts</h2>
            <div className="expert-container">
                {experts.map((expert) => (
                    <div className="expert-card" key={expert.id}>
                        <img src={therapistImages[expert.therapist]} alt={expert.therapist} />
                        <h3>{expert.therapist}</h3>
                        <p><strong>Specialty:</strong> {expert.group}</p>
                        <p>{expert.description}</p>
                        <p><strong>Available on:</strong> {expert.day}</p>
                        <a href="https://mail.google.com" target="_blank">Contact {expert.therapist}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpertSection;
