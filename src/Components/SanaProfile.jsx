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

function SanaProfile() {
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
    instagram: "m.by__sana ",
    twitter: "JYPETWICE",
    facebook: "JYPETWICE",
    youtube: "@TWICE",
  };

  return (
    <div>
      <Header />
      <div className="cover-photo">
        <div className="profile-info">
          <div className="profile-pic">
            <img
              src="https://i.pinimg.com/564x/9e/12/a9/9e12a9b8b8ff5c83ada9925255b90dd6.jpg"
              alt="sana.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>TWICE Sana</h1>
            <p>
              Sana Minatozaki, known mononymously as Sana, is a Japanese singer
              based in South Korea. She is one of three Japanese members of the
              South Korean girl group Twice, formed in 2015 by JYP Entertainment
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
                  Stage Name: Sana (사나)<br></br>
                  Birth Name: Minatozaki Sana (湊崎 紗夏)<br></br>
                  Nationality: Japanese<br></br>
                  Position: Sub Vocalist<br></br>
                  Birthday: December 29, 1996<br></br>
                  Zodiac Sign: Capricorn<br></br>
                  Official Height: 168 cm (5’6″) / Approx. Real Height: 163 cm
                  (5’4″)<br></br>
                  Weight: 47 kg (104 lbs)<br></br>
                  Blood Type: B<br></br>
                  MBTI Type: ENFP
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
                  Born in Tennōji-ku, Osaka, Japan.
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
                  SANA is an only child.
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
                  She got cast while she was shopping with her friends.
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
                  She passed the audition on April 13, 2012.
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
                  Her representative color is Purple.
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
                  SANA’s specialty is calligraphy. She learned it in primary
                  school.
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
                  SANA is very clumsy.
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
                  She has an optimistic personality.
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
            https://i.pinimg.com/564x/9c/fb/d7/9cfbd7ce916b2583ae2826b094e7f629.jpg"
            alt="nayeon.png"
            class=""
          />
          <Link className="linka" to="/twice/nayeon">
            Nayeon
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/8d/46/87/8d4687a2a9eb8d89f31c710c88521024.jpg"
            alt="jeongyeon.png"
            class=""
          />
          <Link className="linka" to="/twice/jeongyeon">
            Jeongyeon
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/e8/59/48/e85948486f2ca32f5080a36eda06b848.jpg"
            alt="momo.png"
            class=""
          />
          <Link className="linka" to="/twice/momo">
            Momo
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/0b/d6/8e/0bd68e49a8922218fecc20b213cce25d.jpg"
            alt="jihyo.png"
            class=""
          />
          <Link className="linka" to="/twice/jihyo">
            Jihyo
          </Link>
        </div>
      </div>

      <div className="members-list">
        <div className="members">
          <img
            src="https://i.pinimg.com/564x/c0/d8/28/c0d828dee356d1897ce29562feaacf27.jpg"
            alt="mina.png"
            class=""
          />
          <Link className="linka" to="/twice/mina">
            Mina
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/56/95/aa/5695aa951f0713e7324189f65a8bd668.jpg"
            alt="dahyun.png"
            class=""
          />
          <Link className="linka" to="/twice/dahyun">
            Dahyun
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/db/d6/b3/dbd6b379357d607104861c6051445633.jpg"
            alt="chaeyoung.png"
            class=""
          />
          <Link className="linka" to="/twice/chaeyoung">
            Chaeyoung
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/93/db/99/93db9963a1002caea8b32a0ee1c5ea3f.jpg"
            alt="tzuyu.png"
            class=""
          />
          <Link className="linka" to="/twice/tzuyu">
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
    img: "https://i.pinimg.com/564x/85/59/3f/85593fff5fb1145506c3e89fe1578dcf.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/17/cd/a1/17cda1a9d398f1bb9c23a194675f2c94.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/f9/16/79/f91679a21e648d7334a18b525b71993f.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/c9/2c/c7/c92cc7e887e590bd68f4e99420d5efc9.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/ed/77/c9/ed77c932f7e4c2c0dafa2643743d0bf8.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/b4/f7/a5/b4f7a523ab3182218315c0b5e863ab3e.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/21/94/ce/2194ced3abbe8a9423486b999f3fe4a8.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/8e/7a/2d/8e7a2df6c78bf2efdba2c40faa265bd0.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/736x/34/8c/cd/348ccddaf3bd0521a7a0fc3f27e340ba.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/2f/ca/15/2fca15a98f20904fca2efd8b61805960.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/4c/15/5a/4c155a025b8076568009ba472bb80340.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/a7/28/ce/a728ce22179d90193e03bca317c2b950.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default SanaProfile;
