import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface Patent {
  publication_date: String;
  publication_id: Number;
  title: String;
}

interface PatentProps {
  patents: Patent[];
  updatePatent: (id: Number) => void;
  deletePatent: (id: Number) => void;
}

const Results: React.FC<PatentProps> = ({
  patents,
  updatePatent,
  deletePatent,
}) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 130, flex: 1 },
    { field: "date", headerName: "Publication Date", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => deletePatent(params.row.id)}>
              <DeleteIcon />
            </Button>
            <Button onClick={() => updatePatent(params.row.id)}>
              <EditIcon />
            </Button>
          </>
        );
      },
    },
  ];

  const rows: GridRowsProp = patents.map((patent) => {
    return {
      id: patent.publication_id,
      date: patent.publication_date,
      title: patent.title,
    };
  });
  return <DataGrid columns={columns} rows={rows} sx={{ marginTop: "2rem" }} />;
};

export default Results;
