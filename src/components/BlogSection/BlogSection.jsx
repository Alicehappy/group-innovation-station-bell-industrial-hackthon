import React from 'react';
import './BlogSection.scss';
import cyndi from '../../assets/images/events/cyndi-bell.jpg'
import y from '../../assets/images/events/y-bell.jpg'
import montreal from '../../assets/images/events/montreal-bell.jpg'
import evan from '../../assets/images/events/evan.jpg'
const EventCards = () => {
    return (
        <div className="event-section">
            <a className='event-anchor' href="https://centrebell.ca/en/events" target="_blank" rel="noopener noreferrer">
                Official Centre Bell Events Page
            </a>
            <div className="event-cards-container">
                <div className="event-card">
                    <img src={cyndi} alt="Event 1" />
                    <h3>Cyndi Lauper</h3>
                    <p>Event Date: October 25, 2024</p>
                    <p>Location: Centre Bell, Montreal</p>
                    <a href="https://evenko.ca/en/events/bell-centre/cyndi-lauper?code=e002130" target="_blank" rel="noopener noreferrer">
                        More Info
                    </a>
                </div>
                <div className="event-card">
                    <img src={y} alt="Event 2" />
                    <h3>Y Event 2024</h3>
                    <p>Event Date: November 1, 2024</p>
                    <p>Location: Centre Bell, Montreal</p>
                    <a href="https://evenko.ca/en/events/bell-centre/y-event-2024?code=e002399" target="_blank" rel="noopener noreferrer">
                        More Info
                    </a>
                </div>
                <div className="event-card">
                    <img src={montreal} alt="Event 2" />
                    <h3>Montreal Canadiens vs New York Rangers</h3>
                    <p>Event Date: November 1, 2024</p>
                    <p>Location: Centre Bell, Montreal</p>
                    <a href="https://evenko.ca/en/events/bell-centre/canadiens-24-25-saison-reg?code=e002984" target="_blank" rel="noopener noreferrer">
                        More Info
                    </a>
                </div><div className="event-card">
                    <img src={evan} alt="Event 2" />
                    <h3>Evanescene</h3>
                    <p>Event Date: November 1, 2024</p>
                    <p>Location: Centre Bell, Montreal</p>
                    <a href="https://evenko.ca/en/events/bell-centre/evanescence?code=e001837" target="_blank" rel="noopener noreferrer">
                        More Info
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EventCards;
