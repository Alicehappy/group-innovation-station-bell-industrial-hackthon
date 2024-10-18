import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./EventsPage.scss";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

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

  const handleRegisterClick = () => {
    toast.success("Thank you for registering!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="events">
      <h1 className="events__title">Upcoming Events</h1>
      <div className="events__list">
        {events.map((event) => (
          <div className="events-cards" key={event.id}>
            <h2 className="events__card-title">{event.name}</h2>
            <p className="events__card-date">
              {event.date} - {event.time}
            </p>
            <p className="events__card-location">
              Location: {event.location.venue}, {event.location.city}
            </p>
            <p className="events__card-description">{event.description}</p>
            <button
              className="events__card-link"
              onClick={() => handleRegisterClick(event.registration_link)}
            >
              Register
            </button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default EventsPage;
