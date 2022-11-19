import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

interface Patent {
  publication_date: String;
  publication_id: Number;
  title: String;
}

interface PatentProps {
  patents: Patent[];
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 130, flex: 1 },
  { field: "date", headerName: "Publication Date", width: 130 },
];

const Results: React.FC<PatentProps> = ({ patents }) => {
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
