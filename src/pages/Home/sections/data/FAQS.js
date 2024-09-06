import { React, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  CardContent,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MKTypography from "components/MKTypography";

function FAQS() {
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  return (
    <Grid
      container
      justifyContent="left"
      mr={0}
      xs={12}
      sm={12}
      sx={{
        ml: { xs: 0, lg: 8 },
        mr: { xs: 0, lg: 8 },
      }}
    >
      <Grid xs={12} md={10} justifyContent="center" alignContent="center" textAlign="center">
        <CardContent>
          <Accordion expanded={expandedPanel === "panel1"} onChange={handleChange("panel1")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <MKTypography variant="h6">
                How frequently are the exchange rates updated?
              </MKTypography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Exchange rates on our website are updated in real-time to reflect the most current
                market conditions. This ensures that you receive accurate and up-to-date conversion
                rates for your transactions.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>

        <CardContent>
          <Accordion expanded={expandedPanel === "panel2"} onChange={handleChange("panel2")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography variant="h6">How does the AI-based currency prediction work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
              AI-based currency prediction on CurSol uses machine learning models, such as ARIMA, 
              to analyze historical exchange rate data and identify patterns. By studying past trends 
              and seasonal variations, the system provides users with predictions about future currency movements, 
              helping them make informed decisions about when to send money. 
              This allows users to maximize the value of their remittances based on potential rate fluctuations.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>

        <CardContent>
          <Accordion expanded={expandedPanel === "panel3"} onChange={handleChange("panel3")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography variant="h6">
                How do I know the predicted exchange rates are accurate?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Our AI-based prediction model uses sophisticated algorithms and a vast amount of
                data to provide the most accurate predictions possible. While predictions are based
                on historical data and current market trends, it’s important to note that they are
                still forecasts and may not always reflect future market movements with complete
                accuracy.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
        <CardContent>
          <Accordion expanded={expandedPanel === "panel4"} onChange={handleChange("panel4")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <MKTypography variant="h6">
                Is my personal information safe when I use your website?
              </MKTypography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Yes, we prioritize the security and privacy of our users. All personal information
                is encrypted and stored securely. We do not share your information with third
                parties without your consent.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>

        <CardContent>
          <Accordion expanded={expandedPanel === "panel5"} onChange={handleChange("panel5")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography variant="h6">Can I use the website for business purposes?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Absolutely! Our website can be used for both personal and business currency
                conversions. If you have specific business requirements, feel free to contact us for
                tailored solutions.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Grid>
    </Grid>
  );
}

export default FAQS;
