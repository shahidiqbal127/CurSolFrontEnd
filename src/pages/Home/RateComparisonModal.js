import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  MenuItem,
  Select,
  CircularProgress,
  FormControl,
  InputLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Close } from "@mui/icons-material";
import { get } from "Utlis/ApiService";

const RateComparisonModal = ({ open, handleClose, sourceCurrency, targetCurrency, amount }) => {
  const [loading, setLoading] = useState(false);
  const [userError, setUserError] = useState(null);
  const [exchangeRatesDetail, setExchangeRatesDetail] = useState([]);
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setUserError(null);
      try {
        const response = await get(
          `api/ExchangeRateConversion?source=${sourceCurrency}&target=${targetCurrency}`
        );
        if (response.length === 0) {
          setUserError("No data found.");
        } else {
          setExchangeRatesDetail(sortData(response, "default"));
        }
      } catch (error) {
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
        setLoading(false);
      }
    };
    if (sourceCurrency && targetCurrency) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sourceCurrency, amount, targetCurrency]);

  // Sorting function
  const sortData = (data, criterion) => {
    return [...data].sort((a, b) => {
      if (criterion === "rate") {
        return b.rate - a.rate;
      } else if (criterion === "receivedAmount") {
        const receivedAmountA = (a.rate - a.deliveryFee) * amount;
        const receivedAmountB = (b.rate - b.deliveryFee) * amount;
        return receivedAmountB - receivedAmountA;
      }
      else if (criterion === "deliveryFee") {
        return a.deliveryFee - b.deliveryFee;
      } else if (criterion === "estimatedDeliveryTime") {
        const timeA = a.estimatedDeliveryTime
          ? convertDurationToMinutes(a.estimatedDeliveryTime)
          : Infinity;
        const timeB = b.estimatedDeliveryTime
          ? convertDurationToMinutes(b.estimatedDeliveryTime)
          : Infinity;
        return timeA - timeB;
      } else {
        // Default: sort by rate, then deliveryFee, then estimatedDeliveryTime
        const rateDiff = b.rate - a.rate;
        if (rateDiff !== 0) return rateDiff;

        const feeDiff = a.deliveryFee - b.deliveryFee;
        if (feeDiff !== 0) return feeDiff;

        const timeA = a.estimatedDeliveryTime
          ? convertDurationToMinutes(a.estimatedDeliveryTime)
          : Infinity;
        const timeB = b.estimatedDeliveryTime
          ? convertDurationToMinutes(b.estimatedDeliveryTime)
          : Infinity;
        return timeA - timeB;
      }
    });
  };

  const handleSortChange = (criterion) => {
    setSortOption(criterion);
    setExchangeRatesDetail(sortData(exchangeRatesDetail, criterion));
  };

  const convertDurationToMinutes = (duration) => {
    if (!duration) return Infinity;

    const matches = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = matches?.[1] ? parseInt(matches[1].replace("H", "")) : 0;
    const minutes = matches?.[2] ? parseInt(matches[2].replace("M", "")) : 0;
    const seconds = matches?.[3] ? parseInt(matches[3].replace("S", "")) : 0;

    return hours * 60 + minutes + seconds / 60;
  };

  const convertDuration = (duration) => {
    if (!duration) return "0 seconds";

    const matches = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = matches?.[1] ? parseInt(matches[1].replace("H", "")) : 0;
    const minutes = matches?.[2] ? parseInt(matches[2].replace("M", "")) : 0;
    const seconds = matches?.[3] ? parseInt(matches[3].replace("S", "")) : 0;

    return `${hours} h, ${minutes} m, ${seconds} s`;
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "0", sm: "50%" },
          left: { xs: "0", sm: "auto" },
          right: { xs: "0", sm: "0" },
          transform: { xs: "none", sm: "translateY(-50%)" },
          width: { xs: "100%", sm: "50%" },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          height: { xs: "100%", sm: "auto" },
          overflowY: "auto",
          maxHeight: { xs: "100%", sm: "auto" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            position: "sticky",
            top: 0,
            bgcolor: "background.paper",
            zIndex: 1,
            p: 1,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Comparing Conversion Prices ({sourceCurrency} to {targetCurrency})
          </Typography>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>

        <Box
          sx={{
            backgroundColor: "#02165F",
            color: "white !important",
            borderRadius: "12px",
            p: 2,
            mb: 2,
            position: "sticky",
            top: 48,
            zIndex: 1,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", textAlign: { xs: "center", sm: "left" }, flexGrow: 1 }}
          >
            Converting {amount} {sourceCurrency} To {targetCurrency}
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: "right", fontWeight: "bold", mt: { xs: 1, sm: 0 }, minWidth: "40%" }}
          >
            Recipient Receives
            <br />
            <span style={{ fontSize: "1.0em" }}> Including Delivery Fee</span>
          </Typography>
        </Box>

        <FormControl
          variant="standard"
          sx={{
            mb: 2,
            minWidth: { xs: "100%", sm: "30%" },
            position: "sticky",
            top: { xs: "100%", sm: 48 },
            zIndex: 1,
          }}
        >
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="sort-by-label"
            value={sortOption}
            onChange={(e) => handleSortChange(e.target.value)}
            sx={{ bgcolor: "white" }}
          >
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="rate">Exchange Rate</MenuItem>
            <MenuItem value="deliveryFee">Delivery Fee</MenuItem>
            <MenuItem value="estimatedDeliveryTime">Delivery Time</MenuItem>
            <MenuItem value="receivedAmount">Recipient Receives</MenuItem>

          </Select>
        </FormControl>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : userError ? (
          <Typography variant="body1" color="error" sx={{ textAlign: "center", mt: 4 }}>
            {userError}
          </Typography>
        ) : (
          exchangeRatesDetail &&
          exchangeRatesDetail.length > 0 && (
            <Box sx={{ overflowY: "auto", maxHeight: "60vh" }}>
              <Card sx={{ borderRadius: "16px", boxShadow: 3, p: 2 }}>
                <CardContent>
                  {exchangeRatesDetail.map((detail, index) => (
                    <Accordion key={index}>
                      {/* <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                          <img
                            src={detail.platformImg}
                            alt={detail.platformName}
                            style={{ height: "24px", marginRight: "8px", cursor: "pointer" }}
                            onClick={() => window.open(detail.platformSiteUrl, "_blank")}
                          />
                          <Typography
                            variant="body1"
                            sx={{
                              fontWeight: "bold",
                              textAlign: { xs: "center", sm: "left" },
                              flexGrow: 1,
                            }}
                          >
                            {Math.abs(((detail.rate - detail.deliveryFee) * amount)).toFixed(2)}{" "}
                            {targetCurrency}
                          </Typography>
                        </Box>
                      </AccordionSummary> */}
                      <AccordionSummary 
  expandIcon={<ExpandMoreIcon />} 
  sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
>
  {/* Left Side: Image */}
  <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
    <img
      src={detail.platformImg}
      alt={detail.platformName}
      style={{ height: "24px", marginRight: "8px", cursor: "pointer" }}
      onClick={() => window.open(detail.platformSiteUrl, "_blank")}
    />
  </Box>
  
  {/* Right Side: Recipient Receives Value */}
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
    <Typography
      variant="body1"
      sx={{
        fontWeight: "bold",
        textAlign: "right",  // Ensure right alignment
        marginRight: "16px",  // Add spacing from the arrow icon
        whiteSpace: "nowrap", // Prevent text wrapping
      }}
    >
      {Math.abs(((detail.rate - detail.deliveryFee) * amount)).toFixed(2)}{" "}
      {targetCurrency}
    </Typography>
  </Box>
</AccordionSummary>
                      <AccordionDetails
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                        }}
                      >
                        <Box sx={{ flex: "1 1 45%", mb: { xs: 1, sm: 0 } }}>
                          <Typography>Delivery Time: </Typography>
                          <Typography variant="body2">
                            Min:{" "}
                            {detail.estimatedDeliveryTime
                              ? convertDuration(detail.estimatedDeliveryTime.split(" - ")[0])
                              : "N/A"}
                          </Typography>
                          <Typography variant="body2">
                            Max:{" "}
                            {detail.estimatedDeliveryTime
                              ? convertDuration(detail.estimatedDeliveryTime.split(" - ")[1])
                              : "N/A"}
                          </Typography>
                        </Box>
                        <Box sx={{ flex: "1 1 45%", textAlign: "right" }}>
                          <Typography>Exchange Rate: {detail.rate.toFixed(3)}</Typography>
                          <Typography>
                            Delivery Fee: {detail.deliveryFee} {sourceCurrency}
                          </Typography>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </CardContent>
              </Card>
            </Box>
          )
        )}
      </Box>
    </Modal>
  );
};

export default RateComparisonModal;
