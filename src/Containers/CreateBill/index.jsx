import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  InputAdornment,
  OutlinedInput,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
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
];

export default function CreateBill() {
  const [selectCake, setSelectCake] = React.useState();
  const [moreDetails, setMoreDetails] = React.useState(false);
  const [candles, setCandles] = React.useState(0);
  const [sparkles, setSparkles] = React.useState(0);
  const [balloons, setBalloons] = React.useState(0);
  const [price, setPrice] = React.useState();
  const [weight, setWeight] = React.useState();
  const [quantity, setQuantity] = React.useState();
  const [saleMode, setSaleMode] = React.useState();
  const [paymentType, setPaymentType] = React.useState();

  const handleCake = (event) => {
    console.log(event.target.value);

    setSelectCake(event.target.value);
  };
  const handlePrice = (event) => {
    console.log(event.target.value);

    setPrice(event.target.value);
  };
  const handleWeight = (event) => {
    console.log(event.target.value);

    setWeight(event.target.value);
  };
  const handleQuantity = (event) => {
    console.log(event.target.value);

    setQuantity(event.target.value);
  };
  const handleSaleMode = (event) => {
    console.log(event.target.value);
    setSaleMode(event.target.value);
    if (event.target.value !== "counter") {
      setPaymentType("online");
    }
  };
  const handlePayment = (event) => {
    console.log(event.target.value);
    setPaymentType(event.target.value);
  };
  const handleCandles = (event) => {
    console.log(event.target.value);

    setCandles(event.target.value);
  };
  const handleBalloons = (event) => {
    console.log(event.target.value);

    setBalloons(event.target.value);
  };
  const handleSparkles = (event) => {
    console.log(event.target.value);

    setSparkles(event.target.value);
  };

  // useEffect(() => {
  //   if (saleMode) {
  //     console.log("useEffect",saleMode)
  //     if (saleMode !== "counter") {
  //       setPaymentType("online");
  //     }
  //   } else {
  //     setPaymentType();
  //   }
  // }, [saleMode]);

 const handleSubmit=()=>{
  if(selectCake && paymentType && price && weight && quantity && saleMode){
    const d = new Date();
    alert(d);
    // clearing input field
    setPaymentType(null)
    setPrice(null)
    setQuantity(null)
    setSaleMode(null)
    setBalloons(0)
    setCandles(0)
    setSparkles(0)
    setWeight(null)
    setSelectCake(null)
    setQuantity(null)
  }
  else{
    alert("Please fill the required fields");
  }
 }

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
              {/* <FormLabel id="saleMode">
               Billing Method
              </FormLabel> */}
              <RadioGroup
                row
                aria-labelledby="saleMode"
                name="saleMode"
                onChange={handleSaleMode}
                value={saleMode}
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
              {/* <FormLabel id="paymentMode">
               Billing Method
              </FormLabel> */}
              <RadioGroup
                row
                aria-labelledby="paymentMode"
                name="paymentMode"
                onChange={handlePayment}
                value={paymentType}
              >
                <FormControlLabel
                  value="phonepe"
                  control={<Radio />}
                  label={<SiPhonepe fontSize={"32px"} />}
                  labelPlacement="bottom"
                  disabled={saleMode !== "counter" ? true : false}
                />
                <FormControlLabel
                  value="gpay"
                  control={<Radio />}
                  label={<SiGooglepay fontSize={"32px"} />}
                  labelPlacement="bottom"
                  disabled={saleMode !== "counter" ? true : false}
                />
                <FormControlLabel
                  value="cash"
                  control={<Radio />}
                  label={<GiMoneyStack fontSize={"32px"} />}
                  labelPlacement="bottom"
                  disabled={saleMode !== "counter" ? true : false}
                />
                <FormControlLabel
                  value="online"
                  control={<Radio />}
                  label={<MdSettingsSystemDaydream fontSize={"32px"} />}
                  labelPlacement="bottom"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <InputLabel id="cakeName">Select Cake</InputLabel>
              <Select
                labelId="cakeName"
                id="cakeName"
                name="cakeName"
                value={selectCake}
                label="Cake"
                autoWidth
                onChange={handleCake}
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
              <InputLabel htmlFor="weight">Weight</InputLabel>
              <OutlinedInput
                id="weight"
                startAdornment={
                  <InputAdornment position="start">gm/kg</InputAdornment>
                }
                label="Weight"
                name="weight"
                onChange={handleWeight}
                value={weight}
              />
              <FormHelperText id="weight">Weight</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <InputLabel htmlFor="price">Amount</InputLabel>
              <OutlinedInput
                id="price"
                startAdornment={
                  <InputAdornment position="start">
                    &#8377; {/* || &#x20B9; */}
                  </InputAdornment>
                }
                label="Amount"
                name="price"
                value={price}
                onChange={handlePrice}
              />
              <FormHelperText id="price">Amount</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <InputLabel htmlFor="quantity">Quantity</InputLabel>
              <OutlinedInput
                id="quantity"
                startAdornment={
                  <InputAdornment position="start">QTY</InputAdornment>
                }
                label="Quantity"
                type="number"
                name="quantity"
                value={quantity}
                onChange={handleQuantity}
              />
              <FormHelperText id="quantity">Quantity</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <InputLabel htmlFor="sparkles">Sparkles</InputLabel>
              <OutlinedInput
                id="sparkles"
                startAdornment={
                  <InputAdornment position="start">
                    <GiSparkles />
                  </InputAdornment>
                }
                label="Sparkles"
                type="number"
                name="sparkles"
                value={sparkles}
                onChange={handleSparkles}
              />
              <FormHelperText id="sparkles">Sparkles</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <InputLabel htmlFor="balloons">Balloons</InputLabel>
              <OutlinedInput
                id="balloons"
                startAdornment={
                  <InputAdornment position="start">
                    <GiBalloons />
                  </InputAdornment>
                }
                label="Balloons"
                type="number"
                value={balloons}
                onChange={handleBalloons}
              />
              <FormHelperText id="balloons">Balloons</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormControl fullWidth>
              <InputLabel htmlFor="candles">Candles</InputLabel>
              <OutlinedInput
                id="candles"
                startAdornment={
                  <InputAdornment position="start">
                    <GiCandles />
                  </InputAdornment>
                }
                label="Candles"
                name="candles"
                type="number"
                value={candles}
                onChange={handleCandles}
              />
              <FormHelperText id="candles">Candles</FormHelperText>
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
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
