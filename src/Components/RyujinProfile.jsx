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

function RyujinProfile() {
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
              src="https://i.pinimg.com/564x/18/4b/82/184b824a4854b7a11db0a24b0f7e7a8b.jpg"
              alt="ryujin.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>ITZY Ryujin</h1>
            <p>
              Ryujin (류진) is a South Korean rapper and actress under JYP
              Entertainment. She is the main rapper of the girl group ITZY. In
              October 2017, Ryujin auditioned for survival reality show MIXNINE.
              Having passed the audition, she made to the number 1 ranking of
              girls' team it until the final episode, but was eliminated when
              the boys' team won against the girls', and hence ultimately did
              not get to debut. On January 20, she was revealed, along with her
              fellow members, as a member of ITZY, JYP Entertainment's newest
              girl group. They debuted on February 12 with the digital single
              "IT'z Different".
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
                  Stage Name: Ryujin (류진)<br></br>
                  Birth Name: Shin Ryu Jin (신류진)<br></br>
                  English Name: Joanne Shin<br></br>
                  Position: Main Rapper, Lead Dancer, Sub Vocalist, Center
                  <br></br>
                  Birthday: April 17, 2001<br></br>
                  Zodiac Sign: Aries<br></br>
                  Chinese Zodiac Sign: Snake<br></br>
                  Height: 164 cm (5’4’’)<br></br>
                  Weight: 49 kg (108 lbs)<br></br>
                  Blood Type: B<br></br>
                  MBTI Type: INTJ<br></br>
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
                  She attended Seoul Gwangnam Elementary School (graduated),
                  Daejang Middle School (graduated), Gyeonggi Girls’ High School
                  (transferred) & Hanlim Entertainment Arts High School
                  (graduated)
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
                  She starred in BTS‘ Love Yourself Highlight Reel (She was
                  J-Hope and Jimin‘s pair).
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
                  She was an actress in the movie “The King” (2017).
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
                  She appeared on Stray Kids’ Survival Show EP1 (2017).
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
                  She was a contestant on YG’s MIXNINE (Ranked #1).
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
                  Yang Hyun Suk offered her to join YG, but she decided to stay
                  at JYP.
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
                  Ryujin is friends with Dreamcatcher’s Jiu and Elris’ Bella.
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
            src="
            https://i.pinimg.com/564x/5a/bf/3f/5abf3f32330948bdf5a844bfd5a0896c.jpg"
            alt="lia.png"
            class=""
          />
          <Link className="linka" to="/RyujinProfile">
            LiA
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
    img: "https://i.pinimg.com/564x/e5/64/75/e5647575e5e4ece45827641dbd83a127.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/29/f0/ef/29f0efb66bfdf1cb32540f464b21d2de.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/3f/38/84/3f38845aed709b677bc5dc57d89d41cd.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/2c/47/a7/2c47a7b790ec3999c61d6abc421776c8.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/a9/fa/dc/a9fadc2693c77df1343c214baf4ef676.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/3a/7f/41/3a7f41153de96255fabf4a51fb4eb7a7.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/8d/40/39/8d40394a2c9584bd8dd47ccd6901043d.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/60/62/31/606231c36a73c8c9779bd16128472afd.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/fd/42/0c/fd420c9b3b5f05b42fa6f16badf0dfd7.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/14/c7/0d/14c70d918aec9ddc69eb0c4aa0176418.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/15/00/92/1500929b4a2d938f2c5f1f02dab03c18.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/fd/95/85/fd9585b8bdcb126535a1d58a67816cc2.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default RyujinProfile;
