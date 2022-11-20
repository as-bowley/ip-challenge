import axios from "axios";
import TextField from "@mui/material/TextField";
import { Button, FormGroup } from "@mui/material";
import { Dispatch, SetStateAction, useEffect } from "react";
import { Autocomplete } from "@mui/material";

interface Props {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<any>>;
  setPatents: (
    patents: {
      publication_date: String;
      publication_id: Number;
      title: String;
    }[]
  ) => void;
  fetchPatents: () => void;
  patents: {
    publication_date: String;
    publication_id: Number;
    title: String;
  }[];
}

const Search: React.FC<Props> = ({
  searchQuery,
  setSearchQuery,
  setPatents,
  fetchPatents,
  patents,
}) => {
  const search = () => {
    axios
      .get(`http://localhost:8080/search?query=${searchQuery}`)
      .then((response) => {
        setPatents(response.data);
      });
  };

  useEffect(() => {
    fetchPatents();
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <FormGroup row onSubmit={search} sx={{ width: "100%" }}>
      <Autocomplete
        freeSolo={true}
        autoComplete={true}
        options={patents.map((patent) => patent.title)}
        id="outline-basic"
        value={searchQuery}
        onChange={(_event, value) => setSearchQuery(value)}
        sx={{ flex: "1" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Patent"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        )}
      />
      <Button
        variant="contained"
        placeholder="Search"
        onClick={search}
        value={searchQuery}
      >
        Search
      </Button>
    </FormGroup>
  );
};

export default Search;
