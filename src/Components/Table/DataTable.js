import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";

// Transform data function
export const transformData = (data) => {
  return data.map((gist) => {
    const firstFile = Object.values(gist.files || [])[0];
    return {
      ...gist,
      user: gist.owner?.login || "Unknown",
      notebook: firstFile?.filename || "Unknown",
      keyword: firstFile?.language || "Unknown",
      content: firstFile?.content || "No Content Available",
    };
  });
};

const DataTable = ({ data, error }) => {
  const columns = [
    {
      field: "avatar_url",
      headerName: "Avatar",
      width: 150,
      renderCell: (params) => {
        const avatarUrl = params.row.owner?.avatar_url;
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
          </div>
        ) : (
          <span>No Avatar</span>
        );
      },
    },

    { field: "user", headerName: "Name", width: 200 },
    { field: "notebook", headerName: "Notebook Name", width: 250 },
    { field: "keyword", headerName: "Keyword", width: 150 },
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
      {error && <div className="error">{error}</div>}
      {/* Display error if there's one */}
      <DataGrid rows={data} columns={columns} />
    </div>
  );
};

export default DataTable;
