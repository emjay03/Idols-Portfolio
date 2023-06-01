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

function JeongyeonProfile() {
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

  return (
    <div>
      <Header />
      <div className="cover-photo">
        <div className="profile-info">
          <div className="profile-pic">
            <img
              src="https://pbs.twimg.com/media/FmCfCBwacAYm2gV?format=jpg&name=4096x4096"
              alt="jeonyeon.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>TWICE Jeongyeon</h1>
            <p>
              Yoo Jeong-yeon (Korean: 유정연; born 1 November 1996), known
              mononymously as Jeongyeon (Korean: 정연), is a South Korean
              singer. She is a member of Twice, a South Korean girl group formed
              by JYP Entertainment.
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
                  Stage Name: CHAEYOUNG<br></br>
                  Birth Name: Son Chae Young (손채영)<br></br>
                  English Name: Katrina<br></br>
                  Nationality: Korean<br></br>
                  Birthday: April 23, 1999 <br></br>
                  Zodiac Sign: Taurus <br></br>
                  Official Height: 163 cm (5’4″) / Real Height: 158.9 cm (5’3″)*
                  <br></br>
                  Weight: 48 kg (106 lbs) <br></br>
                  Blood Type: B
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
                  <Link className="linka" to="/NayeonProfile">
                    <InstagramIcon />
                  </Link>
                  <Link className="linka" to="/NayeonProfile">
                    <TwitterIcon />
                  </Link>
                  <Link className="linka" to="/NayeonProfile">
                    <FacebookIcon />
                  </Link>
                  <Link className="linka" to="/NayeonProfile">
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
                  She was born in Suwon, South Korea.
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
                  JEONGYEON’s birth name is Yoo Kyung Wan. She changed her name
                  in 3rd grade because she was teased because her name sounded
                  like a boy’s name.
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
                  She has 2 older sisters: Gong Seungyeon (actress, who appeared
                  in We Got Married) and Seo Yeon (office worker).
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
                  Her father Yoo Chang-joon was a private chef for former
                  president Kim Dae-jung, as well as a head chef of the Seoul
                  Plaza Hotel for over 20 years, specializing in Korean cuisine.
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
                  Her mother works at a Japanese restaurant owned by her
                  maternal aunt.
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
                  When JEONGYEON was young, she failed the JYP audition. She
                  became a trainee after passing the JYP Entertainment’s 6th
                  Open Audition on March 1, 2010.
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
                  JEONGYEON was accepted into JYP and SM in the same day, but
                  chose JYP.
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
                  The leader of TWICE was decided by anonymous voting. JEONGYEON
                  was in 2nd place.
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
            src="https://pbs.twimg.com/media/FmCe725aUAA6Tcx?format=jpg&name=4096x4096"
            alt="nayeon.png"
            class=""
          />
          <Link className="linka" to="/NayeonProfile">
            Nayeon
          </Link>
        </div>

        <div className="members">
          <img
            src="https://pbs.twimg.com/media/FmCfJL0aAAAw0jx?format=jpg&name=4096x4096"
            alt="momo.png"
            class=""
          />
          <Link className="linka" to="/MomoProfile">
            Momo
          </Link>
        </div>

        <div className="members">
          <img
            src="https://pbs.twimg.com/media/FmHpTDNaEAAGWBw?format=jpg&name=large"
            alt="sana.png"
            class=""
          />
          <Link className="linka" to="/SanaProfile">
            Sana
          </Link>
        </div>

        <div className="members">
          <img
            src="https://pbs.twimg.com/media/FmHpV14acAELFke?format=jpg&name=large"
            alt="jihyo.png"
            class=""
          />
          <Link className="linka" to="/JihyoProfile">
            Jihyo
          </Link>
        </div>
      </div>
      <div className="members-list">
        <div className="members">
          <img
            src="https://pbs.twimg.com/media/FmHpbAMagAEATCF?format=jpg&name=large"
            alt="mina.png"
            class=""
          />
          <Link className="linka" to="/MinaProfile">
            Mina
          </Link>
        </div>

        <div className="members">
          <img
            src="https://pbs.twimg.com/media/FmMwEURagAEI1-V?format=jpg&name=4096x4096"
            alt="dahyun.png"
            class=""
          />
          <Link className="linka" to="/DahyunProfile">
            Dahyun
          </Link>
        </div>

        <div className="members">
          <img
            src="https://pbs.twimg.com/media/FmMwLQgakAQLqbn?format=jpg&name=4096x4096"
            alt="chaeyoung.png"
            class=""
          />
          <Link className="linka" to="/ChaeyoungProfile">
            Chaeyoung
          </Link>
        </div>

        <div className="members">
          <img
            src="https://pbs.twimg.com/media/FmMwRc2aUAE1WnP?format=jpg&name=4096x4096"
            alt="tzuyu.png"
            class=""
          />
          <Link className="linka" to="/TzuyuProfile">
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
    img: "https://i.pinimg.com/564x/2c/27/d6/2c27d66f0eb91422e96ca086f65ed3d2.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/f5/b9/8c/f5b98c99915d6818a77d010622b26f81.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/0a/93/35/0a9335ef7694964ffc16e6f6a662c35d.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/736x/2d/56/37/2d5637a7fa153d6ab018b82da9efd048.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/5a/b3/34/5ab334937ba886a476e8a159e62c1692.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/5a/d4/db/5ad4dbe9f45c1382748fd9f1b726ae30.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/f8/73/fd/f873fde037d390df3999f2b8c19543f0.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/736x/d7/ac/80/d7ac805d883fc553e4c2da944dd56035.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/736x/26/1a/74/261a748cad16025abb8246ef41257b03.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/88/55/90/885590bd38757900a64010630e063f12.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/1a/94/f2/1a94f27fb54274896232c095b04de284.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/5a/7d/cf/5a7dcf2500c33d339f5b910f70062f54.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default JeongyeonProfile;
