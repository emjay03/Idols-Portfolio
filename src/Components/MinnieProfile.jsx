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

function MinnieProfile() {
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
    instagram: "min.nicha",
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
              src="https://i.pinimg.com/564x/ca/24/51/ca245136bb76500921b4312697e8b302.jpg"
              alt="minnie.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>(G)-IDLE Minnie</h1>
            <p>
              Nicha Yontararak (Thai: ณิชา ยนตรรักษ์; born October 23, 1997),
              better known by her nickname and stage name Minnie (Korean: 민니;
              Thai: มินนี่), is a Thai singer, songwriter, and actress based in
              South Korea. She is a member of South Korean girl group (G)I-dle,
              which debuted on May 2, 2018 under Cube Entertainment
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
                  Stage Name: Minnie (민니)<br></br>
                  Birth Name: Nicha Yontararak (ณิชา ยนตรรักษ์)<br></br>
                  Korean Name: Kim Min Hee (김민희)<br></br>
                  Position: Main Vocalist<br></br>
                  Birthday: October 23, 1997<br></br>
                  Zodiac Sign: Libra-Scorpio Cusp<br></br>
                  Height: 167 cm (5’6″)<br></br>
                  Weight: 48 kg (105 lbs)<br></br>
                  Blood Type: O<br></br>
                  MBTI Type: ENFJ<br></br>
                  Nationality: Thai
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
                  Minnie has older twin brothers, named Mic and Mac.
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
                  Education: Wattana Wittaya Academy
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
                  She is a Rising Star Cosmetics Model.
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
                  She is friends with CLC’s Sorn and with BlackPink’s Lisa, who
                  are also Thai.
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
                  She can speak Korean, English and Thai.
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
                  When Minnie was still in school, she was in a photography
                  club.
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
                  Minnie loves green tea. (“Let’s Dance: (G)I-DLE – LATATA”)
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
                  Participated in the LINE FRIENDS DANCE PARTY.
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
    img: "https://i.pinimg.com/564x/6f/51/24/6f5124cec8637157b7ac0c08652e317d.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/8a/df/5f/8adf5ff05b3e27a619e5a16961abcb12.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/736x/be/11/be/be11be6dcf2b86297607f2a080a34452.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/74/8a/16/748a1657f066a8d0c847acc00069f420.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/7e/9e/19/7e9e19159971376fa9d1dcada3f9373b.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/12/2c/73/122c73bc0adf1d40cfdf39ccccbd6098.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/eb/f1/6f/ebf16fb1905c655a1ef25b8bae2cf026.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/5e/c8/b0/5ec8b00b09871492e6155808e0001d6a.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/736x/2f/b5/d8/2fb5d832c47a1528cda8170efd4f6bf7.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/ca/c8/52/cac8522e465affa767e6a9d9f430f4d5.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/e9/98/4f/e9984f616cb1cb459e39c3882a41af2d.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/42/13/65/421365e94b450cfb88d916ffceb4badb.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default MinnieProfile;
