import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";

interface Props {
  modalStyle: {
    position: "absolute";
    top: string;
    left: string;
    transform: string;
    width: number;
    bgcolor: string;
    border: string;
    boxShadow: number;
    p: number;
  };
  open: boolean;
}

const AddForm: React.FC<Props> = ({ modalStyle, open }) => {
  useEffect(() => {
    // add post for adding new patent
  }, []);
  return (
    <Fade in={open}>
      <Box sx={modalStyle}>
        <Typography id="transition-modal-title" variant="h6" component="h2">
          Add a new Patent
        </Typography>
        <TextField id="outline-basic" fullWidth label="Title" />
        <TextField id="outline-basic" fullWidth label="Date - YYYY-MM-DD" />
        <Button variant="contained">Add</Button>
      </Box>
    </Fade>
  );
};

export default AddForm;
