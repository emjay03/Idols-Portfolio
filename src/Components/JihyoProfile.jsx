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

function JihyoProfile() {
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
              src="https://pbs.twimg.com/media/FmHpV14acAELFke?format=jpg&name=large"
              alt="jihyo.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>TWICE Jihyo</h1>
            <p>
              Park Ji-hyo (Korean: 박지효; born Park Ji-soo on February 1,
              1997), known mononymously as Jihyo, is a South Korean singer. She
              is the leader and vocalist of the South Korean girl group Twice,
              formed by JYP Entertainment in 2015. Jihyo was born on February 1,
              1997, in Guri, Gyeonggi Province, South Korea as Park Ji-soo. Her
              younger sister, Lee Ha-eum (born Park Ji-young) has been modeling
              and debuting as a rookie actress.
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
                  She was born in Guri, Gyeonggi-do, South Korea.
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
                  JIHYO has 2 younger sisters, Seoyeon (born in 2008) and
                  Jiyoung (born in 2002).
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
                  She became a JYP trainee when she was a third grader, after
                  she won the 2nd place in a contest on Junior Naver for a child
                  role.
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
                  JIHYO is the Twice member who trained the most. She trained
                  for 10 years.
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
                  She trained with WG, 2pm, 2am, miss A, Got7 and literally
                  everyone in JYP knows her.
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
                  JIHYO was voted leader by the members and not JYP himself (by
                  anonymous voting).
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
                  Her real name is Park Jisoo. She legalized her name to Park
                  Jihyo right before Sixteen.
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
                  She is nicknamed “Hyo-mas” or “Thomas the train” for her big
                  eyes and she is able to mimic Thomas.
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
    img: "https://i.pinimg.com/564x/35/c3/22/35c32272d50416e4f72318b759deae48.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/4e/27/d0/4e27d0a42159666b34ea7b841c14850d.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/8e/2e/54/8e2e5461e1a06c2d34ed1ecc673f8859.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/5b/77/83/5b7783cae084cb9911c15b919e0aea7f.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/3e/a6/ee/3ea6ee4ee7170a01a0962fbdfd30436b.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/54/dd/10/54dd10d1c6651d8863a219277efa5211.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/3c/c1/9d/3cc19dd9c480fef7690aa3504bcb8ac4.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/94/ba/29/94ba298e06874e09579b499a7d1fe2c8.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/8f/f9/e6/8ff9e6809da84abc122969f4f3b090ad.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/6e/17/28/6e172881a3abf71a31f0a2afdfb58b1d.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/5e/76/d3/5e76d3577bc9c7e273535fe18f2db78c.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/ae/a6/e8/aea6e836b90f6366bb3715288e5f6768.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default JihyoProfile;
