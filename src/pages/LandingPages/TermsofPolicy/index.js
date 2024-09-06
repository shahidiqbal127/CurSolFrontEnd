import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/About-bg.png";

function TermsofPolicy() {
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
          Terms of Service
        </MKTypography>
      </MKBox>

      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
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
          mt={5}
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
            backgroundcolor: "white",
          }}
        >
          <Container>
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              // bgcolor="#F7F7F8"
              sx={{ padding: { xs: "0rem", lg: "2rem" } }}
            >
              <Grid item xs={12} lg={12}>
                <MKTypography
                  variant="h4"
                  color="black"
                  mt={2}
                  mb={2}
                  textAlign="center"
                  sx={{
                    backgroundColor: "#f2f2f2", // Light grey background
                    padding: "1px", // Padding around the text
                    borderRadius: "4px", // Rounded corners
                  }}
                >
                  NimbaPay Terms of Service
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="right"
                  fontWeight="light "
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  Last Updated: [08/29/2023]
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="light"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  Welcome to NimbaPay! These Terms of Service outline the rules and regulations that
                  govern your use of our platform. By accessing or using NimbaPay&apos;s services,
                  you agree to these terms. Please read them carefully.
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="bold"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  Using Our Services
                </MKTypography>

                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="light"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "1px",
                  }}
                >
                  <span className="ml-4">1. &nbsp; </span>
                  <strong>Eligibility:</strong> You must be at least 18 years old to use our
                  services. By using NimbaPay, you represent that you are of legal age and have the
                  legal capacity to enter into this agreement. <br />
                  <br />
                  <span className="ml-4">2. &nbsp; </span> <strong>Registration:</strong>You&apos;ll
                  need to create an account to access our services. Ensure that the information you
                  provide is accurate and complete. You&apos;re responsible for maintaining the
                  security of your account credentials.
                  <br />
                  <br /> <span className="ml-4">3. &nbsp; </span>
                  <strong>User Conduct:</strong>You agree not to use our services for any unlawful
                  or prohibited activities. You also agree not to engage in any behavior that could
                  disrupt or harm the functioning of our platform.
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="bold"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  Our Services
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="light"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "1px",
                  }}
                >
                  <span className="ml-4">1. &nbsp; </span>
                  <strong>Money Transfer:</strong> NimbaPay offers a platform for international
                  money transfers. Our services are subject to transaction fees, which you can
                  review before completing a transaction.
                  <br />
                  <br />
                  <span className="ml-4">2. &nbsp; </span>{" "}
                  <strong>Accuracy of Information: </strong>
                  You&apos;re responsible for the accuracy of the information you provide during
                  transactions. Any errors in recipient information could result in delays or other
                  complications.
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="bold"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  Privacy
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="light"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  Your privacy is important to us. Please review our Privacy Policy to understand
                  how we collect, use, and protect your personal information.
                </MKTypography>

                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="bold"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  Intellectual Property
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="light"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  The content on NimbaPay&apos;s platform is protected by intellectual property
                  rights. You may not use, reproduce, or distribute our content without our
                  permission.
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="bold"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  Disclaimer of Warranties
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="light"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  NimbaPay&apos;s services are provided &quot;as is&quot; and without warranties of
                  any kind. We don&apos;t guarantee that our services will always be available,
                  error-free, or secure.
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="bold"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  Limitation of Liability
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="light"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  NimbaPay will not be liable for any indirect, incidental, consequential, or
                  punitive damages arising from your use of our services.
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="bold"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  Changes to the Terms
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="light"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  We may update these Terms of Service from time to time. Any changes will be posted
                  on our platform, and your continued use of our services after the changes will
                  signify your acceptance of the updated terms.
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="bold"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  Termination
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="light"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  NimbaPay reserves the right to terminate or suspend your account if you violate
                  these terms or engage in fraudulent or illegal activities.
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="bold"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  Contact Us
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="light"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  If you have any questions or concerns about these Terms of Service, please contact
                  us at [hi@nimbapay.com].
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left"
                  fontWeight="light"
                  mt={2}
                  sx={{
                    backgroundColor: "#f2f2f2",
                    padding: "1px",
                    borderRadius: "4px",
                  }}
                >
                  By using NimbaPay&apos;s services, you acknowledge that you have read, understood,
                  and agreed to these Terms of Service.
                </MKTypography>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default TermsofPolicy;
