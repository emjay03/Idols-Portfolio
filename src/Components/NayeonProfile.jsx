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

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function NayeonProfile() {
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
              src="https://pbs.twimg.com/media/FmCe725aUAA6Tcx?format=jpg&name=4096x4096"
              alt="nayeon.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>TWICE Nayeon</h1>
            <p>
              Im Na-yeon (Korean: 임나연; born September 22, 1995), known
              mononymously as Nayeon, is a South Korean singer. She became a
              member of the South Korean girl group Twice, under JYP
              Entertainment, in 2015 as a winning contestant of the reality
              survival television show Sixteen. In 2022, her eponymous debut
              extended play (EP), Im Nayeon, peaked at number 7 on the US
              Billboard 200, making her the first South Korean soloist to enter
              the chart's top 10.
            </p>
          </div>
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
                  She has a younger sister named Im Seo-Yeon.
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
                  When she was a kid, she entered a child model contest and got
                  cast by JYP. At the time, her mom refused, but 10 years later,
                  in 2010, she secretly entered a JYP open audition and passed.
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
                  NAYEON was chosen for JYP’s girl group 6mix but they disbanded
                  and never debuted.
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
                  She is a big fangirl of F(x) and Krystal, and SNSD’s Taeyeon.
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
                  She is also a huge fan of Oh My Girl.
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
                  NAYEON was the first Sixteen member to be announced and also
                  the first member to be confirmed in Twice.
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
                  Her nickname is MC Rail. (IDOL ROOM ep 10)
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
                  Her representative color is Sky Blue.
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
            src="https://pbs.twimg.com/media/FmCfCBwacAYm2gV?format=jpg&name=4096x4096"
            alt="jeongyeon.png"
            class=""
          />
          <Link className="linka" to="/JeongyeonProfile">
            Jeongyeon
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
    img: "https://i.pinimg.com/564x/f2/ff/a0/f2ffa087a39ae5dcd0f9d9df439cbda5.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/c4/74/d4/c474d43288088f1c902db5eded700708.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/5e/6e/a7/5e6ea70977fde1ce876c24004858fb43.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/9c/fb/d7/9cfbd7ce916b2583ae2826b094e7f629.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/a9/92/a5/a992a5e31bb9fc7a6bb6972a3706e309.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/be/57/fa/be57fa6265f975db428fbf5a3303c187.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/1a/43/53/1a43538f2cb9c64ff869482780e72acf.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/17/48/aa/1748aaa71f5a9e1cac511f501279f528.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/b3/75/6d/b3756d65e9a014bfa5b19aa425f7ebb2.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/44/6a/bd/446abd3fc4d1aec29b8c85d23956d4a1.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/d7/16/cd/d716cd28b7e744f58cbfdd1129f7bd93.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/cb/9d/75/cb9d7556235821402709b4185dba0908.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default NayeonProfile;
