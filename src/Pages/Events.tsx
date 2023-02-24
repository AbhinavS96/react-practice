import { Link } from "react-router-dom";
import EventItem from "../Components/EventItem";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "title 1",
  },
  {
    id: "e2",
    title: "title 2",
  },
  {
    id: "e3",
    title: "title 3",
  },
];

const EventPage: React.FC = () => {
  return (
    <>
      <h1>Event Page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>
              <EventItem event={event}></EventItem>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventPage;
