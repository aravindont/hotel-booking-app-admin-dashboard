import "./home.scss";
import SidebarComponent from "../../components/sidebar";
import NavbarComponent from "../../components/navbar";
import WidgetComponent from "../../components/widget";

const HomePage = () => {
  return (
    <div className="home">
      <SidebarComponent />
      <div className="homeContainer">
        <NavbarComponent />
        <div className="widgets">
          <WidgetComponent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
