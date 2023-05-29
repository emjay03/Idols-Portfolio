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

function TzuyuProfile() {
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
              src="https://pbs.twimg.com/media/FmMwRc2aUAE1WnP?format=jpg&name=4096x4096"
              alt="tzuyu.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>TWICE Tzuyu</h1>
            <p>
              Chou Tzu-yu (Chinese: 周子瑜; Pe̍h-ōe-jī: Chiu Chú-jû, born 14 June
              1999), known mononymously as Tzuyu (Korean: 쯔위, Korean
              pronunciation: [t͈sɯ.ɥi]), is a Taiwanese singer based in South
              Korea. She is the only Taiwanese member of the girl group Twice,
              formed by JYP Entertainment in 2015. Tzuyu was born in the East
              District of Tainan, Taiwan on 14 June 1999 to self-made
              entrepreneurs. She started dancing from a young age and trained at
              a dance academy.
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
                  She was born in Tainan, Taiwan.
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
                  TZUYU has an older brother.
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
                  She comes from a wealthy family, her parents own a chain of
                  dermatology clinics in southern Taiwan, her mom also owns 2
                  coffee shops.
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
                  TZUYU’s English name is Sally Chou.
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
                  She was discovered by JYP at the MUSE Performing Arts Workshop
                  in Tainan in 2012, and went to South Korea on November 15 to
                  start her training.
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
                  Tzuyu was not meant to appear on Sixteen but she replaced
                  Lena. (Former JYP trainee)
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
                  She sleeps the earliest and wakes up the earliest.
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
                  Her nicknames are “Chocolate” because of her dark skin,
                  “Chewy” and “Yoda”.
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
            src="https://pbs.twimg.com/media/FmCfCBwacAYm2gV?format=jpg&name=4096x4096"
            alt="jeongyeon.png"
            class=""
          />
          <Link className="linka" to="/JeongyeonProfile">
            Jeonyeon
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
      </div>
      <div className="members-list">
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

        <div className="members">
          <img
            src="https://pbs.twimg.com/media/FmHpbAMagAEATCF?format=jpg&name=large"
            alt="Mina.png"
            class=""
          />
          <Link className="linka" to="/MinaProfile">
            Mina
          </Link>
        </div>

        <div className="members">
          <img
            src="https://pbs.twimg.com/media/FmMwEURagAEI1-V?format=jpg&name=4096x4096"
            alt="tzuyu.png"
            class=""
          />
          <Link className="linka" to="/TzuyuProfile">
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
    img: "https://i.pinimg.com/564x/a6/7d/61/a67d614c2aecad5847365b4083895e28.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/57/6f/46/576f46d671a3ad93e23c2b16e63d8d67.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/31/19/ce/3119ce579e6c9c8e4f67245f8bc4fa18.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/76/cd/e4/76cde44d0c81302439980e5a29f0e8f6.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/51/51/67/51516789e1d0ba798f11aa3c9df0981f.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/e2/5d/f7/e25df79ddac3e9dd31f9bf5a254502e5.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/04/4a/27/044a27f89050cf69cda892752aae0095.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/a7/63/a8/a763a85ff2611d29b1e48e306ccedf1d.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/4c/af/ab/4cafab861419d9ea21c7c6d1c5c3a07f.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/43/25/55/43255598df19c77a841a65bdce4cfb1b.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/7e/69/25/7e6925a5900f74d451534f6e1dd1fee1.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/aa/60/c1/aa60c1c61ef87bcc56837382edc0713a.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default TzuyuProfile;
