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

function EunchaeProfile() {
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

  return (
    <div>
      <Header />
      <div className="lesserafim-cover-photo">
        <div class="profile-info">
          <div className="profile-pic">
            <img
              src="https://i.pinimg.com/736x/da/b6/d4/dab6d43feb3eee3e1e0178eb32a181c7.jpg"
              alt="eunchae.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>LE SSSERAFIM Eunchae</h1>
            <p>
              Son Chae-young, known mononymously as Chaeyoung, is a South Korean
              rapper and singer. She is a member of the South Korean girl group
              Twice, formed by JYP Entertainment. Chaeyoung decided she wanted
              to become a singer before joining JYP Entertainment and took dance
              lessons for over one year.
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
                  Stage Name: Kazuha (카즈하)<br></br>
                  Birth Name: Nakamura Kazuha (中村 一葉)<br></br>
                  Position: Sub-Vocalist, Rapper, Dancer<br></br>
                  Birthday: August 9, 2003<br></br>
                  Zodiac Sign: Leo<br></br>
                  Height: 170 cm (5’7”)<br></br>
                  Weight: —<br></br>
                  Blood Type: —<br></br>
                  Nationality: Japanese<br></br>
                  MBTI: INFP (Her previous result was ENFP)
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
                  <Link className="linka" to="/NayeonProfile">
                    <InstagramIcon />
                  </Link>
                  <Link className="linka" to="/NayeonProfile">
                    <TwitterIcon />
                  </Link>
                  <Link className="linka" to="/NayeonProfile">
                    <FacebookIcon />
                  </Link>
                  <Link className="linka" to="/NayeonProfile">
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
                  Chaeyoung has a younger brother, Jeong Hun, which is an
                  aspiring model.
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
                  Chaeyoung's english name is Katarina
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
                  Chaeyoung likes healthy foods like veggies but doesn't like
                  sweets. She says this is because she grew up with her
                  grandmother when she was young
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
                  She can write songs. Chaeyoung and Jihyo wrote their song "Eye
                  eye eyes". She also wrote some of her rap on their other songs
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
                  She can write songs. Chaeyoung and Jihyo wrote their song "Eye
                  eye eyes". She also wrote some of her rap on their other songs
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
                  She can write songs. Chaeyoung and Jihyo wrote their song "Eye
                  eye eyes". She also wrote some of her rap on their other songs
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
                  She can write songs. Chaeyoung and Jihyo wrote their song "Eye
                  eye eyes". She also wrote some of her rap on their other songs
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
                  She can write songs. Chaeyoung and Jihyo wrote their song "Eye
                  eye eyes". She also wrote some of her rap on their other songs
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
            src="
              https://pbs.twimg.com/media/FmCe725aUAA6Tcx?format=jpg&name=4096x4096"
            alt="nayeon.png"
            class=""
          />
          <Link className="linka" to="/NayeonProfile">
            Nayeon
          </Link>
        </div>

        <div className="members">
          <img
            src="https://pbs.twimg.com/media/FmCfCBwacAYm2gV?format=jpg&name=4096x4096"
            alt="jeongyeon.png"
            class=""
          />
          <Link className="linka" to="/JeongyeonProfile">
            Jeongyeon
          </Link>
        </div>

        <div className="members">
          <img
            src="https://pbs.twimg.com/media/FmCfJL0aAAAw0jx?format=jpg&name=4096x4096"
            alt="momo.png"
            class=""
          />
          <Link className="linka" to="/MomoProfile">
            Momo
          </Link>
        </div>

        <div className="members">
          <img
            src="https://pbs.twimg.com/media/FmHpTDNaEAAGWBw?format=jpg&name=large"
            alt="sana.png"
            class=""
          />
          <Link className="linka" to="/SanaProfile">
            Sana
          </Link>
        </div>
      </div>
      <div className="members-list">
        <div className="members">
          <img
            src="https://pbs.twimg.com/media/FmHpV14acAELFke?format=jpg&name=large"
            alt="jihyo.png"
            class=""
          />
          <Link className="linka" to="/JihyoProfile">
            Jihyo
          </Link>
        </div>

        <div className="members">
          <img
            src="https://pbs.twimg.com/media/FmHpbAMagAEATCF?format=jpg&name=large"
            alt="mina.png"
            class=""
          />
          <Link className="linka" to="/MinaProfile">
            Mina
          </Link>
        </div>

        <div className="members">
          <img
            src="https://pbs.twimg.com/media/FmMwEURagAEI1-V?format=jpg&name=4096x4096"
            alt="dahyun.png"
            class=""
          />
          <Link className="linka" to="/DahyunProfile">
            Dahyun
          </Link>
        </div>

        <div className="members">
          <img
            src="https://pbs.twimg.com/media/FmMwRc2aUAE1WnP?format=jpg&name=4096x4096"
            alt="tzuyu.png"
            class=""
          />
          <Link className="linka" to="/TzuyuProfile">
            Tzuyu
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
    img: "https://i.pinimg.com/564x/8f/e8/74/8fe87402b5c87320e0b91dd8671d7f85.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/da/b6/d4/dab6d43feb3eee3e1e0178eb32a181c7.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/0d/6d/16/0d6d1647148c8683aa32dac1915760b9.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/70/a2/9f/70a29fc3241c89b0b11df9ed2a52d9bf.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/26/d1/bd/26d1bdb474aff4522d3798136807422f.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/b4/40/7c/b4407c579efe5e6ce218b81e40e677c0.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/58/e0/ec/58e0ec42c15155c5cb5d9af7d9e82e10.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/22/0f/d0/220fd01c024c9a9bc0b10c283648d181.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/736x/34/c1/d1/34c1d141201ce50cc28ec09df7a25add.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/2d/55/ba/2d55ba4cf2b73aaea1a3d59d6308e600.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/736x/4b/a6/c9/4ba6c9c1ad64755752ee38bcfe55365d.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/00/37/32/0037329bcf7b59bc4305ccf00fc04740.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default EunchaeProfile;
