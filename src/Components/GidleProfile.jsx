import React from "react";
import Grid from "@mui/material/Grid";
import Header from "../Include/Header";
import Footer from "../Include/Footer";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
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

function GidleProfile() {
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
    instagram: "@le_sserafim",
    twitter: "le_sserafim",
    facebook: "official.lesserafim",
    youtube: "@LESSERAFIM_officaial",
  };

  return (
    <div>
      <Header />
      <div className="grid-container">
        <div className="group-banner">
          <img
            src="https://i.pinimg.com/originals/39/07/a2/3907a2aeae625a3c17f64c08e55165fa.jpg"
            alt="(g)-idle-photo"
            class="group-photo"
          />
        </div>

        <div className="card-information">
          <Card sx={{ maxWidth: 400 }} elevation={2}>
            <CardContent>
              <CardMedia
                component="img"
                height="300"
                image="https://kpopping.com/documents/d8/4/400/first_gidle_logo.webp?v=eb14b"
                alt="logo.png"
              />
              <Typography gutterBottom variant="h4" component="div">
                (G)-IDLE
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Current state: active <br></br>
                Cube Entertainment: May 2, 2018-present<br></br>
                Republic Records: Apr 1, 2020-Dec 31, 2022<br></br>
                Debut: May 2, 2018<br></br>
                Debut to 1st win: 20 days<br></br>
                Active years: 2018-present<br></br>
                Country: South Korea<br></br>
                Fandom: Neverland<br></br>
              </Typography>
              <CardMedia
                component="img"
                height="300"
                image="https://kpopping.com/documents/cd/1/400/G-I-DLE-lightStickPicture.webp?v=b6854"
                alt="lightstick.png"
              />
              <Typography variant="subtitle1" color="text.secondary">
                Lightstick
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
        <div className="about-group">
          <h1>About (G)-IDLE</h1>
          <p>
            (G)I-dle (Korean: (여자)아이들; RR: Yeoja Aideul; stylized in all
            caps), is a South Korean girl group formed by Cube Entertainment in
            2018. The group consists of five members: Miyeon, Minnie, Soyeon,
            Yuqi and Shuhua. Originally a sextet, Soojin left the group on
            August 14, 2021. (G)I-dle debuted on May 2, 2018, with the single
            "Latata" from their first extended play (EP) I Am. They debuted in
            Japan under U-Cube with Latata on July 31, 2019. Since their debut,
            they have been considered one of the most successful South Korean
            girl groups outside of the "big three" record labels. Unlike most
            K-pop girl groups, (G)I-dle are directly involved in the creation of
            their music; in particular, Soyeon who has written and produced the
            majority of the group's songs. Members Minnie and Yuqi have also
            co-written and produced numerous album tracks. The group rose to
            domestic fame in 2020 with their single album Dumdi Dumdi, which
            charted at number two on the Circle Chart, became the second
            best-selling single album by a girl group of all time. Their next
            single, "Tomboy", from their first full-length album, I Never Die,
            topped the Circle charts, remaining at the top of the charts for
            more than two months. Additionally, the single was certified
            platinum by the Certification Korea Music Content Association
            (KMCA), followed by their next single, "Nxde", which also topped the
            Circle Chart, making (G)I-dle the only artist to have two songs
            achieve a PAK in 2022. In 2023, they became the first act from an
            independent label to rank at number 39 on Mediabase Top 40 Radio
            airplay charts and debuted at number 40 on the US Billboard Pop
            Airplay chart with a non-English song. On August 14th 2021, Cube
            Entertainment announced that Soojin would be leaving the group
            stating that the agency apologized for having caused concern through
            the controversy associated with their artist Soojin. Soojin was on
            hiatus since March after people shared posts online alleging that
            Soojin had bullied other students in school. Despite the challenges
            faced, (G)I-DLE has gained substantial recognition for their talent,
            versatility, and cross-cultural feminist themes.
          </p>
        </div>

        <div className="members-container">
          <div className="group-name">
            <h1>(G)-IDLE</h1>
          </div>
          <div className="member">
            <img
              src="https://i.pinimg.com/564x/06/98/73/069873f1dc7d1b950bbabf6655b78fee.jpg"
              alt="miyeon.png"
              class=""
            />
            <Link className="linka" to="/MinnieProfile">
              Miyeon
            </Link>
          </div>
          <div className="member">
            <img
              src="https://i.pinimg.com/564x/ca/24/51/ca245136bb76500921b4312697e8b302.jpg"
              alt="minnie.png"
              class=""
            />
            <Link className="linka" to="/MinnieProfile">
              Minnie
            </Link>
          </div>

          <div className="member">
            <img
              src="https://i.pinimg.com/564x/24/8f/25/248f257e408b2fa028fada0efbf17949.jpg"
              alt="soyeon.png"
              class=""
            />
            <Link className="linka" to="/SoyeonProfile">
              Soyeon
            </Link>
          </div>

          <div className="member">
            <img
              src="https://i.pinimg.com/736x/ee/f7/5e/eef75ed9ca63cc437061b0661edd5a8a.jpg"
              alt="yuqi.png"
              class=""
            />
            <Link className="linka" to="/YuqiProfile">
              Yuqi
            </Link>
          </div>
          <div className="member">
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

        <div className="fun-fact">
          <h1>FUN FACTS ABOUT (G)-IDLE!</h1>
        </div>
        <div className="trivia-container-group">
          <Slider className="card-trivia" {...settings}>
            <div>
              <Card sx={{ maxWidth: 250 }} elevation={1}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Did you know?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    In an interview with The Star, group leader Soyeon revealed
                    that the name "Idle" (아이들) came to her when she was
                    composing the "Idle Song".
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
                    The name (Idle) received mixed reactions in South Korea and
                    internationally since "아이들" (aideul) means "children",
                    and "idle" in English refers to someone who avoids work
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
                    The group was renamed (G)I-dle, with the "I" standing for
                    individuality, the hyphen showing that the name has been
                    divided into two parts, and "Dle" (deul) as the plural form
                    of "I" in Korean to indicate a group of six different
                    personalities gathering together.
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
                    Soyeon was a female trainee who represented Cube
                    Entertainment in the survival show Produce 101.
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
                    Miyeon previously trained under YG Entertainment between
                    2010 and 2015, leaving the company after unknown
                    complications regarding her debut with Blackpink and
                    attending a vocal academy.
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
                    In 2022, (G)I-dle tops the annual NetEase Cloud Music chart
                    in China, recorded more than 1 million total sales for two
                    albums, I Never Die and I Love, and sold a whopping 20
                    million yuan (approximately 3.7 billion won in Korean
                    currency)
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
                    (G)I-dle have been recognized for their brand recognition
                    and marketing power, topping the "Girl Group Brand Power
                    Ranking" published by the Korean Business Research Institute
                    in June and September 2018.
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
                    In febuary 2020, (G)I-dle surpassed 500 million streams on
                    Spotify, becoming the first fourth-generation K-pop girl
                    group to reach this mark.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Slider>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const itemData = [
  {
    img: "https://i.pinimg.com/564x/42/ae/5f/42ae5fe4dbb2ded784f9ea6f39b97c69.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/f9/88/56/f98856a9e169b80ac4a6299f512abef3.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/b6/fe/0f/b6fe0f8a8f021433e64cb881a38d65b9.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/f8/ad/c1/f8adc1c3cc17be53d2fb892e4d5430ad.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/fe/88/81/fe88812a510923c341ab8ebeaefd7349.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/41/e7/e9/41e7e9e374fc15d223dbacab2f8bdadc.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/8e/28/d4/8e28d41e8f28cb5708aed7d4c974b748.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/f6/18/58/f618585386b5c2aac06d53151f0522de.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/b4/2f/e2/b42fe211b6bede6343d25de73437ecbe.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/43/58/39/43583987c3da4facd5083c14670549ca.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/1d/fe/23/1dfe23250153ba0313652fd21d956bec.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/ad/98/5b/ad985b57a0732193b3fc9869a5762019.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default GidleProfile;
