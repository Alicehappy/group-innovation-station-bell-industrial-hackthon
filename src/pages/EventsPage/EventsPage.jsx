import React, { useState, useEffect } from "react";
import axios from "axios";
import './EventsPage.scss';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events data:", error);
      });
  }, []);

  return (
    <div className="events">
      <h1 className="events__title">Upcoming Events</h1>
      <div className="events__list">
        {events.map((event) => (
          <div className="event__card" key={event.id}>
            <h2 className="events__card-title">{event.name}</h2>
            <p className="events__card-date">{event.date} - {event.time}</p>
            <p className="events__card-location">Location: {event.location.venue}, {event.location.city}</p>
            <p className="events__card-description">{event.description}</p>
            <a 
            className="events__card-link"
            href={event.registration_link} 
            target="_blank" 
            rel="noopener noreferrer"
            >
              Register
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
