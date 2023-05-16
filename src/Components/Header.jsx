import React from "react";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
function Header(props) {
  const navigate = useNavigate();

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
      <nav>
        <h1>Lo<span className="go">go</span></h1>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Section</a>
          </li>
        </ul>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="error">
            <CircleNotificationsIcon style={{ fontSize: "30px" }} />
          </StyledBadge>
        </IconButton>
      </nav>
      {/* Header
         <p>
         <button onClick={() => navigate("/Footer")}>Go to Contact</button>
      </p> */}
    </div>
  );
}

export default Header;
