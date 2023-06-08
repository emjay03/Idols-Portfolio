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

function YunProfile() {
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
    instagram: "chaeyo.0",
    twitter: "JYPETWICE",
    facebook: "JYPETWICE",
    youtube: "@TWICE",
  };

  return (
    <div>
      <Header />
      <div className="itzy-cover-photo">
        <div class="profile-info">
          <div className="profile-pic">
            <img
              src="https://i.pinimg.com/564x/63/3d/1a/633d1abe6ea8f710e189118e4d5b3bc7.jpg"
              alt="yuna.png"
              class="profile-img"
            />
          </div>

          <div className="paragraph">
            <h1>ITZY Yuna</h1>
            <p>
              Yuna (유나) is a South Korean singer under JYP Entertainment. She
              is best known as the visual and maknae of the girl group ITZY. In
              2016, Yuna attended a music festival together with her sister.
              There, she was scouted by an agent from JYP who asked if she would
              be interested to audition for the company. After passing the
              audition, she went on to train for three years. In 2019, Yuna was
              revealed to be one of the members of JYP's upcoming girl group.
              She eventually made her official debut on February 12, 2019.
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
                  Stage Name: Yuna (유나)<br></br>
                  Birth Name: Shin Yu Na (신유나)<br></br>
                  English Name: Hussey Shin<br></br>
                  Position: Lead Rapper, Lead Dancer, Sub Vocalist, Visual,
                  Maknae<br></br>
                  Birthday: December 9, 2003<br></br>
                  Zodiac Sign: Sagittarius<br></br>
                  Chinese Zodiac Sign: Goat<br></br>
                  Height: 170 cm (5’7’’)<br></br>
                  Weight: 46.8 kg (103 lbs)<br></br>
                  Blood Type: A<br></br>
                  MBTI Type: ENFP<br></br>
                  Nationality: Korean
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
                  She has an older sister.
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
                  She attended Suwon Hwayang Elementary School (graduated),
                  Yeongbok Girls’ Middle School (graduated) & Hanlim
                  Entertainment Arts High School (Practical Dance Department /
                  student)
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
                  She appeared in BTS‘ Highlight Reels (She was Jungkook‘s pair)
                  (2017).
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
                  Yuna used to wear braces.
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
                  Fans say she looks like PRISTIN‘s Kyulkyung.
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
                  She trained for 3 years.
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
                  Her favorite color is Pink.
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
                  Personality: Extroverted.
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
            https://i.pinimg.com/564x/f3/10/d9/f310d953f950239e0d851a0e6aa0677a.jpg"
            alt="Yeji.png"
            class=""
          />
          <Link className="linka" to="/YejiProfile">
            Yeji
          </Link>
        </div>

        <div className="members">
          <img
            src="
            https://i.pinimg.com/564x/5a/bf/3f/5abf3f32330948bdf5a844bfd5a0896c.jpg"
            alt="lia.png"
            class=""
          />
          <Link className="linka" to="/LiaProfile">
            LiA
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/18/4b/82/184b824a4854b7a11db0a24b0f7e7a8b.jpg"
            alt="ryujin.png"
            class=""
          />
          <Link className="linka" to="/RyujinProfile">
            Ryujin
          </Link>
        </div>

        <div className="members">
          <img
            src="https://i.pinimg.com/564x/df/6a/9c/df6a9c672c49c47075fd44f6b378349c.jpg"
            alt="chaeryoung.png"
            class=""
          />
          <Link className="linka" to="/ChaeryoungProfile">
            Chaeryoung
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
    img: "https://i.pinimg.com/564x/d8/14/2a/d8142a4d900b80d223061eeaba857e58.jpg",
    title: "Chaeyoung 1",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/88/a2/06/88a206e9d839592543a6d8574f5c6086.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/c4/15/7b/c4157b1eef7e5ce380386903b1000739.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/f6/50/b1/f650b140096adcf1eb7bd47aa22630a2.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/5e/ab/05/5eab054dab0b3b2337979c9d39d8d922.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/ba/e9/d1/bae9d1f437aeed6e5b9b45aea958977f.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/4e/d8/5b/4ed85baaf84e74ca8ba02f3b4777b28b.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/86/6e/54/866e542316f4656a4ba00e4bb202c499.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/24/52/b0/2452b067b171b5a17c0077238f4df2b9.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/ac/c1/55/acc1550c3087004f8f015cb0d86fa7d9.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/d5/50/29/d5502919f0e7432499a19666915f04ae.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/3c/46/4e/3c464e7dfd40e8767fd5d141e9460ee5.jpg",
    title: "Bike",
    cols: 2,
  },
];

export default YunProfile;
