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

function SoyeonProfile() {
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
    instagram: "tiny.pretty.j",
    twitter: "G_I_DLE",
    facebook: "G.I.DLE.CUBE",
    youtube: "@official_g_i_dle",
  };

  return (
    <div>
      <Header />
      <div className="gidle-cover-photo">
        <div class="profile-info">
          <div className="profile-pic">
            <img
              src="https://i.pinimg.com/564x/24/8f/25/248f257e408b2fa028fada0efbf17949.jpg"
              alt="soyeon.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>(G)-IDLE Soyeon</h1>
            <p>
              Jeon So-yeon (Korean: 전소연; born August 26, 1998), known
              mononymously as Soyeon, is a South Korean rapper, singer,
              songwriter, and record producer under Cube Entertainment. She
              first gained attention for competing in the television shows
              Produce 101 and Unpretty Rapstar before debuting as a solo artist
              on November 5, 2017. On May 2, 2018, she debuted as the leader and
              rapper of the girl group (G)I-dle, for whom she has written and
              produced most title songs. She is also part of SM Station X girl
              group project Station Young and has portrayed League of Legends
              character Akali in the virtual musical groups K/DA and True
              Damage.
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
                  Stage Name: Soyeon (소연)<br></br>
                  Birth Name: Jeon So Yeon (전소연)<br></br>
                  Position: Leader, Main Rapper, Sub Vocalist, Center<br></br>
                  Birthday: August 26, 1998<br></br>
                  Zodiac Sign: Virgo<br></br>
                  Height: 157 cm (5’2″)<br></br>
                  Weight: 44 kg (97 lbs)<br></br>
                  Blood Type: B<br></br>
                  MBTI Type: INTJ (Her previous result was INTP)<br></br>
                  Nationality: Korean
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
                  Soyeon was a participant on Produce 101. She placed 20th in
                  the last episode.
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
                  She placed 3rd on Unpretty Rapstar 3.
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
                  Education: Seoul Kuryong Elementary School,
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
                  Her hobby is watching anime (she especially likes “One
                  Piece”).
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
                  She likes tangerines and corn and hates vegetables.
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
                  She is known for her rapping skills.
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
                  She is also a good singer. She was praised for her singing
                  while recording for a mission in Produce 101.
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
                  She trained for 1 year and 6 months before joining Produce
                  101.
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
            src="https://i.pinimg.com/736x/ee/f7/5e/eef75ed9ca63cc437061b0661edd5a8a.jpg"
            alt="yuqi.png"
            class=""
          />
          <Link className="linka" to="/YuqiProfile">
            Yuqi
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
    img: "https://i.pinimg.com/564x/18/20/52/182052f5673c9e06e3bfcc46c55a87d7.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/ce/5b/d2/ce5bd2877520d5569c58a8cf7e78e6c9.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/24/8f/25/248f257e408b2fa028fada0efbf17949.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/67/a3/4c/67a34c00d7adcc21d594669ee69996a7.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/f8/22/0a/f8220a1dd423b2539388182c9c8f6914.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/02/e9/a3/02e9a338cd970469c75c583140148559.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/98/79/ad/9879add9bc538e3eaaf4218929bf96e1.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/d7/19/3e/d7193e01c67ee7f6efbe2c93ec84f130.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/4b/1f/14/4b1f14413a90a02e24cca89c1612d52b.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/98/17/a5/9817a58d5136d4f987476dd8d0c05189.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/d8/99/f3/d899f3eea94315a059bda6193fb96b53.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/1b/25/5d/1b255d26af32a3efeb448713cae4034a.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default SoyeonProfile;
