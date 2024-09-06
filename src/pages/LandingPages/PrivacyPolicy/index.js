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

function PrivacyPolicy() {
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
          Privacy Policy
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
                  NimbaPay Privacy Policy
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
                  Your privacy is of utmost importance to us at NimbaPay. This Privacy Policy
                  outlines how we collect, use, and safeguard your personal information when you use
                  our services. By using NimbaPay, you consent to the practices described in this
                  policy.
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
                  Information We Collect
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
                  We may collect various types of information to provide and improve our services:
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
                  <strong>Personal Information:</strong> This includes details like your name,
                  contact information, and identification documents required for regulatory
                  compliance. <br />
                  <span className="ml-4">2. &nbsp; </span> <strong>Transaction Information:</strong>{" "}
                  We gather data related to your transactions, including sender and recipient
                  information, transaction amount, and details of the transaction. <br />{" "}
                  <span className="ml-4">3. &nbsp; </span>{" "}
                  <strong>Device and Usage Information:</strong> We collect information about the
                  device you use to access our platform and how you use our services. <br />{" "}
                  <span className="ml-4">4. &nbsp; </span> <strong>Location Information:</strong>{" "}
                  With your permission, we may collect location information to enhance the user
                  experience.
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
                  How We Use Your Information
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
                  We use the collected information for various purposes, including:
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
                  <strong>Service Delivery:</strong> To process your transactions and provide our
                  services to you.
                  <br />
                  <span className="ml-4">2. &nbsp; </span>{" "}
                  <strong>Authentication and Security:</strong>
                  To verify your identity and ensure the security of your transactions.
                  <br /> <span className="ml-4">3. &nbsp; </span> <strong>Communication:</strong>To
                  respond to your inquiries, provide updates, and send transaction-related
                  notifications.
                  <br /> <span className="ml-4">4. &nbsp; </span> <strong>Improvement:</strong> To
                  enhance our services, troubleshoot issues, and analyze user behavior.
                  <br /> <span className="ml-4">5. &nbsp; </span> <strong>Legal Compliance</strong>
                  To meet our regulatory and legal obligations.
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
                  Information Sharing
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
                  We may share your information with trusted third parties, such as financial
                  institutions and regulatory bodies, solely for the purpose of providing our
                  services or complying with legal requirements.
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
                  Your Choices
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
                  You can access, update, and correct your personal information through your
                  NimbaPay account. You can also choose whether to receive promotional
                  communications from us.
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
                  Data Security
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
                  We employ advanced security measures to protect your data from unauthorized
                  access, loss, or alteration. However, no method of data transmission over the
                  internet is entirely secure, and we cannot guarantee absolute security.
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
                  Changes to this Policy
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
                  We may update this Privacy Policy periodically to reflect changes in our practices
                  and services. We encourage you to review this policy regularly.
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
                  If you have any questions about this Privacy Policy or our practices, please
                  contact us at [hi@nimbapay.com].
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
                  By using NimbaPay&apos;s services, you acknowledge that you have read and
                  understood this Privacy Policy and consent to the collection, use, and sharing of
                  your information as described herein.
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

export default PrivacyPolicy;
