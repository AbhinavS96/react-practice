import { useParams } from "react-router-dom";
const EventDetailsPage: React.FC = () => {
  const params = useParams();
  return (
    <>
      <h1>Event Details Page</h1>
      <p>Event Id: {params.eventID}</p>
    </>
  );
};

export default EventDetailsPage;
