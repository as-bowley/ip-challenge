import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState } from "react";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  handleClose: () => void;
}

const AddFormModal: React.FC<Props> = ({ open, handleClose }) => {
  const [patentTitle, setPatentTitle] = useState<string>("");
  const [patentDate, setPatentDate] = useState<string>("");

  const postPatent = () => {
    axios.post("http://localhost:8080/patent", {
      publication_date: patentDate,
      title: patentTitle,
    });
    handleClose();
    setPatentDate("");
    setPatentTitle("");
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={modalStyle}>
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            sx={{ marginBottom: "2rem" }}
          >
            Add a new Patent
          </Typography>
          <TextField
            id="outline-basic"
            fullWidth
            label="Title"
            value={patentTitle}
            onChange={(e) => setPatentTitle(e.target.value)}
            sx={{ marginBottom: "2rem" }}
          />
          <TextField
            id="outline-basic"
            fullWidth
            label="Date - YYYY-MM-DD"
            value={patentDate}
            onChange={(e) => setPatentDate(e.target.value)}
            sx={{ marginBottom: "2rem" }}
          />
          <Button variant="contained" onClick={postPatent}>
            Add
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AddFormModal;
