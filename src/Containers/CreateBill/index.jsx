import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  OutlinedInput,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SiSwiggy, SiZomato, SiPhonepe, SiGooglepay } from "react-icons/si";
import { MdCountertops, MdSettingsSystemDaydream } from "react-icons/md";
import {
  GiMoneyStack,
  GiFern,
  GiBalloons,
  GiCandles,
  GiSparkles,
} from "react-icons/gi";
import Clock from "../../Utils/Clock";

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
  const [moreDetails, setMoreDetails] = React.useState(false);
  const [candles, setCandles] = React.useState(0);
  const [sparkles, setSparkles]=React.useState(0);
  const [balloons, setBalloons]=React.useState(0)


  const handleChange = (event) => {
    setSelectCake(event.target.value);
  };
  return (
    <Box>
      <Typography variant="h3" align="center" component={Paper}>
        <Clock />
      </Typography>
      <Paper
        elevation={4}
        sx={{
          padding: "12px",
          margin: "12px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} container justifyContent="space-around">
            <FormControl item>
              {/* <FormLabel id="demo-row-radio-buttons-group-label">
               Billing Method
              </FormLabel> */}
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="counter"
                  control={<Radio />}
                  label={<MdCountertops fontSize={"32px"} />}
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="swiggy"
                  control={<Radio />}
                  label={<SiSwiggy fontSize={"32px"} />}
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="zomato"
                  control={<Radio />}
                  label={<SiZomato fontSize={"32px"} />}
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="fnp"
                  control={<Radio />}
                  label={<GiFern fontSize={"32px"} />}
                  labelPlacement="bottom"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} container justifyContent="space-around">
            <FormControl item>
              {/* <FormLabel id="demo-row-radio-buttons-group-label">
               Billing Method
              </FormLabel> */}
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="phonepe"
                  control={<Radio />}
                  label={<SiPhonepe fontSize={"32px"} />}
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="gpay"
                  control={<Radio />}
                  label={<SiGooglepay fontSize={"32px"} />}
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="cash"
                  control={<Radio />}
                  label={<GiMoneyStack fontSize={"32px"} />}
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="fnppanel"
                  control={<Radio />}
                  label={<MdSettingsSystemDaydream fontSize={"32px"} />}
                  labelPlacement="bottom"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
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

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-sparkles">
                Sparkles
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-sparkles"
                startAdornment={
                  <InputAdornment position="start">
                    <GiSparkles />
                  </InputAdornment>
                }
                label="Sparkles"
                type="number"
                value={sparkles}
              />
              <FormHelperText id="outlined-sparkles-helper-text">
                Sparkles
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-balloons">
                Balloons
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-balloons"
                startAdornment={
                  <InputAdornment position="start">
                    <GiBalloons />
                  </InputAdornment>
                }
                label="Balloons"
                type="number"
                value={balloons}
              />
              <FormHelperText id="outlined-balloons-helper-text">
                Balloons
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-candles">
                Candles
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-candles"
                startAdornment={
                  <InputAdornment position="start">
                    <GiCandles />
                  </InputAdornment>
                }
                label="Candles"
                type="number"
                value={candles}
              />
              <FormHelperText id="outlined-candles-helper-text">
                Candles
              </FormHelperText>
            </FormControl>
          </Grid>
          {!moreDetails ? (
            <Grid item xs={12} sm={6} md={4}>
              <Button
                fullWidth
                color="primary"
                variant="text"
                onClick={() => {
                  setMoreDetails(!moreDetails);
                }}
              >
                Add Customer Details..
              </Button>
            </Grid>
          ) : (
            <Grid item xs={12} sm={6} md={4}>
              <Button
                fullWidth
                color="primary"
                variant="text"
                onClick={() => {
                  setMoreDetails(!moreDetails);
                }}
              >
                close Customer Details..
              </Button>
            </Grid>
          )}
          <Grid
            item
            xs={12}
            alignContent="center"
            alignItems={"center"}
            justifyContent="space-evenly"
            container
          >
            <Button
              item
              color="primary"
              variant="contained"
              onClick={() => {
                setMoreDetails(!moreDetails);
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
