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
    <div>
      <h1>Upcoming Events</h1>
      <div className="events-list">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <h2>{event.name}</h2>
            <p>{event.date} - {event.time}</p>
            <p>Location: {event.location.venue}, {event.location.city}</p>
            <p>{event.description}</p>
            <a href={event.registration_link} target="_blank" rel="noopener noreferrer">
              Register
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
