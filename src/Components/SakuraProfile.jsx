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

function SakuraProfile() {
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
    instagram: "39saku_chan",
    twitter: "le_sserafim",
    facebook: "official.lesserafim",
    youtube: "@sakuramiyawaki8825",
  };

  return (
    <div>
      <Header />
      <div className="lesserafim-cover-photo">
        <div class="profile-info">
          <div className="profile-pic">
            <img
              src="https://i.pinimg.com/564x/bf/11/5d/bf115d4352fcbaef6e8003f8f1265f3e.jpg"
              alt="sakura.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>LE SSSERAFIM Sakura</h1>
            <p>
              Sakura Miyawaki (宮脇 咲良, Miyawaki Sakura, born March 19, 1998),
              better known mononymously as Sakura, is a Japanese singer and
              actress based in South Korea. She is a member of the South Korean
              girl group Le Sserafim. Miyawaki began her music career with the
              girl group HKT48 in 2011, and was a concurrent member of their
              sister group AKB48 from 2014 to 2018. During her tenure, she held
              center positions for the singles "Kimi wa Melody" and "No Way
              Man". Miyawaki took a hiatus from HKT48 in 2018 after placing
              second in the reality competition show Produce 48, joining the
              girl group Iz*One until 2021.
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
                  Stage Name: Sakura (사쿠라)<br></br>
                  Birth Name: Miyawaki Sakura (宮脇 咲良)<br></br>
                  Position: Vocalist<br></br>
                  Birthday: March 19, 1998<br></br>
                  Zodiac Sign: Pisces<br></br>
                  Height: 163 cm (5’4”)<br></br>
                  Weight: 42 kg (92 lbs)<br></br>
                  Blood Type: A<br></br>
                  Nationality: Japanese<br></br>
                  MBTI: INTP
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
                  She was the 1st member to be revealed.
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
                  She likes lying around.
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
                  Dislikes: working out, bugs, pineapple pizza
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
                  Specialty: drawing
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
                  Hobbies: watching movies and playing games.
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
                  Sakura is able to guess people’s blood type just by looking at
                  them.
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
                  Sakura is a fan of Red Velvet and her bias is Irene.
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
                  Sakura loves reading mangas and novels.
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
            src="https://i.pinimg.com/564x/46/a1/9e/46a19e4a4c30d1099d439f6ca31d1b25.jpg"
            alt="kazuha.png"
            class=""
          />
          <Link className="linka" to="/KazuhaProfile">
            Kazuha
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
    img: "https://i.pinimg.com/564x/31/c6/72/31c67224a6149919ffdec9acdf75e731.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/3d/20/b3/3d20b39adfd4b4a2f9b69e071c98ad95.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/b2/e8/48/b2e848e580dc2c907e6b2c9ed6836290.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/92/41/b1/9241b129b982608d22bab5f4058a60c8.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/51/b4/7f/51b47f00c65bc27cdaa55601e1dc190d.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/e4/3d/c6/e43dc68f05684923c5bab41e874fd7be.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/98/58/26/98582600143aa0bc657f62d44c4b0bf1.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/736x/6f/c1/44/6fc1446ae27d154997adbaf6d2ceb53e.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/eb/d2/2a/ebd22a7885fe1493a9a397a72db112b5.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/f8/6a/74/f86a7440a0415f9a758d1a14c02c1615.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/e0/eb/ac/e0ebac2f77ead2b76ff5c8eac89c96b9.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/0d/51/1f/0d511f1179e60797ae521fcc259f6f31.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default SakuraProfile;
