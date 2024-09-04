import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { EventContext } from '../EventContext/EventContext';
import EventFilter from '../EventFilter/EventFilter';
import './CalendarView.css';
import { useNavigate } from 'react-router-dom';

const localizer = momentLocalizer(moment);

class CalendarView extends Component {
  static contextType = EventContext;

  constructor(props) {
    super(props);
    this.state = {
      filteredEvents: [],
    };
  }

  componentDidMount() {
    const { events } = this.context;
    this.setState({ filteredEvents: events });
  }

  componentDidUpdate(prevProps, prevState) {
    const { events } = this.context;
    if (prevState.filteredEvents !== events) {
      this.setState({ filteredEvents: events });
    }
  }

  handleSelectEvent = (event) => {
    this.props.navigate(`/event-details/${event.id}`);
  };

  render() {
    const { filteredEvents } = this.state;

    return (
      <div className="calendar-container">
        <h1>Event Calendar</h1>
        <EventFilter setFilteredEvents={(filtered) => this.setState({ filteredEvents: filtered })} />
        <button className="add-event-button" onClick={() => this.props.navigate('/add-event')}>
          + Add New Event
        </button>
        <div style={{ overflowX: 'auto' }}>
          <Calendar
            localizer={localizer}
            events={filteredEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, marginTop: '20px', minWidth: '100%' }}
            onSelectEvent={this.handleSelectEvent}
          />
        </div>
      </div>
    );
  }
}

const CalendarViewWithNavigate = (props) => {
  const navigate = useNavigate();
  return <CalendarView {...props} navigate={navigate} />;
};

export default CalendarViewWithNavigate;
