// @mui material components
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
// import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import bgImage from "assets/images/Contact.jpg";
import ContactUsRight from "assets/images/ContactUsRight.jpeg";
import FAQS from "pages/Home/sections/data/FAQS";
import SocialLinks from "./sections/SocialLinks";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Global_Ip } from "Utlis/Urls";
function ContactUs() {
  const apiUrl = process.env.REACT_APP_NIMBAPAY_IP;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Email validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(!emailRegex.test(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if email is in the correct format
    if (emailError) {
      setSnackbarOpen(true);
      setErrorMessage("Invalid email address.");
      return;
    }
    try {
      setLoading(true);
      const API_URL = process.env.REACT_APP_API_URL;
      const response = await axios.post(`${API_URL}/api/ContactUs`, formData);
      setLoading(false);
      setSuccessMessage("Thanks for Contacting. We will get back to you soon");
      setSnackbarOpen(true);
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    } catch (error) {
      setLoading(false);
      const errorMessage =
        error.response.data.message || "Failed to send message. Please try again later.";
      setErrorMessage(errorMessage);
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

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
          mt={5}
          color="white"
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["3xl"],
            },
          })}
        >
          Contact us
        </MKTypography>
      </MKBox>

      <Card
        sx={{
          p: 2,
          mx: { xs: 0, lg: 3 },
          mt: { xs: -2, lg: -8 },
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox
          minHeight="75vh"
          width="100%"
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
            backgroundcolor: "white",
          }}
        >
          <Container>
            <Grid mt={15} mb={0} container item xs={12}>
              <Grid mt={-20} item xs={12} sm={10} md={7} lg={6} xl={4}>
                <MKBox
                  bgColor="white"
                  borderRadius="xl"
                  shadow="lg"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  mt={{ xs: 15, sm: 18, md: 14 }}
                  mb={{ xs: 20, sm: 18, md: 20 }}
                  mx={-3}
                >
                  <MKBox
                    variant="gradient"
                    bgColor="purple"
                    coloredShadow="info"
                    borderRadius="lg"
                    p={2}
                    mx={2}
                    mt={-6}
                  >
                    <MKTypography variant="h3" color="black" bgColor="red" textAlign="center">
                      Connect with Us
                    </MKTypography>
                  </MKBox>
                  <MKBox p={3}>
                    <MKTypography variant="body2" color="text" mb={3}>
                      Feel free to leave a message, and we&apos;ll get back to you promptly. Your
                      inquiries and feedback are valuable to us, and we&apos;re here to assist you
                      in any way we can.
                    </MKTypography>
                    <MKBox width="100%" component="form" method="post" autoComplete="off">
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <MKInput
                            variant="standard"
                            label="Full Name"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <MKInput
                            type="email"
                            variant="standard"
                            label="Email"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <MKInput
                            variant="standard"
                            label="Subject"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <MKInput
                            variant="standard"
                            label="What can we help you?"
                            placeholder="Describe your problem"
                            InputLabelProps={{ shrink: true }}
                            multiline
                            fullWidth
                            rows={6}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </Grid>
                      </Grid>
                      <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                        <Snackbar
                          anchorOrigin={{ vertical: "top", horizontal: "left" }}
                          open={snackbarOpen}
                          autoHideDuration={6000}
                          onClose={handleCloseSnackbar}
                          sx={{ marginTop: "500px", marginLeft: { xs: "0px", md: "150px" } }}
                        >
                          <MuiAlert
                            elevation={6}
                            variant="filled"
                            onClose={handleCloseSnackbar}
                            severity={successMessage ? "success" : "error"}
                          >
                            {successMessage || errorMessage}
                          </MuiAlert>
                        </Snackbar>
                        <MKButton
                          onClick={handleSubmit}
                          variant="gradient"
                          color="dark"
                          disabled={
                            loading ||
                            !formData.fullName ||
                            !formData.email ||
                            !formData.subject ||
                            !formData.message
                          }
                          type="button"
                        >
                          {loading ? "Sending..." : "Send Message"}
                        </MKButton>
                      </Grid>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Grid>

              <Grid item xs={12} lg={6} xl={6} ml={{ xs: "auto", xl: "24" }}>
                <img
                  src={ContactUsRight}
                  alt="Convenient Options"
                  style={{ maxWidth: "95%", justifyContent: "flex-end" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                lg={12}
                mt={{ xs: 3, xl: -15 }}
                ml={{ xs: -1, xl: -23 }}
                alignContent="left"
              >
                <SocialLinks />
              </Grid>
            </Grid>
          </Container>

          <Container>
            <Grid mt={0} container item xs={12} justifyContent="left">
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

export default ContactUs;
