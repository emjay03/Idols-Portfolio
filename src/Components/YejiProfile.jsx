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

function YejiProfile() {
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
              src="https://i.pinimg.com/564x/f3/10/d9/f310d953f950239e0d851a0e6aa0677a.jpg"
              alt="yeji.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>ITZY Yeji</h1>
            <p>
              Hwang Ye-ji (Korean: 황예지; born May 26, 2000), known
              mononymously as Yeji, is a South Korean singer, dancer and rapper.
              She is a member and leader of the South Korean girl group Itzy,
              formed by JYP Entertainment in 2019.[1][2] She first rose to
              domestic fame when she appeared on the South Korean competition
              show The Fan, where she ranked first on the South Korea search
              engine Naver.
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
                  Stage Name: Chaeyoung (채영)<br></br>
                  Birth Name: Son Chae Young (손채영)<br></br>
                  English Name: Katrina<br></br>
                  Nationality: Korean<br></br>
                  Position: Main Rapper, Sub Vocalist<br></br>
                  Birthday: April 23, 1999<br></br>
                  Zodiac Sign: Taurus<br></br>
                  Official Height: 163 cm (5’4″) / Real Height: 158.9 cm (5’3″)*
                  <br></br>
                  Weight: 46 kg (101 lbs)<br></br>
                  Blood Type: B<br></br>
                  MBTI Type: INFP-T
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
                  She has an older sister.
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
                  She attended Jeonju Hwasan Elementary School (graduated),
                  Jeonju Geunyoung Middle School (graduated) & Gyogyo Jeonju
                  Commercial Information Reporting School (graduated)
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
                  She became a trainee in 2016, so she trained for 3 years.
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
                  She made a cameo at “Twenty Again” EP8 (2015).
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
                  Yeji is close to Wanna One/ AB6IX‘s Lee Daehwi.
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
                  She appeared in Stray Kids‘ Survival Show EP1 (2017).
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
                  She was a contestant on SBS The Fan (Eliminated in EP5)
                  (2018).
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
                  2PM‘s Junho calls Yeji JYP’s Hidden Weapon (SBS The Fan Ep. 2)
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
            https://i.pinimg.com/564x/5a/bf/3f/5abf3f32330948bdf5a844bfd5a0896c.jpg"
            alt="lia.png"
            class=""
          />
          <Link className="linka" to="/LiaProfile">
            LiA
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
    img: "https://i.pinimg.com/564x/e7/a2/46/e7a2469c770c2725eebf7236cec03cac.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/2d/c9/28/2dc92828d984c5eddbd26f11fad4a9fc.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/20/e0/57/20e0579fbd20422c487d0920fbe6ae2d.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/79/e9/e7/79e9e736a96b8581752deecead57f5bc.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/2e/ba/43/2eba43707d577ac04e8fc565bb6d5651.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/44/29/3b/44293b562f9216be138e9b1909740afb.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/e3/9b/b1/e39bb1efda7d5dac4689276080819a51.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/8a/c4/d4/8ac4d4d88ba3ae7f98caf53e7ff4df3e.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/39/63/52/3963520ceb20331aa421d005d3c4d834.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/f9/14/14/f91414ed7946c0c35f7519b1bce5ec86.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/736x/a9/c4/12/a9c412ec7a2ed62877d9ba7a35d97daa.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/25/9e/17/259e17bb69961040ca4b7c18cdd5a564.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default YejiProfile;
