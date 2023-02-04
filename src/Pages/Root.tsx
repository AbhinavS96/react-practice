import Navigation from "../Components/Navigation";
import { Outlet } from "react-router-dom";

const RootPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default RootPage;
