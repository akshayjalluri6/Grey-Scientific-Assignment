import { Component } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CalenderView from './components/CalendarView/CalendarView.js'
import AddEvent from './components/AddEvent/AddEvent.js'
import EditEvent from './components/EditEvent/EditEvent.js'
import EventDetails from './components/EventDetails/EventDetails.js'
import './App.css';

class App extends Component {
  render(){
  return(
    <Router>
      <div className='app'>
        <Routes>
          <Route exact path="/" Component={CalenderView} />
          <Route exact path='/add-event' Component={AddEvent} />
          <Route exact path='/edit-event/:id' Component={EditEvent} />
          <Route exact path='/event-details/:id' Component={EventDetails} />
        </Routes>
      </div>
    </Router>
  )
}
}

export default App;
