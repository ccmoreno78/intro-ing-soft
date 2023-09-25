"use client";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ModalComponent } from "../";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.trace(open);
  }, [open]);

  return (
    <>
      <ModalComponent open={open} handleClose={() => setOpen(!open)} />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#ba456a" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              UniHotel
            </Typography>
            <Button color="inherit" onClick={() => setOpen(true)}>
              Crear Habitacion
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
