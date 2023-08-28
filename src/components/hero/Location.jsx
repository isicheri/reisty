import React, { useState } from "react";
import LocationIcon from "../../assets/locationicon.svg";
import {
  IconButton,
  Modal,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  createTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Autocomplete from "@mui/material/Autocomplete";
import { debounce } from "@mui/material/utils";
import parse from "autosuggest-highlight/parse";
import axios from "axios";
import Loader from "../Loader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {lg:500, xs:330,},
  bgcolor: "background.paper",
  boxShadow: 24,

  borderRadius: "10px",
};

const GOOGLE_MAPS_API_KEY = "AIzaSyCoybA7QMl3eQP8of1wWW-FhUeYwrk0V1o";

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

const Location = () => {
  const [value, setValue] = React.useState(null);

  const [inputValue, setInputValue] = React.useState("");

  const [options, setOptions] = React.useState([]);

  const loaded = React.useRef(false);

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
        document.querySelector("head"),
        "google-maps"
      );
    }

    loaded.current = true;
  }

  const fetch = React.useMemo(
    () =>
      debounce((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 400),
    []
  );

  React.useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [location, setLocation] = useState(null);
  const [placeName, setPlaceName] = useState("");
  const [loading, setLoading] = useState(false)

  const handleGetCurrentLocation = () => {
    setLoading(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchData();
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=AIzaSyCoybA7QMl3eQP8of1wWW-FhUeYwrk0V1o`
      );
      const lga = data?.results[0].address_components[2].long_name;
      const state = data?.results[0].address_components[5].long_name;
      const country = data?.results[0].address_components[6].long_name;
      setValue(`${lga}, ${state}, ${country}`);
      setLoading(false)
    } catch (error) {
        setLoading(false)
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>

      <IconButton onClick={handleOpen}>
        <img className="h-[55px] px-1 " src={LocationIcon} />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
   
          <Box sx={{ p: 4 }}>
      
            <Typography
              sx={{ fontFamily: "Gordita", fontWeight: 500, fontSize: "18px" }}
            >
              My Location
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Autocomplete
                id="google-map-demo"
                getOptionLabel={(option) =>
                  typeof option === "string" ? option : option.description
                }
                filterOptions={(x) => x}
                options={options}
                autoComplete
                includeInputInList
                filterSelectedOptions
                value={value}
                noOptionsText="No locations"
                onChange={(event, newValue) => {
                  setOptions(newValue ? [newValue, ...options] : options);
                  setValue(newValue);
                }}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Find a location"
                    fullWidth
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <SearchIcon sx={{ color: "text.secondary" }} />
                          {params.InputProps.startAdornment}
                        </>
                      ),
                      style: {
                        ...params.InputProps.style,
                        fontFamily: "Gordita",
                        fontSize: "13px",
                        borderRadius: "20px",
                        offset: " 1px solid #737373",
                        // Replace with your desired font family
                      },
                    }}
                  />
                )}
                renderOption={(props, option) => {
                  const matches =
                    option.structured_formatting.main_text_matched_substrings ||
                    [];

                  const parts = parse(
                    option.structured_formatting.main_text,
                    matches.map((match) => [
                      match.offset,
                      match.offset + match.length,
                    ])
                  );

                  return (
                    <li {...props}>
                      <Grid container alignItems="center">
                        <Grid item sx={{ display: "flex", width: 44 }}>
                          <LocationOnIcon sx={{ color: "text.secondary" }} />
                        </Grid>
                        <Grid
                          item
                          sx={{
                            width: "calc(100% - 44px)",
                            wordWrap: "break-word",
                          }}
                        >
                          {parts.map((part, index) => (
                            <Box
                              key={index}
                              component="span"
                              sx={{
                                fontWeight: part.highlight ? "bold" : "regular",
                                fontFamily: "Gordita",
                              }}
                            >
                              {part.text}
                            </Box>
                          ))}
                          <Typography variant="body2" color="text.secondary">
                            {option.structured_formatting.secondary_text}
                          </Typography>
                        </Grid>
                      </Grid>
                    </li>
                  );
                }}
              />

              <Button
                onClick={handleGetCurrentLocation}
                fullWidth
                variant="outlined"
                sx={{
                  borderRadius: "50px",
                  mt: 3,
                  border: "1px solid #dadada",
                  fontFamily: "gordita",
                  textTransform: "initial",
                  color: "#333",
                }}
                size="large"
              >
                {" "}
                <LocationOnIcon
                  sx={{ color: "#BC172F", mr: 1, mt: -0.3 }}
                />{" "}
                Use current location
             
              </Button>
              <Box sx={{margin:'0 auto', width:'30%'}}>
                {
                    loading &&  <Loader />
                }
             
              </Box>
            
            </Box>
          </Box>
          <Box sx={{ bgcolor: "#f0f0f0", p: 1, mt: 2 }}></Box>
          <Box sx={{ p: 4 }}>
            <Typography
              sx={{ fontFamily: "Gordita", fontWeight: 400, fontSize: "14px" }}
            >
              Previous locations
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Location;
