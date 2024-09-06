import PropTypes from "prop-types";
import { Avatar, Card, CardContent } from "@mui/material";
import MKTypography from "components/MKTypography";

function DefaultAvatarCards({ color, fill, icon, title, description, align }) {
  const isTopAlign = align === "top";
  const isLeftAlign = align === "left";

  return (
    <>
      {isTopAlign && (
        <Card className="h-full flex flex-col">
          <CardContent className="flex-grow flex justify-center items-center">
            <div className="flex flex-col items-center">
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  backgroundColor: fill,
                  color: color,
                  marginBottom: 2,
                }}
              >
                {icon}
              </Avatar>
              <div className="flex flex-col items-center">
                {title && (
                  <MKTypography variant="h5" mt={2} mb={1}>
                    {title}
                  </MKTypography>
                )}
                {description && (
                  <MKTypography variant="body2" color="text">
                    {description}
                  </MKTypography>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      {isLeftAlign && (
        <div className="flex items-center p-6">
          <Avatar
            sx={{
              width: 100,
              height: 100,
              backgroundColor: fill,
              color: color,
              marginRight: { xs: 0, lg: 4 },
            }}
          >
            {icon}
          </Avatar>
          <div className="flex flex-col">
            {title && (
              <MKTypography variant="h5" mt={2} mb={1}>
                {title}
              </MKTypography>
            )}
            {description && (
              <MKTypography variant="body2" color="text">
                {description}
              </MKTypography>
            )}
          </div>
        </div>
      )}
    </>
  );
}
DefaultAvatarCards.defaultProps = {
  color: "info",
  description: "",
  title: "",
  align: "top", // Default alignment
};

DefaultAvatarCards.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "#76329C",
  ]),
  fill: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  align: PropTypes.oneOf(["top", "center"]), // New prop for alignment
};

export default DefaultAvatarCards;
