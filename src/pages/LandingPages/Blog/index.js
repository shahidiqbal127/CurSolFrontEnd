// Material Kit 2 React components
import { useEffect, useState } from "react";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import { Link } from "react-router-dom";
import useGetApi from "./../../../custom-hooks/useGetApi";

// Image
// import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import bgImage from "assets/images/About-bg.png";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";

function Blog() {
  const pageSize = 4;
  const { getApiData, getApiDataList, error } = useGetApi();
  const [pageNo, setPageNo] = useState(1);
  const [blogList, setBlogList] = useState([]);
  const [blogsCount, setBlogsCount] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getApiDataList(`v1/blog/list?pageSize=${pageSize}&pageNo=${pageNo}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNo, pageSize]);

  useEffect(() => {
    if (getApiData && getApiData.data && getApiData.data.list) {
      setBlogList(getApiData.data.list);
      setBlogsCount(getApiData.data.total);
      setLoader(false);
    } else if (error) {
      setLoader(false);
    }
  }, [getApiData]);

  const handleChange = (event, value) => {
    setPageNo(value);
  };

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    // Truncate the text to the specified maxLength and add ellipsis
    return text.slice(0, maxLength) + "...";
  }

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
          Blog
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
          minHeight: "400px",
        }}
      >
        {loader && (
          <Container sx={{ display: "flex", justifyContent: "center", marginTop: 12 }}>
            <CircularProgress color="nimbaColor" size={60} thickness={5} />
          </Container>
        )}
        {blogList.length > 0 && (
          <Container>
            <Grid mt={15} container item xs={12} justifyContent="center">
              {blogList.map((item) => (
                <Grid item xs={12} lg={4}>
                  <Card sx={{ maxWidth: 400, m: 2 }}>
                    <CardActionArea component={Link} to={`/blog/${item.slug}/${item.id}`}>
                      <CardMedia
                        sx={{
                          height: 250,
                          margin: 0,
                          borderRadius: "5px",
                          borderBottomLeftRadius: "0",
                          borderBottomRightRadius: "0",
                        }}
                        image={item.image}
                        title="green iguana"
                      />
                    </CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="body2" mt={2} mb={2} color="text.secondary">
                        Published On :
                        {new Date(item.createTime).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ maxlength: "8" }}>
                        {truncateText(item.excerpt, 100)}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" component={Link} to={`/blog/${item.slug}/${item.id}`}>
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}

        {blogList.length > 0 && (
          <Container sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <Pagination
              count={Math.ceil(blogsCount / pageSize)}
              page={pageNo}
              onChange={handleChange}
              variant="outlined"
              color="primary"
            />
          </Container>
        )}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Blog;
