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
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function ChaewonProfile() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const contact = {
    instagram: "_chaechae_1",
    twitter: "le_sserafim",
    facebook: "official.lesserafim",
    youtube: "@LESSERAFIM_officaial",
  };

  return (
    <div>
      <Header />
      <div className="lesserafim-cover-photo">
        <div class="profile-info">
          <div className="profile-pic">
            <img
              src="https://i.pinimg.com/564x/c7/d6/cb/c7d6cbef292054b76373dbb410b39127.jpg"
              alt="chaewon.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>LE SSSERAFIM Chaewon</h1>
            <p>
              Kim Chae-won (Korean: 김채원; born August 1, 2000) is a South
              Korean singer. She is the leader of South Korean girl group Le
              Sserafim. She is also a former member of the reality competition
              series Produce 48's resulting girl group Iz*One in 2018.
            </p>
          </div>
        </div>
      </div>

      <div className="biography">
        <div className="personal-info">
          <div>
            <Card
              sx={{ maxWidth: 400 }}
              elevation={2}
              className="personal-info-card"
            >
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Personal Information
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Birth Name: Kim Chaewon (김채원)<br></br>
                  English Name: Anna Kim<br></br>
                  Position: Leader, Vocalist<br></br>
                  Birthday: August 1, 2000<br></br>
                  Zodiac Sign: Leo<br></br>
                  Height: 163 cm (5’4″)<br></br>
                  Weight: 42 kg (92 lbs)<br></br>
                  Blood Type: B<br></br>
                  Nationality: Korean<br></br>
                  MBTI: ISTP
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="featured-photo">
          <p>Featured Photos</p>
          <span className="underline"></span>
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
        <div className="social-media">
          <div>
            <Card
              sx={{ maxWidth: 500 }}
              elevation={2}
              className="social-media-card"
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Social Media
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Link
                    className="linka"
                    to={`https://instagram.com/${contact.instagram}`}
                  >
                    <InstagramIcon />
                  </Link>
                  <Link
                    className="linka"
                    to={`https://twitter.com/${contact.twitter}`}
                  >
                    <TwitterIcon />
                  </Link>
                  <Link
                    className="linka"
                    to={`https://facebook.com/${contact.facebook}`}
                  >
                    <FacebookIcon />
                  </Link>
                  <Link
                    className="linka"
                    to={`https://youtube.com/${contact.youtube}`}
                  >
                    <YouTubeIcon />
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="trivia">
        <p> Trivia</p>
      </div>

      <div className="trivia-container">
        <Slider className="card-trivia" {...settings}>
          <div>
            <Card sx={{ maxWidth: 250 }} elevation={1}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Did you know?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  She was the 4th member to be revealed.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 250 }} elevation={1}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Did you know?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  She is the daughter of theater actress Lee Ran Hee.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 250 }} elevation={1}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Did you know?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  She describes herself as a lovely person, since people usually
                  considers her as a loveable person.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 250 }} elevation={1}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Did you know?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  She likes eating pineapple pizza.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 250 }} elevation={1}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Did you know?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  She is good at long jump.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 250 }} elevation={1}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Did you know?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  She is a former IZ*ONE member.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 250 }} elevation={1}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Did you know?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  She dislikes mushrooms and coffee.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card sx={{ maxWidth: 250 }} elevation={1}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Did you know?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hobby: watching dramas & dance videos, lying down, watching
                  Netflix and Youtube.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Slider>
      </div>

      <div className="check">
        <p>Check out the other members!</p>
      </div>
      <div className="members-list">
        <div className="members">
          <img
            src="https://i.pinimg.com/564x/bf/11/5d/bf115d4352fcbaef6e8003f8f1265f3e.jpg"
            alt="sakura.png"
            class=""
          />
          <Link className="linka" to="/SakuraProfile">
            Sakura
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/b6/22/33/b62233577f8013b5966bf3e13c58cd1a.jpg"
            alt="yunjin.png"
            class=""
          />
          <Link className="linka" to="/YunjinProfile">
            Yunjin
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/46/a1/9e/46a19e4a4c30d1099d439f6ca31d1b25.jpg"
            alt="kazuha.png"
            class=""
          />
          <Link className="linka" to="/KazuhaProfile">
            Kazuha
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/ad/6c/18/ad6c182f9ddf3b2f4fc5ffee3b755f2d.jpg"
            alt="eunchae.png"
            class=""
          />
          <Link className="linka" to="/EunchaeProfile">
            Eunchae
          </Link>
        </div>
      </div>

      <div className="footer-cover">
        <div className="cover-qoutes">
          <p>
            "Strawberries tastes best when they're natural. When you have
            something that's strawberry-flavored, it's not good. That's how we
            are, too. We are the best version of ourselves when we are natural
            and present ourselves like we really are" - Chaeyoung
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const itemData = [
  {
    img: "https://i.pinimg.com/564x/f6/36/cf/f636cf9f25a34155810c48e44db655a6.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/85/50/71/855071c1663691569276a46557946fab.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/e2/62/1c/e2621c80fb9b71e30c3c4ecce88d7fe0.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/736x/15/a5/d8/15a5d89c47613f1bb342575eb5dc7d0a.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/a0/66/1c/a0661c2830b7609f661b2ee253ca47af.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/2c/e8/9b/2ce89bfb492495f5c0cb9b20df14a73f.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/4b/7e/ae/4b7eae74081dfeef7fb4cbc894672a28.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/03/ad/1b/03ad1b2496e7cc6f46d6ea13bac7a689.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/33/f6/fd/33f6fd741e851bfe970bab1f4ce55462.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/d3/7b/b8/d37bb83a8f713c0ec9f16d7eb6bab8b7.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/be/02/c2/be02c2af7a3357722e0c8baa6fd3da2c.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/ad/f3/32/adf3326ed55ea41bf8df00c849e05c85.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default ChaewonProfile;
