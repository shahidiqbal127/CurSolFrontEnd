import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes";
import footerRoutes from "footer.routes";

import { Card } from "@mui/material";
import bgImage from "assets/images/About-bg.png";
import sideImage from "assets/images/AboutSide.jpg";

import AvatarPayments from "pages/Home/sections/data/AvatarPayment";
import LatestBlog from "pages/LandingPages/Blog/LatestBlog";
import "../../../CustomCSS.css";

function CurrencyRatePrediction() {
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
          Exchange Rate Prediction
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
          mb={8}
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
            backgroundcolor: "white",
          }}
        >
          <Container>
            <Grid mt={15} container item xs={12} justifyContent="center">
              <Grid item xs={12} lg={7} textAlign="left">
                <img src={sideImage} alt="Convenient Options" style={{ maxWidth: "95%" }} />
              </Grid>
              <Grid item xs={12} lg={5}>
                <MKTypography
                  variant="h2"
                  color="black"
                  mt={3}
                  mb={2}
                  sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down("md")]: {
                      fontSize: size["3xl"],
                    },
                  })}
                >
                  NimbaPay - Your Gateway to Global Money Transfers
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="black"
                  textAlign="left" // Align text to the left
                  fontWeight="light "
                  mt={1}
                >
                  At NimbaPay, we are driven by the vision of simplifying and revolutionizing the
                  way people send and receive money across borders. Our commitment is to provide a
                  seamless and secure platform that empowers individuals and businesses to navigate
                  the complexities of international financial transactions effortlessly.
                </MKTypography>
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/2">
                    <MKTypography variant="body2" color="black" textAlign="left" mt={1}>
                      <ul className="list-none pl-5">
                        <li className="flex items-center">
                          <span className="inline-flex items-center justify-center w-2.5 h-2.5 mr-4 rounded-full bg-purple-800 shadow-purple"></span>
                          Simplicity
                        </li>
                        <li>
                          <span className="inline-flex items-center justify-center w-2.5 h-2.5 mr-4 rounded-full bg-purple-800 shadow-purple"></span>
                          Reliability
                        </li>
                        <li>
                          <span className="inline-flex items-center justify-center w-2.5 h-2.5 mr-4 rounded-full bg-purple-800 shadow-purple"></span>
                          More Delivery Options
                        </li>
                      </ul>
                    </MKTypography>
                  </div>
                  <div className="w-full md:w-1/2">
                    <MKTypography variant="body2" color="black" textAlign="left" mt={1}>
                      <ul className="list-none pl-5">
                        <li>
                          <span className="inline-flex items-center justify-center w-2.5 h-2.5 mr-4 rounded-full bg-purple-800 shadow-purple"></span>
                          Affordability
                        </li>
                        <li>
                          <span className="inline-flex items-center justify-center w-2.5 h-2.5 mr-4 rounded-full bg-purple-800 shadow-purple"></span>
                          Security
                        </li>
                        <li>
                          <span className="inline-flex items-center justify-center w-2.5 h-2.5 mr-4 rounded-full bg-purple-800 shadow-purple"></span>
                          Customer-Centric
                        </li>
                      </ul>
                    </MKTypography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>

          <Container>
            <Grid mt={25} container item xs={12} justifyContent="center">
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
                  How to Receive Money
                </MKTypography>
                <MKTypography variant="body2" color="black" mt={1} mb={2}>
                  Discover the various ways to receive funds with NimbaPay.
                </MKTypography>
              </Grid>
            </Grid>
          </Container>
          <AvatarPayments />

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
                  Exploring Global Financial Connectivity: Insights from NimbaPay&apos;s Blog
                </MKTypography>
              </Grid>
              <LatestBlog />
            </Grid>
          </Container>

          <div className="section--sm section--bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="client-slider slick-initialized slick-slider">
                    <div className="slick-list draggable">
                      <div className="slick-track">
                        {/* Each client card is wrapped in a client-slider__item div */}
                        <div
                          className="client-slider__item slick-slide slick-active"
                          tabIndex="0"
                          data-slick-index="0"
                          aria-hidden="false"
                        >
                          <div className="client-card">
                            <img
                              src="https://nimbapay.com/assets/images/frontend/brand/621b702f10f031645965359.png"
                              alt="NimbaPay"
                              className="client-card__img"
                            />
                          </div>
                        </div>
                        <div
                          className="client-slider__item slick-slide slick-active"
                          tabIndex="0"
                          data-slick-index="0"
                          aria-hidden="false"
                        >
                          <div className="client-card">
                            <img
                              src="https://nimbapay.com/assets/images/frontend/brand/621b70350b8891645965365.png"
                              alt="NimbaPay"
                              className="client-card__img"
                            />
                          </div>
                        </div>
                        <div
                          className="client-slider__item slick-slide slick-active"
                          tabIndex="0"
                          data-slick-index="0"
                          aria-hidden="false"
                        >
                          <div className="client-card">
                            <img
                              src="https://nimbapay.com/assets/images/frontend/brand/621b70418387f1645965377.png"
                              alt="NimbaPay"
                              className="client-card__img"
                            />
                          </div>
                        </div>
                        <div
                          className="client-slider__item slick-slide slick-active"
                          tabIndex="0"
                          data-slick-index="0"
                          aria-hidden="false"
                        >
                          <div className="client-card">
                            <img
                              src="https://nimbapay.com/assets/images/frontend/brand/621b7049b95561645965385.png"
                              alt="NimbaPay"
                              className="client-card__img"
                            />
                          </div>
                        </div>
                        <div
                          className="client-slider__item slick-slide slick-active"
                          tabIndex="0"
                          data-slick-index="0"
                          aria-hidden="false"
                        >
                          <div className="client-card">
                            <img
                              src="https://nimbapay.com/assets/images/frontend/brand/64eeebe39abae1693379555.png"
                              alt="NimbaPay"
                              className="client-card__img"
                            />
                          </div>
                        </div>

                        <div
                          className="client-slider__item slick-slide slick-active"
                          tabIndex="0"
                          data-slick-index="0"
                          aria-hidden="false"
                        >
                          <div className="client-card">
                            <img
                              src="https://nimbapay.com/assets/images/frontend/brand/64eeecb2d86501693379762.png"
                              alt="NimbaPay"
                              className="client-card__img"
                            />
                          </div>
                        </div>
                        {/* Repeat this structure for each client card */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default CurrencyRatePrediction;
