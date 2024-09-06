// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import Cursol from "./assets/images/Cursol.png";
// import AboutUs from "layouts/pages/landing-pages/about-us";
import PrivacyPolicy from "layouts/pages/landing-pages/privacy-policy";
import TermsofPolicyPage from "layouts/pages/landing-pages/terms-of-policy";
import { Instagram } from "@mui/icons-material";

const date = new Date().getFullYear();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  brand: {
    name: "About Company",
    description: "Currency Exchange Rates Predictor",
    image: Cursol,
    route: "/",
  },

  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/cursol/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/cursol",
    },
    {
      icon: <Instagram />,
      link: "https://instagram.com/cursol",
    },
  ],
  menus: [
    {
      name: "Policy Pages",
      items: [
        {
          name: "Privacy Policy",
          route: "/privacy-policy",
          component: <PrivacyPolicy />,
        },
        {
          name: "Terms of Service",
          route: "/terms-of-service",
          component: <TermsofPolicyPage />,
        },
      ],
    },
    {
      name: "Contact Us",
      items: [{ name: "info@cursol.com" }],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Copyright &copy; {date}. All Rights Reserved
    </MKTypography>
  ),
};
