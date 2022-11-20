import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/App.scss";
import Button from "@mui/material/Button";

import Results from "./Results";
import Search from "./Search";
import AddFormModal from "./AddFormModal";
import EditFormModal from "./EditFormModal";

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
  const [openAddForm, setOpenAddForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [patentTitle, setPatentTitle] = useState<string>("");
  const [patentDate, setPatentDate] = useState<string>("");
  const [editableID, setEditableID] = useState<Number>(0);

  const handleOpenAddForm = () => setOpenAddForm(true);
  const handleCloseAddForm = () => setOpenAddForm(false);

  const handleOpenEditForm = () => setOpenEditForm(true);
  const handleCloseEditForm = () => setOpenEditForm(false);

  const fetchPatents = () => {
    axios
      .get(`http://localhost:8080/search?query=${searchQuery}`)
      .then((response) => {
        setPatents(response.data);
      });
    console.log("fetched");
  };

  const openUpdateForm = (id: Number) => {
    axios.get(`http://localhost:8080/patent/${id}`).then((response) => {
      setPatentDate(response.data.publication_date);
      setPatentTitle(response.data.title);
      setEditableID(response.data.publication_id);
    });
    handleOpenEditForm();
  };

  const deletePatent = (id: Number) => {
    console.log(id);
    axios
      .delete(`http://localhost:8080/patent/${id}`)
      .then(() => fetchPatents());
  };

  useEffect(() => {
    fetchPatents();
  }, []);

  return (
    <div className="App">
      <Button
        variant="contained"
        onClick={handleOpenAddForm}
        sx={{ marginBottom: "2rem" }}
      >
        Add
      </Button>
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setPatents={setPatents}
        fetchPatents={fetchPatents}
        patents={patents}
      />
      <Results
        patents={patents}
        updatePatent={openUpdateForm}
        deletePatent={deletePatent}
      />
      <AddFormModal
        open={openAddForm}
        handleClose={handleCloseAddForm}
        formProps={{
          patentTitle,
          setPatentTitle,
          patentDate,
          setPatentDate,
        }}
        fetchPatents={fetchPatents}
      />
      <EditFormModal
        open={openEditForm}
        handleClose={handleCloseEditForm}
        formProps={{
          patentTitle,
          setPatentTitle,
          patentDate,
          setPatentDate,
        }}
        editableID={editableID}
        fetchPatents={fetchPatents}
      />
    </div>
  );
};

export default App;
