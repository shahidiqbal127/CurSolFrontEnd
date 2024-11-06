import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import SwitchIcon from "./../../assets/images/SiwtchIcon.png";
import MKTypography from "components/MKTypography";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
// Modals
import RateComparsionModal from "./RateComparisonModal";
import { get } from "../../Utlis/ApiService";

const CurrencyConversion = () => {
  const [amountFrom, setAmountFrom] = useState("1000"); // Default amount set to 1000 EUR
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState("GBP");
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [filteredCurrencies, setFilteredCurrencies] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [flagsAndCodes, setFlagsAndCodes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userError, setUserError] = useState(null);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  // Fetch Flags
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      setUserError(null); // Reset user error
      try {
        // const API_URL = process.env.REACT_APP_API_URL;
        // console.log("API URL:", process.env.REACT_APP_API_URL)
        // const response = await get(`${API_URL}/api/CurrencyCodeAndFlags`);
        const response = await get("https://cursolsystem-production.up.railway.app/api/CurrencyCodeAndFlags"); // Replace with your endpoint
        setFlagsAndCodes(response); // Handle success
        console.log(response);
        // Filter to only include EUR and GBP
        const filteredCurrencies = response.filter(
          (currency) => currency.currencyCode === "EUR" || currency.currencyCode === "GBP"
        );
        setFilteredCurrencies(filteredCurrencies);
        setCurrencies(response);
        setSelectedCurrencyTo(filteredCurrencies[0].currencyCode === "GBP" ? "GBP" : "EUR");
      } catch (error) {
        // Check for user errors (4xx) or server errors (5xx)
        if (error.response) {
          if (error.response.status >= 400 && error.response.status < 500) {
            setUserError("There was a problem with your request.");
          } else if (error.response.status >= 500) {
            setUserError("There was a problem with the server. Please try again later.");
          }
        } else {
          setUserError("Something went wrong. Please try again.");
        }
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []);

  // Handle currency selection changes
  const handleCurrencyFromChange = (value) => {
    setSelectedCurrencyFrom(value);
    // Automatically set the 'to' currency to the other option
    setSelectedCurrencyTo(currencies.find((c) => c.currencyCode !== value)?.currencyCode || "");
  };

  const handleCurrencyToChange = (value) => {
    setSelectedCurrencyTo(value);
  };

  // Swap currencies
  const swapCurrencies = () => {
    const temp = selectedCurrencyFrom;
    setSelectedCurrencyFrom(selectedCurrencyTo);
    setSelectedCurrencyTo(temp);
  };

  return (
    <>
      <Card
        sx={{
          p: { xs: 2, lg: 4, xl: 6 },
          mx: { xs: -1, lg: 3, xl: 4 },
          mt: { xs: 13, lg: -2 },
          mb: 2,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKTypography
          variant="h4"
          color="white"
          backgroundColor="#02165F"
          mt={-9}
          mb={2}
          p={2}
          mr={6}
          borderRadius={5}
          ml={6}
          sx={({ breakpoints, typography: { size } }) => ({
            textAlign: "center", // Center align the text
            [breakpoints.down("md")]: {
              fontSize: size["2xl"],
            },
            width: "fit-content", // Adjust the width to fit the content
          })}
        >
          GBP & EUR Exchange Rates Comparison
        </MKTypography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField
            id="amountFrom"
            label="You send exactly"
            variant="filled"
            style={{ width: "90%", marginRight: "1px", color: "black" }}
            type="number"
            inputProps={{ step: "0.01" }}
            value={amountFrom}
            onChange={(e) => setAmountFrom(e.target.value)}
          />
          <Select
            labelId="currencyFrom"
            id="currencyFrom"
            variant="filled"
            style={{
              backgroundColor: "#02165F",
              color: "white",
              height: "100%",
              width: "40%",
            }}
            MenuProps={{ sx: { maxHeight: "200px" } }}
            value={selectedCurrencyFrom}
            onChange={(e) => handleCurrencyFromChange(e.target.value)}
          >
            {filteredCurrencies.map((currency) => (
              <MenuItem key={currency.currencyCode} value={currency.currencyCode}>
                <div className="flex">
                  <img
                    src={currency.countryFlagUrl}
                    alt={currency.currencyCode}
                    style={{ width: "24px", marginRight: "8px" }}
                  />
                  {currency.currencyCode}
                </div>
              </MenuItem>
            ))}
          </Select>
        </div>
        <div style={{ display: "flex", alignSelf: "center" }}>
          <IconButton onClick={swapCurrencies} width="10%">
            <img src={SwitchIcon} alt="Toggle Icon" />
          </IconButton>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField
            id="amountTo"
            label="Target Currency"
            variant="filled"
            style={{ width: "90%", marginRight: "1px", color: "black" }}
            disabled // Disabled the input as requested
          />
          <Select
            labelId="currencyTo"
            id="currencyTo"
            variant="filled"
            style={{
              backgroundColor: "#02165F",
              color: "white",
              height: "100%",
              width: "40%",
            }}
            MenuProps={{ sx: { maxHeight: "200px" } }}
            value={selectedCurrencyTo}
            onChange={(e) => handleCurrencyToChange(e.target.value)}
          >
            {currencies
              .filter((currency) => currency.currencyCode !== selectedCurrencyFrom)
              .map((currency) => (
                <MenuItem key={currency.currencyCode} value={currency.currencyCode}>
                  <div className="flex">
                    <img
                      src={currency.countryFlagUrl}
                      alt={currency.currencyCode}
                      style={{ width: "24px", marginRight: "8px" }}
                    />
                    {currency.currencyCode}
                  </div>
                </MenuItem>
              ))}
          </Select>
        </div>
        <Button
          variant="contained"
          onClick={handleOpen}
          style={{
            backgroundColor: "#02165F",
            color: "white",
            marginTop: "17px",
          }}
        >
          Compare Rates
        </Button>
      </Card>
      {openModal && (
        <RateComparsionModal
          open={openModal}
          handleClose={handleClose}
          sourceCurrency={selectedCurrencyFrom}
          targetCurrency={selectedCurrencyTo}
          amount={amountFrom}
        />
      )}
    </>
  );
};

export default CurrencyConversion;
