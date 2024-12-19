import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai"; // Import icons

const DataTable = ({ data }) => {
  const columns = [
    {
      field: "avatar_url",
      headerName: "Avatar",
      width: 150,
      renderCell: (params) => {
        const avatarUrl = params.row.owner ? params.row.owner.avatar_url : null;
        return avatarUrl ? (
          <div>
            <img
              src={avatarUrl}
              alt="avatar"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <span>{params.row.id}</span>
          </div>
        ) : (
          <span>No Avatar</span>
        );
      },
    },

    { field: "user", headerName: "Name", width: 300 },
    { field: "notebook", headerName: "Notebook Name", width: 250 },
    { field: "keyword", headerName: "Keyword", width: 200 },
    { field: "updated_at", headerName: "Updated", width: 180 },
    {
      field: "forks",
      headerName: "",
      width: 100,
      renderCell: () => (
        <AiOutlineFork style={{ fontSize: "20px", color: "#333" }} />
      ),
    },
    {
      field: "stars",
      headerName: "",
      width: 100,
      renderCell: () => (
        <AiOutlineStar style={{ fontSize: "20px", color: "#333" }} />
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      {/* Add height here */}
      <div className="data-grid-container">
        <DataGrid rows={data} columns={columns} />
      </div>
    </div>
  );
};

export default DataTable;
