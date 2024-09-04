import React, { createContext, Component } from 'react';

const EventContext = createContext();

class EventProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    this.setState({ events: savedEvents });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.events !== this.state.events) {
      localStorage.setItem('events', JSON.stringify(this.state.events));
    }
  }

  setEvents = (events) => {
    this.setState({ events });
  };

  render() {
    return (
      <EventContext.Provider
        value={{
          events: this.state.events,
          setEvents: this.setEvents,
        }}
      >
        {this.props.children}
      </EventContext.Provider>
    );
  }
}

export { EventContext, EventProvider };
