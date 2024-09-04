import React, { useContext, useState } from 'react';
import { EventContext } from '../EventContext/EventContext';
import './EventFilter.css';

const EventFilter = () => {
  const { events, setFilteredEvents } = useContext(EventContext);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    const selectedCategory = e.target.value;
    setFilter(selectedCategory);

    if (selectedCategory === '') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category === selectedCategory));
    }
  };

  return (
    <div className="event-filter">
      <label htmlFor="filter">Filter by Category:</label>
      <select id="filter" value={filter} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
    </div>
  );
};

export default EventFilter;
