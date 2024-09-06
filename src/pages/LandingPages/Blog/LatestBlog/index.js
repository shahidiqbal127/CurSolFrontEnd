import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetApi from "./../../../../custom-hooks/useGetApi";

function LatestBlog() {
  const { getApiData, getApiDataList, error } = useGetApi();
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    getApiDataList(`v1/blog/list?pageSize=3&pageNo=1`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (getApiData && getApiData.data && getApiData.data.list) {
      setBlogList(getApiData.data.list);
    }
  }, [getApiData]);

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    // Truncate the text to the specified maxLength and add ellipsis
    return text.slice(0, maxLength) + "...";
  }
  return (
    <>
      <Container>
        <Grid mt={8} container item xs={12} justifyContent="center">
          {blogList.slice(0, 3).map((item) => (
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
    </>
  );
}

export default LatestBlog;
