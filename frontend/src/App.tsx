import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/App.scss";
import Button from "@mui/material/Button";

import Results from "./Results";
import Search from "./Search";
import AddFormModal from "./AddFormModal";

interface Patent {
  publication_date: String;
  publication_id: Number;
  title: String;
}

const defaultPatents: Patent[] = [];

const App: React.FC = () => {
  const [patents, setPatents]: [Patent[], (patents: Patent[]) => void] =
    useState(defaultPatents);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios.get("http://localhost:8080/patents").then((response) => {
      setPatents(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ marginBottom: "2rem" }}
      >
        Add
      </Button>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Results patents={patents} />
      <AddFormModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default App;
