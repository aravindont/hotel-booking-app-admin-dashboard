import DatatableComponent from "../../components/datatable";
import NavbarComponent from "../../components/navbar";
import SidebarComponent from "../../components/sidebar";
import "./list.scss";

function ListPage() {
  return (
    <div className="list">
      <SidebarComponent />
      <div className="listContainer">
        <NavbarComponent />
        <DatatableComponent />
      </div>
    </div>
  );
}

export default ListPage;
