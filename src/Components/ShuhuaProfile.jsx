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

function ShuhuaProfile() {
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
    instagram: "yeh.shaa_",
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
              src="https://i.pinimg.com/564x/81/f5/49/81f54986cf3ea2f4b7aa4d4d67707d68.jpg"
              alt="shuhua.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>(G)-IDLE Shuhua</h1>
            <p>
              ShuHua is the Visual and Youngest member of the girl group
              (G)I-DLE. She is Taiwanese and can speak Chinese and Korean. She
              used to be a model before debuting as an idol under Cube
              Entertainment. Shuhua debuted as a member of (G)I-DLE on May 2,
              2018, with their mini-album "I Am" and the title song "Latata".
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
                  Stage Name: Shuhua (슈화)<br></br>
                  Birth Name: Yeh Shuhua (葉舒華)<br></br>
                  Korean Name: Yoo Su Hwa (유수화)<br></br>
                  Position: Sub Vocalist, Visual, Maknae<br></br>
                  Birthday: January 6, 2000<br></br>
                  Zodiac Sign: Capricorn<br></br>
                  Height: 161 cm (5’3″)<br></br>
                  Weight: 45 kg (99 lbs)<br></br>
                  Blood Type: A<br></br>
                  MBTI Type: INFP<br></br>
                  Nationality: Taiwanese
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
                  She is a Rising Star Cosmetics Model
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
                  From wanting to be an actress, she then wanted to be a singer.
                  She was in middle school back then.
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
                  She can speak Chinese and Korean.
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
                  Her hobby is acting.
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
                  Shuhua hates strawberries and likes chocolate. (“Let’s Dance:
                  LATATA”)
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
                  She said she’d like to be like HyunA (RISING STAR COSMETICS
                  MODEL)
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
                  Was featured in 10cm’s ‘PET’ MV together with Yoo Seonho
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
            src="https://i.pinimg.com/736x/ee/f7/5e/eef75ed9ca63cc437061b0661edd5a8a.jpg"
            alt="yuqi.png"
            class=""
          />
          <Link className="linka" to="/YuqiProfile">
            Yuqi
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
    img: "https://i.pinimg.com/564x/4a/77/9e/4a779ee5eec791bb94baba4526e800bf.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/dc/6c/38/dc6c3831b9e0dfce138ca703df5fe68d.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/1b/62/f0/1b62f00f0e65661c5dc80f32eaf92eec.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/736x/26/19/34/2619340ac66c7de8cbbf982cbbec7574.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/53/ac/f9/53acf95f163b0583450ffcc785bc29a2.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/b6/fe/9d/b6fe9dfc1c3eedd87351ef105e3f6682.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/df/ca/86/dfca86a214a4cfb088753b495dcd6d68.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/736x/2e/05/dd/2e05dd31e1c21897fda0aaa18050bf7c.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/f8/af/fb/f8affbfb80b8352fdb52f686f3e44303.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/2e/a1/dd/2ea1ddf096ad21aa8ff72857badecdc6.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/736x/d6/41/df/d641df969480e1214a82237f0c840ada.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/bd/80/8a/bd808afe9010d74dd0f8da61ccfe59c7.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default ShuhuaProfile;
