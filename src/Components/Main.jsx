import React, { useState, useEffect } from 'react';

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
 
 


function Main() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['https://i.pinimg.com/564x/00/38/c3/0038c375f80f5102bc8390bc344dfffb.jpg', 'https://i.pinimg.com/564x/c3/9d/ac/c39dacd626fccf1829f5fcbbe4be3193.jpg', 'https://i.pinimg.com/564x/ec/10/1e/ec101eb837d9bc6d4ead242ee0e885dc.jpg'];
  const intervalDuration = 3000; // Set the duration between image changes (in milliseconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    return () => {
      clearInterval(interval);
    };
  }, [images.length, intervalDuration]);

 
  return (
    <>
    
    <div className='main-container'>
   <div className="banner">
  <div className='video-banner'>
  <iframe
      width="620"
      height="400"
      src="https://www.youtube.com/embed/k6xGVr1SzW0"
      title="YouTube Video"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
  <div className='image-banner'>
    <div className='image-1'>
      <img src={images[currentImageIndex]} alt="Banner Image" />
       
    </div>
     
  </div>
</div>
 <div className='trending-grp'>
  <h2>TRENDING <span className='grp'>GROUPS</span></h2>
   <div className="container-card">
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://i.pinimg.com/564x/a8/4c/03/a84c037facbceae8def8b08484040ca7.jpg"
            title="sana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Minatozaki Sana
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sana Minatozaki, known mononymously as Sana, is a Japanese singer
              based in South Korea. She is one of three Japanese members of the
              South Korean girl group Twice, formed in 2015 by JYP Entertainment
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://i.pinimg.com/564x/a6/0b/77/a60b7777a00978fedb7e37e0f1b2639c.jpg"
            title="mi-yeon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Choi Mi-yeon
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cho Mi-yeon, better known mononymously as Miyeon, is a South
              Korean singer and actress. She is the redirect vocalist of the
              South Korean girl group I-dle under Cube Entertainment, and voiced
              Ahri in the virtual K-pop girl group K/DA
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://i.pinimg.com/736x/83/8e/b4/838eb4854ae7dce9a06ecb16a167b5cf.jpg"
            title="lee sung kyung"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lee Sung Kyung
            </Typography>
            <Typography variant="body2" color="text.secondary">
              instagram.com Lee Sung-kyung is a South Korean model, actress and
              singer. She is best known for her roles in television series
              Cheese in the Trap, The Doctors, Weightlifting Fairy Kim Bok-joo,
              Dr. Romantic 2, and Sh**ting Stars.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://i.pinimg.com/736x/6d/a4/be/6da4bebcd992eeeac2c9c725a2a04459.jpg"
            title="chaewon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Kim Chae-won
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Kim Chae-won is a South Korean singer. She is the leader of South
              Korean girl group Le Sserafim. She is also a former member of the
              reality competition series Produce 48's resulting girl group
              Iz*One in 2018.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        
      </div>

      <div className="container-card">
        
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://i.pinimg.com/564x/af/46/4e/af464e1c588286cc35b5e90066f5d6f4.jpg"
            title="chaeyoung"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Son Chaeyoung
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Son Chae-young, known mononymously as Chaeyoung, is a South Korean
              rapper and singer. She is a member of the South Korean girl group
              Twice, formed by JYP Entertainment. Chaeyoung decided she wanted
              to become a singer before joining JYP Entertainment and took dance
              lessons for over one year.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://i.pinimg.com/564x/9d/88/e9/9d88e9c2da836e5ae49c30eca223a9d5.jpg"
            title="lia"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              LiA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Son Chae-young, known mononymously as Chaeyoung, is a South Korean
              rapper and singer. She is a member of the South Korean girl group
              Twice, formed by JYP Entertainment. Chaeyoung decided she wanted
              to become a singer before joining JYP Entertainment and took dance
              lessons for over one year.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://i.pinimg.com/564x/9d/88/e9/9d88e9c2da836e5ae49c30eca223a9d5.jpg"
            title="lia"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              LiA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Son Chae-young, known mononymously as Chaeyoung, is a South Korean
              rapper and singer. She is a member of the South Korean girl group
              Twice, formed by JYP Entertainment. Chaeyoung decided she wanted
              to become a singer before joining JYP Entertainment and took dance
              lessons for over one year.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://i.pinimg.com/564x/9d/88/e9/9d88e9c2da836e5ae49c30eca223a9d5.jpg"
            title="lia"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              LiA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Son Chae-young, known mononymously as Chaeyoung, is a South Korean
              rapper and singer. She is a member of the South Korean girl group
              Twice, formed by JYP Entertainment. Chaeyoung decided she wanted
              to become a singer before joining JYP Entertainment and took dance
              lessons for over one year.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
  
    </div>
 
    <div className='trending-grp'>
  <h2>TRENDING <span className='grp'>ARTIST</span></h2>
   <div className="container-card">
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://i.pinimg.com/564x/a8/4c/03/a84c037facbceae8def8b08484040ca7.jpg"
            title="sana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Minatozaki Sana
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sana Minatozaki, known mononymously as Sana, is a Japanese singer
              based in South Korea. She is one of three Japanese members of the
              South Korean girl group Twice, formed in 2015 by JYP Entertainment
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://i.pinimg.com/564x/a6/0b/77/a60b7777a00978fedb7e37e0f1b2639c.jpg"
            title="mi-yeon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Choi Mi-yeon
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cho Mi-yeon, better known mononymously as Miyeon, is a South
              Korean singer and actress. She is the redirect vocalist of the
              South Korean girl group I-dle under Cube Entertainment, and voiced
              Ahri in the virtual K-pop girl group K/DA
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://i.pinimg.com/736x/83/8e/b4/838eb4854ae7dce9a06ecb16a167b5cf.jpg"
            title="lee sung kyung"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lee Sung Kyung
            </Typography>
            <Typography variant="body2" color="text.secondary">
              instagram.com Lee Sung-kyung is a South Korean model, actress and
              singer. She is best known for her roles in television series
              Cheese in the Trap, The Doctors, Weightlifting Fairy Kim Bok-joo,
              Dr. Romantic 2, and Sh**ting Stars.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://i.pinimg.com/736x/6d/a4/be/6da4bebcd992eeeac2c9c725a2a04459.jpg"
            title="chaewon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Kim Chae-won
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Kim Chae-won is a South Korean singer. She is the leader of South
              Korean girl group Le Sserafim. She is also a former member of the
              reality competition series Produce 48's resulting girl group
              Iz*One in 2018.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        
      </div>

      <div className="container-card">
        
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://i.pinimg.com/564x/af/46/4e/af464e1c588286cc35b5e90066f5d6f4.jpg"
            title="chaeyoung"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Son Chaeyoung
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Son Chae-young, known mononymously as Chaeyoung, is a South Korean
              rapper and singer. She is a member of the South Korean girl group
              Twice, formed by JYP Entertainment. Chaeyoung decided she wanted
              to become a singer before joining JYP Entertainment and took dance
              lessons for over one year.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://i.pinimg.com/564x/9d/88/e9/9d88e9c2da836e5ae49c30eca223a9d5.jpg"
            title="lia"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              LiA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Son Chae-young, known mononymously as Chaeyoung, is a South Korean
              rapper and singer. She is a member of the South Korean girl group
              Twice, formed by JYP Entertainment. Chaeyoung decided she wanted
              to become a singer before joining JYP Entertainment and took dance
              lessons for over one year.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://i.pinimg.com/564x/9d/88/e9/9d88e9c2da836e5ae49c30eca223a9d5.jpg"
            title="lia"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              LiA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Son Chae-young, known mononymously as Chaeyoung, is a South Korean
              rapper and singer. She is a member of the South Korean girl group
              Twice, formed by JYP Entertainment. Chaeyoung decided she wanted
              to become a singer before joining JYP Entertainment and took dance
              lessons for over one year.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://i.pinimg.com/564x/9d/88/e9/9d88e9c2da836e5ae49c30eca223a9d5.jpg"
            title="lia"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              LiA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Son Chae-young, known mononymously as Chaeyoung, is a South Korean
              rapper and singer. She is a member of the South Korean girl group
              Twice, formed by JYP Entertainment. Chaeyoung decided she wanted
              to become a singer before joining JYP Entertainment and took dance
              lessons for over one year.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
  
    </div>
</div>


    </>
  
  );
}

export default Main;
