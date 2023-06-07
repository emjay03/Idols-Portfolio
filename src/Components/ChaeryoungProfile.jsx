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

function ChaeryoungProfile() {
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
              src="https://i.pinimg.com/564x/df/6a/9c/df6a9c672c49c47075fd44f6b378349c.jpg"
              alt="chaeryoung.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>ITZY Chaeryoung</h1>
            <p>
              Chaeryeong (채령) is a South Korean singer and dancer under JYP
              Entertainment. She made her official debut on February 12, 2019 as
              the main dancer and vocalist of the girl group ITZY. Before making
              her debut, Chaeryeong, along with her older sister Chaeyeon,
              appeared as a contestant on the reality television competition
              show K-pop Star 3 on November 24, 2013. Despite getting
              eliminated, both sisters were able to become JYP Entertainment
              trainees after the show. A year later, as official trainees, both
              sisters then competed on the girl group survival show SIXTEEN—the
              same show were TWICE was created. However, Chaeryeong was
              eliminated on the final episode. Following the show's conclusion,
              Chaeryeong continued to train under the agency.
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
                  Stage Name: Chaeryeong (채령)<br></br>
                  Birth Name: Lee Chae Ryeong (이채령)<br></br>
                  English Name: Judy Lee<br></br>
                  Position: Main Dancer, Sub Vocalist, Sub Rapper<br></br>
                  Birthday: June 5, 2001<br></br>
                  Zodiac Sign: Gemini<br></br>
                  Chinese Zodiac Sign: Snake<br></br>
                  Height: 166 cm (5’5″)<br></br>
                  Weight: 46 kg (101 lbs)<br></br>
                  Blood Type: B<br></br>
                  MBTI Type: ISFJ<br></br>
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
                  She’s IZ*ONE‘s Chaeyeon‘s sister. She also has a younger
                  sister named Chaemin.
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
                  She attended Yongin Seocheon Elementary School (graduated),
                  Yongin Seocheon Middle School (graduated) & Hanlim
                  Entertainment Art High School (Musical major / graduated)
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
                  She became a trainee in 2014. She trained for 5 years.
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
                  Her nickname is “Chocolate Holic”.
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
                  Chaeryeong gets scared easily.
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
                  Chaeryeong, along with her sister Chaeyeon, auditioned for
                  Fantagio in 2012, but didn’t make it.
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
                  She was a contestant on SIXTEEN when she was 14 (Ranked #12).
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
                  She was a contestant on Kpop Star 3 when she was 11.
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
          <Link className="linka" to="/ChaeryoungProfile">
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
    img: "https://i.pinimg.com/564x/91/12/a7/9112a79edf811d29071488b7cb724447.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/f3/85/0d/f3850dce1fe839d9d22f62490771bd98.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/2b/1b/e5/2b1be545d25b3267bb73fbb5ba5b8859.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/ee/fb/16/eefb166de7c8a506cfa043e7bd07c718.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/08/76/07/087607b01c777898936b3acc590a7d6d.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/96/30/0f/96300f17907ca36ed049b80fdb3700e4.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/26/02/1b/26021b3eddbcdde76b08b038fc8036aa.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/de/bf/fb/debffbfad5851704eb40b71fc5170b6d.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/a3/a6/5c/a3a65ca254d6c376845ac12719953f1e.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/54/95/22/549522592e5e9b15f7218229ce1e0ef1.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/9e/df/43/9edf4358e01fb48160463c94e49fa0d1.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/f1/5a/1f/f15a1f3581017b77b9eb37986704cf59.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default ChaeryoungProfile;
