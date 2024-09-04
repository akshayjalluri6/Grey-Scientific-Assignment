Grey Scientific Labs ReactJS Developer Assessment - Event Calendar Application

Description
This is a simple React-based Event Calendar Application developed as part of the Grey Scientific Labs ReactJS Developer Assessment. The application allows users to:

View events on a calendar
Add new events
Edit existing events
Delete events
View event details
Filter events based on category (Work, Personal)
The application is designed using ReactJS and implements React Router for routing between different views. It also includes responsive styling to ensure usability across various device sizes.

Features
Calendar View: Displays a monthly calendar showing events.
Add Event: A form to add new events, with fields for name, date, and category.
Edit Event: Modify existing event details.
Delete Event: Remove an event from the calendar.
Event Details: View detailed information about an event.
Event Filtering: Filter events by category (e.g., Work, Personal).
State Persistence: Events are saved in local storage, so they persist between page refreshes.
Technologies Used
ReactJS: For building the frontend user interface.
React Router: For handling navigation between views (calendar, add event, edit event, etc.).
React Big Calendar: A flexible calendar component for React.
CSS: For styling the application and making it responsive.
Local Storage: For storing events locally, so they persist even after a page reload.
Installation and Setup
To get the application running locally, follow these steps:

Clone this repository:
bash
Copy code
git clone https://github.com/your-username/react-calendar-app.git
cd react-calendar-app

Install the dependencies:
npm install

Start the development server:
npm start

This will start the development server, and the application will be available at http://localhost:3000.



CalendarView.js: Displays the calendar with events and allows navigation to event details.
AddEvent.js: The form for adding new events to the calendar.
EditEvent.js: A form for editing an existing event.
EventDetails.js: Shows detailed information about an event.
EventFilter.js: Allows users to filter events by category (Work, Personal).
EventContext.js: Context for managing global state (events) throughout the app.
Key Features
State Management: The app uses React’s Context API to manage the global state of events, making it easier to pass data between components.
Routing: The app uses React Router v6 for navigation between the calendar, add event, edit event, and event details pages.
Local Storage: Events are stored in local storage, which ensures that they persist between page reloads.
Responsive Design: The app is designed to be responsive and works well on different screen sizes (desktop, tablet, mobile).
Deployment
To deploy this application, you can use platforms like Vercel, Netlify, or GitHub Pages. Below are the steps for deployment to Vercel:

Install the Vercel CLI:
bash
Copy code
npm install -g vercel
Deploy your app to Vercel:
bash
Copy code
vercel
Follow the Vercel prompts, and your app will be live!

Contributing
If you wish to contribute to this project:

Fork this repository.
Create a new branch.
Make your changes and test them thoroughly.
Submit a pull request.
License
This project is licensed under the MIT License.
