import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  MenuItem,
  Select,
  CircularProgress,
  FormControl,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import routes from "routes";
import footerRoutes from "footer.routes";

import bgImage from "assets/images/HistoricalRate.png";
import { get } from "Utlis/ApiService";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import FAQS from "pages/Home/sections/data/FAQS";

function CurrencyHistoricalRates() {
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState("GBP");
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState("PKR");
  const [currencies, setCurrencies] = useState([]);
  const [filteredCurrencies, setFilteredCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userError, setUserError] = useState(null);
  const [exchangeRatesDetail, setExchangeRatesDetail] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const fetchCurrencyData = async () => {
    setLoading(true);
    setUserError(null);
    try {
      const response = await get("https://cursolsystem-production.up.railway.app/api/CurrencyCodeAndFlags");
      const filtered = response.filter((currency) =>
        ["GBP", "EUR"].includes(currency.currencyCode)
      );
      setFilteredCurrencies(filtered);
      setCurrencies(response);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchHistoricalRates = async () => {
    setLoading(true);
    setUserError(null);
    try {
      const response = await get(
        `https://cursolsystem-production.up.railway.app/api/HistoricalRates?datePattern=${selectedDate.format(
          "YYYY-MM-DD"
        )}&source=${selectedCurrencyFrom}&target=${selectedCurrencyTo}`
      );
      setExchangeRatesDetail(response);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const convertDuration = (duration) => {
    if (!duration) return "0 seconds";

    const matches = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = matches?.[1] ? parseInt(matches[1].replace("H", "")) : 0;
    const minutes = matches?.[2] ? parseInt(matches[2].replace("M", "")) : 0;
    const seconds = matches?.[3] ? parseInt(matches[3].replace("S", "")) : 0;

    return `${hours} h, ${minutes} m, ${seconds} s`;
  };

  const handleError = (error) => {
    if (error.response) {
      if (error.response.status >= 400 && error.response.status < 500) {
        setUserError("There was a problem with your request.");
      } else if (error.response.status >= 500) {
        setUserError("There was a problem with the server. Please try again later.");
      }
    } else {
      setUserError("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    fetchCurrencyData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <DefaultNavbar routes={routes} sticky />

      <MKBox
        minHeight="40vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <MKTypography
          variant="h3"
          mt={0}
          color="white"
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["3xl"],
            },
          })}
        >
          Historical Exchange Rates
        </MKTypography>
      </MKBox>

      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: { xs: -2, lg: -12 },
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox
          minHeight="75vh"
          width="100%"
          mb={0}
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundcolor: "white",
          }}
        >
          <Container>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12} lg={6} textAlign="center">
                <MKTypography
                  variant="h2"
                  color="black"
                  mt={0}
                  mb={2}
                  sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down("md")]: {
                      fontSize: size["3xl"],
                    },
                  })}
                >
                  Historical Exchange Rates
                </MKTypography>
                <MKTypography variant="body2" color="black" mt={1} mb={2}>
                  Discover the Exchange Rates of different exchange companies by date
                </MKTypography>
              </Grid>
            </Grid>
          </Container>

          <Container>
            <Grid container spacing={2} justifyContent="center">
              {/* Source Currency */}
              <Grid item xs={12} md={4} lg={4}>
                <FormControl fullWidth variant="filled">
                  <span style={{ fontSize: "16px" }}>Source Currency</span>
                  <Select
                    labelId="currencyFrom-label"
                    id="currencyFrom"
                    value={selectedCurrencyFrom}
                    onChange={(e) => setSelectedCurrencyFrom(e.target.value)}
                    sx={{
                      color: "white",
                      height: "40px",
                    }}
                  >
                    {filteredCurrencies.map((currency) => (
                      <MenuItem key={currency.currencyCode} value={currency.currencyCode}>
                        <div style={{ display: "flex", alignItems: "center" }}>
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
                </FormControl>
              </Grid>

              {/* Target Currency */}
              <Grid item xs={12} md={4} lg={4}>
                <FormControl fullWidth variant="filled">
                  <span style={{ fontSize: "16px" }}>Target Currency</span>
                  <Select
                    labelId="currencyTo-label"
                    id="currencyTo"
                    value={selectedCurrencyTo}
                    onChange={(e) => setSelectedCurrencyTo(e.target.value)}
                    sx={{
                      color: "white",
                      height: "40px",
                    }}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 200, // Set the maximum height here
                        },
                      },
                    }}
                  >
                    {currencies
                      .filter((currency) => currency.currencyCode !== selectedCurrencyFrom)
                      .map((currency) => (
                        <MenuItem key={currency.currencyCode} value={currency.currencyCode}>
                          <div style={{ display: "flex", alignItems: "center" }}>
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
                </FormControl>
              </Grid>

              {/* Date Picker */}
              <Grid item xs={12} md={2} lg={2} sx={{ mt: { xs: "0", sm: "-7px" } }}>
                <span style={{ fontSize: "16px" }}>Select Date</span>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    disableFuture
                    openTo="day"
                    views={["year", "month", "day"]}
                    value={selectedDate}
                    onChange={(newDate) => setSelectedDate(newDate)}
                    renderInput={(params) => (
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                          {...params}
                          variant="contained"
                          sx={{
                            backgroundColor: "black",
                            color: "white",
                            "&:hover": {
                              backgroundColor: "gray",
                            },
                          }}
                        >
                          {params.inputProps.value || "Select Date"}
                        </Button>
                      </Box>
                    )}
                  />
                </LocalizationProvider>
              </Grid>

              {/* Search Button */}
              <Grid item xs={12} md={1} lg={1} sx={{ mt: { xs: "0", sm: "27px" } }}>
                <Button
                  onClick={fetchHistoricalRates}
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white !important",
                    "&:hover": {
                      backgroundColor: "gray",
                    },
                  }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : "Search"}
                </Button>
              </Grid>
            </Grid>
          </Container>

          {/* Exchange Rates Details */}
          <Container sx={{ mt: 5 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <MKBox
                  sx={{
                    backgroundColor: "#02165F",
                    p: 2,
                    height: 80,
                    mb: 3,
                    position: "sticky",
                    top: 54,
                    color: "white !important",
                    display: "flex",
                    justifyContent: "space-between",
                    borderRadius: "12px",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 2,
                    borderBottom: "2px solid black",
                    padding: "8px 0",
                  }}
                >
                  <Typography sx={{ flex: 1, fontWeight: "bold", ml: "30px" }}>
                    Exchange Company
                  </Typography>

                  <Typography
                    sx={{
                      flex: 1,
                      fontWeight: "bold",
                      textAlign: "center",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    Delivery Fee
                  </Typography>
                  <Typography
                    sx={{
                      flex: 1,
                      fontWeight: "bold",
                      textAlign: "center",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    Delivery Time
                  </Typography>
                  <Typography sx={{ flex: 1, fontWeight: "bold", textAlign: "center" }}>
                    Exchange Rate
                  </Typography>
                </MKBox>

                <Card sx={{ borderRadius: "16px", boxShadow: 3, p: 0 }}>
                  <CardContent>
                    {exchangeRatesDetail.map((detail, index) => (
                      <Accordion
                        key={index}
                        sx={{
                          mb: 2,
                          backgroundColor: "white",
                          boxShadow: "none",
                          borderBottom: "1px solid gray",
                        }}
                      >
                        <AccordionSummary
                          expandIcon={
                            <ExpandMoreIcon sx={{ display: { xs: "block", md: "none" } }} />
                          }
                          aria-controls={`panel${index}-content`}
                          id={`panel${index}-header`}
                        >
                          <MKBox
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              flexWrap: "wrap",
                              gap: 2,
                              width: "100%",
                              ml: "30px",
                            }}
                          >
                            <Box sx={{ flex: 1, textAlign: "center" }}>
                              <img
                                src={detail.platformImg}
                                alt={detail.platformName}
                                style={{ height: "24px", marginRight: "8px", cursor: "pointer" }}
                                onClick={() => window.open(detail.platformSiteUrl, "_blank")}
                              />
                            </Box>

                            <Typography
                              sx={{
                                flex: 1,
                                textAlign: "center",
                                display: { xs: "none", md: "block" },
                              }}
                            >
                              {detail.deliveryFee}
                            </Typography>
                            <Typography
                              sx={{
                                flex: 1,
                                textAlign: "center",
                                display: { xs: "none", md: "block" },
                              }}
                            >
                              {convertDuration(detail.estimatedDeliveryTime)}
                            </Typography>
                            <Typography sx={{ flex: 1, textAlign: "center" }}>
                              {detail.rate.toFixed(2)}
                            </Typography>
                          </MKBox>
                        </AccordionSummary>
                        <AccordionDetails>
                          <MKBox sx={{ display: { xs: "block", md: "none" } }}>
                            <Typography>
                              <strong>Delivery Fee:</strong> {detail.deliveryFee}
                            </Typography>
                            <Typography>
                              <strong>Delivery Time:</strong>{" "}
                              {convertDuration(detail.estimatedDeliveryTime)}
                            </Typography>
                          </MKBox>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Container>
              <Grid mt={24} container item xs={12} justifyContent="left">
                <Grid item xs={12} lg={6} textAlign="left">
                  <MKTypography
                    variant="h2"
                    color="black"
                    mt={-6}
                    mb={2}
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                      },
                    })}
                  >
                    Frequently asked questions
                  </MKTypography>
                </Grid>
              </Grid>
            </Container>
            <Container mb={20}>
              <FAQS />
            </Container>
          </Container>
        </MKBox>
      </Card>
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default CurrencyHistoricalRates;
