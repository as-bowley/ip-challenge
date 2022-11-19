import TextField from "@mui/material/TextField";
import { Dispatch, SetStateAction } from "react";

interface Props {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const Search: React.FC<Props> = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextField
      id="outline-basic"
      onChange={(event) => setSearchQuery(event.target.value)}
      value={searchQuery}
      fullWidth
      type="search"
      label="Search patents"
    />
  );
};

export default Search;
