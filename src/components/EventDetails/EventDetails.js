import React, { Component } from 'react';
import { EventContext } from '../EventContext/EventContext';
import './EventDetails.css';
import { useParams, useNavigate } from 'react-router-dom';

class EventDetails extends Component {
  static contextType = EventContext;

  handleDelete = (id) => {
    const { events, setEvents } = this.context;
    const filteredEvents = events.filter((e) => e.id !== id);
    setEvents(filteredEvents);
    this.props.navigate('/');
  };

  render() {
    const { events } = this.context;
    const { id } = this.props.params;
    const event = events.find((e) => e.id === id);

    if (!event) return <h2>Event not found</h2>;

    return (
      <div className="event-details">
        <h2>{event.name}</h2>
        <p>Category: {event.category}</p>
        <p>Start: {event.start}</p>
        <p>End: {event.end}</p>
        <button className="edit-button" onClick={() => this.props.navigate(`/edit-event/${event.id}`)}>
          Edit Event
        </button>
        <button className="delete-button" onClick={() => this.handleDelete(event.id)}>
          Delete Event
        </button>
      </div>
    );
  }
}

const EventDetailsWithParamsAndNavigate = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  return <EventDetails {...props} params={params} navigate={navigate} />;
};

export default EventDetailsWithParamsAndNavigate;
