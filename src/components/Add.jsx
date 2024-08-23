import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import styled from "styled-components";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CloseIcon from '@mui/icons-material/Close';

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
          zIndex: 1200
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={3}
          position="relative"
        >
           <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "text.primary" 
            }}
          >
            <CloseIcon />
          </IconButton>

           
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
         
          <UserBox>
            <Avatar
              sx={{ height: 40, width: 40 }}
              src="https://i.pinimg.com/474x/c1/a5/ca/c1a5caab61a1e550fb9a8a60fa54ea04.jpg"
            />
            <Typography fontWeight={500} variant="span">
              Jinal Ghoghari
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-textarea"
            rows={2}
            label="what's on your mind ?"
            placeholder="Write Here "
            multiline
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="#673ab7" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="Basic button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </SytledModal>
    </>
  );
};

export default Add;
