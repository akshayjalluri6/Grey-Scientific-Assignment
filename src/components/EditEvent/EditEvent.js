import React, { useContext, useState } from 'react';
import { EventContext } from '../EventContext/EventContext';
import { useParams, useNavigate } from 'react-router-dom';

const EditEvent = () => {
  const { events, setEvents } = useContext(EventContext);
  const { id } = useParams();
  const event = events.find((e) => e.id === id);
  const [eventDetails, setEventDetails] = useState(event);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents((prevEvents) =>
      prevEvents.map((ev) => (ev.id === id ? eventDetails : ev))
    );
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="edit-event-form">
      <h2>Edit Event</h2>
      <label>
        Event Name:
        <input type="text" name="name" value={eventDetails.name} onChange={handleChange} />
      </label>
      <label>
        Start Date:
        <input type="datetime-local" name="start" value={eventDetails.start} onChange={handleChange} />
      </label>
      <label>
        End Date:
        <input type="datetime-local" name="end" value={eventDetails.end} onChange={handleChange} />
      </label>
      <label>
        Category:
        <select name="category" value={eventDetails.category} onChange={handleChange}>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </label>
      <button type="submit">Update Event</button>
    </form>
  );
};

export default EditEvent;
