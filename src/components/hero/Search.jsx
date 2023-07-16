import React from "react";
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  Chip,
  Stack,
} from "@mui/material";
import Popover from "@mui/material/Popover";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [searchValue, setSearchValue] = React.useState("Cuisines, restuarants");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Box align="left" onClick={handleClick}>
        <Typography
          sx={{
            fontFamily: "Gordita",
            fontWeight: 200,
            fontSize: "12px",
            color: "#717171",
          }}
        >
          {" "}
          Search
        </Typography>
        <Typography
          sx={{
            fontFamily: "Gordita",
            fontWeight: 400,
            fontSize: "14px",
            color: "#555",
          }}
        >
          {" "}
          {searchValue}
        </Typography>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 500, left: 220 }}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: "360px", py: 3, px: 2, borderRadius: "20px" }}>
          <TextField
            fullWidth
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            size="large"
            placeholder="Search restaurant, cuisines"
            InputProps={{
              style: {
                fontFamily: "Gordita",
                fontSize: "13px",
                borderRadius: "20px",
                offset: " 1px solid #737373",
                // Replace with your desired font family
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <Box sx={{ mt: 4 }}>
            <Stack direction="row" spacing={1}>
              <Chip
                label="Dinery"
                variant="outlined"
                onClick={() =>{
                    setSearchValue("Dinery")
                   setAnchorEl(null)
                  }}
                sx={{ fontFamily: "Gordita" }}
              />
              <Chip
              onClick={() =>{
                setSearchValue("Restaurants")
               setAnchorEl(null)
              }}
                label="Restaurants"
                variant="outlined"
                sx={{ fontFamily: "Gordita" }}
              />
              <Chip
               onClick={() =>{
                 setSearchValue("Cuisines")
                setAnchorEl(null)
               }}
                label="Cuisines"
                variant="outlined"
                sx={{ fontFamily: "Gordita" }}
              />
            </Stack>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default Search;
