import React, { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Box, Grid } from "@mui/material";

const CookieConsent = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    localStorage.setItem("isAgree", "true");
    setOpen(false);
  };

  return !!localStorage.getItem("isAgree") ? null : (
    <Snackbar
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: 2,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
        }}>
        <Grid container spacing={2}>
          <Grid item sm={8}>
            Мы используем файлы cookie, чтобы улучшить ваш просмотр, показывать
            персонализированную рекламу или контент, а также анализировать наш
            трафик. Нажимая «Принять все», вы соглашаетесь на использование нами
            файлов cookie.
          </Grid>
          <Grid item sm={4}>
            <Button
              sx={{
                width: 300,
                p: 1,
                "&:hover": {
                  backgroundColor: "#1068ed",
                },
              }}
              variant="contained"
              color="primary"
              onClick={handleClose}>
              Я согласен
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Snackbar>
  );
};

export default CookieConsent;
