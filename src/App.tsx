import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventPage from "./Pages/Events";
import HomePage from "./Pages/Home";
import EventDetailsPage from "./Pages/EventDetails";
import EditEventPage from "./Pages/EditEvent";
import NewEventPage from "./Pages/NewEvent";
import RootLayout from "./Pages/Root";
import EventsRootLayout from "./Pages/EventsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventPage /> },
          { path: ":eventID", element: <EventDetailsPage /> },
          { path: ":eventID/edit", element: <EditEventPage /> },
          { path: "new", element: <NewEventPage /> },
        ],
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
