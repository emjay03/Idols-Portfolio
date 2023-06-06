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

function KazuhaProfile() {
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
    instagram: "k_a_z_u_h_a__",
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
              src="https://i.pinimg.com/564x/46/a1/9e/46a19e4a4c30d1099d439f6ca31d1b25.jpg"
              alt="kazuha.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>LE SSSERAFIM Kazuha</h1>
            <p>
              Kazuha (카즈하) is a Japanese singer under Source Music. She is a
              member of the girl group LE SSERAFIM. Kazuha was a professional
              ballet dancer before her debut and attended Hashimoto Sachiyo
              Ballet School & Jr in Japan, Bolshoi Ballet Academy in Moscow,
              Royal Ballet School in the UK, and since 2020 she has been
              studying at the Dutch National Ballet Academy in the Netherlands,
              where she was recruited by the CEO of Source Music in mid-December
              2021.
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
                  She lived in Amsterdam, The Netherlands, from 2020 to 2021,
                  where she took ballet classes.
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
                  She was the 5th member to be revealed.
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
                  As a fan of BLACKPINK, her bias is Jisoo.
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
                  Kazuha is a fan of BTS, she said that she was stunned by
                  Jimin‘s dancing.
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
                  She has a habit of stretching frequently.
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
                  She is a professional ballerina, she won domestic and
                  international junior ballet competitions.
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
                  Kazuha is a huge fan of a Japanese YouTuber ‘Kemio’ and owns
                  one of his books.
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
                  She has the shortest training period amongst the members, 3
                  months.
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
            src="https://i.pinimg.com/564x/c7/d6/cb/c7d6cbef292054b76373dbb410b39127.jpg"
            alt="chaewon.png"
            class=""
          />
          <Link className="linka" to="/ChaewonProfile">
            Chaewon
          </Link>
        </div>
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
    img: "https://i.pinimg.com/564x/5c/bf/9c/5cbf9c90dea36d842ed2d8b244f0f43d.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/e9/1e/69/e91e694cd3e14d5328828fbc58e17c9a.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/64/66/4d/64664d1d3f1830c7402e234bb186fbad.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/f0/0a/42/f00a424550be2b835681b8974ed16134.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/ce/02/d2/ce02d2c3f11d28755418534d4bb25610.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/60/fa/dc/60fadc4d3f244212cc84911e7f397040.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/14/ee/29/14ee299fed96cffcd0849dd53b6a2bbb.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/5e/bd/a7/5ebda7107c637114eb1d986dfb3226c8.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/99/b7/ac/99b7acf72d6b3e07f312cece6077f2d4.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/68/57/fc/6857fcfa5cb3abe12e218345e65aa142.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/736x/f8/81/39/f88139aa6f4fa13b1c0904689336ea39.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/736x/71/a8/b5/71a8b529abf44b4d964f3d0d68ce175e.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default KazuhaProfile;
