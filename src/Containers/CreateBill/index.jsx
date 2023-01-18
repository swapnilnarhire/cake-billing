import { Box, Grid, InputAdornment, OutlinedInput, Paper } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SiSwiggy, SiZomato, SiPhonepe, SiGooglepay } from "react-icons/si";
import { MdOutlineCountertops } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";

// import "../../App.css"
const names = [
  "PINEAPPLE CAKE",
  "BUTTERSCOTCH CAKE",
  "PINEAPPLE CAKE",
  "BUTTERSCOTCH CAKE",
  "RED VELVET CAKE",
  "BLACK FOREST CAKE",
  "KULFI FALUDA CAKE",
  "RAS MALAI CAKE",
  "PINEAPPLE CAKE",
  "DRY CAKE",
  "BLUEBERRY CAKE",
  "RAS MALAI CAKE",
  "COOKIES",
  "KULFI FALUDA CAKE",
  "KESAR BADAM CAKE",
  "KULFI FALUDA CAKE",
  "KULFI FALUDA CAKE",
  "KULFI FALUDA CAKE",
  "KULFI FALUDA CAKE",
  "KULFI FALUDA CAKE",
];

export default function CreateBill() {
  const [selectCake, setSelectCake] = React.useState("");

  const handleChange = (event) => {
    setSelectCake(event.target.value);
  };
  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
          padding: "12px",
          margin: "12px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-helper-label">
                Select Cake
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={selectCake}
                label="Cake"
                autoWidth
                onChange={handleChange}
              >
                <MenuItem disabled value="">
                  <em>Placeholder</em>
                </MenuItem>
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>With label + helper text</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-weight">
                Weight
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-weight"
                startAdornment={
                  <InputAdornment position="start">Gm/kg</InputAdornment>
                }
                label="Weight"
              />
              <FormHelperText id="outlined-weight-helper-text">
                Weight
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">
                    &#8377; {/* || &#x20B9; */}
                  </InputAdornment>
                }
                label="Amount"
              />
              <FormHelperText id="outlined-amount-helper-text">
                Amount
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-quantity">
                Quantity
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-quantity"
                startAdornment={
                  <InputAdornment position="start">QTY</InputAdornment>
                }
                label="Quantity"
                type="number"
              />
              <FormHelperText id="outlined-quantity-helper-text">
                Quantity
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
