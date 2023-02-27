import DatatableComponent from "../../components/datatable";
import NavbarComponent from "../../components/navbar";
import SidebarComponent from "../../components/sidebar";
import "./list.scss";

function ListPage({ columns }) {
  return (
    <div className="list">
      <SidebarComponent />
      <div className="listContainer">
        <NavbarComponent />
        <DatatableComponent columns={columns} />
      </div>
    </div>
  );
}

export default ListPage;
