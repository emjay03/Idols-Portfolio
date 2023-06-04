import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "../Include/Header";
import Footer from "../Include/Footer";
function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://i.pinimg.com/564x/00/38/c3/0038c375f80f5102bc8390bc344dfffb.jpg",
    "https://i.pinimg.com/564x/c3/9d/ac/c39dacd626fccf1829f5fcbbe4be3193.jpg",
    "https://i.pinimg.com/564x/ec/10/1e/ec101eb837d9bc6d4ead242ee0e885dc.jpg",
  ];
  const intervalDuration = 3000; // Set the duration between image changes (in milliseconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    return () => {
      clearInterval(interval);
    };
  }, [images.length, intervalDuration]);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1204,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="container">
      <Header />
      <div className="main-container">
        <div className="banner">
          <div className="video-banner">
            <iframe
              height="400"
              src="https://www.youtube.com/embed/k6xGVr1SzW0"
              title="YouTube Video"
              frameborder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="image-banner">
            <div className="image-1">
              <img src={images[currentImageIndex]} alt="Banner Images" />
            </div>
          </div>
        </div>
        <div className="trending-grp">
          <div className="trending-name">
            <h2>
              TRENDING <span className="grp">GROUPS</span>
            </h2>
          </div>
          {/* first layer of trending grps */}
          <div>
            <div className="slider-container">
              <Slider className="slider-card" {...settings}>
                <div className="card-profiler">
                  <Card className="card-profile">
                    <CardMedia
                      className="card-image"
                      image="https://i.pinimg.com/564x/90/0e/f7/900ef71e3a8aaede586588974fa50115.jpg"
                      title="twice"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="grp-name"
                      >
                        <h1>TWICE</h1>
                      </Typography>
                      <Typography variant="body2" className="description">
                        <p>
                          Twice is a South Korean girl group formed by JYP
                          Entertainment. The group is composed of nine members:
                          Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun,
                          Chaeyoung, and Tzuyu. Twice was formed under the
                          television program Sixteen (2015) and debuted on
                        </p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="card-profiler">
                  <Card className="card-profile">
                    <CardMedia
                      className="card-image"
                      image="https://i.pinimg.com/564x/5b/a3/e0/5ba3e074437e9f2e51cfff2c67d1db77.jpg"
                      title="blackpink"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="grp-name"
                      >
                        <h1>BLACKPINK</h1>
                      </Typography>
                      <Typography variant="body2" className="description">
                        <p>
                          Blackpink (Korean: 블랙핑크; RR: Beullaekpingkeu,
                          stylized in all caps or as BLɅϽKPIИK) is a South
                          Korean girl group formed by YG Entertainment,
                          consisting of members Jisoo, Jennie, Rosé, and Lisa.
                        </p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="card-profiler">
                  <Card className="card-profile">
                    <CardMedia
                      sx={{ height: 190 }}
                      image="https://i.pinimg.com/564x/e9/f8/6b/e9f86b276616d91a25f6ba10616831e8.jpg"
                      title="g-idle"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="grp-name"
                      >
                        <h1>(G)-IDLE</h1>
                      </Typography>
                      <Typography variant="body2" className="description">
                        <p>
                          (G)I-dle (Korean: (여자)아이들; RR: Yeoja Aideul),
                          stylized in all caps, is a South Korean girl group
                          formed by Cube Entertainment in 2018. The group
                          consists of five members: Miyeon, Minnie, Soyeon, Yuqi
                          and Shuhua. Originally a sextet, Soojin left the
                          lineup on August 14, 2021.
                        </p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="card-profiler">
                  <Card className="card-profile">
                    <CardMedia
                      sx={{ height: 190 }}
                      image="https://i.pinimg.com/564x/d0/39/91/d03991496de8f53979b50785d9847aef.jpg"
                      title="le sserafim"
                    />
                    <CardContent className="Cardcontent">
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="grp-name"
                      >
                        <h1>LE SSERAFIM</h1>
                      </Typography>
                      <Typography variant="body2" className="description">
                        <p>
                          Le Sserafim is a South Korean girl group formed by
                          Source Music. The group consists of five members:
                          Sakura, Kim Chae-won, Huh Yun-jin, Kazuha, and Hong
                          Eun-chae. Originally a six-member group,
                        </p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="card-profiler">
                  <Card className="card-profile">
                    <CardMedia
                      sx={{ height: 190 }}
                      image="https://i.pinimg.com/564x/90/0e/f7/900ef71e3a8aaede586588974fa50115.jpg"
                      title="twice"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="grp-name"
                      >
                        <h1>TWICE</h1>
                      </Typography>
                      <Typography variant="body2" className="description">
                        <p>
                          Twice is a South Korean girl group formed by JYP
                          Entertainment. The group is composed of nine members:
                          Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun,
                          Chaeyoung, and Tzuyu. Twice was formed under the
                          television program Sixteen (2015) and debuted on
                          October 20, 2015, with the extended play (EP) The
                          Story Begins.
                        </p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="card-profiler">
                  <Card className="card-profile">
                    <CardMedia
                      sx={{ height: 190 }}
                      image="https://i.pinimg.com/564x/90/0e/f7/900ef71e3a8aaede586588974fa50115.jpg"
                      title="twice"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="grp-name"
                      >
                        <h1>TWICE</h1>
                      </Typography>
                      <Typography variant="body2" className="description">
                        <p>
                          Twice is a South Korean girl group formed by JYP
                          Entertainment. The group is composed of nine members:
                          Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun,
                          Chaeyoung, and Tzuyu. Twice was formed under the
                          television program Sixteen (2015) and debuted on
                          October 20, 2015, with the extended play (EP) The
                          Story Begins.
                        </p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="card-profiler">
                  <Card className="card-profile">
                    <CardMedia
                      sx={{ height: 190 }}
                      image="https://i.pinimg.com/564x/90/0e/f7/900ef71e3a8aaede586588974fa50115.jpg"
                      title="twice"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="grp-name"
                      >
                        <h1>TWICE</h1>
                      </Typography>
                      <Typography variant="body2" className="description">
                        <p>
                          Twice is a South Korean girl group formed by JYP
                          Entertainment. The group is composed of nine members:
                          Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun,
                          Chaeyoung, and Tzuyu. Twice was formed under the
                          television program Sixteen (2015) and debuted on
                          October 20, 2015, with the extended play (EP) The
                          Story Begins.
                        </p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="card-profiler">
                  <Card className="card-profile">
                    <CardMedia
                      sx={{ height: 190 }}
                      image="https://i.pinimg.com/564x/90/0e/f7/900ef71e3a8aaede586588974fa50115.jpg"
                      title="twice"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="grp-name"
                      >
                        <h1>TWICE</h1>
                      </Typography>
                      <Typography variant="body2" className="description">
                        <p>
                          Twice is a South Korean girl group formed by JYP
                          Entertainment. The group is composed of nine members:
                          Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun,
                          Chaeyoung, and Tzuyu. Twice was formed under the
                          television program Sixteen (2015) and debuted on
                          October 20, 2015, with the extended play (EP) The
                          Story Begins.
                        </p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
              </Slider>
            </div>
          </div>
          {/* second layer of trending grps */}
          <div>
            <div className="slider-container">
              <Slider className="slider-card" {...settings}>
                <div className="card-profiler">
                  <Card className="card-profile">
                    <CardMedia
                      sx={{ height: 190 }}
                      image="https://i.pinimg.com/564x/90/0e/f7/900ef71e3a8aaede586588974fa50115.jpg"
                      title="twice"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="grp-name"
                      >
                        <h1>TWICE</h1>
                      </Typography>
                      <Typography variant="body2" className="description">
                        <p>
                          Twice is a South Korean girl group formed by JYP
                          Entertainment. The group is composed of nine members:
                          Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun,
                          Chaeyoung, and Tzuyu. Twice was formed under the
                          television program Sixteen (2015) and debuted on
                          October 20, 2015, with the extended play (EP) The
                          Story Begins.
                        </p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="card-profiler">
                  <Card className="card-profile">
                    <CardMedia
                      sx={{ height: 190 }}
                      image="https://i.pinimg.com/564x/5b/a3/e0/5ba3e074437e9f2e51cfff2c67d1db77.jpg"
                      title="blackpink"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="grp-name"
                      >
                        <h1>BLACKPINK</h1>
                      </Typography>
                      <Typography variant="body2" className="description">
                        <p>
                          Blackpink (Korean: 블랙핑크; RR: Beullaekpingkeu,
                          stylized in all caps or as BLɅϽKPIИK) is a South
                          Korean girl group formed by YG Entertainment,
                          consisting of members Jisoo, Jennie, Rosé, and Lisa.
                        </p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="card-profiler">
                  <Card className="card-profile">
                    <CardMedia
                      sx={{ height: 190 }}
                      image="https://i.pinimg.com/564x/e9/f8/6b/e9f86b276616d91a25f6ba10616831e8.jpg"
                      title="g-idle"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="grp-name"
                      >
                        <h1>(G)-IDLE</h1>
                      </Typography>
                      <Typography variant="body2" className="description">
                        <p>
                          (G)I-dle (Korean: (여자)아이들; RR: Yeoja Aideul),
                          stylized in all caps, is a South Korean girl group
                          formed by Cube Entertainment in 2018. The group
                          consists of five members: Miyeon, Minnie, Soyeon, Yuqi
                          and Shuhua. Originally a sextet, Soojin left the
                          lineup on August 14, 2021.
                        </p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="card-profiler">
                  <Card className="card-profile">
                    <CardMedia
                      sx={{ height: 190 }}
                      image="https://i.pinimg.com/564x/d0/39/91/d03991496de8f53979b50785d9847aef.jpg"
                      title="le sserafim"
                    />
                    <CardContent className="Cardcontent">
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="grp-name"
                      >
                        <h1>LE SSERAFIM</h1>
                      </Typography>
                      <Typography variant="body2" className="description">
                        <p>
                          Le Sserafim is a South Korean girl group formed by
                          Source Music. The group consists of five members:
                          Sakura, Kim Chae-won, Huh Yun-jin, Kazuha, and Hong
                          Eun-chae. Originally a six-member group,
                        </p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="card-profiler">
                  <Card className="card-profile">
                    <CardMedia
                      sx={{ height: 190 }}
                      image="https://i.pinimg.com/564x/90/0e/f7/900ef71e3a8aaede586588974fa50115.jpg"
                      title="twice"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="grp-name"
                      >
                        <h1>TWICE</h1>
                      </Typography>
                      <Typography variant="body2" className="description">
                        <p>
                          Twice is a South Korean girl group formed by JYP
                          Entertainment. The group is composed of nine members:
                          Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun,
                          Chaeyoung, and Tzuyu. Twice was formed under the
                          television program Sixteen (2015) and debuted on
                          October 20, 2015, with the extended play (EP) The
                          Story Begins.
                        </p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="card-profiler">
                  <Card className="card-profile" sx={{ height: 480 }}>
                    <CardMedia
                      sx={{ height: 190 }}
                      image="https://i.pinimg.com/564x/90/0e/f7/900ef71e3a8aaede586588974fa50115.jpg"
                      title="twice"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="grp-name"
                      >
                        <h1>TWICE</h1>
                      </Typography>
                      <Typography variant="body2" className="description">
                        <p>
                          Twice is a South Korean girl group formed by JYP
                          Entertainment. The group is composed of nine members:
                          Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun,
                          Chaeyoung, and Tzuyu. Twice was formed under the
                          television program Sixteen (2015) and debuted on
                          October 20, 2015, with the extended play (EP) The
                          Story Begins.
                        </p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="card-profiler">
                  <Card className="card-profile" sx={{ height: 480 }}>
                    <CardMedia
                      sx={{ height: 190 }}
                      image="https://i.pinimg.com/564x/90/0e/f7/900ef71e3a8aaede586588974fa50115.jpg"
                      title="twice"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="grp-name"
                      >
                        <h1>TWICE</h1>
                      </Typography>
                      <Typography variant="body2" className="description">
                        <p>
                          Twice is a South Korean girl group formed by JYP
                          Entertainment. The group is composed of nine members:
                          Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun,
                          Chaeyoung, and Tzuyu. Twice was formed under the
                          television program Sixteen (2015) and debuted on
                          October 20, 2015, with the extended play (EP) The
                          Story Begins.
                        </p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="card-profiler">
                  <Card className="card-profile" sx={{ height: 480 }}>
                    <CardMedia
                      sx={{ height: 190 }}
                      image="https://i.pinimg.com/564x/90/0e/f7/900ef71e3a8aaede586588974fa50115.jpg"
                      title="twice"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="grp-name"
                      >
                        <h1>TWICE</h1>
                      </Typography>
                      <Typography variant="body2" className="description">
                        <p>
                          Twice is a South Korean girl group formed by JYP
                          Entertainment. The group is composed of nine members:
                          Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun,
                          Chaeyoung, and Tzuyu. Twice was formed under the
                          television program Sixteen (2015) and debuted on
                          October 20, 2015, with the extended play (EP) The
                          Story Begins.
                        </p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/* TRENDING ARTIST */}
        <div className="trending-grp">
          <div className="trending-name">
            <h2>
              TRENDING <span className="grp">ARTIST</span>
            </h2>
          </div>
          {/* first layer of trending artist */}
          <div className="slider-container">
            <Slider className="slider-card" {...settings}>
              <div className="card-profiler">
                <Card className="card-profile" sx={{ height: 480 }}>
                  <CardMedia
                    sx={{ height: 190 }}
                    image="https://i.pinimg.com/564x/a8/4c/03/a84c037facbceae8def8b08484040ca7.jpg"
                    title="sana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="grp-name"
                    >
                      <h1>Minatozaki Sana</h1>
                    </Typography>
                    <Typography variant="body2" className="description">
                      <p>
                        Sana Minatozaki, known mononymously as Sana, is a
                        Japanese singer based in South Korea. She is one of
                        three Japanese members of the South Korean girl group
                        Twice, formed in 2015 by JYP Entertainment
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">
                      <Link className="linka" to="/SanaProfile">
                        Learn More
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </div>
              <div className="card-profiler">
                <Card className="card-profile" sx={{ height: 480 }}>
                  <CardMedia
                    sx={{ height: 190 }}
                    image="https://i.pinimg.com/564x/a6/0b/77/a60b7777a00978fedb7e37e0f1b2639c.jpg"
                    title="mi-yeon"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="grp-name"
                    >
                      <h1>Choi Mi-yeon</h1>
                    </Typography>
                    <Typography variant="body2" className="description">
                      <p>
                        Cho Mi-yeon, better known mononymously as Miyeon, is a
                        South Korean singer and actress. She is the redirect
                        vocalist of the South Korean girl group I-dle under Cube
                        Entertainment, and voiced Ahri in the virtual K-pop girl
                        group K/DA
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Link className="linka" to="/MiyeonProfile">
                      Learn More
                    </Link>
                  </CardActions>
                </Card>
              </div>
              <div className="card-profiler">
                <Card className="card-profile" sx={{ height: 480 }}>
                  <CardMedia
                    sx={{ height: 190 }}
                    image="https://i.pinimg.com/736x/83/8e/b4/838eb4854ae7dce9a06ecb16a167b5cf.jpg"
                    title="lee sung kyung"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="grp-name"
                    >
                      <h1> Lee Sung Kyung</h1>
                    </Typography>
                    <Typography variant="body2" className="description">
                      <p>
                        instagram.com Lee Sung-kyung is a South Korean model,
                        actress and singer. She is best known for her roles in
                        television series Cheese in the Trap, The Doctors,
                        Weightlifting Fairy Kim Bok-joo, Dr. Romantic 2, and
                        Sh**ting Stars.
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
              <div className="card-profiler">
                <Card className="card-profile" sx={{ height: 480 }}>
                  <CardMedia
                    sx={{ height: 190 }}
                    image="https://i.pinimg.com/736x/6d/a4/be/6da4bebcd992eeeac2c9c725a2a04459.jpg"
                    title="chaewon"
                  />
                  <CardContent className="Cardcontent">
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="grp-name"
                    >
                      <h1>Kim Chae-won</h1>
                    </Typography>
                    <Typography variant="body2" className="description">
                      <p>
                        Kim Chae-won is a South Korean singer. She is the leader
                        of South Korean girl group Le Sserafim. She is also a
                        former member of the reality competition series Produce
                        48's resulting girl group Iz*One in 2018.
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">
                      <Link className="linka" to="/ChaewonProfile">
                        Learn More
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </div>
              <div className="card-profiler">
                <Card className="card-profile" sx={{ height: 480 }}>
                  <CardMedia
                    sx={{ height: 190 }}
                    image="https://i.pinimg.com/564x/af/46/4e/af464e1c588286cc35b5e90066f5d6f4.jpg"
                    title="chaeyoung"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="grp-name"
                    >
                      <h1>Son Chaeyoung</h1>
                    </Typography>
                    <Typography variant="body2" className="description">
                      <p>
                        Son Chae-young, known mononymously as Chaeyoung, is a
                        South Korean rapper and singer. She is a member of the
                        South Korean girl group Twice, formed by JYP
                        Entertainment. Chaeyoung decided she wanted to become a
                        singer before joining JYP Entertainment and took dance
                        lessons for over one year.
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">
                      <Link className="linka" to="/ChaeyoungProfile">
                        Learn More
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </div>
              <div className="card-profiler">
                <Card className="card-profile" sx={{ height: 480 }}>
                  <CardMedia
                    sx={{ height: 190 }}
                    image="https://i.pinimg.com/564x/9d/88/e9/9d88e9c2da836e5ae49c30eca223a9d5.jpg"
                    title="lia"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="grp-name"
                    >
                      <h1> LiA</h1>
                    </Typography>
                    <Typography variant="body2" className="description">
                      <p>
                        Twice is a South Korean girl group formed by JYP
                        Entertainment. The group is composed of nine members:
                        Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun,
                        Chaeyoung, and Tzuyu. Twice was formed under the
                        television program Sixteen (2015) and debuted on October
                        20, 2015, with the extended play (EP) The Story Begins.
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
              <div className="card-profiler">
                <Card className="card-profile" sx={{ height: 480 }}>
                  <CardMedia
                    sx={{ height: 190 }}
                    image="https://i.pinimg.com/564x/90/0e/f7/900ef71e3a8aaede586588974fa50115.jpg"
                    title="twice"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="grp-name"
                    >
                      <h1>TWICE</h1>
                    </Typography>
                    <Typography variant="body2" className="description">
                      <p>
                        Twice is a South Korean girl group formed by JYP
                        Entertainment. The group is composed of nine members:
                        Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun,
                        Chaeyoung, and Tzuyu. Twice was formed under the
                        television program Sixteen (2015) and debuted on October
                        20, 2015, with the extended play (EP) The Story Begins.
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
              <div className="card-profiler">
                <Card className="card-profile" sx={{ height: 480 }}>
                  <CardMedia
                    sx={{ height: 190 }}
                    image="https://i.pinimg.com/564x/90/0e/f7/900ef71e3a8aaede586588974fa50115.jpg"
                    title="twice"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="grp-name"
                    >
                      <h1>TWICE</h1>
                    </Typography>
                    <Typography variant="body2" className="description">
                      <p>
                        Twice is a South Korean girl group formed by JYP
                        Entertainment. The group is composed of nine members:
                        Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun,
                        Chaeyoung, and Tzuyu. Twice was formed under the
                        television program Sixteen (2015) and debuted on October
                        20, 2015, with the extended play (EP) The Story Begins.
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            </Slider>
          </div>
          {/* second layer of trending artist */}
          <div className="slider-container">
            <Slider className="slider-card" {...settings}>
              <div className="card-profiler">
                <Card className="card-profile" sx={{ height: 480 }}>
                  <CardMedia
                    sx={{ height: 190 }}
                    image="https://i.pinimg.com/564x/a8/4c/03/a84c037facbceae8def8b08484040ca7.jpg"
                    title="sana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="grp-name"
                    >
                      <h1>Minatozaki Sana</h1>
                    </Typography>
                    <Typography variant="body2" className="description">
                      <p>
                        Sana Minatozaki, known mononymously as Sana, is a
                        Japanese singer based in South Korea. She is one of
                        three Japanese members of the South Korean girl group
                        Twice, formed in 2015 by JYP Entertainment
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
              <div className="card-profiler">
                <Card className="card-profile" sx={{ height: 480 }}>
                  <CardMedia
                    sx={{ height: 190 }}
                    image="https://i.pinimg.com/564x/a6/0b/77/a60b7777a00978fedb7e37e0f1b2639c.jpg"
                    title="mi-yeon"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="grp-name"
                    >
                      <h1>Choi Mi-yeon</h1>
                    </Typography>
                    <Typography variant="body2" className="description">
                      <p>
                        Cho Mi-yeon, better known mononymously as Miyeon, is a
                        South Korean singer and actress. She is the redirect
                        vocalist of the South Korean girl group I-dle under Cube
                        Entertainment, and voiced Ahri in the virtual K-pop girl
                        group K/DA
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
              <div className="card-profiler">
                <Card className="card-profile" sx={{ height: 480 }}>
                  <CardMedia
                    sx={{ height: 190 }}
                    image="https://i.pinimg.com/736x/83/8e/b4/838eb4854ae7dce9a06ecb16a167b5cf.jpg"
                    title="lee sung kyung"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="grp-name"
                    >
                      <h1> Lee Sung Kyung</h1>
                    </Typography>
                    <Typography variant="body2" className="description">
                      <p>
                        instagram.com Lee Sung-kyung is a South Korean model,
                        actress and singer. She is best known for her roles in
                        television series Cheese in the Trap, The Doctors,
                        Weightlifting Fairy Kim Bok-joo, Dr. Romantic 2, and
                        Sh**ting Stars.
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
              <div className="card-profiler">
                <Card className="card-profile" sx={{ height: 480 }}>
                  <CardMedia
                    sx={{ height: 190 }}
                    image="https://i.pinimg.com/736x/6d/a4/be/6da4bebcd992eeeac2c9c725a2a04459.jpg"
                    title="chaewon"
                  />
                  <CardContent className="Cardcontent">
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="grp-name"
                    >
                      <h1>Kim Chae-won</h1>
                    </Typography>
                    <Typography variant="body2" className="description">
                      <p>
                        Kim Chae-won is a South Korean singer. She is the leader
                        of South Korean girl group Le Sserafim. She is also a
                        former member of the reality competition series Produce
                        48's resulting girl group Iz*One in 2018.
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
              <div className="card-profiler">
                <Card className="card-profile" sx={{ height: 480 }}>
                  <CardMedia
                    sx={{ height: 190 }}
                    image="https://i.pinimg.com/564x/af/46/4e/af464e1c588286cc35b5e90066f5d6f4.jpg"
                    title="chaeyoung"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="grp-name"
                    >
                      <h1>Son Chaeyoung</h1>
                    </Typography>
                    <Typography variant="body2" className="description">
                      <p>
                        Son Chae-young, known mononymously as Chaeyoung, is a
                        South Korean rapper and singer. She is a member of the
                        South Korean girl group Twice, formed by JYP
                        Entertainment. Chaeyoung decided she wanted to become a
                        singer before joining JYP Entertainment and took dance
                        lessons for over one year.
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">
                      <Link className="linka" to="/ChaeyoungProfile">
                        Learn More
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </div>
              <div className="card-profiler">
                <Card className="card-profile" sx={{ height: 480 }}>
                  <CardMedia
                    sx={{ height: 190 }}
                    image="https://i.pinimg.com/564x/9d/88/e9/9d88e9c2da836e5ae49c30eca223a9d5.jpg"
                    title="lia"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="grp-name"
                    >
                      <h1> LiA</h1>
                    </Typography>
                    <Typography variant="body2" className="description">
                      <p>
                        Twice is a South Korean girl group formed by JYP
                        Entertainment. The group is composed of nine members:
                        Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun,
                        Chaeyoung, and Tzuyu. Twice was formed under the
                        television program Sixteen (2015) and debuted on October
                        20, 2015, with the extended play (EP) The Story Begins.
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
              <div className="card-profiler">
                <Card className="card-profile" sx={{ height: 480 }}>
                  <CardMedia
                    sx={{ height: 190 }}
                    image="https://i.pinimg.com/564x/90/0e/f7/900ef71e3a8aaede586588974fa50115.jpg"
                    title="twice"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="grp-name"
                    >
                      <h1>TWICE</h1>
                    </Typography>
                    <Typography variant="body2" className="description">
                      <p>
                        Twice is a South Korean girl group formed by JYP
                        Entertainment. The group is composed of nine members:
                        Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun,
                        Chaeyoung, and Tzuyu. Twice was formed under the
                        television program Sixteen (2015) and debuted on October
                        20, 2015, with the extended play (EP) The Story Begins.
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
              <div className="card-profiler">
                <Card className="card-profile" sx={{ height: 480 }}>
                  <CardMedia
                    sx={{ height: 190 }}
                    image="https://i.pinimg.com/564x/90/0e/f7/900ef71e3a8aaede586588974fa50115.jpg"
                    title="twice"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="grp-name"
                    >
                      <h1>TWICE</h1>
                    </Typography>
                    <Typography variant="body2" className="description">
                      <p>
                        Twice is a South Korean girl group formed by JYP
                        Entertainment. The group is composed of nine members:
                        Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun,
                        Chaeyoung, and Tzuyu. Twice was formed under the
                        television program Sixteen (2015) and debuted on October
                        20, 2015, with the extended play (EP) The Story Begins.
                      </p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
