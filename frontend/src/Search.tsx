import axios from "axios";
import TextField from "@mui/material/TextField";
import { Button, FormGroup } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface Props {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setPatents: any;
}

const Search: React.FC<Props> = ({
  searchQuery,
  setSearchQuery,
  setPatents,
}) => {
  const search = () => {
    axios
      .get(`http://localhost:8080/search?query=${searchQuery}`)
      .then((response) => {
        setPatents(response.data);
      });
  };

  return (
    <FormGroup row onSubmit={search} sx={{ width: "100%" }}>
      <TextField
        id="outline-basic"
        onChange={(event) => setSearchQuery(event.target.value)}
        value={searchQuery}
        // fullWidth
        type="search"
        label="Search patents"
        sx={{ flex: "1" }}
      />
      <Button variant="contained" placeholder="Search" onClick={search}>
        Search
      </Button>
    </FormGroup>
  );
};

export default Search;
