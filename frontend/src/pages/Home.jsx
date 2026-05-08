import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from "../contexts/AuthContext";

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);
  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
<>
  <div className="navBar">
  <div className="logoSection">
    <h2>NexMeet</h2>
  </div>

  <div className="navActions">
    <IconButton
      onClick={() => {
        navigate("/history");
      }}
    >
      
      <RestoreIcon />

    </IconButton>
    <p>History</p>

    <Button
      className="logoutBtn"
      onClick={() => {
        localStorage.removeItem("token");
        navigate("/auth");
      }}
    >
      Logout
    </Button>
  </div>
</div>

<div className="meetContainer">
  <div className="leftPanel">
    <div className="meetingBox">
      <h2>Start or Join Meetings Instantly</h2>

      <div className="joinSection">
        <TextField
          onChange={(e) => setMeetingCode(e.target.value)}
          label="Enter Meeting Code"
          variant="outlined"
          fullWidth
        />
        <Button onClick={handleJoinVideoCall} variant="contained">
          Join
        </Button>
      </div>
    </div>
  </div>

  <div className="rightPanel">
    <img src="/logo3.png" alt="meeting" />
  </div>
</div>
    </>
  );
}

export default withAuth(HomeComponent);




