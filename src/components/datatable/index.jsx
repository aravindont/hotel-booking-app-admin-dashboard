import { DataGrid } from "@mui/x-data-grid";
import "./datatable.scss";

function DatatableComponent() {
  return (
    <div className="datatable">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
}

export default DatatableComponent;
