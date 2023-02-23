import "./home.scss";
import SidebarComponent from "../../components/sidebar";
import NavbarComponent from "../../components/navbar";
import WidgetComponent from "../../components/widget";
import FeaturedComponent from "../../components/featured";
import ChartComponent from "../../components/chart";

const HomePage = () => {
  return (
    <div className="home">
      <SidebarComponent />
      <div className="homeContainer">
        <NavbarComponent />
        <div className="widgets">
          <WidgetComponent type="user" />
          <WidgetComponent type="order" />
          <WidgetComponent type="earning" />
          <WidgetComponent type="balance" />
        </div>
        <div className="charts">
          <FeaturedComponent />
          <ChartComponent title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
