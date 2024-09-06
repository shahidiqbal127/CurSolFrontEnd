import { useEffect, useState } from "react";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import { Link, useParams } from "react-router-dom";

import bgImage from "assets/images/About-bg.png";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import useGetApi from "./../../../../custom-hooks/useGetApi";

function BlogDetail() {
  const { getApiData, getApiDataList, error } = useGetApi();
  const {
    getApiData: recentBlog,
    getApiDataList: fetchData,
    error: recentBlogsError,
  } = useGetApi("");
  const [blog, setBlog] = useState(null);
  const [blogList, setBlogList] = useState(null);
  const [loader, setLoader] = useState(true);

  const { slug, id } = useParams();

  useEffect(() => {
    getApiDataList(`v1/blog/${slug}/${id}`);
    fetchData(`v1/blog/list?pageSize=8&pageNo=1`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, slug]);

  useEffect(() => {
    if (getApiData) {
      setBlog(getApiData.data);
    }
    if (recentBlog) {
      setBlogList(recentBlog?.data?.list);
      // setLoader(false);
    }
  }, [getApiData, recentBlog]);

  useEffect(() => {
    if (blogList && blogList.length > 0) {
      setLoader(false);
    }
  }, [blogList]);

  return (
    <>
      <DefaultNavbar routes={routes} sticky />

      <MKBox
        minHeight="40vh"
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
              fontSize: size["xl"],
            },
          })}
        >
          Blog Details
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
        {loader ? (
          <Container sx={{ display: "flex", justifyContent: "center", marginTop: 12 }}>
            <CircularProgress color="nimbaColor" size={60} thickness={5} />
          </Container>
        ) : (
          <div style={{ overflowX: "clip" }}>
            <Grid
              mt={{ xs: 4, md: 8 }}
              container
              xs={12}
              justifyContent="auto"
              width={"auto"}
              ml={{ xs: 0, sm: 0, md: 8 }}
              mr={{ xs: 0, sm: 0, md: 4 }}
            >
              {blog && (
                <Grid item xs={12} lg={8}>
                  <Card sx={{ maxWidth: "auto", m: 2, justifyContent: "left", paddingRight: 0 }}>
                    <CardMedia
                      sx={{
                        height: 400,
                        margin: 0,
                        borderRadius: "5px",
                        borderBottomLeftRadius: "0",
                        borderBottomRightRadius: "0",
                      }}
                      image={blog.image}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {blog.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ maxlength: "8" }}
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                      ></Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )}

              <Grid position={"sticky"} ml={5} mr={2} item xs={12} lg={3} justifyContent="center">
                <Typography variant="h6" ml={0} mb={2} xs={12} lg={12}>
                  Recent Posts
                </Typography>
                {blogList &&
                  blog &&
                  blogList
                    .filter((x) => x.id !== blog.id)
                    .map((item) => (
                      <Grid
                        container
                        mt={0}
                        justifyContent="center"
                        sx={{ borderTop: "1px dotted grey", paddingTop: "10px" }}
                      >
                        <Grid item xs={5} lg={4} textAlign="left">
                          <CardMedia
                            sx={{
                              height: 110,
                              margin: 0,
                              borderRadius: "5px",
                            }}
                            image={item.image}
                            title="green iguana"
                          />
                        </Grid>

                        <Grid item xs={7} lg={8}>
                          <CardActionArea component={Link} to={`/blog/${item.slug}/${item.id}`}>
                            <Typography gutterBottom variant="h6" component="div" ml={2}>
                              {item.title}
                            </Typography>
                          </CardActionArea>
                          <Typography
                            gutterBottom
                            variant="body2"
                            mb={2}
                            ml={3}
                            color="text.secondary"
                          >
                            Published On : <br />{" "}
                            {new Date(item.createTime).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))}
              </Grid>
            </Grid>
          </div>
        )}
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default BlogDetail;
