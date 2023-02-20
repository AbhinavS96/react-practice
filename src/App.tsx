import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventPage from "./Pages/Events";
import HomePage from "./Pages/Home";
import EventDetailsPage from "./Pages/EventDetails";
import EditEventPage from "./Pages/EditEvent";
import NewEventPage from "./Pages/NewEvent";

// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/events", element: <EventPage /> },
  { path: "/events/:eventID", element: <EventDetailsPage /> },
  { path: "/events/:eventID/edit", element: <EditEventPage /> },
  { path: "/events/new", element: <NewEventPage /> },
]);

const App: React.FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
