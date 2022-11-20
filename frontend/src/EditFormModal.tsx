import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

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
  formProps: {
    patentTitle: string;
    setPatentTitle: Dispatch<SetStateAction<string>>;
    patentDate: string;
    setPatentDate: Dispatch<SetStateAction<string>>;
  };
  editableID: Number;
  fetchPatents: () => void;
}

const EditFormModal: React.FC<Props> = ({
  open,
  handleClose,
  formProps,
  editableID,
  fetchPatents,
}) => {
  const updatePatent = (id: Number) => {
    axios
      .put(`http://localhost:8080/patent/${id}`, {
        publication_date: formProps.patentDate,
        title: formProps.patentTitle,
      })
      .then(() => fetchPatents());
    handleClose();
    formProps.setPatentDate("");
    formProps.setPatentTitle("");
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
            Update Patent
          </Typography>
          <TextField
            id="outline-basic"
            fullWidth
            label="Title"
            value={formProps.patentTitle}
            onChange={(e) => formProps.setPatentTitle(e.target.value)}
            sx={{ marginBottom: "2rem" }}
          />
          <TextField
            id="outline-basic"
            fullWidth
            label="Date - YYYY-MM-DD"
            value={formProps.patentDate}
            onChange={(e) => formProps.setPatentDate(e.target.value)}
            sx={{ marginBottom: "2rem" }}
          />
          <Button variant="contained" onClick={() => updatePatent(editableID)}>
            Update
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default EditFormModal;
