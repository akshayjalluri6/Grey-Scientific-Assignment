import React, { Component } from 'react';
import { EventContext } from '../EventContext/EventContext';
import './AddEvent.css';
import { useNavigate } from 'react-router-dom';

class AddEvent extends Component {
  static contextType = EventContext;

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      start: '',
      end: '',
      category: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { events, setEvents } = this.context;
    const newEvent = {
      id: Math.random().toString(36).substr(2, 9),
      name: this.state.name,
      start: this.state.start,
      end: this.state.end,
      category: this.state.category,
    };

    setEvents([...events, newEvent]);
    this.props.navigate('/');
  };

  render() {
    return (
      <div className="form-container">
        <h2>Add New Event</h2>
        <form onSubmit={this.handleSubmit} className="add-event-form">
          <label>
            Event Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Start Date:
            <input type="datetime-local" name="start" value={this.state.start} onChange={this.handleChange} />
          </label>
          <label>
            End Date:
            <input type="datetime-local" name="end" value={this.state.end} onChange={this.handleChange} />
          </label>
          <label>
            Category:
            <select name="category" value={this.state.category} onChange={this.handleChange}>
              <option value="">Select Category</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
            </select>
          </label>
          <button type="submit">Add Event</button>
        </form>
      </div>
    );
  }
}

const AddEventWithNavigate = (props) => {
  const navigate = useNavigate();
  return <AddEvent {...props} navigate={navigate} />;
};

export default AddEventWithNavigate;
