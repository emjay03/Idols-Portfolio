import React from "react";
import Grid from "@mui/material/Grid";
import Header from "../Include/Header";
import Footer from "../Include/Footer";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function ChaeyoungProfile() {
  return (
    <div>
      <Header />
      <Grid container spacing={2}>
        <Grid xs={12}>
          <div className="cover-photo">
            <div class="profile">
              <img
                src="https://i.pinimg.com/564x/af/46/4e/af464e1c588286cc35b5e90066f5d6f4.jpg"
                alt="chaeyoung.png"
                class="profile-img"
              />
              <div className="paragraph">
                <h1>TWICE Chaeyoung</h1>
                <p>
                  Son Chae-young, known mononymously as Chaeyoung, is a South
                  Korean rapper and singer. She is a member of the South Korean
                  girl group Twice, formed by JYP Entertainment. Chaeyoung
                  decided she wanted to become a singer before joining JYP
                  Entertainment and took dance lessons for over one year.
                </p>
              </div>
            </div>
          </div>
        </Grid>

        <Grid xs={12}>
          <div className="featured-photo">
            <p>Featured Photos</p>
            <div className="gallery">
              <ImageList
                sx={{ width: 550, height: 450 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
              >
                {itemData.map((item) => (
                  <ImageListItem
                    key={item.img}
                    cols={item.cols || 1}
                    rows={item.rows || 1}
                  >
                    <img
                      {...srcset(item.img, 121, item.rows, item.cols)}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          </div>
        </Grid>

        <Grid xs={12}>
          <div className="trivia">
            <h1>TRIVIA</h1>
          </div>
        </Grid>

        <Grid xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Did you know?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chaeyoung has a younger brother, Jeong Hun, which is an aspiring
                model.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Did you know?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chaeyoung's english name is Katarina
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Did you know?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chaeyoung likes healthy foods like veggies but doesn't like
                sweets. She says this is because she grew up with her
                grandmother when she was young
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Did you know?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                She can write songs. Chaeyoung and Jihyo wrote their song "Eye
                eye eyes". She also wrote some of her rap on their other songs
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

const itemData = [
  {
    img: "https://i.pinimg.com/564x/42/ae/5f/42ae5fe4dbb2ded784f9ea6f39b97c69.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/f9/88/56/f98856a9e169b80ac4a6299f512abef3.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/b6/fe/0f/b6fe0f8a8f021433e64cb881a38d65b9.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/f8/ad/c1/f8adc1c3cc17be53d2fb892e4d5430ad.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/0d/36/76/0d3676351a16676ad817a864bf0d1ff3.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/41/e7/e9/41e7e9e374fc15d223dbacab2f8bdadc.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/8e/28/d4/8e28d41e8f28cb5708aed7d4c974b748.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/f6/18/58/f618585386b5c2aac06d53151f0522de.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/b4/2f/e2/b42fe211b6bede6343d25de73437ecbe.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/43/58/39/43583987c3da4facd5083c14670549ca.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/1d/fe/23/1dfe23250153ba0313652fd21d956bec.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/66/56/20/6656203c34ab1fadf8c2b583dd463da8.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default ChaeyoungProfile;
