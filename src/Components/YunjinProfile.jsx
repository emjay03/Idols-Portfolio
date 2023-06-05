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

function YunjinProfile() {
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
    instagram: "jenaissante",
    twitter: "le_sserafim",
    facebook: "official.lesserafim",
    youtube: "@LESSERAFIM_officaial",
  };

  return (
    <div>
      <Header />
      <div className="lesserafim-cover-photo">
        <div class="profile-info">
          <div className="profile-pic">
            <img
              src="https://i.pinimg.com/564x/b6/22/33/b62233577f8013b5966bf3e13c58cd1a.jpg"
              alt="yunjin.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>LE SSSERAFIM Yunjin</h1>
            <p>
              Huh Yun-jin (Korean: 허윤진; born October 8, 2001) is a
              Korean-American singer-songwriter based in South Korea. She is a
              member of South Korean girl group Le Sserafim. Huh Yun-jin was
              born on October 8, 2001, in Gangnam, Seoul, South Korea but was
              raised in Niskayuna, New York, United States, going by the English
              name Jennifer Huh.
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
                  Birth Name: Huh Yunjin (허윤진)<br></br>
                  English Name: Jennifer Huh<br></br>
                  Position: Vocalist<br></br>
                  Birthday: October 8, 2001<br></br>
                  Zodiac Sign: Libra<br></br>
                  Height: 172 cm (5’8”)<br></br>
                  Weight: 53 kg (116 lbs)<br></br>
                  Blood Type: B<br></br>
                  Nationality: Korean-American<br></br>
                  MBTI: ENFJ (Her previous result was INFJ)
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
                  She was the 6th and final member to be revealed.
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
                  She was born in Seoul, South Korea however she grew up in New
                  York, USA.
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
                  She participated in Produce 48 as a PLEDIS Entertainment
                  trainee. When she was eliminated in Episode 11, her final rank
                  was #26.
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
                  She is a former SM Entertainment trainee. As a trainee there,
                  she shared a dorm with aespa‘s Winter and NingNing.
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
                  She is friends with CLASS:y‘s Hyungseo and aespa‘s Winter and
                  NingNing.
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
                  Even though her English name is Jennifer, she prefers being
                  called Jen.
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
                  She’s a fan of Girls’ Generation and BTS.
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
                  Her favorite foods include Greek yogurt. boiled sweet potato,
                  dried seaweed, cheese, and pizza.
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
            src="https://i.pinimg.com/564x/bf/11/5d/bf115d4352fcbaef6e8003f8f1265f3e.jpg"
            alt="sakura.png"
            class=""
          />
          <Link className="linka" to="/SakuraProfile">
            Sakura
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
    img: "https://i.pinimg.com/564x/a2/e8/9f/a2e89fcd0eea4859da71de0b41505e25.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/ed/cd/73/edcd73a44deacef9b82a397096cef58d.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/c0/7c/f9/c07cf9439ad0fabdb516cb47363cf77e.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/736x/1b/0e/e1/1b0ee1e3a85ac973cda00db179e68c59.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/72/7f/79/727f797f680a4721ee441227e98d5823.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/af/9f/de/af9fdeeca49c0deabd2f51cef16f87ee.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/df/0d/2e/df0d2ec9c154b8d15c10345a89cc9de4.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/0a/c8/01/0ac801d45b54609ffa341d869a650a20.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/736x/60/2c/fc/602cfc29ac608dc095dd633a0a35fc07.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/43/7d/1a/437d1adfe897f3800549c9d02a0a0cbd.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/736x/7a/d5/71/7ad571c3794c86871ee8862a639dd262.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/a1/e9/fa/a1e9fac3eac021eca00fc933f42d2b29.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default YunjinProfile;
