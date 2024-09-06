import PropTypes from "prop-types";
import { Avatar } from "@mui/material";
import MKTypography from "components/MKTypography";

function DefaultConnectedAvatars({ color, fill, icon, title, description, align }) {
  const isVertical = align === "vertical";

  return (
    <div className={`flex flex-col ${isVertical ? "items-center" : ""}`}>
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
      <Avatar
        sx={{
          width: 100,
          height: 100,
          backgroundColor: fill,
          color: color,
          marginTop: isVertical ? 2 : 0,
          marginBottom: isVertical ? 2 : 0,
        }}
      >
        {icon}
      </Avatar>
    </div>
  );
}

DefaultConnectedAvatars.defaultProps = {
  color: "info",
  description: "",
  title: "",
  align: "vertical", // Default alignment
};

DefaultConnectedAvatars.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  fill: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  align: PropTypes.oneOf(["vertical", "horizontal"]), // New prop for alignment
};

export default DefaultConnectedAvatars;
