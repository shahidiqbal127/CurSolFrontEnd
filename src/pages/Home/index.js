import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import AvatarCards from "pages/Home/sections/AvatarCards";
import VerticalAvatars from "pages/Home/sections/data/VerticalAvatars";
import FAQS from "./sections/data/FAQS";
import CurrencyConversion from "./CurrencyConversion";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/Home-bg.jpg";
import "../../CustomCSS.css";
import LatestBlog from "pages/LandingPages/Blog/LatestBlog";


function Home() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
          mb: { xs: 10, lg: 0 },
          height: { xs: "140vh", lg: " 130vh" },
        }}
      >
        <Container>
          <Grid container item xs={12} lg={12} justifyContent="left">
            <Grid
              container
              item
              xs={12}
              lg={6}
              justifyContent="center"
              sx={{ mt: { sx: 20, lg: 0 } }}
            >
              <CurrencyConversion />
            </Grid>

            <Grid container item xs={12} lg={6} justifyContent="left">
              <MKTypography
                variant="h1"
                color="white"
                mb={1}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                  mt: { xs: 12, lg: -6 },
                  ml: { xs: 0, lg: 10 },
                })}
              >
                Exchange Rate Comparison for Pound and Euro
              </MKTypography>
              <Grid item xs={12} lg={12} textAlign="left">
                <MKTypography
                  variant="body1"
                  color="white"
                  textAlign="start"
                  sx={{ ml: { xs: 0, lg: 12 }, mt: { xs: 0, lg: -10 } }}
                >
                  Cursol enables you to find the Best Money Exchanger and Exchange Rate
                  Prediction
                </MKTypography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MKBox>

      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: { xs: 0, lg: -20 },
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container>
          <Grid mt={15} container item xs={12} justifyContent="center">
            <Grid item xs={12} lg={6} textAlign="center">
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
                The Things We Offer You
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
        <AvatarCards />

        <Container>
          <Grid mt={15} container item xs={12} justifyContent="left">
            <Grid item xs={12} lg={6}>
              <MKTypography variant="h2" color="black" mt={3} mb={2}>
                Experience the significant advantage of CurSol
              </MKTypography>
              <MKTypography
                variant="body2"
                color="black"
                textAlign="left" // Align text to the left
                fontWeight="light "
                mt={1}
              >
                Cursol enables you to find the Best Money Exchanger and Exchange Rate Prediction
              </MKTypography>
              <div className="flex flex-wrap">
                <div className="w-1/2">
                  <MKTypography variant="body2" color="black" textAlign="left" mt={1}>
                    <ul className="list-none pl-5">
                      
                      <li>
                        <span className="inline-flex items-center justify-center w-2.5 h-2.5 mr-4 rounded-full bg-purple-800 shadow-purple"></span>
                        Completely Reliable
                      </li>
                      <li>
                        <span className="inline-flex items-center justify-center w-2.5 h-2.5 mr-4 rounded-full bg-purple-800 shadow-purple"></span>
                        Extensive Reach
                      </li>
                    </ul>
                  </MKTypography>
                </div>
                <div className="w-1/2">
                  <MKTypography variant="body2" color="black" textAlign="left" mt={1}>
                    <ul className="list-none pl-5">
                      <li>
                        <span className="inline-flex items-center justify-center w-2.5 h-2.5 mr-4 rounded-full bg-purple-800 shadow-purple"></span>
                        Support Centered Around Customers
                      </li>
                      <li>
                        <span className="inline-flex items-center justify-center w-2.5 h-2.5 mr-4 rounded-full bg-purple-800 shadow-purple"></span>
                        Transparent Pricing
                      </li>
                      
                    </ul>
                  </MKTypography>
                </div>
              </div>
            </Grid>
            <div class="Empty-Circle"></div>
          </Grid>
        </Container>

        <Container>
          <Grid mt={15} mb={10} container item xs={12} justifyContent="center">
            <Grid item xs={12} lg={6}>
              <div class="Empty-Circle"></div>
            </Grid>
            <Grid flex xs={12} lg={6} textAlign="center">
              <MKTypography variant="h2" color="black" mt={-6} mb={2}>
                Why People Choose Us for Money Transfer
              </MKTypography>
              <VerticalAvatars />
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid mt={15} container item xs={12} justifyContent="left">
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

        <Container>
          <Grid mt={15} container item xs={12} justifyContent="center">
            <Grid item xs={12} lg={6} textAlign="center">
              <MKTypography
                variant="h1"
                color="black"
                mt={-6}
                mb={2}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                Newest Blog Article
              </MKTypography>
              <MKTypography
                variant="body2"
                color="black"
                mt={1}
                mb={0}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["sm"],
                  },
                })}
              >
                Coming Soon
              </MKTypography>
            </Grid>
            <LatestBlog />
          </Grid>
        </Container>
      </Card>
      <MKBox pt={6} px={1} mt={6} textAlign="left">
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Home;
