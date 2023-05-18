import React, { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1220);
    };

    handleResize(); // Check initial window size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <div className="container">
      <div className="small-nav">
        {isMobile ? (
          <div className="hamburger-menu">
            <div className="ham-cont">
              <MenuIcon className="hamburger-icon" onClick={toggleMenu} />

              <h1>
                KPop<span className="go">po</span>
              </h1>
            </div>
            {menuOpen && (
              <ul className="menu-items-mobile">
                <div>
                  <h2>Category</h2>

                  <li>
                    <a>Girl Group</a>
                  </li>
                  <li>
                    <a>Boy Group</a>
                  </li>
                  <li>
                    <a>1st Generation</a>
                  </li>
                  <li>
                    <a>2nd Generation 1.5</a>
                  </li>
                  <li>
                    <a>2nd Generation</a>
                  </li>
                  <li>
                    <a>Generation 2.5</a>
                  </li>
                  <li>
                    <a>3rd Generation</a>
                  </li>
                  <li>
                    <a>Generation 3.5</a>
                  </li>
                  <li>
                    <a>4th Generation</a>
                  </li>
                </div>
                <div>
                  <h2>Menu</h2>
                  <li>
                    <a>Home</a>
                  </li>

                  <li>
                    <a>Top Videos</a>
                  </li>
                  <li>
                    <a>Top Musics</a>
                  </li>
                  <li>
                    <a>Dance Videos</a>
                  </li>
                  <li>
                    <a>Rank Achievement</a>
                  </li>
                </div>
              </ul>
            )}
          </div>
        ) : (
          <ul className="menu-items-desktop">
            <li>
              <a>Girl Group</a>
            </li>
            <li>
              <a>Boy Group</a>
            </li>
            <li>
              <a>1st Generation</a>
            </li>
            <li>
              <a>2nd Generation 1.5</a>
            </li>
            <li>
              <a>2nd Generation</a>
            </li>
            <li>
              <a>Generation 2.5</a>
            </li>
            <li>
              <a>3rd Generation</a>
            </li>
            <li>
              <a>Generation 3.5</a>
            </li>
            <li>
              <a>4th Generation</a>
            </li>
          </ul>
        )}
      </div>
      <nav>
        <h1>
          KPop<span className="go">po</span>
        </h1>
        <ul>
          <li>
            <a>Home</a>
          </li>

          <li>
            <a>Top Videos</a>
          </li>
          <li>
            <a>Top Musics</a>
          </li>
          <li>
            <a>Dance Videos</a>
          </li>
          <li>
            <a>Rank Achievement</a>
          </li>
        </ul>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4}>
            <CircleNotificationsIcon
              className="color"
              style={{ fontSize: "30px" }}
            />
          </StyledBadge>
        </IconButton>
      </nav>
    </div>
  );
}

export default Header;
