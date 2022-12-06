import React from "react";
import Image from "next/image";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { grey } from "@mui/material/colors";

function Header() {
  return (
    <Box sx={{ borderBottom: `8px solid ${grey[900]}` }}>
      <AppBar
        sx={{ bgcolor: "transparent", padding: "25px 20px" }}
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs>
              <Image
                src="/__images/netflix.svg"
                height="45px"
                width="167px"
                layout="intrinsic"
                alt="Netflix Logo"
              />
            </Grid>
            <Grid item xs="auto" color="common.white">
              <Select
                name="lang"
                variant="outlined"
                size="small"
                label="Language"
                defaultValue="EN"
                sx={{
                  border: "2px solid white",
                  color: "white",
                  "& .MuiSelect-icon": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              >
                <MenuItem value="ID">Bahasa Indonesia</MenuItem>
                <MenuItem value="EN">English</MenuItem>
              </Select>
            </Grid>
            <Grid item xs="auto">
              <Button color="primary" variant="contained">
                Sign in
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          position: "relative",
          height: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::after": {
            position: "absolute",
            content: '""',
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            background: "rgba(0,0,0,0.4)",
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(0,0,0,0.6) 0,
              rgba(0,0,0,0.1) 60%,
              rgba(0,0,0,0.6) 100%
            )`,
          },
        }}
      >
        <Image
          priority
          src="/__images/backdrop.jpg"
          layout="fill"
          objectFit="cover"
          alt="Backdrop Netflix"
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: "1" }}>
          <Typography
            variant="h4"
            color="common.white"
            fontWeight="600"
            textAlign="center"
          >
            Unlimited movies, TV shows, and more.
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="common.white"
            textAlign="center"
            gutterBottom
          >
            Watch anywhere. Cancel anytime.
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="common.white"
            textAlign="center"
            sx={{
              my: "12px",
            }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>
          <Grid container>
            <Grid item xs>
              <TextField
                variant="filled"
                label="Email Address"
                fullWidth
                sx={{ bgcolor: "common.white" }}
              />
            </Grid>
            <Grid item xs="auto">
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ height: "100%", borderRadius: "2px" }}
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Header;
