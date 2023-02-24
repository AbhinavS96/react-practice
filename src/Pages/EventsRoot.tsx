import MainNavigation from "../Components/MainNavigation";
import { Outlet } from "react-router-dom";
import EventsNavigation from "../Components/EventsNavigation";

const EventsRootLayout: React.FC = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventsRootLayout;
