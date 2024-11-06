import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import { Card, Select, MenuItem, Button, CircularProgress, FormControl } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import routes from "routes";
import footerRoutes from "footer.routes";

import bgImage from "assets/images/CurrencyPrediction.jpg";
import { get } from "Utlis/ApiService";
import { RefreshOutlined } from "@mui/icons-material";
import FAQS from "pages/Home/sections/data/FAQS";

function CurrencyRatePrediction() {
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState("GBP");
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState("PKR");
  const [currencies, setCurrencies] = useState([]);
  const [filteredCurrencies, setFilteredCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userError, setUserError] = useState(null);
  const [chartOptions, setChartOptions] = useState(null);

  const fetchCurrencyData = async () => {
    setLoading(true);
    setUserError(null);
    try {
      const response = await get("https://cursolsystem-production.up.railway.app/api/CurrencyCodeAndFlags");
      // Filter currencies to only include PKR, NGN, INR
      const filteredTarget = response.filter((currency) =>
        ["PKR", "NGN", "INR"].includes(currency.currencyCode)
      );
      const filtered = response.filter((currency) =>
        ["GBP", "EUR"].includes(currency.currencyCode)
      );
      setFilteredCurrencies(filtered);
      setCurrencies(filteredTarget);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchForecastData = async () => {
    setLoading(true);
    setUserError(null);
    try {
      const response = await get(
        `https://cursolsystem-production.up.railway.app/api/fetching-forecast-data?currencyPair=${selectedCurrencyFrom} to ${selectedCurrencyTo}`
      );
      processChartData(response);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const processChartData = (data) => {
    const dates = data.map((item) => item.targetDate);
    const predictedValues = data.map((item) => item.predictedValue);
    // const confidenceMin = data.map((item) => item.confidenceIntervalMin);
    // const confidenceMax = data.map((item) => item.confidenceIntervalMax);

    setChartOptions({
      title: { text: `${selectedCurrencyFrom} to ${selectedCurrencyTo} Rate Prediction` },
      xAxis: { categories: dates },
      yAxis: { title: { text: "Exchange Rate" } },
      series: [
        { name: "Predicted Value", data: predictedValues },
        // { name: "Confidence Min", data: confidenceMin, dashStyle: "ShortDash" },
        // { name: "Confidence Max", data: confidenceMax, dashStyle: "ShortDash" },
      ],
    });
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
  }, []);

  useEffect(() => {
    if (selectedCurrencyFrom && selectedCurrencyTo) {
      fetchForecastData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCurrencyFrom, selectedCurrencyTo]);

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
          Exchange Rate Prediction
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
                  Currency Rate Prediction
                </MKTypography>
                <MKTypography variant="body2" color="black" mt={1} mb={2}>
                  Discover the exchange rates of upcoming 15 days
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

              <Grid item xs={12} md={1} lg={1} textAlign="center">
                <Button
                  variant="contained"
                  onClick={fetchForecastData}
                  sx={{
                    backgroundColor: "white",
                    color: "#02165D",
                    marginTop: "28px",
                  }}
                >
                  <RefreshOutlined />
                </Button>
              </Grid>

              {loading && (
                <Grid item xs={12} textAlign="center">
                  <CircularProgress style={{ marginTop: "20px" }} />
                </Grid>
              )}

              {!loading && chartOptions && (
                <Grid item xs={12}>
                  <div style={{ marginTop: "30px" }}>
                    <HighchartsReact highcharts={Highcharts} options={chartOptions} />
                  </div>
                </Grid>
              )}

              {userError && (
                <Grid item xs={12} textAlign="center">
                  <MKTypography variant="body2" color="error">
                    {userError}
                  </MKTypography>
                </Grid>
              )}
            </Grid>
          </Container>

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
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default CurrencyRatePrediction;
