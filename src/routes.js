import Icon from "@mui/material/Icon";

// Pages
import Home from "layouts/pages/Home";
import RatesPrediction from "layouts/pages/landing-pages/rates-prediction";
import HistoricalRates from "layouts/pages/landing-pages/historical-rates";
import ContactUs from "layouts/pages/landing-pages/contact-us";

// Sections
// import Blog from "layouts/pages/landing-pages/blog";
import BlogDetail from "pages/LandingPages/Blog/BlogDetail";

const routes = [
  {
    name: "Home",
    route: "/Home",
    icon: <Icon>home</Icon>,

    component: <Home />,
  },
  {
    name: "Rates Prediction",
    route: "/currency-rates-prediction",
    icon: <Icon>info</Icon>,
    component: <RatesPrediction />,
  },
  {
    name: "Hisotrical Rates",
    route: "/historical-rates",
    icon: <Icon>info</Icon>,
    component: <HistoricalRates />,
  },
  // {
  //   name: "blog",
  //   route: "/blog",
  //   icon: <Icon>subject</Icon>,
  //   component: <Blog />,
  // },
  { component: <BlogDetail />, route: "/blog/:slug/:id" },
  {
    name: "contact",
    route: "/contact-us",
    icon: <Icon>contactsicon</Icon>,
    component: <ContactUs />,
  },
];

export default routes;
