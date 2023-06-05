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

function MiyeonProfile() {
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
    instagram: "noodle.zip",
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
              src="https://i.pinimg.com/564x/06/98/73/069873f1dc7d1b950bbabf6655b78fee.jpg"
              alt="miyeon.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>(G)-IDLE Miyeon</h1>
            <p>
              Cho Mi-yeon (Korean: 조미연; born January 31, 1997), better known
              mononymously as Miyeon, is a South Korean singer and actress. She
              is the main vocalist of the South Korean girl group (G)I-dle under
              Cube Entertainment, and voiced Ahri in the virtual K-pop girl
              group K/DA.
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
                  Stage Name: Miyeon (미연)<br></br>
                  Birth Name: Cho Mi Yeon (조미연)<br></br>
                  Position: Main Vocalist, Visual<br></br>
                  Birthday: January 31, 1997<br></br>
                  Zodiac Sign: Aquarius<br></br>
                  Height: 161 cm (5’3″)<br></br>
                  Weight: 45 kg (99 lbs)<br></br>
                  Blood Type: B<br></br>
                  MBTI Type: ENFP<br></br>
                  Nationality: Korea
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
                  Miyeon is an only child.
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
                  Education: Highschool (Passed Korea’s GED)
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
                  Was known to be a YG Trainee (she left YG in mid-2015).
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
                  Joined YG the same time as BlackPink’s Jennie.
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
                  Supposed to debut with BLACKPINK.
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
                  She supposedly dated former Mix&Match Contestant Jinhyeong.
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
                  Loves nail arts.
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
                  She is left-handed.
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
    img: "https://i.pinimg.com/564x/51/b9/70/51b970a9ad4a61d3a549b3b86eecf4d2.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/7a/d2/c2/7ad2c2e1ca8001f3f11e859c8f574561.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/60/39/d5/6039d59f5e4fb1c426b4ae521c9f3cfd.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/24/e7/b8/24e7b83b7674b014db99683f1eb25eec.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/64/be/96/64be96dc47a16ed77b225954e8d5b873.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/a1/b8/f8/a1b8f8f2bef4cdc2d2ac816cfb99737b.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/7f/6a/6b/7f6a6b06d8c04379534f7771837004d8.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/53/45/95/534595601bea0e6f90f865f93939c5e4.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/f4/44/08/f44408d558cedbf330bb3cdaffa809c0.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/c6/8f/b8/c68fb8cfc5b8958f85185f9661446e8e.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/736x/62/2d/e8/622de81e89f8d668e17289779045a439.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/e7/18/40/e718404765d93c9482745dd380b2fbbe.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default MiyeonProfile;
