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

function LessearafimProfile() {
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
            src="https://i.pinimg.com/originals/5a/44/84/5a4484720cd9933dd36d9970bb527b60.jpg"
            alt="twice-photo"
            class="group-photo"
          />
        </div>

        <div className="card-information">
          <Card sx={{ maxWidth: 400 }} elevation={2}>
            <CardContent>
              <CardMedia
                component="img"
                height="300"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/LE_SSERAFIM_logo.svg/1920px-LE_SSERAFIM_logo.svg.png"
                alt="logo.png"
              />
              <Typography gutterBottom variant="h4" component="div">
                LE SSERAFIM
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Current state: active<br></br>
                Source Music: Mar 25, 2022-present<br></br>
                EMI Records Japan: May 2, 2022-present<br></br>
                Geffen Records: May 2, 2022-present<br></br>
                Debut: May 2, 2022<br></br>
                Debut to 1st win: 8 days<br></br>
                Active years: 2022-present<br></br>
                Country: South Korea<br></br>
                Fandom: FEARNOT
              </Typography>
              <CardMedia
                component="img"
                height="300"
                image="https://pbs.twimg.com/media/FqOUE2mXgAMiPW4.jpg"
                alt="green iguana"
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
          <h1>About LE SSERAFIM</h1>
          <p>
            LE SSERAFIM (르세라핌) is a five-member girl group under Source
            Music. They debuted on May 2, 2022. Their name is created by the
            anagram of 'I'm Fearless', and it implies self-confidence and strong
            will to move forward without being swayed by the world's gaze. On
            April 4, 2022 Sakura was introduced as the group's first member,
            followed by Kim Garam on April 5, Hong Eunchae on April 6, Kim
            Chaewon on April 7, Kazuha on April 8, and Huh Yunjin on April 9. LE
            SSERAFIM debuted with their first mini album "FEARLESS" on May 2,
            2022. On May 20, 2022, just eighteen days after their debut, Source
            Music announced that member Kim Garam would be on hiatus after being
            embroiled in bullying accusations. This meant that LE SSERAFIM would
            be promoting as a five-member group for the time being. On July 20,
            2022, HYBE and Source Music announced that they have terminated
            Garam's contract, finalizing her departure from the group. Sakura
            made her acting debut in the movie Ano Hito Ano Hi in 2011. The same
            year, she joined the Japanese idol group HKT48 as a first generation
            trainee. She was promoted to a full member of HKT48 Team H in 2012
            and transferred to HKT48 Team KIV in 2014. After being with the
            group for 10 years, Sakura officially graduated on June 27, 2021.
            Sakura, Kim Chae-won and Huh Yun-jin participated in the reality
            competition series Produce 48 in 2018. Yunjin represented Pledis
            Entertainment, which at that time wasn't owned by Hybe Corporation,
            the parent company of Source Music before May 2020, while Chaewon
            represented Woollim Entertainment. After finishing in second and
            tenth place, respectively, Sakura and Chaewon were named to the
            final lineup of the show's project girl group Iz*One, promoting as
            members until its disbandment on April 29, 2021. Yunjin finished in
            26th place and was eliminated in episode 11. Prior to joining the
            group, Kazuha was a professional ballerina, and after passing an
            audition, she was personally scouted by Big Hit Music founder Bang
            Si-hyuk during her studies at Dutch National Ballet Academy in the
            Netherlands. Kazuha also previously attended the Bolshoi Academy in
            Moscow, Russia and the Royal Ballet School in the United Kingdom.
            Hong Eun-chae was a former student at Def Dance School for two
            years. She previously auditioned for JYP Entertainment and Pledis
            Entertainment before joining Source Music in 2021.
          </p>
        </div>

        <div className="members-container">
          <div className="group-name">
            <h1>Le Sserafim</h1>
          </div>
          <div className="member">
            <img
              src="https://i.pinimg.com/564x/c7/d6/cb/c7d6cbef292054b76373dbb410b39127.jpg"
              alt="chaewon.png"
              class=""
            />
            <Link className="linka" to="chaewon">
              Chaewon
            </Link>
          </div>
          <div className="member">
            <img
              src="https://i.pinimg.com/564x/bf/11/5d/bf115d4352fcbaef6e8003f8f1265f3e.jpg"
              alt="sakura.png"
              class=""
            />
            <Link className="linka" to="sakura">
              Sakura
            </Link>
          </div>

          <div className="member">
            <img
              src="https://i.pinimg.com/564x/b6/22/33/b62233577f8013b5966bf3e13c58cd1a.jpg"
              alt="yunjin.png"
              class=""
            />
            <Link className="linka" to="yunjin">
              Yunjin
            </Link>
          </div>

          <div className="member">
            <img
              src="https://i.pinimg.com/564x/46/a1/9e/46a19e4a4c30d1099d439f6ca31d1b25.jpg"
              alt="kazuha.png"
              class=""
            />
            <Link className="linka" to="kazuha">
              Kazuha
            </Link>
          </div>

          <div className="member">
            <img
              src="https://i.pinimg.com/564x/ad/6c/18/ad6c182f9ddf3b2f4fc5ffee3b755f2d.jpg"
              alt="eunchae.png"
              class=""
            />
            <Link className="linka" to="eunchae">
              Eunchae
            </Link>
          </div>
        </div>

        <div className="fun-fact">
          <h1>FUN FACTS ABOUT LE SSERAFIM!</h1>
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
                    Twice was formed through survival show called sixteen.
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
                    The tallest in Twice is Tzuyu at 169cm. The second is
                    Jungyeon at 167cm.
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
                    The first music show that Twice watched together was 151101
                    inkigayo
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
                    Twice's shortest member is Chaeyoung 158cm.
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
                    Cheer Up won Song of the year and twice's first daesang
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
                    TWICE has won 107 awards and received 251 nominations.
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
                    Twice debut song is Like Ooh-Ahh
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

export default LessearafimProfile;
