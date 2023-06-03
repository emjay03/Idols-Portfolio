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

function MinaProfile() {
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
              src="https://i.pinimg.com/564x/c0/d8/28/c0d828dee356d1897ce29562feaacf27.jpg"
              alt="mina.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>TWICE Mina</h1>
            <p>
              Mina Myoi (Japanese: 名井 南, Hepburn: Myōi Mina, born Mina Sharon
              Myoi on March 24, 1997), known mononymously as Mina (Korean: 미나;
              Japanese: ミナ), is a Japanese singer and dancer based in South
              Korea. She is one of the three Japanese members of the South
              Korean girl group Twice, formed by JYP Entertainment in 2015
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
                  Stage Name: Mina (미나)<br></br>
                  Birth Name: Myoui Mina (名井 南)<br></br>
                  English Name: Sharon<br></br>
                  Nationality: Japanese (She used to have American citizenship
                  but she gave it up)<br></br>
                  Position: Main Dancer, Sub Vocalist<br></br>
                  Birthday: March 24, 1997<br></br>
                  Zodiac Sign: Aries<br></br>
                  Height: 163 cm (5’4″)<br></br>
                  Weight: 46 kg (101 lbs)<br></br>
                  Blood Type: A<br></br>
                  MBTI Type: ISTP (Her previous result was ISFP-T)<br></br>
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
                  Born in San Antonio, Texas, United States; her parents are
                  Japanese.
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
                  Her family moved to Kobe, Japan, when she was a toddler.
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
                  She used to have American citizenship but she gave it up as of
                  2019.
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
                  MINA’s English name is Sharon Myoui.
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
                  She has an older brother, named Kai.
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
                  Her father is Akira Myoui, a clinical professor at Osaka
                  University Hospital.
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
                  She attended Obayashi Sacred Heart School in Japan.
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
                  MINA got cast while shopping with her mom.
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
          <Link className="linka" to="/NayeonProfile">
            Nayeon
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/8d/46/87/8d4687a2a9eb8d89f31c710c88521024.jpg"
            alt="jeongyeon.png"
            class=""
          />
          <Link className="linka" to="/JeongyeonProfile">
            Jeongyeon
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/e8/59/48/e85948486f2ca32f5080a36eda06b848.jpg"
            alt="momo.png"
            class=""
          />
          <Link className="linka" to="/MomoProfile">
            Momo
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/9e/12/a9/9e12a9b8b8ff5c83ada9925255b90dd6.jpg"
            alt="sana.png"
            class=""
          />
          <Link className="linka" to="/SanaProfile">
            Sana
          </Link>
        </div>
      </div>
      <div className="members-list">
        <div className="members">
          <img
            src="https://i.pinimg.com/564x/0b/d6/8e/0bd68e49a8922218fecc20b213cce25d.jpg"
            alt="jihyo.png"
            class=""
          />
          <Link className="linka" to="/JihyoProfile">
            Jihyo
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/56/95/aa/5695aa951f0713e7324189f65a8bd668.jpg"
            alt="dahyun.png"
            class=""
          />
          <Link className="linka" to="/DahyunProfile">
            Dahyun
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/db/d6/b3/dbd6b379357d607104861c6051445633.jpg"
            alt="chaeyoung.png"
            class=""
          />
          <Link className="linka" to="/ChaeyoungProfile">
            Chaeyoung
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/93/db/99/93db9963a1002caea8b32a0ee1c5ea3f.jpg"
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
    img: "https://i.pinimg.com/564x/d1/d7/33/d1d73338dedd5e95a28acbc41bf802bd.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/7d/e3/0f/7de30fea09e198c3288c1193427048a3.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/17/66/84/1766841152f94032f3f9b0ca79669325.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/72/b0/b7/72b0b78b54ec8e98c558e26332cc70e9.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/6c/19/33/6c1933d5d37e08ab217c00a99e191b6d.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/fe/a4/68/fea4687e78af0afe2e0ed62cf41d2920.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/96/a3/26/96a326da73842a1d6150a1e8a1be3b19.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/4c/4b/36/4c4b3615ebc9947bc5a9dbc160ec8926.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/33/7a/90/337a905287af6de4400644993b8eae0a.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/c3/82/e9/c382e994173268ff683875c3207f5d20.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/99/56/ac/9956ac49ef8fa57bb6fbda9609a1b8d1.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/b9/af/19/b9af192ec531aed6d859dbe090959392.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default MinaProfile;
