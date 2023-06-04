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

function YuqiProfile() {
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
      <div className="gidle-cover-photo">
        <div class="profile-info">
          <div className="profile-pic">
            <img
              src="https://i.pinimg.com/736x/ee/f7/5e/eef75ed9ca63cc437061b0661edd5a8a.jpg"
              alt="yuqi.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>(G)-IDLE Yuqi</h1>
            <p>
              Song Yuqi (Chinese: 宋雨琦, Korean: 송우기; born September 23,
              1999), known mononymously as Yuqi (Korean: 우기), is a Chinese
              singer, rapper, songwriter, record producer and dancer. She is
              active as a soloist in China and is a part of the South Korean
              girl group (G)I-dle, which debuted in 2018. She has been cast
              member of the Chinese variety show Keep Running in 2019 ,2021 and
              since 2023 and the host on KakaoTV reality show Learn Way
              (2020–2021).
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
                  Stage Name: Yuqi (우기)<br></br>
                  Birth Name: Song Yu Qi (宋雨琦/송우기)<br></br>
                  Korean Name: Song Woo Gi (송우기)<br></br>
                  Position: Main Dancer, Sub Vocalist, Sub Rapper, Face of the
                  Group<br></br>
                  Birthday: September 23, 1999<br></br>
                  Zodiac Sign: Libra<br></br>
                  Height: 163 cm (5’4″)<br></br>
                  Weight: 47 kg (103 lbs)<br></br>
                  Blood Type: O<br></br>
                  MBTI Type: ESFJ (Her previous result was ENFJ)<br></br>
                  Nationality: Chines
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
                  She is an only child.
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
                  Education: Beijing 101 High School (Leave of absence)
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
                  Rising Star Cosmetics Model
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
                  Speaks English, Korean, and Chinese. (YuQi’s introduction
                  video)
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
                  Her hobbies are dancing and rapping.
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
                  Yuqi likes pickled radish. (“Let’s Dance: (G)I-DLE – LATATA”)
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
                  Appeared in Rising Legends CUBE x SOOMPI Promotional Video
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
                  Audition for CUBE auditions on October 2014
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
            src="https://i.pinimg.com/564x/06/98/73/069873f1dc7d1b950bbabf6655b78fee.jpg"
            alt="miyeon.png"
            class=""
          />
          <Link className="linka" to="/MinnieProfile">
            Miyeon
          </Link>
        </div>
        <div className="members">
          <img
            src="https://i.pinimg.com/564x/ca/24/51/ca245136bb76500921b4312697e8b302.jpg"
            alt="minnie.png"
            class=""
          />
          <Link className="linka" to="/MinnieProfile">
            Minnie
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/24/8f/25/248f257e408b2fa028fada0efbf17949.jpg"
            alt="soyeon.png"
            class=""
          />
          <Link className="linka" to="/SoyeonProfile">
            Soyeon
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/81/f5/49/81f54986cf3ea2f4b7aa4d4d67707d68.jpg"
            alt="shuhua.png"
            class=""
          />
          <Link className="linka" to="/ShuhuaProfile">
            Shuhua
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
    img: "https://i.pinimg.com/564x/cb/39/e1/cb39e17a32ebc25c092cc1c4f0cfca20.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/0c/fa/3f/0cfa3fd3b5f8f86c3a7af07ef81fc8cb.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/7f/cf/6d/7fcf6d673c0048c7e32700e3f02806de.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/25/75/ff/2575ff15927da5994cbba22185275b5d.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/c3/50/fe/c350feb7aca1ffe5901710ffdd9b1357.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/24/3e/f9/243ef9e410a3fbada1dd5121353f83b7.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/c3/d6/42/c3d6429a4520a75e93d1261f87fdec53.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/9a/6a/8a/9a6a8a5c3a0866bcce27093abeaac3d3.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/c4/1f/48/c41f48b346b72d7a2723737b784f8e0d.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/cd/bd/2c/cdbd2c7cb5e495a357cc93b64b5905b5.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/42/07/2f/42072f75295e30e6e8bf89ef6fc7e7b5.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/21/7c/fb/217cfb792053fbeaadb0ad118805d938.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default YuqiProfile;
