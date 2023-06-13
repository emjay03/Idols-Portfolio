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

function TwiceProfile() {
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
    instagram: "twicetagram",
    twitter: "JYPETWICE",
    facebook: "JYPETWICE",
    youtube: "@TWICE",
  };

  return (
    <div>
      <Header />
      <div className="grid-container">
        <div className="group-banner">
          <img
            src="https://i.pinimg.com/originals/5a/44/84/5a4484720cd9933dd36d9970bb527b60.jpg"
            alt="twice-photo"
            class="group-photo"
          />
        </div>

        <div className="group-name">
          <h1>TWICE</h1>
        </div>

        <div className="members-container">
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
              src="https://i.pinimg.com/564x/c0/d8/28/c0d828dee356d1897ce29562feaacf27.jpg"
              alt="mina.png"
              class=""
            />
            <Link className="linka" to="/MinaProfile">
              Mina
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
        </div>

        <div className="card-information">
          <Card sx={{ maxWidth: 400 }} elevation={2}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                TWICE
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Current state: active<br></br>
                JYP Entertainment: Oct 20, 2015-present<br></br>
                Warner Music Japan: Jan 1, 2017-present<br></br>
                Republic Records: Jan 1, 2020-present<br></br>
                Debut: Oct 20, 2015<br></br>
                Debut to 1st win: 198 days<br></br>
                Active years: 2015-present<br></br>
                Country: South Korea<br></br>
                Fandom: ONCE
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

        <div className="merchandise">
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f1f9590-e7a4-497b-aaf5-4c0c947ac009/ddz8buj-d659c957-6d53-4ef8-a7a6-76aad7c63aa8.png/v1/fill/w_1920,h_1736,strp/twice_logo_by_mimilevi_ddz8buj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTczNiIsInBhdGgiOiJcL2ZcLzVmMWY5NTkwLWU3YTQtNDk3Yi1hYWY1LTRjMGM5NDdhYzAwOVwvZGR6OGJ1ai1kNjU5Yzk1Ny02ZDUzLTRlZjgtYTdhNi03NmFhZDdjNjNhYTgucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.uHh7Vl2wGi2e9fwrpZh3TsP01qh_CEDZStEpO63PxQY"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  LOGO
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image="https://th.bing.com/th/id/OIP.skDgYulldarUeIYGzI7IoQHaHa?pid=ImgDet&rs=1"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  LIGHTSTICK
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="about-group">
          <h1>About TWICE</h1>
          <p>
            TWICE (트와이스) is a nine-member girl group under JYP
            Entertainment. They were formed through the competition reality show
            SIXTEEN and officially debuted on October 20, 2015 with the mini
            album The Story Begins. In 2015, Park Jin Young announced that the
            new JYP girl group will be formed by the survival reality show
            SIXTEEN, where sixteen JYP trainees would compete to debut in the
            seven-member girl group TWICE. The show started on May 5 and ended
            with Nayeon, Jeongyeon, Dahyun, Sana, Jihyo, Mina, and Chaeyoung.
            During the finale, Park announced that he will add two more members
            into the group, making it a nine-member girl group. By audience
            vote, Tzuyu was added, and by Park's choice, Momo was added, thus
            starting the beginning of TWICE. On October 7, 2015, JYP launched
            the group's official website and announced on social media that the
            group would debut with the mini album The Story Begins with "Like
            Ooh-Ahh" as the title track. On October 20, the album and the song's
            music video were released online on October 20 and through the Naver
            "V LIVE" App. The group held their debut showcase the same day,
            where they performed "Like Ooh-Ahh" along with dance tracks "Going
            Crazy" and "Do It Again". The title track's music video hit 50
            million views within five months of their debut and became the
            most-viewed debut music video for any K-pop group, later becoming
            one of the first K-pop group to have their debut music video pass
            100 million views. TWICE rose to fame in 2016 with their single
            "Cheer Up": the song charted at #1 on the Gaon Digital Chart and
            became the best performing single of the year. TWICE made their
            Japan debut on June 28, 2017 and became the first Korean girl group
            that earned Platinum certification by the Recording Industry
            Association of Japan (RIAJ). TWICE made history as the first female
            Kpop to hold a Japanese dome tour, named Twice Dome Tour 2019
            "#Dreamday". with a total audience of 220,000 during five shows in
            Osaka, Tokyo and Nagoya was held in March and April 2019. On April
            22 2019 they released their seventh EP "Fancy You". The release of
            Fancy You made Twice the best-selling Korean girl group of all time
            with a total of 3,750,000 copies sold from their twelve Korean
            releases, surpassing the twenty-year-old record of S.E.S. The group
            released their first official English-language single, "The Feels",
            on October 1, 2021. "The Feels" debuted at number 83 on the
            Billboard Hot 100, marking the group's first appearance on the
            chart. The song also made its way to the UK Singles Chart, where it
            peaked at number 80.
          </p>
        </div>
        <div className="fun-fact">
          <h1>FUN FACTS ABOUT TWICE!</h1>
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
                    She was discovered by JYP at the MUSE Performing Arts
                    Workshop in Tainan in 2012, and went to South Korea on
                    November 15 to start her training.
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

export default TwiceProfile;
