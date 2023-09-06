import { Outlet } from "react-router-dom";
import SideBar from "./components/sideBar/SideBar";
import MenuPage from "./components/Menu";

const App = () => {
  return (
    <div className="flex bg-BACKGROUND_DARK min-h-screen">
      <div className="min-full">
        <SideBar />
      </div>
      <div className="w-full">
        <div className="w-full shadow-lg h-16 flex items-center">
          <MenuPage />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
