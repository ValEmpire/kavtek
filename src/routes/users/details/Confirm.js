import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 907,
  height: 270,
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "12px",
};

const Confirm = (props) => {
  const { openModal, handleModal, handleSuccess } = props;

  return (
    <Modal open={openModal} onClose={handleModal}>
      <Box sx={style} textAlign="center">
        <Box pt={2}>
          <Typography variant="body2" fontWeight="bold">
            Are you sure you want to submit?
          </Typography>
        </Box>

        <Box position={"absolute"} bottom="0" right="0" pb={3} pr={3}>
          <Box display="flex">
            <Box width="166px">
              <Button size="large" fullWidth onClick={handleModal}>
                Dismiss
              </Button>
            </Box>
            <Box width="166px">
              <Button size="large" fullWidth variant="contained" onClick={handleSuccess}>
                Yes
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default Confirm;
