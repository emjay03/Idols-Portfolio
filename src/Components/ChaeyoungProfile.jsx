import React from "react";
import Grid from "@mui/material/Grid";
import Header from "../Include/Header";
import Footer from "../Include/Footer";

function ChaeyoungProfile() {
  return (
    <div>
      <Header />
      <Grid container spacing={2}>
        <Grid xs={12}>
          <div className="cover-photo">
            <div class="profile">
              <img
                src="https://i.pinimg.com/564x/af/46/4e/af464e1c588286cc35b5e90066f5d6f4.jpg"
                alt="chaeyoung.png"
                class="profile-img"
              />
              <h1>TWICE Chaeyoung</h1>
            </div>
          </div>
        </Grid>
      </Grid>
      <Footer/>
    </div>
  );
}

export default ChaeyoungProfile;
