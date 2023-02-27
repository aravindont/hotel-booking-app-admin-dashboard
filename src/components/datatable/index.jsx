import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import "./datatable.scss";
import { api } from "../../api";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { userRows } from "../../assets/datatableSource";

function DatatableComponent({ columns }) {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  console.log(path);

  // const [data, setData] = useState(userRows);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const [list, setList] = useState(null);
  const { data, loading, error, reFetch } = useFetch(
    `${api}/api/v1/${path}/getAllUsers`
  );
  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${api}/api/v1/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row._id}
      />
    </div>
  );
}

export default DatatableComponent;
