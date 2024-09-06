import Grid from "@mui/material/Grid";
import { Twitter, LinkedIn, Instagram, Facebook } from "@mui/icons-material";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function SocialLinks() {
  return (
    <MKBox container py={{ xs: 12, lg: 6 }} mt={-10} alignItems="right">
      <Grid container justifyContent="flex-end">
        <MKBox
          width="100%"
          maxWidth="300px" // Limit the maximum width of the box
          borderRadius="50px"
          shadow="xl"
          mb={4}
          sx={{ overflow: "hidden", background: "#02165F" }}
        >
          <MKBox p={4} bgcolor="white">
            <MKBox display="flex" flexDirection="column" alignItems="flex-end">
              <MKBox mb={4}>
                <MKBox display="flex" p={1} pl={0} color="grey">
                  <MKTypography variant="button" color="grey">
                    <i className="fas fa-phone" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    opacity={0.8}
                    ml={2}
                    fontWeight="bold"
                    sx={{ color: "White" }}
                  >
                    +44 7774 039460
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" color="grey" p={1} pl={0}>
                  <MKTypography variant="button" color="grey">
                    <i className="fas fa-envelope" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    opacity={0.8}
                    ml={2}
                    fontWeight="bold"
                    sx={{ color: "White" }}
                  >
                    info@cursol.com
                  </MKTypography>
                </MKBox>
              </MKBox>
              <MKBox display="flex" justifyContent="space-between">
                <MKButton
                  variant="text"
                  color="dark"
                  size="large"
                  iconOnly
                  component="a"
                  href="https://www.facebook.com/cursol"
                  target="_blank"
                >
                  <Facebook sx={{ fontSize: "2.5rem", color: "#1877f2" }} />
                </MKButton>
                <MKButton
                  variant="text"
                  color="dark"
                  size="large"
                  iconOnly
                  component="a"
                  href="https://www.twitter.com/cursol"
                  target="_blank"
                >
                  <Twitter sx={{ fontSize: "2.5rem", color: "#1da1f2" }} />
                </MKButton>
                <MKButton
                  variant="text"
                  color="dark"
                  size="large"
                  iconOnly
                  component="a"
                  href="https://www.linkedin.com/cursol"
                  target="_blank"
                >
                  <LinkedIn sx={{ fontSize: "2.5rem", color: "#0077b5" }} />
                </MKButton>
                <MKButton
                  variant="text"
                  color="dark"
                  size="large"
                  iconOnly
                  component="a"
                  href="https://www.instagram.com/cursol"
                  target="_blank"
                >
                  <Instagram sx={{ fontSize: "2.5rem", color: "#d6249f" }} />
                </MKButton>
              </MKBox>
            </MKBox>
          </MKBox>
        </MKBox>
      </Grid>
    </MKBox>
  );
}

export default SocialLinks;
