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

function LiaProfile() {
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
    instagram: "chaeyo.0",
    twitter: "JYPETWICE",
    facebook: "JYPETWICE",
    youtube: "@TWICE",
  };

  return (
    <div>
      <Header />
      <div className="itzy-cover-photo">
        <div class="profile-info">
          <div className="profile-pic">
            <img
              src="https://i.pinimg.com/564x/5a/bf/3f/5abf3f32330948bdf5a844bfd5a0896c.jpg"
              alt="lia.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>ITZY LiA</h1>
            <p>
              hoi Ji-su (Korean: 최지수; born July 21, 2000), known mononymously
              as Lia (Korean: 리아), is a South Korean singer, and rapper. She
              is a member of the South Korean girl group Itzy.
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
                  Stage Name: Lia (리아)<br></br>
                  Birth Name: Choi Ji Su (최지수)<br></br>
                  English Name: Julia Choi<br></br>
                  Position: Main Vocalist, Sub Rapper<br></br>
                  Birthday: July 21, 2000<br></br>
                  Zodiac Sign: Cancer<br></br>
                  Chinese Zodiac Sign: Dragon<br></br>
                  Height: 162.3 cm (5 ft 3¾ in)<br></br>
                  Weight: 43 kg (94 lbs)<br></br>
                  Blood Type: AB<br></br>
                  MBTI Type: ENFJ<br></br>
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
                  She has a younger brother.
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
                  She attended Incheon Sinsong Elementary School (graduated),
                  Shinsong Middle School (transferred), Northern College Eight
                  School Jeju (transferred), Shinsong Middle School (graduated)
                  & Seoul Performing Arts High School – department of Practical
                  Music (SOPA / graduated)
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
                  Her shoe size is 240mm.
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
                  She was a trainee for more than 2 years.
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
                  She attends an International School.
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
                  Lia is the newest JYP trainee to debut.
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
                  She is a former SM Ent. trainee.
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
                  Fans say she looks like a mix of BLACKPINK‘s Jisoo and Red
                  Velvet‘s Irene.
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
            https://i.pinimg.com/564x/f3/10/d9/f310d953f950239e0d851a0e6aa0677a.jpg"
            alt="Yeji.png"
            class=""
          />
          <Link className="linka" to="/LiaProfile">
            Yeji
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/18/4b/82/184b824a4854b7a11db0a24b0f7e7a8b.jpg"
            alt="ryujin.png"
            class=""
          />
          <Link className="linka" to="/RyujinProfile">
            Ryujin
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/df/6a/9c/df6a9c672c49c47075fd44f6b378349c.jpg"
            alt="chaeryoung.png"
            class=""
          />
          <Link className="linka" to="/ChaeryoungProfile">
            Chaeryoung
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/63/3d/1a/633d1abe6ea8f710e189118e4d5b3bc7.jpg"
            alt="yuna.png"
            class=""
          />
          <Link className="linka" to="/YunaProfile">
            Yuna
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
    img: "https://i.pinimg.com/564x/84/d8/02/84d802ca9bb829558600c6585c2c5f6a.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/f5/32/53/f5325328aba88153d28c5174fc83de97.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/c2/0a/74/c20a7494a93c4dbb9040e47bdbb023d6.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/08/a3/c8/08a3c8ba4587f1c173ecd6be03bdc644.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/b8/2d/88/b82d88f8728a46ac8d75d69df3d06b10.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/f4/39/55/f439554d291cb613f7fbddf17e788e90.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/fe/e5/f8/fee5f8a4ee656967299971d5ce27d443.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/04/fb/5b/04fb5b88f42da913bf87aa5273e1f076.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/82/23/bd/8223bdbf02d14ea697acb0f75e3f494c.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/3a/c9/b1/3ac9b12dcbbb6eb3d6b21842022e38fa.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/a2/e4/68/a2e4685a0391c14797356b3eab95fdf1.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/8f/fd/da/8ffdda47694680b862ab227384e65b90.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default LiaProfile;
