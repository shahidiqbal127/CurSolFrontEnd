import { Link } from "react-router-dom";
import React from "react";
import MKTypography from "components/MKTypography";
import { Button } from "@mui/material";
import NotFoundImage from "../assets/images/NotFound.jpg";

function ErrorPages() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
        }}
        className="align-content-center "
      >
        <div className="">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              {/* <img
                src={NotFoundImage}
                alt="im"
                style={{
                  alignSelf: "center",
                  width: "50%",
                }}
              /> */}
              <MKTypography
                variant="h2"
                color="black"
                mt={1}
                mb={6}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                404 Page not found
              </MKTypography>
              <MKTypography variant="body2" color="black" mt={-6} mb={2}>
                Page you are looking for doesn't exist or any other error ocurred <br /> or
                temporarily unavailable.
              </MKTypography>

              <Button
                component={Link}
                to="/home"
                variant="contained"
                href="#contained-buttons"
                style={{
                  backgroundColor: "#6e41ff",
                  color: "white",
                }}
              >
                Go to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPages;
